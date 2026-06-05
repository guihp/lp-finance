import { useState } from "react";

const faqs = [
  {
    q: "Preciso entender de finanças para usar?",
    a: "Não! A FÊH foi criada justamente para quem não entende de finanças. Basta mandar uma mensagem pelo WhatsApp e ela cuida do resto automaticamente.",
  },
  {
    q: "Como registro meus gastos?",
    a: "É simples: envie uma mensagem de texto ou áudio para a FÊH no WhatsApp descrevendo sua compra ou gasto. Ela vai categorizar e registrar tudo automaticamente.",
  },
  {
    q: "O que posso registrar?",
    a: "Você pode registrar despesas, receitas, transferências, compras no cartão de crédito, PIX, agendamentos e muito mais. A FÊH entende linguagem natural.",
  },
  {
    q: "A IAFÉ Finance acessa minha conta bancária?",
    a: "Não. A IAFÉ Finance não acessa sua conta bancária em nenhum momento. Tudo é registrado manualmente através das suas mensagens no WhatsApp.",
  },
  {
    q: "É seguro usar a IAFÉ Finance?",
    a: "Sim, totalmente seguro! Seus dados são protegidos com criptografia e nunca compartilhados com terceiros. Não acessamos sua conta bancária.",
  },
  {
    q: "Preciso instalar algum aplicativo?",
    a: "Não! A FÊH funciona direto no WhatsApp que você já usa. Basta salvar o número e começar a conversar.",
  },
  {
    q: "Como acompanho minha vida financeira?",
    a: "Você acessa o painel financeiro completo pelo link que a FÊH te envia. Lá você vê gráficos, relatórios, histórico de gastos e muito mais.",
  },
  {
    q: "Quais são os principais benefícios?",
    a: "Controle financeiro automático, sem precisar aprender finanças, sem mudar sua rotina, disponível 24h por dia, com painel visual completo e relatórios detalhados.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/20 rounded-xl overflow-hidden"
      data-testid={`faq-item`}
    >
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left text-white font-semibold text-sm hover:bg-white/5 transition-colors"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle`}
      >
        <span>{q}</span>
        <span className="flex-shrink-0 ml-4 text-xl leading-none text-white/70">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-white/80 text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const left = faqs.slice(0, 4);
  const right = faqs.slice(4);

  return (
    <section id="perguntas" className="bg-[#7B2FBE] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-12">
          Perguntas frequentes
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="flex flex-col gap-3">
            {left.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {right.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollTo("planos")}
            className="bg-white text-purple-700 font-bold px-10 py-4 rounded-xl text-base hover:bg-gray-100 transition-colors"
            data-testid="faq-cta"
          >
            Garantir agora
          </button>
        </div>
      </div>
    </section>
  );
}
