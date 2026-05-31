import { FileText, BookOpen, Target, Zap, Users, Shield, Star, Calendar, Award, CheckSquare, Sparkles } from "lucide-react";
import { FadeInUp } from "../utils/animations";

const timelineSteps = [
  { 
    title: "Registration", 
    category: "Profile Setup & Resume Locker",
    desc: "Students register with the Training & Placement Cell, upload verified resumes, and lock their domain preferences.", 
    icon: FileText, 
    color: "#2C3A8C", 
    accent: "#2C3A8C",
    focus: ["Resume Portal", "Profile Lock", "Data Audits"],
    duration: "Week 01",
    scope: "Profile Setup & Resume Locker",
    verification: "Mandatory Placement Lock",
    img: "/students/indian_student_1_1778130161046.png",
    morph: "morph-registration",
    float: "float-slow"
  },
  { 
    title: "Training Model", 
    category: "DS & Algo, Soft Skills, Mock PI",
    desc: "Rigorous bootcamps covering data structures, competitive coding, mock interviews, and corporate communication skills.", 
    icon: BookOpen, 
    color: "#E57345", 
    accent: "#E57345",
    focus: ["Aptitude Prep", "Mock GDs", "Coding Drills"],
    duration: "Weeks 02-06",
    scope: "DS & Algo, Soft Skills, Mock PI",
    verification: "Min 75% Bootcamp Attendance",
    img: "/students/indian_student_2_1778130283397.png",
    morph: "morph-training",
    float: "float-medium"
  },
  { 
    title: "Shortlisting", 
    category: "Database Extraction & Matching",
    desc: "Recruiter Job Descriptions (JDs) are broadcasted, and eligible candidates are filtered based on CGPA and prerequisites.", 
    icon: Target, 
    color: "#3EA644", 
    accent: "#3EA644",
    focus: ["JD Broadcasts", "GPA Filters", "Eligible Lists"],
    duration: "Week 07",
    scope: "Database Extraction & Matching",
    verification: "Verified CGPA Database Match",
    img: "/students/indian_student_3_1778130319360.png",
    morph: "morph-shortlisting",
    float: "float-fast"
  },
  { 
    title: "Assessments", 
    category: "Online Lab Exams & Proctoring",
    desc: "High-volume cognitive, domain-specific, and competitive coding tests conducted online and in campus labs.", 
    icon: Zap, 
    color: "#C41E3A", 
    accent: "#C41E3A",
    focus: ["Domain MCQ", "Coding Hackathons", "Cognitive Tests"],
    duration: "Week 08",
    scope: "Online Lab Exams & Proctoring",
    verification: "Recruiter-Approved Test Portals",
    img: "/students/indian_student_4_1778130334314.png",
    morph: "morph-assessment",
    float: "float-slow"
  },
  { 
    title: "Group Dynamics", 
    category: "Team Debates & Case Analysis",
    desc: "Structured team case analysis evaluating collaboration, critical thinking, and situational leadership in dedicated GD Halls.", 
    icon: Users, 
    color: "#8E24AA", 
    accent: "#8E24AA",
    focus: ["Case Studies", "Current Affairs", "Team Audits"],
    duration: "Week 09",
    scope: "Team Debates & Case Analysis",
    verification: "Faculty Panel Evaluation",
    img: "/images/GD-Halls.jpg",
    morph: "morph-gd",
    float: "float-medium"
  },
  { 
    title: "Tech Interviews", 
    category: "Technical Panels & Coding Boards",
    desc: "Multi-tier engineering panels evaluating coding algorithms, system architecture, and student project portfolios.", 
    icon: Shield, 
    color: "#A59381", 
    accent: "#A59381",
    focus: ["DS & Algo", "System Design", "Project Defense"],
    duration: "Week 10",
    scope: "Technical Panels & Coding Boards",
    verification: "Industry Expert Evaluation",
    img: "/students/indian_student_5_1778130608230.png",
    morph: "morph-interview",
    float: "float-fast"
  },
  { 
    title: "HR & Offer Release", 
    category: "Onboarding Briefing & Signing",
    desc: "Cultural fit assessments followed by formal salary negotiations and release of official corporate onboarding letters.", 
    icon: Star, 
    color: "#006738", 
    accent: "#006738",
    focus: ["Culture Check", "Salary Terms", "Letter Release"],
    duration: "Weeks 11-12",
    scope: "Onboarding Briefing & Signing",
    verification: "Verified Corporate Offer Letter",
    img: "/students/indian_student_6_1778130646714.png",
    morph: "morph-hr",
    float: "float-slow"
  },
];

