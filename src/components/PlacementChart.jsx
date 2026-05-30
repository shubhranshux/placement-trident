import { useState } from "react";
import { FadeInUp } from "../utils/animations";
import { TrendingUp, GraduationCap, Briefcase } from "lucide-react";

const data = [
  { year: "2019-20", placed: 504, studies: 23 },
  { year: "2020-21", placed: 486, studies: 20 },
  { year: "2021-22", placed: 410, studies: 27 },
  { year: "2022-23", placed: 455, studies: 32 },
  { year: "2023-24", placed: 398, studies: 44 }
];

const maxPlaced = Math.max(...data.map(d => d.placed));
const maxStudies = Math.max(...data.map(d => d.studies));
const totalPlaced = data.reduce((s, d) => s + d.placed, 0);
const totalStudies = data.reduce((s, d) => s + d.studies, 0);

export default function PlacementChart() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <div className="w-full relative py-8 overflow-hidden z-0">
      {/* Graph-Paper Matrix Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(#1A2660 1px, transparent 1px), linear-gradient(90deg, #1A2660 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        {/* Soft edge fades to blend with background */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FFF3E0] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FFF3E0] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FFF3E0] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FFF3E0] to-transparent" />
      </div>

      <FadeInUp className="relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#A59381] block mb-3">Past 5 Years Overview</span>
              <h3 className="serif text-4xl md:text-5xl lg:text-6xl font-black text-[#1A2660] leading-[1]">
                Placement<br />
                <span className="italic font-light font-serif text-[#A59381]">Statistics</span>
              </h3>
            </div>

            {/* Summary Stats */}
            <div className="flex gap-6 md:gap-10">
              <div className="text-right">
                <div className="flex items-center justify-end gap-2 mb-1">
                  <Briefcase size={14} className="text-[#1A2660]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1A2660]/40">Total Placed</span>
                </div>
                <span className="text-4xl md:text-5xl font-black text-[#1A2660] tracking-tight">{totalPlaced.toLocaleString()}</span>
              </div>
              <div className="w-px bg-[#1A2660]/10" />
              <div className="text-right">
                <div className="flex items-center justify-end gap-2 mb-1">
                  <GraduationCap size={14} className="text-[#E8BD63]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1A2660]/40">Higher Studies</span>
                </div>
                <span className="text-4xl md:text-5xl font-black text-[#E8BD63] tracking-tight">{totalStudies}</span>
              </div>
            </div>
          </div>

          {/* Interactive Horizontal Bar Chart */}
          <div className="space-y-5">
            {data.map((d, i) => {
              const placedPct = (d.placed / maxPlaced) * 100;
              const studiesPct = (d.studies / maxStudies) * 100;
              const isActive = activeIdx === i;

              return (
                <div
                  key={d.year}
                  className="group cursor-default"
                  onMouseEnter={() => setActiveIdx(i)}
                  onMouseLeave={() => setActiveIdx(null)}
                >
                  <div className={`flex items-center gap-4 md:gap-8 py-5 md:py-6 transition-all duration-400 ${isActive ? "scale-[1.01]" : ""}`}>
                    
                    {/* Year Label */}
                    <div className="w-20 md:w-28 flex-shrink-0">
                      <span className={`text-lg md:text-2xl font-black tracking-tight transition-colors duration-300 ${isActive ? "text-[#1A2660]" : "text-[#1A2660]/25"}`}>
                        {d.year}
                      </span>
                    </div>

                    {/* Bars Container */}
                    <div className="flex-1 space-y-2.5">
                      
                      {/* Placed Bar */}
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-10 md:h-12 bg-[#1A2660]/[0.06] rounded-lg overflow-hidden relative">
                          <div
                            className="h-full rounded-lg transition-all duration-700 ease-out flex items-center relative"
                            style={{
                              width: `${placedPct}%`,
                              background: isActive
                                ? "linear-gradient(90deg, #1A2660 0%, #3B5998 100%)"
                                : "linear-gradient(90deg, #1A2660 0%, #1A2660cc 100%)",
                              boxShadow: isActive ? "0 4px 20px rgba(26,38,96,0.25)" : "none",
                            }}
                          >
                            {/* Inner highlight */}
                            <div className="absolute inset-x-0 top-0 h-[40%] bg-white/10 rounded-t-lg" />
                          </div>
                        </div>
                        <span className={`text-sm md:text-lg font-black w-12 md:w-16 text-right transition-all duration-300 ${isActive ? "text-[#1A2660] scale-110" : "text-[#1A2660]/30"}`}>
                          {d.placed}
                        </span>
                      </div>

                      {/* Higher Studies Bar */}
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-6 md:h-7 bg-[#E8BD63]/[0.08] rounded-md overflow-hidden relative">
                          <div
                            className="h-full rounded-md transition-all duration-700 ease-out relative"
                            style={{
                              width: `${studiesPct}%`,
                              background: isActive
                                ? "linear-gradient(90deg, #E8BD63 0%, #F1C40F 100%)"
                                : "linear-gradient(90deg, #E8BD63 0%, #E8BD63cc 100%)",
                              boxShadow: isActive ? "0 4px 16px rgba(232,189,99,0.3)" : "none",
                            }}
                          >
                            <div className="absolute inset-x-0 top-0 h-[40%] bg-white/15 rounded-t-md" />
                          </div>
                        </div>
                        <span className={`text-xs md:text-sm font-black w-12 md:w-16 text-right transition-all duration-300 ${isActive ? "text-[#E8BD63] scale-110" : "text-[#E8BD63]/30"}`}>
                          {d.studies}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className={`h-px transition-all duration-300 ${isActive ? "bg-[#1A2660]/20" : "bg-[#1A2660]/6"}`} />
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-10 flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-3 rounded-sm bg-gradient-to-r from-[#1A2660] to-[#3B5998]" />
              <span className="text-xs font-bold text-[#1A2660]/50 uppercase tracking-wider">Students Placed</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-3 rounded-sm bg-gradient-to-r from-[#E8BD63] to-[#F1C40F]" />
              <span className="text-xs font-bold text-[#1A2660]/50 uppercase tracking-wider">Higher Studies</span>
            </div>
          </div>

        </div>
      </FadeInUp>
    </div>
  );
}
