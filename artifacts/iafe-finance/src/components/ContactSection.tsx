import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "5519991679072";
const WEBHOOK_URL =
  "https://n8n-sgo8ksokg404ocg8sgc4sooc.vemprajogo.com/webhook/Leads-LP-finance";
const DEBOUNCE_MS = 900;

type LeadEvent = "preenchimento_parcial" | "envio_formulario";

type LeadPayload = {
  evento: LeadEvent;
  sessao_id: string;
  origem: string;
  timestamp: string;
  pagina: string;
  lead: {
    nome: string;
    whatsapp: string;
    mensagem: string;
  };
  campos_preenchidos: {
    nome: boolean;
    whatsapp: boolean;
    mensagem: boolean;
  };
  completo: boolean;
};

function createSessionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `lead-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function buildPayload(
  name: string,
  phone: string,
  message: string,
  evento: LeadEvent,
  sessionId: string,
): LeadPayload {
  const nome = name.trim();
  const whatsapp = phone.trim();
  const mensagem = message.trim();

  return {
    evento,
    sessao_id: sessionId,
    origem: "LP IAFÉ Finance",
    timestamp: new Date().toISOString(),
    pagina: typeof window !== "undefined" ? window.location.href : "",
    lead: { nome, whatsapp, mensagem },
    campos_preenchidos: {
      nome: nome.length > 0,
      whatsapp: whatsapp.length > 0,
      mensagem: mensagem.length > 0,
    },
    completo: nome.length > 0 && whatsapp.length > 0,
  };
}

function buildWhatsAppText(nome: string, whatsapp: string, mensagem: string) {
  const parts = [`Olá! Me chamo ${nome}.`, `Meu WhatsApp: ${whatsapp}.`];
  if (mensagem) parts.push(mensagem);
  return parts.join("\n");
}

async function sendLead(payload: LeadPayload, options?: { keepalive?: boolean }) {
  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: options?.keepalive,
  });
}

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sessionIdRef = useRef(createSessionId());
  const lastPartialKeyRef = useRef("");

  useEffect(() => {
    const nome = name.trim();
    const whatsapp = phone.trim();
    const mensagem = message.trim();

    if (!nome && !whatsapp && !mensagem) return;

    const timer = window.setTimeout(() => {
      const payload = buildPayload(name, phone, message, "preenchimento_parcial", sessionIdRef.current);
      const partialKey = JSON.stringify(payload.lead);

      if (partialKey === lastPartialKeyRef.current) return;
      lastPartialKeyRef.current = partialKey;

      sendLead(payload).catch(() => {});
    }, DEBOUNCE_MS);

    return () => window.clearTimeout(timer);
  }, [name, phone, message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const nome = name.trim();
    const whatsapp = phone.trim();
    const mensagem = message.trim();

    if (!nome || !whatsapp) {
      setError("Nome e WhatsApp são obrigatórios.");
      return;
    }

    setLoading(true);

    const payload = buildPayload(name, phone, message, "envio_formulario", sessionIdRef.current);

    try {
      await sendLead(payload);
    } catch {
      setError("Não foi possível registrar seu contato. Tente novamente.");
      setLoading(false);
      return;
    }

    const waText = buildWhatsAppText(nome, whatsapp, mensagem);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setLoading(false);
    setSent(true);
    setName("");
    setPhone("");
    setMessage("");
    lastPartialKeyRef.current = "";
    sessionIdRef.current = createSessionId();

    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #9333EA 50%, #6D28D9 100%)" }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div
              style={{
                position: "relative",
                alignSelf: "stretch",
                overflow: "hidden",
                minWidth: 0,
              }}
            >
              <img
                src="/feh-agente2.png"
                alt="FÊH assistente"
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: "50%",
                  height: "calc(100% - 56px)",
                  width: "auto",
                  maxWidth: "95%",
                  filter: "drop-shadow(0 12px 40px rgba(109,40,217,0.5))",
                  animation: "float-contact 3.5s ease-in-out infinite",
                }}
              />
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-black text-white mb-2">Fale com a gente</h2>
              <p className="text-white/80 text-sm mb-7 leading-relaxed">
                Comunique-se pelo WhatsApp para dúvidas ou atendimento personalizado.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <div>
                  <label className="text-white/80 text-xs font-semibold mb-1 block">
                    Nome <span className="text-yellow-300">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    required
                    className="w-full bg-white/95 text-gray-800 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-400"
                    data-testid="contact-name"
                  />
                </div>
                <div>
                  <label className="text-white/80 text-xs font-semibold mb-1 block">
                    WhatsApp <span className="text-yellow-300">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 9 7535-9520"
                    required
                    className="w-full bg-white/95 text-gray-800 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-400"
                    data-testid="contact-phone"
                  />
                </div>
                <div>
                  <label className="text-white/80 text-xs font-semibold mb-1 block">Mensagem</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Como podemos te ajudar?"
                    rows={4}
                    className="w-full bg-white/95 text-gray-800 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-400 resize-none"
                    data-testid="contact-message"
                  />
                </div>

                {error && (
                  <p className="text-yellow-300 text-xs font-semibold -mt-1">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading || sent}
                  className="w-full bg-purple-900 hover:bg-purple-950 disabled:opacity-70 text-white font-bold py-3.5 rounded-lg text-sm transition-colors"
                  data-testid="contact-submit"
                >
                  {sent ? "✓ Enviado!" : loading ? "Enviando..." : "Enviar"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
