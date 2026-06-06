import { useState } from "react";

const WEBHOOK_URL = "https://n8n-sgo8ksokg404ocg8sgc4sooc.vemprajogo.com/webhook/envia_finance";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim()) {
      setError("Nome e WhatsApp são obrigatórios.");
      return;
    }

    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: name.trim(), whatsapp: phone.trim(), mensagem: message.trim() }),
      });
    } catch {
    }

    setLoading(false);
    setSent(true);
    setName("");
    setPhone("");
    setMessage("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #9333EA 50%, #6D28D9 100%)" }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div
              className="flex items-end justify-center px-4"
              style={{ paddingTop: 24, paddingBottom: 20, alignSelf: "stretch" }}
            >
              <img
                src="/feh-agente2.png"
                alt="FÊH assistente"
                style={{
                  display: "block",
                  width: "min(260px, 90%)",
                  height: "auto",
                  filter: "drop-shadow(0 8px 32px rgba(109,40,217,0.6))",
                  animation: "float 4s ease-in-out infinite",
                }}
              />
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-black text-white mb-2">
                Fale com a gente
              </h2>
              <p className="text-white/80 text-sm mb-7 leading-relaxed">
                Comunique-se pelo WhatsApp para dúvidas ou atendimento personalizado.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div>
                  <label className="text-white/80 text-xs font-semibold mb-1 block">
                    Nome <span className="text-yellow-300">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Fêh IA"
                    required
                    className="w-full bg-white/95 text-gray-800 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-400"
                    data-testid="contact-name"
                  />
                </div>
                <div>
                  <label className="text-white/80 text-xs font-semibold mb-1 block">
                    WhatsApp <span className="text-yellow-300">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 9 7535-9520"
                    required
                    className="w-full bg-white/95 text-gray-800 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-400"
                    data-testid="contact-phone"
                  />
                </div>
                <div>
                  <label className="text-white/80 text-xs font-semibold mb-1 block">Mensagem</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message..."
                    rows={4}
                    className="w-full bg-white/95 text-gray-800 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-400 resize-none"
                    data-testid="contact-message"
                  />
                </div>

                {error && (
                  <p className="text-yellow-300 text-xs font-semibold -mt-1">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading || sent}
                  className="w-full bg-purple-900 hover:bg-purple-950 disabled:opacity-70 text-white font-bold py-3.5 rounded-lg text-sm transition-colors"
                  data-testid="contact-submit"
                >
                  {sent ? "✓ Enviado!" : loading ? "Enviando..." : "Obrigado!"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
