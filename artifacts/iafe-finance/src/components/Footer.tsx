export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          <div>
            <p className="text-purple-700 font-black text-lg mb-3">Acompanhe mais conteúdos</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Siga no Instagram para novidades e dicas sobre como assumir o controle do seu dinheiro.
            </p>
            <a
              href="https://instagram.com/iafefinance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 font-bold text-sm hover:underline"
              data-testid="footer-instagram"
            >
              @iafefinance
            </a>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Conteúdos novos toda semana. Assuma o comando da sua vida financeira!
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img src="/logo-iafe.png" alt="IAFÉ Finance" className="h-12 w-auto" />
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            © 2026 IAFÉ Finance. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-purple-700 transition-colors">Termos de uso</a>
            <a href="#" className="hover:text-purple-700 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
