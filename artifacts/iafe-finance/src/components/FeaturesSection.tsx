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
    <video
      src="/video-visual-intuitivo.mp4"
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: "100%",
        borderRadius: 12,
        display: "block",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      }}
    />
  );
}

function AutomationVisual() {
  return (
    <video
      src="/video-automacao-total.mov"
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: "100%",
        borderRadius: 12,
        display: "block",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      }}
    />
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
