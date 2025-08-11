import React, { useState } from "react";

// Landbot-like single-file React component prototype
// TailwindCSS classes used (assumes Tailwind is available in the host project)
// Export default for preview in canvas

export default function LandbotClone() {
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("growth");
  const [openMenu, setOpenMenu] = useState(false);
  const [showToast, setShowToast] = useState(false);

  function handleStartDemo(e) {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* NAV */}
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-emerald-400 rounded-lg flex items-center justify-center text-white font-bold">B</div>
          <div>
            <div className="text-lg font-semibold">BotWise Studio</div>
            <div className="text-xs text-slate-500">Build conversational experiences</div>
          </div>
        </div>

        <div className="hidden md:flex gap-6 items-center text-sm text-slate-700">
          <a className="hover:text-slate-900">Product</a>
          <a className="hover:text-slate-900">Templates</a>
          <a className="hover:text-slate-900">Pricing</a>
          <a className="hover:text-slate-900">Docs</a>
          <button className="ml-2 px-4 py-2 rounded-lg bg-white border">Login</button>
          <button className="ml-2 px-4 py-2 rounded-lg bg-indigo-600 text-white">Get Started</button>
        </div>

        <button
          className="md:hidden p-2 rounded-md border"
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="Menu"
        >
          ☰
        </button>
      </nav>

      {openMenu && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-3">
            <a>Product</a>
            <a>Templates</a>
            <a>Pricing</a>
            <a>Docs</a>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg bg-white border">Login</button>
              <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Get Started</button>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-6/12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Build chatbots that convert — without code</h1>
          <p className="mt-4 text-slate-600">Drag-and-drop builder, WhatsApp & web deployment, plus GPT-powered conversational AI when you need advanced. Launch in minutes, scale as you grow.</p>

          <form onSubmit={handleStartDemo} className="mt-6 flex gap-3 max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your work email"
              className="flex-1 px-4 py-3 rounded-lg border focus:outline-none"
            />
            <button className="px-4 py-3 rounded-lg bg-indigo-600 text-white">Start Free</button>
          </form>

          <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">✓</div>
              <div>WhatsApp + Web</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center">✓</div>
              <div>No-code builder</div>
            </div>
          </div>
        </div>

        <div className="md:w-6/12">
          <div className="bg-white border rounded-2xl shadow p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600">Live Preview</div>
              <div className="text-xs text-slate-400">Demo Bot</div>
            </div>

            {/* Simulated chat iframe area */}
            <div className="mt-4 bg-slate-50 rounded-xl p-4" style={{height: 380}}>
              <div className="flex flex-col gap-3 h-full overflow-auto">
                <div className="self-start bg-white p-3 rounded-lg shadow-sm max-w-xs">👋 Hi! Welcome — how can I help?</div>
                <div className="self-end bg-indigo-600 text-white p-3 rounded-lg shadow-sm max-w-xs">I want to schedule a demo</div>
                <div className="self-start bg-white p-3 rounded-lg shadow-sm max-w-xs">Great — pick a time slot</div>
                <div className="self-start text-xs text-slate-500 mt-auto">Powered by BotWise Studio</div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button className="px-3 py-2 rounded-lg bg-white border">Edit Flow</button>
              <button className="px-3 py-2 rounded-lg bg-indigo-600 text-white">Deploy</button>
              <button className="px-3 py-2 rounded-lg bg-emerald-500 text-white">Connect WhatsApp</button>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Features</h2>
        <p className="text-slate-600 mt-2 max-w-2xl">Everything you need to build conversational experiences — from simple FAQ bots to custom GPTs trained on your documents.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {title: 'No-code Builder', desc: 'Drag-and-drop blocks, conditional logic, and quick templates.'},
            {title: 'WhatsApp & Web', desc: 'Single-click deployment to WhatsApp Cloud API and website widgets.'},
            {title: 'AI & RAG', desc: 'Connect your knowledge base for context-aware answers.'},
          ].map((f) => (
            <div key={f.title} className="bg-white border rounded-xl p-6">
              <div className="font-semibold">{f.title}</div>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
              <div className="mt-4 text-xs text-slate-400">Learn more →</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Pricing</h2>
        <p className="text-slate-600 mt-2 max-w-2xl">Start free and upgrade as your needs grow. Pay for active conversations and advanced AI features.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-2xl p-6">
            <div className="text-lg font-semibold">Starter</div>
            <div className="text-3xl font-extrabold mt-2">₹2,000<span className="text-sm font-medium">/mo</span></div>
            <ul className="mt-4 text-sm text-slate-600 space-y-2">
              <li>Basic web bot</li>
              <li>1000 chats</li>
              <li>Email support</li>
            </ul>
            <button className="mt-6 w-full px-4 py-3 rounded-lg bg-indigo-600 text-white">Choose Starter</button>
          </div>

          <div className="bg-white border-2 border-indigo-600 rounded-2xl p-6">
            <div className="text-lg font-semibold">Growth</div>
            <div className="text-3xl font-extrabold mt-2">₹12,500<span className="text-sm font-medium">/mo</span></div>
            <ul className="mt-4 text-sm text-slate-600 space-y-2">
              <li>NLP + Integrations</li>
              <li>10k chats</li>
              <li>WhatsApp add-on</li>
            </ul>
            <button className="mt-6 w-full px-4 py-3 rounded-lg bg-white border">Choose Growth</button>
          </div>

          <div className="bg-white border rounded-2xl p-6">
            <div className="text-lg font-semibold">Pro AI</div>
            <div className="text-3xl font-extrabold mt-2">₹45,000<span className="text-sm font-medium">/mo</span></div>
            <ul className="mt-4 text-sm text-slate-600 space-y-2">
              <li>Custom GPT + RAG</li>
              <li>Priority support</li>
              <li>On-prem options</li>
            </ul>
            <button className="mt-6 w-full px-4 py-3 rounded-lg bg-indigo-600 text-white">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* TEMPLATE GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-b from-white to-slate-50">
        <h2 className="text-2xl font-bold">Templates & Quick Starts</h2>
        <p className="text-slate-600 mt-2">Industry-first templates so you can launch fast — Real Estate, Coaching, Retail, Clinic, and more.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Real Estate', 'Coaching Demo', 'Order Tracking', 'Clinic Booking'].map((t) => (
            <div key={t} className="bg-white border rounded-lg p-4">
              <div className="font-medium">{t}</div>
              <div className="text-sm text-slate-500 mt-2">Launch in 5 minutes</div>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-2 rounded bg-white border">Preview</button>
                <button className="px-3 py-2 rounded bg-indigo-600 text-white">Use Template</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-lg font-semibold">Get a custom demo</div>
            <p className="text-slate-600 mt-2">Tell us about your use case and we'll prepare a tailored demo.</p>

            <form onSubmit={handleStartDemo} className="mt-4 flex flex-col gap-3 max-w-sm">
              <input
                type="text"
                placeholder="Your name"
                className="px-3 py-2 rounded border"
              />
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 rounded border"
              />
              <select value={plan} onChange={(e) => setPlan(e.target.value)} className="px-3 py-2 rounded border">
                <option value="starter">Starter</option>
                <option value="growth">Growth</option>
                <option value="pro">Pro AI</option>
              </select>
              <button className="px-4 py-2 rounded bg-indigo-600 text-white">Request Demo</button>
            </form>
          </div>

          <div className="md:col-span-2">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold">Product</div>
                <div className="text-sm text-slate-600 mt-2">Pricing · Templates · Integrations</div>
              </div>

              <div>
                <div className="font-semibold">Company</div>
                <div className="text-sm text-slate-600 mt-2">About · Careers · Contact</div>
              </div>
            </div>

            <div className="mt-8 text-sm text-slate-500">© {new Date().getFullYear()} BotWise Studio. Built with ❤️ · Prototype only.</div>
          </div>
        </div>
      </footer>

      {/* Simple toast */}
      {showToast && (
        <div className="fixed right-6 bottom-6 bg-emerald-500 text-white px-4 py-3 rounded-lg shadow">Thanks — we'll reach out shortly.</div>
      )}
    </div>
  );
}
