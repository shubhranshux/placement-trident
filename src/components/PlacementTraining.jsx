import { useState } from "react";
import { FadeInUp } from "../utils/animations";
import { BookOpen, Code2, Handshake, Rocket, Award } from "lucide-react";

const trainingModules = [
  {
    num: "01",
    title: "Upskilling Classes",
    desc: "Semester-wise structured training covering aptitude, reasoning, English language proficiency, JAM, presentation skills, and soft skills (GD/PI). Branch-specific technical modules for core and CS students from 4th to 6th semester.",
    pills: ["Aptitude & Reasoning", "English Proficiency", "GD / PI Prep", "Soft Skills", "Mock Interviews"],
    icon: BookOpen,
  },
  {
    num: "02",
    title: "Online Coding Platforms",
    desc: "Mandatory NPTEL courses from IIT professors in C, Java, Python, DSA, and IoT. Students compete on HackerRank, LeetCode, CodeChef, GeeksforGeeks and CodeForces — with top ranks achieved nationally.",
    pills: ["NPTEL IIT Courses", "HackerRank", "LeetCode", "CodeChef", "GeeksforGeeks"],
    icon: Code2,
  },
  {
    num: "03",
    title: "Industry Partnerships",
    desc: "Each student earns at least 3 industry certifications before final year via partnerships with Intel, AWS, SAP, Wipro, Capgemini, Coursera, Cognizant, and CTTC. VLSI students trained on Synopsys and Cadence EDA tools.",
    pills: ["Intel AI/ML", "AWS Academy", "SAP S/4HANA", "Wipro TalentNext", "IBM MERN Stack", "Coursera"],
    icon: Handshake,
  },
  {
    num: "04",
    title: "Makerspace & Hackathons",
    desc: "14 technical clubs and 10 management clubs. Cisco-funded NASSCOM thingQbator IoT Makerspace (1 of 40 in India). Annual TRITHON inter-college and HACKIN intra-college hackathons. Participation in SIH, IEEE, BPUT, and MSME hackathons.",
    pills: ["TRITHON Hackathon", "CISCO Makerspace", "Smart India Hackathon", "IEEE Hackathons", "14 Tech Clubs"],
    icon: Rocket,
  }
];

const partners = [
  "Intel Digital Readiness (AI/ML)", "AWS Academy (Cloud)", "SAP University Alliance",
  "Wipro TalentNext (Java)", "Coursera IBM MERN Stack", "Coursera Python Full-Stack",
  "VLSI EDA (Synopsys/Cadence)", "Capgemini / ICT Academy", "C2S Chip-in (MEITY)",
  "CTTC CNC Programming", "SAP ABAP Cloud (Odisha SDA)", "Cognizant (via ICT Academy)"
];

/* Accurate geometric corner chevrons matching the reference */
function CornerDecor({ position }) {
  const isTop = position.includes("top");
  const isLeft = position.includes("left");

  const posClass = [
    isTop ? "top-0" : "bottom-0",
    isLeft ? "left-0" : "right-0",
  ].join(" ");

  // Flip transforms to mirror the SVG into each corner
  const scaleX = isLeft ? 1 : -1;
  const scaleY = isTop ? 1 : -1;

  return (
    <div
      className={`absolute ${posClass} z-0 pointer-events-none`}
      style={{ width: 260, height: 240, transform: `scale(${scaleX}, ${scaleY})` }}
    >
      <svg width="260" height="240" viewBox="0 0 260 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer blue chevron bracket */}
        <polygon points="0,0 70,0 70,20 20,20 20,70 0,70" fill="#1A2660" />
        <polygon points="0,0 100,0 50,50 0,50" fill="#1A2660" opacity="0.9" />

        {/* Second chevron layer - blue */}
        <polygon points="0,75 75,0 110,0 110,25 50,85 0,85" fill="#1A2660" opacity="0.85" />
        <polygon points="0,90 90,0 125,0 125,15 55,100 0,100" fill="#1A2660" opacity="0.8" />

        {/* Grey accent chevron */}
        <polygon points="0,110 110,0 140,0 140,12 65,120 0,120" fill="#9CA3AF" opacity="0.45" />
        <polygon points="0,125 125,0 150,0 150,10 70,132 0,132" fill="#9CA3AF" opacity="0.35" />

        {/* Inner blue chevron */}
        <polygon points="0,140 140,0 170,0 170,15 80,150 0,150" fill="#1A2660" opacity="0.7" />
        <polygon points="0,155 155,0 180,0 180,12 85,162 0,162" fill="#1A2660" opacity="0.6" />

        {/* Halftone dot grid */}
        {[...Array(7)].map((_, row) =>
          [...Array(7 - row)].map((_, col) => (
            <circle
              key={`d-${row}-${col}`}
              cx={155 + col * 14}
              cy={10 + row * 14}
              r={4}
              fill="#9CA3AF"
              opacity={0.3 - row * 0.03}
            />
          ))
        )}

        {/* Additional small dots cluster */}
        {[...Array(5)].map((_, row) =>
          [...Array(5 - row)].map((_, col) => (
            <circle
              key={`s-${row}-${col}`}
              cx={10 + col * 14}
              cy={175 + row * 14}
              r={3.5}
              fill="#9CA3AF"
              opacity={0.25 - row * 0.04}
            />
          ))
        )}
      </svg>
    </div>
  );
}

