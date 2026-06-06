function PhoneMockupSimple({ children, isMain = false }: { children: React.ReactNode; isMain?: boolean }) {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      borderRadius: "1.5rem",
      border: isMain ? "3px solid #CBD5E1" : "2px solid #E2E8F0",
      boxShadow: isMain ? "0 16px 48px rgba(0,0,0,0.18)" : "0 8px 24px rgba(0,0,0,0.10)",
      background: "white",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{ background: "#128C7E", padding: "8px 10px", display: "flex", alignItems: "center", gap: 6 }}>
        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7, fontWeight: "bold", color: "white" }}>IA</div>
        <div>
          <div style={{ color: "white", fontSize: 8, fontWeight: 600 }}>Iafé Finance (Fêh)</div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 7 }}>online</div>
        </div>
      </div>
      <div style={{ flex: 1, background: "#ECE5DD", padding: "8px 6px", display: "flex", flexDirection: "column", gap: 6, overflowY: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      borderRadius: "1.5rem",
      border: "2px solid #E2E8F0",
      boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
      background: "white",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      padding: 8,
    }}>
      <div style={{ fontSize: 8, fontWeight: 700, color: "#1a1a1a", marginBottom: 6 }}>Dashboard</div>
      <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
        <div style={{ flex: 1, background: "#7B2FBE", borderRadius: 4, padding: "4px 6px", color: "white", fontSize: 7, fontWeight: 600 }}>R$ 3.865,15</div>
        <div style={{ flex: 1, background: "#f3f4f6", borderRadius: 4, padding: "4px 6px", color: "#6b7280", fontSize: 7 }}>R$ 224,02</div>
      </div>
      <div style={{ fontSize: 7, color: "#6b7280", marginBottom: 4 }}>Gastos por Categoria</div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
        {[["Alimentação", 65, "#7B2FBE"], ["Supermercado", 45, "#9333EA"], ["Despesas", 30, "#6D28D9"]].map(([label, w, color]) => (
          <div key={label as string} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 40, fontSize: 6, color: "#6b7280", textAlign: "right" }}>{label as string}</div>
            <div style={{ flex: 1, height: 5, background: "#f3f4f6", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ width: `${w}%`, height: "100%", background: color as string, borderRadius: 3 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatBubble({ from, text, time }: { from: "user" | "bot"; text: string; time: string }) {
  return (
    <div style={{ display: "flex", justifyContent: from === "user" ? "flex-end" : "flex-start" }}>
      <div
        style={{
          maxWidth: "85%",
          borderRadius: from === "bot" ? "0 8px 8px 8px" : "8px 0 8px 8px",
          padding: "5px 7px",
          fontSize: 7,
          lineHeight: 1.4,
          background: from === "bot" ? "white" : "#DCF8C6",
          color: "#1a1a1a",
          boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        {text}
        <div style={{ fontSize: 6, color: "#9ca3af", textAlign: "right", marginTop: 2 }}>{time}</div>
      </div>
    </div>
  );
}

const AUTH_URL = "https://financas.iafeoficial.com/auth";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-24 pb-12 bg-white text-center px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <a
            href={AUTH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-block"
            data-testid="hero-cta-top"
          >
            Começar agora
          </a>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight">
          <span style={{ color: "#9333EA", fontStyle: "italic" }}>Tenha a FÊH, sua amiga financeira.</span>
        </h1>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
          Cuidando do seu dinheiro 24h por dia.
        </p>
        <p className="text-lg sm:text-xl font-bold text-gray-900 mb-12 leading-snug">
          <span style={{ color: "#9333EA" }}>Controle</span>
          {" "}total do seu{" "}
          <span style={{ color: "#9333EA" }}>dinheiro</span>
          , sem esforço
          <br />
          e direto pelo{" "}
          <span style={{ color: "#9333EA", fontWeight: 900 }}>WhatsApp.</span>
        </p>

        <div
          className="mb-10 flex items-end justify-center gap-2 sm:gap-3"
          style={{ overflowX: "auto", overflowY: "visible", paddingBottom: 8 }}
        >
          <div style={{ width: 110, height: 200, flexShrink: 0, transform: "scale(0.9)", transformOrigin: "bottom center" }}>
            <PhoneMockupSimple>
              <ChatBubble from="bot" text="Lançamentos registrados com sucesso!" time="09:17" />
              <ChatBubble from="bot" text="Título: Supermercados Valor: R$ 104,04 Conta: Nubank" time="09:17" />
            </PhoneMockupSimple>
          </div>

          <div style={{ width: 130, height: 240, flexShrink: 0, transform: "scale(0.95)", transformOrigin: "bottom center" }}>
            <PhoneMockupSimple>
              <ChatBubble from="bot" text="Novo lançamento registrado!" time="09:17" />
              <ChatBubble from="bot" text="Título: Lanchonete Valor: R$ 30,00 Tipo: Despesa Fast Food Nubank 26/03/2026" time="09:17" />
            </PhoneMockupSimple>
          </div>

          <div style={{ width: 155, height: 285, flexShrink: 0 }}>
            <PhoneMockupSimple isMain>
              <ChatBubble from="user" text="Pix, nubank" time="17:01" />
              <ChatBubble from="bot" text="Novo lançamento registrado!" time="17:22" />
              <ChatBubble from="bot" text="Orçamento manutenção veículo Valor: R$ 435,00 Manutenção Nubank 01/04/2026" time="17:22" />
            </PhoneMockupSimple>
          </div>

          <div style={{ width: 130, height: 240, flexShrink: 0, transform: "scale(0.95)", transformOrigin: "bottom center" }}>
            <PhoneMockupSimple>
              <ChatBubble from="user" text="Combustível, pix nubank" time="11:24" />
              <ChatBubble from="bot" text="Registrado! Combustível R$ 100,00 Nubank 20/04/2026" time="11:33" />
            </PhoneMockupSimple>
          </div>

          <div style={{ width: 110, height: 200, flexShrink: 0, transform: "scale(0.9)", transformOrigin: "bottom center" }}>
            <DashboardMockup />
          </div>
        </div>

        <a
          href={AUTH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-12 py-4 rounded-lg text-lg transition-colors inline-block"
          data-testid="hero-cta-bottom"
        >
          Começar agora
        </a>
      </div>
    </section>
  );
}
