import { FadeInUp } from "../utils/animations";
import { GSAPCounter } from "../utils/advanced-animations";
import { GraduationCap, Award, Cpu, BookOpen, Atom, Lightbulb } from "lucide-react";

const stats = [
  { value: 173, label: "Total Faculty Members", icon: GraduationCap },
  { value: 61, label: "Faculty With PhD", icon: Award },
  { value: 29, label: "Registered Patents", icon: Lightbulb },
  { value: 33, label: "Ongoing PhD Projects", icon: BookOpen },
];

const distribution = [
  { name: "School of Computing", faculty: 63, phds: 18, percent: 100, color: "#4A90E2", icon: Cpu },
  { name: "School of Engineering", faculty: 43, phds: 11, percent: 68, color: "#E8BD63", icon: Atom },
  { name: "School of Science & Humanities", faculty: 20, phds: 12, percent: 31, color: "#3EA644", icon: BookOpen },
  { name: "School of Computer Applications", faculty: 18, phds: 4, percent: 28, color: "#9B51E0", icon: Cpu },
  { name: "School of Biotech Sciences", faculty: 14, phds: 9, percent: 22, color: "#E57345", icon: Atom },
  { name: "School of Business", faculty: 15, phds: 7, percent: 23, color: "#C41E3A", icon: GraduationCap },
];

export default function InstitutionGlance() {
  return (
    <section className="relative py-32 bg-[#080F26] overflow-hidden z-0">
      {/* Background 6: Cosmic Particle Field & Abstract Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Subtle Starlight / Particle Field */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(circle, #FFFFFF 0.5px, transparent 0.5px)",
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0"
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: "radial-gradient(circle, #E8BD63 1px, transparent 1px)",
            backgroundSize: "90px 90px",
            backgroundPosition: "30px 30px"
          }}
        />

        {/* Deep Abstract Glows */}
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#1A2660] blur-[200px] opacity-35 pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#4A90E2] blur-[150px] opacity-15 pointer-events-none" />
        
        {/* Fine grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#4A90E2 1px, transparent 1px), linear-gradient(90deg, #4A90E2 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Floating Numbers (No Cards, Dynamic GSAP Counters) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 pb-24 border-b border-white/5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <FadeInUp key={stat.label} delay={i * 100}>
                <div className="relative group">
                  <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon badge */}
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#E8BD63] mb-5 border border-white/10 group-hover:bg-[#E8BD63] group-hover:text-[#050B14] transition-all duration-500">
                    <Icon size={18} />
                  </div>

                  <span className="serif text-5xl md:text-6xl lg:text-7xl font-light text-white block mb-4 tracking-tighter">
                    <GSAPCounter end={stat.value} />
                  </span>
                  <span className="text-[10px] font-extrabold text-[#E8BD63] uppercase tracking-[0.25em]">{stat.label}</span>
                </div>
              </FadeInUp>
            );
          })}
        </div>

        {/* Laser Line Distribution (Redesigned as Premium Card Deck) */}
        <div className="pt-24 max-w-5xl">
          <FadeInUp delay={200}>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-white/30 block mb-6">
              Institutional Capacity
            </span>
            <h3 className="serif text-4xl md:text-5xl font-light text-white mb-16">
              Faculty Strength <span className="italic font-serif text-[#4A90E2]">Distribution</span>
            </h3>
            
            <div className="space-y-6">
              {distribution.map((item, i) => {
                const Icon = item.icon;
                const cardStyles = {
                  "#4A90E2": { bg: "bg-gradient-to-br from-[#4A90E2]/8 to-transparent hover:from-[#4A90E2]/15 border-[#4A90E2]/20 hover:border-[#4A90E2]/50" },
                  "#E8BD63": { bg: "bg-gradient-to-br from-[#E8BD63]/8 to-transparent hover:from-[#E8BD63]/15 border-[#E8BD63]/20 hover:border-[#E8BD63]/50" },
                  "#3EA644": { bg: "bg-gradient-to-br from-[#3EA644]/8 to-transparent hover:from-[#3EA644]/15 border-[#3EA644]/20 hover:border-[#3EA644]/50" },
                  "#9B51E0": { bg: "bg-gradient-to-br from-[#9B51E0]/8 to-transparent hover:from-[#9B51E0]/15 border-[#9B51E0]/20 hover:border-[#9B51E0]/50" },
                  "#E57345": { bg: "bg-gradient-to-br from-[#E57345]/8 to-transparent hover:from-[#E57345]/15 border-[#E57345]/20 hover:border-[#E57345]/50" },
                  "#C41E3A": { bg: "bg-gradient-to-br from-[#C41E3A]/8 to-transparent hover:from-[#C41E3A]/15 border-[#C41E3A]/20 hover:border-[#C41E3A]/50" },
                }[item.color] || { bg: "bg-white/[0.02] hover:bg-white/[0.04] border-white/5 hover:border-white/10" };

                return (
                  <div 
                    key={item.name} 
                    className={`p-6 md:p-8 rounded-3xl border shadow-[0_20px_45px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden ${cardStyles.bg}`}
                  >
                    {/* Glowing corner effect */}
                    <div 
                      className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[35px] opacity-10 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none"
                      style={{ backgroundColor: item.color }}
                    />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                      
                      {/* Left Side: School Badge & Title */}
                      <div className="flex items-center gap-5">
                        <div 
                          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white flex-shrink-0 border transition-all duration-500 group-hover:scale-105"
                          style={{ 
                            backgroundColor: `${item.color}15`, 
                            borderColor: `${item.color}25`,
                            color: item.color
                          }}
                        >
                          <Icon size={20} />
                        </div>
                        <h4 className="text-white/90 text-lg md:text-xl font-bold tracking-wide group-hover:text-white transition-colors">
                          {item.name}
                        </h4>
                      </div>

                      {/* Right Side: Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white/5 text-white/70 border border-white/10">
                          {item.faculty} Faculty
                        </span>
                        <span 
                          className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide border"
                          style={{ 
                            backgroundColor: `${item.color}15`, 
                            color: item.color,
                            borderColor: `${item.color}30`
                          }}
                        >
                          {item.phds} PhDs
                        </span>
                      </div>

                    </div>

                    {/* Premium Thick Glowing Progress Capsule Track */}
                    <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden relative">
                      <div 
                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-[1200ms] ease-out"
                        style={{ 
                          width: `${item.percent}%`, 
                          backgroundColor: item.color,
                          boxShadow: `0 0 15px 1px ${item.color}a0`
                        }}
                      />
                    </div>

                  </div>
                );
              })}
            </div>
          </FadeInUp>
        </div>

      </div>
    </section>
  );
}
