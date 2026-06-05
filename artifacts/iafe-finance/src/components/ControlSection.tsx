export default function ControlSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="como-funciona" className="bg-[#7B2FBE] py-20 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
            Controle sem esforço
          </h2>
          <p className="text-white/90 text-base leading-relaxed mb-3">
            Você não precisa aprender a controlar seu dinheiro. Nem mudar sua rotina.
          </p>
          <p className="text-white/90 text-base leading-relaxed mb-5">
            Você só precisa mandar uma mensagem. A FÊH entende, organiza e te mostra tudo com clareza, automaticamente.
          </p>
          <p className="text-white font-bold text-base leading-relaxed mb-8">
            Sem esforço. Sem complicação. Sem esquecer nada.
          </p>
          <button
            onClick={() => scrollTo("planos")}
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-purple-700 transition-colors"
            data-testid="control-cta"
          >
            Fale com a Fêh
          </button>
        </div>

        <div className="relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
            <div style={{ background: "#128C7E", padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "white", fontSize: 12 }}>IA</div>
              <div>
                <div style={{ color: "white", fontSize: 13, fontWeight: 600 }}>Iafé Finance (Fêh)</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>online agora</div>
              </div>
            </div>
            <div style={{ background: "#ECE5DD", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ background: "white", borderRadius: "0 12px 12px 12px", padding: "10px 14px", maxWidth: "85%", fontSize: 12, lineHeight: 1.5, color: "#1a1a1a", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
                Novo lançamento financeiro registrado com sucesso! ✅
                <br /><br />
                <strong>Título:</strong> Lanchonete<br />
                <strong>Valor:</strong> R$ 30,00<br />
                <strong>Tipo:</strong> Despesa<br />
                <strong>Categoria:</strong> Fast Food<br />
                <strong>Conta:</strong> Nubank<br />
                <strong>Data:</strong> 26/03/2026
                <div style={{ fontSize: 10, color: "#9ca3af", textAlign: "right", marginTop: 4 }}>09:17</div>
              </div>
              <div style={{ alignSelf: "flex-end", background: "#DCF8C6", borderRadius: "12px 0 12px 12px", padding: "10px 14px", maxWidth: "85%", fontSize: 12, lineHeight: 1.5, color: "#1a1a1a", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>
                Fê registra pra mim esses gastos no pix nubank
                <div style={{ fontSize: 10, color: "#9ca3af", textAlign: "right", marginTop: 4 }}>09:15</div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-purple-800 rounded-xl p-3 shadow-lg border border-purple-600">
            <div className="text-white font-black text-lg">R$ 3.865</div>
            <div className="text-purple-300 text-xs">Saldo total</div>
          </div>
        </div>
      </div>
    </section>
  );
}
