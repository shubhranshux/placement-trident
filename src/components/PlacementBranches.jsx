import { Cpu, Code, Zap, Radio, Settings, Building, Database } from "lucide-react";
import { HorizontalScroll, GSAPCounter, Tilt3D } from "../utils/advanced-animations";
import { FadeInUp } from "../utils/animations";

const branches = [
  { id: "cse", name: "Computer Science & Engineering", icon: Code, placements: 285, rate: 96, highest: 7.5, color: "#4A90E2" },
  { id: "it", name: "Information Technology", icon: Database, placements: 142, rate: 95, highest: 7.0, color: "#2C3A8C" },
  { id: "etc", name: "Electronics & Telecommunication", icon: Radio, placements: 118, rate: 89, highest: 6.5, color: "#E57345" },
  { id: "eee", name: "Electrical & Electronics", icon: Zap, placements: 95, rate: 86, highest: 6.0, color: "#E8BD63" },
  { id: "mech", name: "Mechanical Engineering", icon: Settings, placements: 82, rate: 82, highest: 5.5, color: "#A59381" },
  { id: "civil", name: "Civil Engineering", icon: Building, placements: 65, rate: 78, highest: 5.0, color: "#3EA644" },
  { id: "mca", name: "MCA / Post-Graduation", icon: Cpu, placements: 110, rate: 92, highest: 7.0, color: "#C41E3A" },
];

