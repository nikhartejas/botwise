# Landbot-clone-prototype (BotWise Studio)

This is a **prototype React project** that reproduces a Landbot-like marketing website and includes:
1. Single-file React component (Landbot-clone-prototype) as `src/App.jsx`.
2. TailwindCSS setup (using Vite).
3. Sample templates (JSON).
4. A demo bot stub that can run locally (simulated replies) and an optional OpenAI integration snippet (requires API key).
5. A `design_spec.md` with Figma-style design spec and clickable prototype guidance.

## How to run (locally)
1. Install Node.js (v18+) and npm/yarn.
2. Run `npm install` in the project root.
3. Run `npm run dev` to start the dev server (Vite).
4. Open the address shown by Vite (usually http://localhost:5173).

## Connecting a real LLM or Dialogflow
- Demo-Bot includes a simulated mode (works out of the box).
- To connect OpenAI: add your API key in `.env` as `VITE_OPENAI_API_KEY` and uncomment the fetch section in `src/demo-bot.js`.
- For Dialogflow: follow Dialogflow's web client instructions and point the demo-bot `sendToDialogflow()` to your webhook.

## Included files
- package.json, index.html, vite config (basic), src/App.jsx, src/main.jsx
- public assets (logo placeholder)
- templates/*.json
- design_spec.md (Figma-ready spec)
- demo-bot.js (simulated + OpenAI stub)



---
## Deployment & Server

1. **Vercel**: Connect your GitHub repo to Vercel. Set environment variable `OPENAI_API_KEY` in Vercel dashboard. Vercel will auto-deploy on push.

2. **Netlify**: Connect repo, set build command `npm run build`, publish directory `dist`. Add environment variable `VITE_OPENAI_API_KEY`.

3. **Self-host (Heroku/Render)**: Deploy `server/` as Node.js app and serve the static `dist` folder using a simple server or CDN.

### Secure OpenAI usage
- Do not store API keys in client code. Use the provided `server/index.js` as a proxy for OpenAI calls and store the key in server environment variables.

### Dialogflow Integration
- Configure Dialogflow's webhook to point to `/api/dialogflow-webhook` on your deployed server.
- The webhook example in `server/index.js` shows a minimal response.
