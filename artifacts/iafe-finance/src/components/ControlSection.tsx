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

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/controle-photo.png"
            alt="Controle financeiro com IAFÉ"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