export default function PlacementProcess() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden z-30 bg-[#FEF5D9]">
      <style>{`
        @keyframes morph-registration {
          0% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
          33% { border-radius: 70% 30% 52% 48% / 60% 40% 60% 40%; }
          66% { border-radius: 50% 50% 30% 70% / 40% 60% 30% 70%; }
          100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
        }

        @keyframes morph-training {
          0% { border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%; }
          33% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
          66% { border-radius: 70% 30% 52% 48% / 60% 40% 60% 40%; }
          100% { border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%; }
        }

        @keyframes morph-shortlisting {
          0% { border-radius: 70% 30% 52% 48% / 60% 40% 60% 40%; }
          33% { border-radius: 50% 50% 30% 70% / 40% 60% 30% 70%; }
          66% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
          100% { border-radius: 70% 30% 52% 48% / 60% 40% 60% 40%; }
        }

        @keyframes morph-assessment {
          0% { border-radius: 40% 60% 50% 50% / 40% 40% 60% 60%; }
          33% { border-radius: 60% 40% 60% 40% / 50% 50% 50% 50%; }
          66% { border-radius: 45% 55% 40% 60% / 40% 60% 40% 60%; }
          100% { border-radius: 40% 60% 50% 50% / 40% 40% 60% 60%; }
        }

        @keyframes morph-gd {
          0% { border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%; }
          33% { border-radius: 40% 60% 70% 30% / 50% 50% 40% 60%; }
          66% { border-radius: 65% 35% 50% 50% / 40% 60% 50% 50%; }
          100% { border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%; }
        }

        @keyframes morph-interview {
          0% { border-radius: 45% 55% 70% 30% / 50% 45% 55% 50%; }
          33% { border-radius: 70% 30% 50% 50% / 60% 40% 60% 40%; }
          66% { border-radius: 50% 50% 35% 65% / 40% 60% 35% 65%; }
          100% { border-radius: 45% 55% 70% 30% / 50% 45% 55% 50%; }
        }

        @keyframes morph-hr {
          0% { border-radius: 60% 40% 55% 45% / 50% 55% 45% 50%; }
          33% { border-radius: 45% 55% 65% 35% / 60% 40% 60% 40%; }
          66% { border-radius: 55% 45% 40% 60% / 45% 60% 40% 55%; }
          100% { border-radius: 60% 40% 55% 45% / 50% 55% 45% 50%; }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }

        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(14px) rotate(-3deg); }
        }

        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1.5deg); }
        }

        .fluid-line-path {
          stroke-dasharray: 12 12;
          animation: fluidDash 35s linear infinite;
        }

        @keyframes fluidDash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>

      {/* Dynamic drifting background ambient glow blobs */}
      <div className="absolute top-[10%] left-[5%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-[#2C3A8C]/6 blur-[90px] pointer-events-none z-0" />
      <div className="absolute top-[45%] right-[5%] w-[350px] md:w-[450px] h-[350px] md:h-[450px] rounded-full bg-[#E57345]/5 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[10%] w-[320px] md:w-[420px] h-[320px] md:h-[420px] rounded-full bg-[#3EA644]/6 blur-[95px] pointer-events-none z-0" />

      {/* Decorative Wavy tech-dash line behind rows on desktop */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full min-h-[2200px]" viewBox="0 0 1200 2300" preserveAspectRatio="none" fill="none">
          <path
            d="M 300,100 C 300,300 900,200 900,500 C 900,800 300,700 300,1000 C 300,1300 900,1200 900,1500 C 900,1800 300,1700 300,2000 C 300,2300 900,2200 900,2250"
            stroke="url(#fluid-grad)"
            strokeWidth="3"
            className="fluid-line-path"
          />
          <defs>
            <linearGradient id="fluid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2C3A8C" stopOpacity="0.3" />
              <stop offset="33%" stopColor="#E57345" stopOpacity="0.3" />
              <stop offset="66%" stopColor="#3EA644" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C41E3A" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Title Area */}
        <div className="text-center mb-16 md:mb-20">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A2660]/5 border border-[#1A2660]/10 mb-6">
              <Sparkles size={14} className="text-[#E8BD63] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A2660]">
                Onboarding Flow
              </span>
            </div>
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2660] mb-4">
              Placement <span className="italic font-light text-[#A59381] font-serif">Process.</span>
            </h2>
            <p className="text-[#3E3A36]/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Our structured corporate recruitment roadmap ensuring absolute compliance, training readiness, and verified candidate placements.
            </p>
          </FadeInUp>
        </div>

        {/* Asymmetric Morphing-Blob Flow Layout */}
        <div className="space-y-12 md:space-y-16 max-w-4xl mx-auto">
          {timelineSteps.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = item.icon;

            return (
              <div 
                key={item.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                
                {/* 1. IMAGE BLOB CONTAINER COLUMN */}
                <div className={`lg:col-span-5 flex justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <FadeInUp delay={idx * 100}>
                    <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-68 lg:h-68 group cursor-pointer">
                      
                      {/* Interactive Colored Ambient Halo Behind Blob */}
                      <div
                        className="absolute inset-0 blur-xl opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                        style={{
                          background: `linear-gradient(135deg, ${item.accent}, ${item.accent}cc)`,
                          animation: `${item.morph} 10s ease-in-out infinite, ${item.float} 8s ease-in-out infinite`
                        }}
                      />

                      {/* Morphing Image Canvas Overlay */}
                      <div
                        className="absolute inset-0 overflow-hidden border border-white/60 shadow-[0_20px_50px_rgba(26,38,96,0.06)] transition-all duration-700 group-hover:scale-[1.02] bg-[#1A2660]"
                        style={{
                          animation: `${item.morph} 10s ease-in-out infinite, ${item.float} 8s ease-in-out infinite`
                        }}
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
                        />
                        {/* Elegant brand overlay on hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-overlay"
                          style={{ backgroundColor: item.accent }}
                        />
                      </div>

                      {/* Interactive Floating Circular Info Badge */}
                      <div 
                        className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-14 h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 z-20 text-white"
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: `0 10px 25px -5px ${item.color}45`
                        }}
                      >
                        <Icon size={18} className="mb-0.5" />
                        <span className="text-[8px] font-bold uppercase tracking-wider">{item.duration}</span>
                      </div>

                    </div>
                  </FadeInUp>
                </div>

                {/* 2. GLASS CONTENT CARD COLUMN */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <FadeInUp delay={idx * 100 + 50}>
                    <div className="bg-white/50 backdrop-blur-xl border border-white/70 p-6 md:p-8 rounded-[1.8rem] md:rounded-[2.2rem] shadow-[0_24px_50px_rgba(26,38,96,0.03)] relative z-10 hover:shadow-[0_32px_60px_rgba(26,38,96,0.06)] transition-all duration-500 hover:bg-white/60 hover:-translate-y-1 group">
                      
                      {/* Step Indicator Header label */}
                      <div className="flex items-center gap-3 mb-4">
                        <span 
                          className="px-3 py-1 rounded-xl text-white font-mono text-[10px] font-black tracking-widest shadow-sm"
                          style={{ backgroundColor: item.color }}
                        >
                          STEP {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#3E3A36]/40">
                          {item.category}
                        </span>
                      </div>

                      {/* Serif Heading */}
                      <h3 className="serif text-2xl md:text-3xl font-extrabold text-[#1A2660] leading-none mb-4">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#3E3A36]/75 text-sm md:text-base font-light leading-relaxed mb-6">
                        {item.desc}
                      </p>

                      <div className="h-px bg-[#1A2660]/10 w-full mb-6" />

                      {/* Operational stats row */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mt-0.5 shadow-sm">
                            <Calendar size={13} />
                          </div>
                          <div>
                            <span className="text-[8px] font-extrabold uppercase tracking-widest text-[#A59381] block">Process Duration</span>
                            <span className="text-[#3E3A36] text-[12px] font-extrabold">{item.duration}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mt-0.5 shadow-sm">
                            <Award size={13} />
                          </div>
                          <div>
                            <span className="text-[8px] font-extrabold uppercase tracking-widest text-[#A59381] block">Operational Scope</span>
                            <span className="text-[#3E3A36] text-[12px] font-extrabold">{item.scope}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mt-0.5 shadow-sm">
                            <CheckSquare size={13} />
                          </div>
                          <div>
                            <span className="text-[8px] font-extrabold uppercase tracking-widest text-[#A59381] block">Compliance Standard</span>
                            <span className="text-[12px] font-extrabold" style={{ color: item.color }}>{item.verification}</span>
                          </div>
                        </div>

                      </div>

                      {/* Key focus area pills */}
                      <div>
                        <span className="text-[8px] font-extrabold uppercase tracking-widest text-[#A59381] block mb-2.5">Key Focus Areas</span>
                        <div className="flex flex-wrap gap-2">
                          {item.focus.map((focusItem) => (
                            <span 
                              key={focusItem}
                              className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] font-bold text-[#3E3A36]/80 hover:border-[#1A2660]/20 hover:bg-white transition-all duration-300 cursor-default shadow-sm"
                            >
                              {focusItem}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </FadeInUp>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
