const banks = [
  { name: "neon", style: { color: "#00C7B1", fontWeight: 800, letterSpacing: "-0.02em" } },
  { name: "CAIXA", style: { color: "#006E9C", fontWeight: 800, letterSpacing: "0.05em" } },
  { name: "C6BANK", style: { color: "#1a1a1a", fontWeight: 700 } },
  { name: "Nu", style: { color: "#820AD1", fontWeight: 800, fontSize: "1.4em" } },
  { name: "inter", style: { color: "#FF7A00", fontWeight: 700, letterSpacing: "0.02em" } },
  { name: "Itaú", style: { color: "#EC7000", fontWeight: 800 } },
  { name: "Bradesco", style: { color: "#CC092F", fontWeight: 700 } },
];

const allBanks = [...banks, ...banks];

export default function BankLogos() {
  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="text-center mb-6">
        <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Compatível com os principais bancos</p>
      </div>
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap gap-12" style={{ width: "max-content" }}>
          {allBanks.map((bank, i) => (
            <div key={i} className="flex-shrink-0 flex items-center px-6" data-testid={`bank-logo-${i}`}>
              <span
                style={{ fontSize: "1.5rem", lineHeight: 1, ...bank.style }}
              >
                {bank.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
