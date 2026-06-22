import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export function ProductShowcase() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !deviceRef.current || !textRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        const { isMobile } = context.conditions as { isMobile: boolean };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: isMobile ? "top 60%" : "top top",
            end: isMobile ? undefined : "+=200%",
            scrub: isMobile ? false : 1,
            pin: isMobile ? false : true,
            toggleActions: isMobile ? "play none none reverse" : undefined,
          },
        });

        // Initially device is tilted away
        gsap.set(deviceRef.current, {
          rotationX: 60,
          rotationZ: -45,
          scale: 0.8,
          y: isMobile ? 50 : 100,
        });

        // Animate device to front view
        tl.to(
          deviceRef.current,
          {
            rotationX: 0,
            rotationZ: 0,
            scale: isMobile ? 1.05 : 1.2,
            y: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          0,
        );

        // Lines of text stagger fade and translate upward
        const lines = textRef.current?.querySelectorAll(".stagger-line") || [];
        if (lines.length > 0) {
          gsap.set(lines, { opacity: 0, y: isMobile ? 30 : 50 });
          tl.to(
            lines,
            {
              opacity: 1,
              y: 0,
              stagger: 0.2,
              duration: 0.8,
              ease: "power2.out",
            },
            0.2,
          );
        }
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <div className="relative mb-[40px]">
      <section
        ref={containerRef}
        className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center perspective-[1000px]"
      >
        {/* Background radial gradient to give volume */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-black to-black opacity-50 z-0 text-center flex justify-center items-center pointer-events-none"></div>

        {/* Large Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-hidden w-full flex justify-center">
          <span className="text-[100px] md:text-[200px] lg:text-[280px] font-black italic tracking-tighter text-white/[0.03] whitespace-nowrap font-display select-none">
            {t("续航7x24h", "7x24H BATTERY")}
          </span>
        </div>

        {/* The 3D Mockup */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center pointer-events-none">
          <div ref={deviceRef} className="relative transform-style-3d group">
            {/* BOOM ONE Device Mockup (Glassmorphic & Shadows) */}
            <div className="w-48 h-72 md:w-64 md:h-96 rounded-[75px] md:rounded-[100px] border border-white/20 bg-gradient-to-br from-[#222] via-[#050505] to-[#111] shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_2px_10px_rgba(255,255,255,0.2)] flex items-center justify-center relative overflow-hidden backdrop-blur-2xl">
              {/* Fake screen/glass layer reflection */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent -translate-y-1/4 rounded-[80px]"></div>

              {/* The glowing ring */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-8 border-boom-green shadow-[0_0_50px_rgba(163,230,53,0.8),inset_0_0_20px_rgba(163,230,53,0.4)] relative flex items-center justify-center bg-black/80">
                <div className="w-6 h-6 rounded-full border-2 border-boom-green/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="w-2 h-2 rounded-full bg-white text-glow shadow-boom-green"></div>
                </div>
              </div>

              {/* Brand Logo */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 tracking-[0.3em] text-white/50 text-xs font-display font-medium">
                BOOM
              </div>
            </div>

            {/* Floor Shadow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-boom-green/20 blur-2xl rounded-full mix-blend-screen opacity-50 z-[-1]"></div>

            {/* Text curving around the contour */}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[336px] md:w-[320px] md:h-[448px] pointer-events-none z-30 overflow-visible"
              viewBox="0 0 320 448"
              fill="none"
            >
              <path
                id="device-contour"
                d="M 0 100 L 0 316 A 132 132 0 0 0 132 448 L 188 448 A 132 132 0 0 0 320 316 L 320 100"
              />
              <text
                fill="currentColor"
                className="text-boom-text-dim text-[14px] md:text-[18px] font-medium tracking-[0.2em] font-sans"
              >
                <textPath
                  href="#device-contour"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {t(
                    "顶级AI教练，看得见你的进步时机",
                    "Top AI Coach, sees the timing of your progress.",
                  )}
                </textPath>
              </text>
              <text
                fill="currentColor"
                className="text-boom-green text-[12px] md:text-[14px] font-bold tracking-[0.2em] font-sans filter drop-shadow-[0_0_8px_rgba(163,230,53,0.8)]"
                dy="28"
              >
                <textPath
                  href="#device-contour"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {t("7x24h全天候跟踪", "24/7 Tracking")}
                </textPath>
              </text>
            </svg>
          </div>

          {/* Floating Text below device */}
          <div
            ref={textRef}
            className="absolute inset-0 flex flex-col md:block items-center justify-center pointer-events-none z-20 translate-y-[10px] md:translate-y-0"
          >
            <div className="md:absolute md:right-[calc(50%+30px)] md:top-1/2 md:-translate-y-1/2 mb-4 md:mb-0 text-center md:text-right">
              <div className="stagger-line text-[54px] leading-[1.1] md:text-6xl lg:text-7xl font-bold font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-2xl md:whitespace-nowrap">
                {t("不止于记录", "More than tracking")}
              </div>
            </div>

            <div className="md:absolute md:left-[calc(50%+30px)] md:top-1/2 md:translate-y-[-50%] mb-8 md:mb-0 text-center md:text-left translate-y-[10px]">
              <div className="stagger-line text-[54px] leading-[1.1] md:text-6xl lg:text-7xl font-bold font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-2xl md:whitespace-nowrap">
                {t("更在于决策", "It's about decision.")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
