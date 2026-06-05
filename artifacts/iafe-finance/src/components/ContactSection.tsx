import { useState } from "react";

function ContactAvatar() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 260,
        aspectRatio: "0.85",
        margin: "0 auto",
      }}
    >
      <svg viewBox="0 0 260 300" width="100%" height="100%">
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#6D28D9" />
          </radialGradient>
        </defs>
        <ellipse cx="130" cy="280" rx="100" ry="30" fill="rgba(0,0,0,0.15)" />
        <circle cx="130" cy="120" r="60" fill="#F9C784" />
        <ellipse cx="130" cy="105" rx="55" ry="48" fill="#C87B2A" />
        <path d="M75 115 Q80 70 130 65 Q180 70 185 115 Q170 90 130 95 Q90 90 75 115" fill="#8B4513" />
        <path d="M70 110 Q58 100 60 90 Q68 78 78 90" fill="#F9C784" />
        <path d="M190 110 Q202 100 200 90 Q192 78 182 90" fill="#F9C784" />
        <circle cx="112" cy="118" r="8" fill="white" />
        <circle cx="148" cy="118" r="8" fill="white" />
        <circle cx="114" cy="119" r="4.5" fill="#2d1a00" />
        <circle cx="150" cy="119" r="4.5" fill="#2d1a00" />
        <circle cx="115.5" cy="117.5" r="1.5" fill="white" />
        <circle cx="151.5" cy="117.5" r="1.5" fill="white" />
        <path d="M118 138 Q130 148 142 138" stroke="#C87B2A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <ellipse cx="105" cy="130" rx="9" ry="6" fill="#FFAA7B" opacity="0.5" />
        <ellipse cx="155" cy="130" rx="9" ry="6" fill="#FFAA7B" opacity="0.5" />
        <path d="M72 75 Q80 55 130 50 Q180 55 188 75 Q175 60 130 65 Q85 60 72 75" fill="#7B2FBE" />
        <path d="M68 90 Q60 60 80 45 Q100 35 130 38 Q160 35 180 45 Q200 60 192 90" fill="#9333EA" opacity="0.7" />
        <rect x="85" y="178" width="90" height="100" rx="12" fill="#7B2FBE" />
        <rect x="74" y="190" width="20" height="70" rx="10" fill="#9333EA" />
        <rect x="166" y="190" width="20" height="70" rx="10" fill="#9333EA" />
        <rect x="95" y="195" width="70" height="80" rx="8" fill="#E0E7FF" />
        <rect x="102" y="202" width="56" height="30" rx="5" fill="#9333EA" opacity="0.25" />
        <path d="M90 165 Q100 158 115 162 Q130 155 145 162 Q160 158 170 165" fill="#F9C784" />
        <ellipse cx="70" cy="140" rx="18" ry="16" fill="#F9C784" />
        <ellipse cx="190" cy="140" rx="18" ry="16" fill="#F9C784" />
        <path d="M68 130 Q60 122 65 115 Q72 108 80 118" fill="#F9C784" />
        <path d="M192 130 Q200 122 195 115 Q188 108 180 118" fill="#F9C784" />
      </svg>
    </div>
  );
}

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
            <div className="flex items-end justify-center px-8 pt-8 pb-0 md:pb-0">
              <ContactAvatar />
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
