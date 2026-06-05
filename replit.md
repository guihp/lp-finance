# IAFÉ Finance

Landing page de cópia fiel do site IAFÉ Finance — assistente financeiro por WhatsApp com IA chamada FÊH.

## Run & Operate

- `pnpm --filter @workspace/iafe-finance run dev` — rodar frontend (porta dinâmica via workflow)
- `pnpm --filter @workspace/api-server run dev` — rodar API server (porta 8080)
- `pnpm run typecheck` — typecheck completo
- `pnpm run build` — build de todos os pacotes

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS
- Routing: wouter
- UI: shadcn/ui + Radix UI
- Animações: CSS animations (marquee)
- API: Express 5 (apenas healthcheck por enquanto)
- Build: esbuild (CJS bundle para API)

## Where things live

- `artifacts/iafe-finance/src/pages/home.tsx` — página principal (landing page completa)
- `artifacts/iafe-finance/src/components/` — todos os componentes da landing page
  - `Navbar.tsx` — barra de navegação sticky
  - `IafeLogo.tsx` — logo SVG reutilizável
  - `HeroSection.tsx` — hero com 5 phone mockups
  - `ControlSection.tsx` — seção "Controle sem esforço" (fundo roxo)
  - `BankLogos.tsx` — carrossel de logos de bancos
  - `FeaturesSection.tsx` — "Visual intuitivo" e "Automação total"
  - `HowItWorksSection.tsx` — avatar FÊH + chat WhatsApp mockup
  - `PlansSection.tsx` — plano mensal R$ 29,90
  - `FaqSection.tsx` — FAQ em 2 colunas com acordeão
  - `ContactSection.tsx` — formulário de contato
  - `Footer.tsx` — rodapé com logo e Instagram
- `artifacts/iafe-finance/src/index.css` — tema roxo IAFÉ + Google Fonts Inter
- `lib/api-spec/openapi.yaml` — spec OpenAPI (apenas healthcheck)

## Architecture decisions

- Frontend-only landing page: sem backend necessário para este artefato
- Mockups de WhatsApp feitos com SVG/HTML puro (sem imagens externas)
- Avatar FÊH implementado como SVG inline (sem dependência de image generation)
- Marquee de bancos via CSS animation keyframes infinito
- Smooth scroll para seções via scrollIntoView

## Product

Landing page de cópia fiel do site IAFÉ Finance com:
- Navbar sticky com logo e navegação
- Hero com headline bilíngue e 5 phone mockups do WhatsApp
- 10 seções completas: hero, controle, bancos, features, how-it-works, planos, FAQ, contato, footer
- Paleta roxa idêntica ao original (#7B2FBE, #9333EA, #6D28D9)
- Textos em português brasileiro

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Google Fonts `@import url(...)` DEVE ser a primeira linha do index.css (antes do @import "tailwindcss")
- Estilos inline (style prop) não podem ser duplicados em JSX — usar apenas um `style` por elemento
- Animação do marquee: usar `width: max-content` no container + `animate-marquee` definido em index.css

## Pointers

- Ver skill `pnpm-workspace` para estrutura do monorepo
- Ver skill `react-vite` para padrões de desenvolvimento frontend
