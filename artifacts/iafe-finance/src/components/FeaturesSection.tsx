function FeatureBlock({
  title,
  description,
  imageLeft = false,
  imagePlaceholder,
}: {
  title: string;
  description: string[];
  imageLeft?: boolean;
  imagePlaceholder: React.ReactNode;
}) {
  const textCol = (
    <div className="flex flex-col justify-center">
      <h3 className="text-3xl font-black text-white mb-4">{title}</h3>
      {description.map((d, i) => (
        <p key={i} className="text-white/90 text-base leading-relaxed mb-3">{d}</p>
      ))}
    </div>
  );

  const imgCol = (
    <div className="rounded-2xl overflow-hidden shadow-xl">
      {imagePlaceholder}
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
      {imageLeft ? (
        <>
          {imgCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imgCol}
        </>
      )}
    </div>
  );
}

function DashboardVisual() {
  return (
    <div style={{ background: "white", borderRadius: 12, padding: 16, minHeight: 180 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 11, color: "#6b7280" }}>Saldo total</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#7B2FBE" }}>R$ 3.865,15</div>
        </div>
        <div style={{ fontSize: 11, color: "#6b7280", textAlign: "right" }}>
          <div>Despesas</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#ef4444" }}>R$ 224,02</div>
        </div>
      </div>
      <div style={{ marginBottom: 8 }}>
        <div style={{ fontSize: 10, color: "#6b7280", marginBottom: 6 }}>Gastos por Categoria</div>
        {[["Alimentação", 70, "#7B2FBE"], ["Supermercado", 50, "#9333EA"], ["Despesas", 35, "#6D28D9"], ["Cartão", 25, "#A855F7"]].map(([label, w, color]) => (
          <div key={label as string} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <div style={{ width: 60, fontSize: 9, color: "#6b7280" }}>{label as string}</div>
            <div style={{ flex: 1, height: 6, background: "#f3f4f6", borderRadius: 3 }}>
              <div style={{ width: `${w}%`, height: "100%", background: color as string, borderRadius: 3 }} />
            </div>
            <div style={{ width: 35, fontSize: 9, color: "#6b7280", textAlign: "right" }}>{w}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: 16, minHeight: 180, border: "1px solid rgba(255,255,255,0.2)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>Transações</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "white" }}>247</div>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)" }}>este mês</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "10px 12px" }}>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>Categorias</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "white" }}>12</div>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)" }}>detectadas</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "10px 12px", gridColumn: "span 2" }}>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", marginBottom: 6 }}>Automação ativa</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {["Categorização", "Alertas", "Relatórios", "Dashboard"].map(t => (
              <div key={t} style={{ background: "rgba(255,255,255,0.2)", borderRadius: 20, padding: "3px 10px", fontSize: 9, color: "white" }}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PainelVisual() {
  return (
    <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", minHeight: 220 }}>
      <img
        src="/painel-placeholder.png"
        alt="Painel organizado"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: 16 }}
      />
    </div>
  );
}

export default function FeaturesSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#7B2FBE] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <FeatureBlock
          title="Visual intuitivo."
          description={[
            "Dados não precisam ser complicados.",
            "Com uma interface limpa e fácil de entender, você visualiza seu fluxo de caixa, identifica oportunidades e toma decisões com mais segurança.",
            "Clareza financeira de forma prática, mesmo sem ser especialista.",
          ]}
          imagePlaceholder={<DashboardVisual />}
        />

        <FeatureBlock
          title="Automação total."
          description={[
            "Deixe o sistema trabalhar por você.",
            "Automatize tarefas, reduza erros e ganhe tempo com uma gestão mais inteligente e eficiente. Enquanto tudo se organiza automaticamente, você ganha liberdade para focar no crescimento do seu negócio.",
          ]}
          imageLeft={true}
          imagePlaceholder={<AutomationVisual />}
        />

        <FeatureBlock
          title="Painel organizado."
          description={[
            "Tenha controle total do seu negócio em um único lugar.",
            "Acompanhe cadastros, movimentações e informações em tempo real, sem perder tempo com processos manuais.",
            "Tudo funciona de forma simples e integrada direto no WhatsApp, para você focar no que realmente importa: crescer.",
          ]}
          imagePlaceholder={<PainelVisual />}
        />

        <div className="text-center">
          <button
            onClick={() => scrollTo("planos")}
            className="bg-white text-purple-700 font-bold px-10 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            data-testid="features-cta"
          >
            Começar agora
          </button>
        </div>
      </div>
    </section>
  );
}