export default function PlacementBranches() {
  return (
    <section className="relative min-h-screen bg-[#E2F0D9] flex flex-col justify-center py-24 overflow-hidden">
      {/* Background glowing effects & Diagonal Hatching */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Diagonal Hatching Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #1A2660 0px, #1A2660 1px, transparent 1px, transparent 10px)"
          }}
        />
        {/* Radial center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white blur-[120px] opacity-40" />
        
        {/* Corner soft glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#2C3A8C] blur-[150px] opacity-[0.08]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] rounded-full bg-[#E57345] blur-[180px] opacity-[0.05]" />
      </div>

      <div className="w-full relative z-10">
        
        {/* Section Header */}
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 text-center mb-16">
          <FadeInUp>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.35em] text-[#A59381] block mb-4">Discipline Breakdown</span>
            <h2 className="serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A2660] mb-6 leading-tight">
              Branch-wise <span className="italic font-light text-[#A59381] font-serif">Placements</span>
            </h2>
            <p className="text-[#3E3A36]/75 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Scroll vertically to glide through the custom placement metrics across each engineering and postgraduate stream.
            </p>
          </FadeInUp>
        </div>

        {/* GSAP-Powered Horizontal Scroll Ribbon */}
        <HorizontalScroll speed={1.2} className="w-full px-6 md:px-12 pt-28" start="top top">
          <div className="flex gap-8 items-stretch py-8 pr-24">
            {branches.map((branch) => {
              const Icon = branch.icon;
              
              // Define brand color system mapping based on branch color to match user template literal styling
              const colors = {
                "#4A90E2": {
                  headerBg: "bg-[#2E6DB4]",
                  dotBg: "bg-[#B5D4F9]",
                  statBg: "bg-[#f4f8fd]",
                  border: "border-[#2E6DB4]/18",
                  statBorderL: "border-l border-[#2E6DB4]/15",
                  valueText: "text-[#133760]",
                  frameBg: "bg-[#E5EEF9]"
                },
                "#2C3A8C": {
                  headerBg: "bg-[#2C3A8C]",
                  dotBg: "bg-[#BFC8F4]",
                  statBg: "bg-[#f4f5fc]",
                  border: "border-[#2C3A8C]/18",
                  statBorderL: "border-l border-[#2C3A8C]/15",
                  valueText: "text-[#1A2660]",
                  frameBg: "bg-[#E6E8F6]"
                },
                "#E57345": {
                  headerBg: "bg-[#E57345]",
                  dotBg: "bg-[#FAD0C0]",
                  statBg: "bg-[#fdf6f4]",
                  border: "border-[#E57345]/18",
                  statBorderL: "border-l border-[#E57345]/15",
                  valueText: "text-[#7C361B]",
                  frameBg: "bg-[#FCECE6]"
                },
                "#E8BD63": {
                  headerBg: "bg-[#E8BD63]",
                  dotBg: "bg-[#FCF0D3]",
                  statBg: "bg-[#fdfbf6]",
                  border: "border-[#E8BD63]/18",
                  statBorderL: "border-l border-[#E8BD63]/15",
                  valueText: "text-[#7A5B15]",
                  frameBg: "bg-[#FAF6EC]"
                },
                "#A59381": {
                  headerBg: "bg-[#A59381]",
                  dotBg: "bg-[#F0EBE6]",
                  statBg: "bg-[#fafaf9]",
                  border: "border-[#A59381]/18",
                  statBorderL: "border-l border-[#A59381]/15",
                  valueText: "text-[#52463A]",
                  frameBg: "bg-[#F5EEEC]"
                },
                "#3EA644": {
                  headerBg: "bg-[#3EA644]",
                  dotBg: "bg-[#CBECCB]",
                  statBg: "bg-[#f5fbf5]",
                  border: "border-[#3EA644]/18",
                  statBorderL: "border-l border-[#3EA644]/15",
                  valueText: "text-[#1C5E20]",
                  frameBg: "bg-[#E8F6E8]"
                },
                "#C41E3A": {
                  headerBg: "bg-[#C41E3A]",
                  dotBg: "bg-[#F9CFD5]",
                  statBg: "bg-[#fdf4f5]",
                  border: "border-[#C41E3A]/18",
                  statBorderL: "border-l border-[#C41E3A]/15",
                  valueText: "text-[#6A0C1B]",
                  frameBg: "bg-[#FCEAEB]"
                }
              }[branch.color] || {
                headerBg: "bg-[#639922]",
                dotBg: "bg-[#C0DD97]",
                statBg: "bg-[#f9fdf4]",
                border: "border-[#639922]/18",
                statBorderL: "border-l border-[#639922]/15",
                valueText: "text-[#27500A]",
                frameBg: "bg-[#EAF3DE]"
              };

              // Split branch name into two parts for department formatting
              const nameWords = branch.name.split(" ");
              let firstPart = branch.name;
              let secondPart = "";
              if (nameWords.length > 2) {
                firstPart = nameWords.slice(0, 2).join(" ");
                secondPart = nameWords.slice(2).join(" ");
              }

              return (
                <Tilt3D 
                  key={branch.id} 
                  intensity={6} 
                  scale={1.015} 
                  className="w-[340px] md:w-[360px] flex-shrink-0"
                >
                  {/* card-frame */}
                  <div className={`p-8 ${colors.frameBg} rounded-[24px] flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 h-[380px]`}>
                    
                    {/* card */}
                    <div className={`w-full bg-white rounded-[20px] border ${colors.border} overflow-hidden h-full flex flex-col justify-between`}>
                      
                      {/* card-header */}
                      <div className={`p-6 ${colors.headerBg} transition-colors duration-500 flex-1 flex flex-col justify-between pb-5`}>
                        
                        {/* card-top-row */}
                        <div className="flex items-start justify-between mb-4">
                          {/* icon-box */}
                          <div className="w-10 h-10 rounded-[10px] bg-white/[0.18] flex items-center justify-center">
                            <Icon size={18} className="text-white" />
                          </div>
                          
                          {/* placement-badge */}
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.18]">
                            <div className={`w-1.5 h-1.5 rounded-full ${colors.dotBg} animate-pulse`} />
                            <span className="text-[12px] font-bold text-white whitespace-nowrap">{branch.rate}% placed</span>
                          </div>
                        </div>

                        <div>
                          <p className="text-[11px] text-white/60 uppercase tracking-[0.07em] mb-1 font-semibold">Department</p>
                          <h3 className="text-[22px] font-bold text-white leading-[1.25] tracking-tight">
                            {firstPart}
                            {secondPart && <><br />{secondPart}</>}
                          </h3>
                        </div>
                      </div>

                      {/* card-stats */}
                      <div className="grid grid-cols-2 flex-shrink-0">
                        {/* stat 1 */}
                        <div className={`p-5 ${colors.statBg} flex flex-col justify-between h-[96px]`}>
                          <p className="text-[11px] text-[#5F5E5A] uppercase tracking-[0.06em] mb-1.5 font-bold">Offers secured</p>
                          <p className={`text-[28px] font-bold ${colors.valueText} leading-none`}>
                            <GSAPCounter end={branch.placements} />
                          </p>
                        </div>
                        
                        {/* stat 2 */}
                        <div className={`p-5 ${colors.statBg} ${colors.statBorderL} flex flex-col justify-between h-[96px]`}>
                          <p className="text-[11px] text-[#5F5E5A] uppercase tracking-[0.06em] mb-1.5 font-bold">Highest package</p>
                          <div className="flex items-baseline gap-[3px]">
                            <p className="text-[28px] font-bold text-[#BA7517] leading-none">{branch.highest}</p>
                            <span className="text-[12px] text-[#888780] font-bold">LPA</span>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                </Tilt3D>
              );
            })}
          </div>
        </HorizontalScroll>

      </div>
    </section>
  );
}
