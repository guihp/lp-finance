export default function HowItWorksSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/card-registre.png"
                alt="Registre tudo com a FÊH"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-black text-purple-700 mb-2">Registre tudo.</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Envie uma mensagem pelo WhatsApp e a FÊH lança tudo automaticamente.
            </p>
          </div>

          <div>
            <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/card-pratico.png"
                alt="Prático e rápido"
                className="w-full h-full object-cover"
              />
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
