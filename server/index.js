// server/index.js
// Simple Express server to proxy OpenAI requests securely and provide a Dialogflow webhook example.
// Use: npm install express node-fetch dotenv
const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());

const OPENAI_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_KEY) console.warn('WARNING: OPENAI_API_KEY not set in env');

app.post('/api/openai', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'message required' });

    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + OPENAI_KEY
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: message }],
        max_tokens: 400
      })
    });
    const data = await resp.json();
    res.json({ reply: data.choices?.[0]?.message?.content || '' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server_error' });
  }
});

// Dialogflow webhook example
app.post('/api/dialogflow-webhook', (req, res) => {
  // This is a basic example. Dialogflow will POST JSON with queryResult.
  const body = req.body;
  const intent = body.queryResult?.intent?.displayName || 'unknown';
  console.log('Dialogflow webhook received intent:', intent);

  // Example response format for Dialogflow v2 webhook
  const response = {
    fulfillmentText: `Received intent: ${intent}. This is a webhook response from BotWise.`
  };
  res.json(response);
});

const port = process.env.PORT || 8888;
app.listen(port, () => console.log(`Server listening on ${port}`));
