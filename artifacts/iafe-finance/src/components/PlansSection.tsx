const features = [
  "Acesso completo à FÊH",
  "Registro ilimitado de gastos",
  "Controle automático",
  "Consultas em tempo real",
  "Painel financeiro completo",
  "Lista de Compras/supermercado",
  "Orçamento",
  "Cartão de Crédito",
  "Agendamentos",
];

export default function PlansSection() {
  return (
    <section id="planos" className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-purple-700 font-black text-lg mb-2 uppercase tracking-wide">Plano</p>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-12">
          Escolha e organize seu dinheiro 24h por dia.
        </h2>

        <div className="flex justify-center">
          <div
            className="bg-[#7B2FBE] rounded-2xl p-8 text-white shadow-2xl"
            style={{ maxWidth: 380, width: "100%" }}
            data-testid="plan-card"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="text-sm font-semibold">Mensal</span>
              <span className="text-yellow-300 text-base">&#9733;</span>
            </div>

            <div className="text-4xl font-black mb-1">R$ 29,90</div>
            <div className="text-purple-300 text-sm mb-6">por mês</div>

            <div className="border-t border-white/20 mb-6" />

            <div className="flex flex-col gap-3 mb-8 text-left">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3" data-testid={`feature-${feature}`}>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            <button
              className="w-full bg-white text-purple-700 font-bold py-4 rounded-xl text-base hover:bg-gray-100 transition-colors"
              data-testid="plan-cta"
            >
              Garantir agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
