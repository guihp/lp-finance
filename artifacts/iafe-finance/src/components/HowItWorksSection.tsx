function FehAvatar() {
  return (
    <div style={{
      width: "100%",
      aspectRatio: "1",
      borderRadius: 16,
      background: "linear-gradient(135deg, #7B2FBE, #9333EA)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <svg viewBox="0 0 200 220" width="100%" height="100%">
        <circle cx="100" cy="80" r="45" fill="#F9C784" />
        <path d="M55 80 Q55 140 100 155 Q145 140 145 80" fill="#F9C784" />
        <ellipse cx="100" cy="70" rx="42" ry="35" fill="#D4851A" />
        <path d="M58 75 Q65 45 100 42 Q135 45 142 75 Q130 55 100 58 Q70 55 58 75" fill="#8B4513" />
        <path d="M50 82 Q40 75 42 68 Q48 60 58 68" fill="#F9C784" />
        <path d="M150 82 Q160 75 158 68 Q152 60 142 68" fill="#F9C784" />
        <circle cx="85" cy="82" r="6" fill="white" />
        <circle cx="115" cy="82" r="6" fill="white" />
        <circle cx="87" cy="83" r="3.5" fill="#2d1a00" />
        <circle cx="117" cy="83" r="3.5" fill="#2d1a00" />
        <circle cx="88.5" cy="81.5" r="1" fill="white" />
        <circle cx="118.5" cy="81.5" r="1" fill="white" />
        <path d="M90 100 Q100 108 110 100" stroke="#D4851A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="82" cy="90" rx="6" ry="4" fill="#FFAA7B" opacity="0.6" />
        <ellipse cx="118" cy="90" rx="6" ry="4" fill="#FFAA7B" opacity="0.6" />
        <rect x="75" y="142" width="50" height="70" rx="8" fill="#7B2FBE" />
        <rect x="68" y="150" width="14" height="50" rx="7" fill="#9333EA" />
        <rect x="118" y="150" width="14" height="50" rx="7" fill="#9333EA" />
        <rect x="80" y="158" width="40" height="55" rx="6" fill="#E0E7FF" />
        <rect x="85" y="163" width="30" height="20" rx="4" fill="#7B2FBE" opacity="0.3" />
        <rect x="87" y="188" width="12" height="3" rx="1.5" fill="#7B2FBE" opacity="0.4" />
        <rect x="101" y="188" width="12" height="3" rx="1.5" fill="#7B2FBE" opacity="0.4" />
        <ellipse cx="35" cy="100" rx="16" ry="14" fill="#F9C784" />
        <ellipse cx="165" cy="100" rx="16" ry="14" fill="#F9C784" />
        <circle cx="72" cy="56" r="12" fill="#9333EA" stroke="#7B2FBE" strokeWidth="2" />
        <circle cx="128" cy="56" r="12" fill="#9333EA" stroke="#7B2FBE" strokeWidth="2" />
        <ellipse cx="72" cy="64" rx="5" ry="6" fill="#7B2FBE" />
        <ellipse cx="128" cy="64" rx="5" ry="6" fill="#7B2FBE" />
      </svg>
    </div>
  );
}

function WhatsAppChatMockup() {
  return (
    <div style={{
      background: "#ECE5DD",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
    }}>
      <div style={{ background: "#128C7E", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "white", fontSize: 12 }}>IA</div>
        <div>
          <div style={{ color: "white", fontSize: 13, fontWeight: 600 }}>Iafé Finance (Fêh)</div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>online</div>
        </div>
      </div>
      <div style={{ padding: "16px 12px", display: "flex", flexDirection: "column", gap: 10, minHeight: 180 }}>
        <div style={{ alignSelf: "flex-end", background: "#DCF8C6", borderRadius: "12px 0 12px 12px", padding: "10px 14px", maxWidth: "82%", fontSize: 13, lineHeight: 1.5, color: "#1a1a1a", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
          <span><strong>Fêh, eu denovo</strong> Comprei um vestido lindo por R$1.199,90 no Shopping.</span>
          <div style={{ fontSize: 10, color: "#9ca3af", textAlign: "right", marginTop: 4 }}>11:59</div>
        </div>
        <div style={{ background: "white", borderRadius: "0 12px 12px 12px", padding: "10px 14px", maxWidth: "82%", fontSize: 13, lineHeight: 1.5, color: "#1a1a1a", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
          <strong>Prontinho!</strong> Compra registrada na categoria <strong>Roupas</strong> você já pode visualizar no painel.
          <div style={{ fontSize: 10, color: "#9ca3af", textAlign: "right", marginTop: 4 }}>11:59</div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-6 max-w-xs mx-auto md:mx-0">
              <FehAvatar />
            </div>
            <h3 className="text-xl font-black text-purple-700 mb-2">Registre tudo.</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Envie uma mensagem pelo WhatsApp e a FÊH lança tudo automaticamente.
            </p>
          </div>

          <div>
            <div className="mb-6">
              <WhatsAppChatMockup />
            </div>
            <h3 className="text-xl font-black text-purple-700 mb-2">Prático e rápido.</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Texto ou áudio, você escolhe. Categorização inteligente e sem complicação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
