import { useState, useEffect } from "react";
import { FadeInUp } from "../utils/animations";
import { GSAPCounter } from "../utils/advanced-animations";
import { ChevronRight } from "lucide-react";

const stats = [
  { value: 7.5, label: "Highest Package", prefix: "₹", suffix: " LPA", decimals: 1, color: "#E57345" },
  { value: 4.5, label: "Average Package", prefix: "₹", suffix: " LPA", decimals: 1, color: "#E8BD63" },
  { value: 120, label: "Companies Visited", prefix: "", suffix: "+", decimals: 0, color: "#4A90E2" },
  { value: 94, label: "Placement Rate", prefix: "", suffix: "%", decimals: 0, color: "#3EA644" },
];

const images = [
  "/images/hero_1.png",
  "/images/hero_2.png",
  "/images/hero_3.png",
  "/images/hero_4.png"
];

export default function PlacementHero() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-transparent">
      {/* Cinematic Image Slider Background */}
      <div className="absolute inset-0 bg-[#050B14] z-0">
        {images.map((src, index) => (
          <img 
            key={src}
            src={src}
            alt={`Placement Hero ${index + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
              index === currentImg ? "opacity-95 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
        {/* Elegant Soft Gradient Overlays for Vividness and Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/70 via-[#050B14]/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/60 via-transparent to-transparent z-10" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10 pb-16 pt-40 w-full flex flex-col justify-end h-full">

        {/* Hero Typography */}
        <div className="max-w-4xl mb-24">
          <FadeInUp delay={100}>
            <div className="inline-flex items-center gap-3 border border-[#E8BD63]/30 text-[#E8BD63] text-[10px] font-bold uppercase tracking-[0.4em] px-6 py-2.5 rounded-full mb-10 bg-[#E8BD63]/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#E8BD63] animate-pulse" />
              Placements 2025–26 Active
            </div>
          </FadeInUp>
          
          <FadeInUp delay={200}>
            <h1 className="serif text-[clamp(3.5rem,8vw,7.5rem)] font-light text-white leading-[1.05] tracking-tight mb-8">
              Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E8BD63] italic font-serif">&</span> <br />
              <span className="font-bold">Placement Cell</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={350}>
            <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              Bridging academia and industry — we prepare, connect, and place students in leading organizations across the globe.
            </p>
          </FadeInUp>
        </div>

        {/* Borderless Stats Strip (No Cards) */}
        <div className="border-t border-white/10 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {stats.map((s, i) => (
              <FadeInUp key={s.label} delay={400 + (i * 100)}>
                <div className="relative group">
                  <div className="absolute -left-4 md:-left-8 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 md:opacity-100" />
                  
                  <div className="serif text-4xl md:text-5xl font-light text-white mb-2 group-hover:text-[#E8BD63] transition-colors duration-500">
                    <GSAPCounter end={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white/60 transition-colors">
                    {s.label}
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
