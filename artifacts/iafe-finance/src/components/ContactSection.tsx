import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #9333EA 50%, #6D28D9 100%)" }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="flex items-end justify-center px-8 pt-8 pb-0 md:pb-0 relative">
              <div style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse at center bottom, rgba(255,255,255,0.18) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
              <img
                src="/feh-agente.png"
                alt="FÊH assistente"
                style={{
                  width: "100%",
                  maxWidth: 280,
                  objectFit: "contain",
                  objectPosition: "bottom",
                  filter: "drop-shadow(0 8px 32px rgba(147,51,234,0.5))",
                  animation: "float 4s ease-in-out infinite",
                  position: "relative",
                  zIndex: 1,
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

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-white/80 text-xs font-semibold mb-1 block">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Fêh IA"
                    className="w-full bg-white/95 text-gray-800 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-400"
                    data-testid="contact-name"
                  />
                </div>
                <div>
                  <label className="text-white/80 text-xs font-semibold mb-1 block">WhatsApp</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 9 7535-9520"
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
                <button
                  type="submit"
                  className="w-full bg-purple-900 hover:bg-purple-950 text-white font-bold py-3.5 rounded-lg text-sm transition-colors"
                  data-testid="contact-submit"
                >
                  {sent ? "Enviado!" : "Obrigado!"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
