import { useState, useEffect, useRef, useCallback } from "react";

const AUTH_URL = "https://financas.iafeoficial.com/auth";

const TRANSITION_MS = 900;
const AUTOPLAY_MS = 5000;
const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

const slides = [
  { id: 1, src: "/phone-slides/slide-1.png", alt: "Registro de Pix e conta de luz via WhatsApp" },
  { id: 2, src: "/phone-slides/slide-2.png", alt: "Registro de despesas por áudio no WhatsApp" },
  { id: 3, src: "/phone-slides/slide-3.png", alt: "Registro de orçamento de manutenção veicular" },
  { id: 4, src: "/phone-slides/slide-4.jpg", alt: "Confirmação de lançamentos financeiros no WhatsApp" },
  { id: 5, src: "/phone-slides/slide-5.png", alt: "Controle de gastos pelo WhatsApp com a FÊH" },
];

function getOffset(slideIndex: number, activeIndex: number, total: number): number {
  let offset = slideIndex - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

function phoneStyle(offset: number) {
  const distance = Math.abs(offset);
  const scale = distance === 0 ? 1 : distance === 1 ? 0.78 : 0.62;
  const translateX = offset * 132;
  const zIndex = 10 - distance;

  return {
    transform: `translate3d(${translateX}px, 0, 0) scale(${scale})`,
    zIndex,
  };
}

function IPhoneMockup({
  src,
  alt,
  offset,
  instant,
  fadingIn,
}: {
  src: string;
  alt: string;
  offset: number;
  instant: boolean;
  fadingIn: boolean;
}) {
  const distance = Math.abs(offset);
  const targetOpacity = distance === 0 ? 1 : distance === 1 ? 0.55 : 0.3;
  const contentOpacity = fadingIn ? 0 : targetOpacity;
  const isCenter = distance === 0;

  const transition = instant ? "none" : `opacity ${TRANSITION_MS}ms ${EASING}`;

  return (
    <div className="relative h-full w-full">
      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          borderRadius: 40,
          opacity: contentOpacity,
          transition,
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          decoding="async"
          className="block h-full w-full object-cover object-top"
          style={{
            borderRadius: 40,
            imageRendering: "auto",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            transform: isCenter ? "translateZ(0)" : undefined,
          }}
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [current, setCurrent] = useState(2);
  const [animating, setAnimating] = useState(false);
  const [instantSlides, setInstantSlides] = useState<Set<number>>(new Set());
  const [fadingInSlides, setFadingInSlides] = useState<Set<number>>(new Set());
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = slides.length;

  const goTo = useCallback(
    (idx: number) => {
      if (animating || idx === current) return;

      const wrapping = new Set<number>();
      slides.forEach((slide, slideIndex) => {
        const prevOffset = getOffset(slideIndex, current, total);
        const nextOffset = getOffset(slideIndex, idx, total);
        if (Math.abs(nextOffset - prevOffset) > 2) {
          wrapping.add(slide.id);
        }
      });

      if (wrapping.size > 0) {
        setInstantSlides(wrapping);
        setFadingInSlides(wrapping);
        requestAnimationFrame(() => {
          setCurrent(idx);
          setAnimating(true);
          requestAnimationFrame(() => {
            setInstantSlides(new Set());
            requestAnimationFrame(() => {
              setFadingInSlides(new Set());
            });
          });
        });
      } else {
        setCurrent(idx);
        setAnimating(true);
      }

      setTimeout(() => setAnimating(false), TRANSITION_MS + 50);
    },
    [animating, current, total],
  );

  useEffect(() => {
    if (animating) return;

    timer.current = setInterval(() => {
      goTo((current + 1) % total);
    }, AUTOPLAY_MS);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [current, animating, goTo, total]);

  const prev = (current - 1 + total) % total;
  const next = (current + 1) % total;

  return (
    <section id="hero" className="pt-24 pb-16 bg-white text-center px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <a
            href={AUTH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors inline-block"
          >
            Começar agora
          </a>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight">
          <span style={{ color: "#9333EA", fontStyle: "italic" }}>Tenha a FÊH, sua amiga financeira.</span>
        </h1>
        <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
          Cuidando do seu dinheiro 24h por dia.
        </p>
        <p className="text-lg sm:text-xl font-bold text-gray-900 mb-14 leading-snug">
          <span style={{ color: "#9333EA" }}>Controle</span>
          {" "}total do seu{" "}
          <span style={{ color: "#9333EA" }}>dinheiro</span>
          , sem esforço
          <br />
          e direto pelo{" "}
          <span style={{ color: "#9333EA", fontWeight: 900 }}>WhatsApp.</span>
        </p>

        <div
          className="relative mx-auto mb-12 flex items-center justify-center"
          style={{ height: 560, maxWidth: 1024, userSelect: "none" }}
        >
          <button
            type="button"
            onClick={() => goTo(prev)}
            className="absolute left-0 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/80 bg-white/90 text-xl backdrop-blur-sm transition-shadow hover:shadow-md"
            style={{ color: "#7B2FBE", boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
            aria-label="anterior"
          >
            ‹
          </button>

          <div
            className="relative flex items-center justify-center"
            style={{
              width: "100%",
              maxWidth: 900,
              height: 520,
              background:
                "radial-gradient(ellipse 72% 58% at 50% 52%, rgba(238, 244, 252, 0.9) 0%, rgba(255, 255, 255, 0) 72%)",
            }}
          >
            {slides.map((slide, slideIndex) => {
              const offset = getOffset(slideIndex, current, total);
              if (Math.abs(offset) > 2) return null;

              const style = phoneStyle(offset);
              const instant = instantSlides.has(slide.id);

              return (
                <div
                  key={slide.id}
                  className="absolute"
                  style={{
                    width: 268,
                    height: 546,
                    left: "50%",
                    top: "50%",
                    marginLeft: -134,
                    marginTop: -273,
                    transition: instant
                      ? "none"
                      : `transform ${TRANSITION_MS}ms ${EASING}`,
                    pointerEvents: offset === 0 ? "auto" : "none",
                    ...style,
                  }}
                >
                  <IPhoneMockup
                    src={slide.src}
                    alt={slide.alt}
                    offset={offset}
                    instant={instant}
                    fadingIn={fadingInSlides.has(slide.id)}
                  />
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => goTo(next)}
            className="absolute right-0 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/80 bg-white/90 text-xl backdrop-blur-sm transition-shadow hover:shadow-md"
            style={{ color: "#7B2FBE", boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
            aria-label="próximo"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-10">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className="border-none p-0 cursor-pointer"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === current ? "#7B2FBE" : "#d1d5db",
                transition: `width ${TRANSITION_MS}ms ${EASING}, background-color 400ms ease`,
              }}
              aria-label={`slide ${i + 1}`}
            />
          ))}
        </div>

        <a
          href={AUTH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-12 py-4 rounded-lg text-lg transition-colors inline-block"
        >
          Começar agora
        </a>
      </div>
    </section>
  );
}
