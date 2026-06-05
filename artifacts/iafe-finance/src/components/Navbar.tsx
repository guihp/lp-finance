import { useState, useEffect } from "react";
import IafeLogo from "@/components/IafeLogo";

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
      data-testid="navbar"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <IafeLogo />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("como-funciona")}
              className="text-gray-700 hover:text-purple-700 font-medium text-sm transition-colors"
              data-testid="nav-como-funciona"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollTo("planos")}
              className="text-gray-700 hover:text-purple-700 font-medium text-sm transition-colors"
              data-testid="nav-planos"
            >
              Planos
            </button>
            <button
              onClick={() => scrollTo("perguntas")}
              className="text-gray-700 hover:text-purple-700 font-medium text-sm transition-colors"
              data-testid="nav-perguntas"
            >
              Perguntas
            </button>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("planos")}
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              data-testid="nav-cta"
            >
              Começar agora
            </button>
          </div>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="nav-mobile-toggle"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 flex flex-col gap-4">
            <button onClick={() => scrollTo("como-funciona")} className="text-gray-700 font-medium text-sm text-left">Como funciona</button>
            <button onClick={() => scrollTo("planos")} className="text-gray-700 font-medium text-sm text-left">Planos</button>
            <button onClick={() => scrollTo("perguntas")} className="text-gray-700 font-medium text-sm text-left">Perguntas</button>
            <button
              onClick={() => scrollTo("planos")}
              className="bg-purple-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm w-full"
            >
              Começar agora
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
