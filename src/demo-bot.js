// demo-bot.js
// Simple demo bot stub. Two modes:
// 1) simulated replies (works offline)
// 2) OpenAI mode (uncomment and provide VITE_OPENAI_API_KEY in .env)

export async function sendMessageSimulated(message) {
  // simple rule-based simulation
  const m = message.toLowerCase();
  if (m.includes('demo') || m.includes('schedule')) {
    return { reply: 'Sure — pick a time slot: Today 3pm, Tomorrow 11am, or Monday 10am.' };
  }
  if (m.includes('price') || m.includes('cost')) {
    return { reply: 'Our plans start at ₹2,000/mo. Want a custom quote?' };
  }
  return { reply: "Thanks for your message — a human will follow up shortly." };
}

// Example OpenAI integration (requires API key in VITE_OPENAI_API_KEY)
/*
export async function sendMessageOpenAI(message) {
  const key = import.meta.env.VITE_OPENAI_API_KEY;
  if (!key) throw new Error('Set VITE_OPENAI_API_KEY in .env');

  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + key
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{role: 'user', content: message}],
      max_tokens: 300
    })
  });
  const data = await resp.json();
  return { reply: data.choices?.[0]?.message?.content || '...' };
}
*/
