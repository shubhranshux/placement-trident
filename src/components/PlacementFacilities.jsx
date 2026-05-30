import { FadeInUp } from "../utils/animations";

const facilities = [
  { value: "500", label: "AC Auditorium Capacity" },
  { value: "2 × 150", label: "Exam Halls for Written Tests" },
  { value: "4 AC", label: "Group Discussion Rooms" },
  { value: "6 AC", label: "Interview Cabins" },
  { value: "1 Gbps", label: "Online Test Connectivity" },
];

export default function PlacementFacilities() {
  return (
    <section className="relative py-24 lg:py-40 bg-[#111827] overflow-hidden z-0">
      
      {/* Background 5: Futuristic Hex Grid & Dark Glowing Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Hexagon SVG Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='103.92304845413263' viewBox='0 0 60 103.92304845413263' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 103.92304845413263L0 86.60254037844388L0 51.96152422706631L30 34.64101615137755L60 51.96152422706631L60 86.60254037844388Z' fill='none' stroke='%23FFFFFF' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: "40px 69.28px"
          }}
        />

        {/* Deep Ambient Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#E8BD63]/[0.05] to-transparent blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-[#2C3A8C]/[0.08] to-transparent blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <FadeInUp>
            <h2 className="serif text-5xl md:text-7xl font-light text-white mb-8 tracking-wide">
              World-Class <span className="italic font-serif text-[#E8BD63]">Facilities</span>
            </h2>
            <p className="text-white/50 text-xl font-light leading-relaxed max-w-3xl mx-auto">
              Located at Chandaka Industrial Estate in front of Odisha's Infocity, our campus houses state-of-the-art labs, an auditorium, smart classrooms, and dedicated placement infrastructure.
            </p>
          </FadeInUp>
        </div>

        {/* Cinematic Immersive Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-32 h-auto md:h-[600px]">
          {/* Main Large Auditorium Image */}
          <FadeInUp className="w-full h-[400px] md:h-full relative overflow-hidden rounded-l-3xl rounded-r-none group">
            <div className="absolute inset-0 bg-[#111827]/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
            <img src="/images/audi.jpg" alt="Auditorium" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          </FadeInUp>
          
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
            <FadeInUp delay={100} className="w-full h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#111827]/30 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <img src="/images/GD-Halls.jpg" alt="Group Discussion" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </FadeInUp>
            <FadeInUp delay={200} className="w-full h-full relative overflow-hidden rounded-tr-3xl group">
              <div className="absolute inset-0 bg-[#111827]/30 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <img src="/images/accabins.jpg" alt="Interview Cabin" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </FadeInUp>
            <FadeInUp delay={300} className="w-full h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#111827]/30 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <img src="/images/IMG_5229.jpg" alt="Computer Lab" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </FadeInUp>
            <FadeInUp delay={400} className="w-full h-full relative overflow-hidden rounded-br-3xl group">
              <div className="absolute inset-0 bg-[#111827]/30 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <img src="/images/IMG_5287.jpg" alt="Campus Exterior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </FadeInUp>
          </div>
        </div>

        {/* Immersive Overlay Stats (No Cards) */}
        <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
          {facilities.map((fac, i) => (
            <FadeInUp key={fac.label} delay={200 + i * 100} className="text-center group">
              <div className="serif text-5xl md:text-6xl font-light text-white mb-2 group-hover:text-[#E8BD63] transition-colors">{fac.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">{fac.label}</div>
            </FadeInUp>
          ))}
        </div>

      </div>
    </section>
  );
}