export default function PlacementTraining() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="relative py-28 lg:py-40 bg-[#FFD700] overflow-hidden">

      {/* Diagonal thin lines background */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, #1A2660 0px, #1A2660 1px, transparent 1px, transparent 14px)",
        }}
      />

      {/* All 4 Corner Geometric Decorations */}
      <CornerDecor position="top-left" />
      <CornerDecor position="top-right" />
      <div className="hidden md:block">
        <CornerDecor position="bottom-left" />
        <CornerDecor position="bottom-right" />
      </div>

      {/* Logo watermark top-right */}
      <div className="absolute top-6 right-6 md:top-8 md:right-10 z-20 flex items-center gap-2">
        <div className="w-6 h-6 bg-[#1A2660] rounded-sm flex items-center justify-center">
          <span className="text-[#FFD700] text-[8px] font-black">T</span>
        </div>
        <span className="text-[#1A2660]/60 text-xs md:text-sm font-black tracking-wider">
          tat.tekkzy.com
        </span>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 xl:px-12 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A2660] text-[#FFD700] rounded-full mb-8 shadow-lg">
              <Award size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                Industry Readiness Framework
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-[#1A2660] leading-[0.95] tracking-tight mb-6">
              Our 4-Vertical<br />
              <span className="italic font-light font-serif text-[#1A2660]/50">Training Model</span>
            </h2>
            <p className="text-[#1A2660]/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              A comprehensive, structured approach benchmarked against the best placement cells of India's top private universities.
            </p>
          </FadeInUp>
        </div>

        {/* Modules — Full-width editorial strips */}
        <div className="relative">
          {trainingModules.map((mod, i) => {
            const Icon = mod.icon;
            const isActive = activeIdx === i;

            return (
              <FadeInUp key={mod.num} delay={i * 80}>
                <div
                  className="group cursor-default"
                  onMouseEnter={() => setActiveIdx(i)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  {i === 0 && <div className="h-[3px] bg-[#1A2660]" />}

                  <div className="py-10 md:py-14 lg:py-16 transition-all duration-500">
                    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0">

                      {/* Giant Number + Icon */}
                      <div className="flex items-center gap-5 md:w-[280px] lg:w-[320px] flex-shrink-0">
                        <span
                          className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[8rem] font-black leading-none text-[#1A2660] tracking-tighter transition-all duration-500 select-none"
                          style={{
                            opacity: isActive ? 1 : 0.12,
                            transform: isActive ? "translateX(0)" : "translateX(-4px)",
                          }}
                        >
                          {mod.num}
                        </span>
                        <div
                          className="w-12 h-12 rounded-full bg-[#1A2660] flex items-center justify-center text-[#FFD700] flex-shrink-0 transition-all duration-500"
                          style={{
                            transform: isActive ? "scale(1.15) rotate(-8deg)" : "scale(1) rotate(0deg)",
                          }}
                        >
                          <Icon size={22} strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* Title + Desc + Pills */}
                      <div className="flex-1 md:pt-4">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
                          <h3
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1A2660] leading-[1.05] mb-4 lg:mb-0 lg:w-[380px] lg:flex-shrink-0 transition-all duration-300"
                            style={{ opacity: isActive ? 1 : 0.7 }}
                          >
                            {mod.title}
                          </h3>

                          <div className="flex-1">
                            <p
                              className="text-base lg:text-lg leading-relaxed font-medium mb-6 max-w-xl transition-all duration-500"
                              style={{
                                color: isActive ? "rgba(26,38,96,0.75)" : "rgba(26,38,96,0.4)",
                              }}
                            >
                              {mod.desc}
                            </p>

                            <div
                              className="flex flex-wrap gap-2 transition-all duration-500"
                              style={{
                                opacity: isActive ? 1 : 0,
                                transform: isActive ? "translateY(0)" : "translateY(8px)",
                              }}
                            >
                              {mod.pills.map((pill, pIdx) => (
                                <span
                                  key={pill}
                                  className="px-4 py-2 rounded-full text-[11px] font-bold tracking-wide bg-[#1A2660] text-[#FFD700] transition-all duration-300"
                                  style={{
                                    transitionDelay: `${pIdx * 40}ms`,
                                    opacity: isActive ? 1 : 0,
                                    transform: isActive ? "translateY(0)" : "translateY(6px)",
                                  }}
                                >
                                  {pill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="h-[3px] bg-[#1A2660] transition-all duration-500"
                    style={{ opacity: isActive ? 1 : 0.12 }}
                  />
                </div>
              </FadeInUp>
            );
          })}
        </div>

        {/* Certification Partners */}
        <div className="mt-28 lg:mt-36">
          <FadeInUp delay={200}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1A2660]/40 block mb-2">
                  Trusted By Industry Leaders
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-[#1A2660]">
                  Certification Partners
                </h3>
              </div>
              <p className="text-[#1A2660]/40 text-sm font-bold max-w-md">
                Every student earns a minimum of 3 industry certifications before entering their final year.
              </p>
            </div>
            <div className="h-[2px] bg-[#1A2660]/15 mb-8" />
            <div className="flex flex-wrap gap-3">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="px-5 py-2.5 rounded-full bg-[#1A2660]/8 text-[#1A2660] font-bold text-sm hover:bg-[#1A2660] hover:text-[#FFD700] transition-all duration-300 cursor-default"
                >
                  {partner}
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>

        {/* Bottom Logo */}
        <div className="mt-16 text-center">
          <span className="text-[#1A2660]/12 text-xs font-black tracking-[0.5em] uppercase select-none">
            tat.tekkzy.com
          </span>
        </div>

      </div>
    </section>
  );
}
