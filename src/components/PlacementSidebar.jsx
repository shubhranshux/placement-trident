import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp } from "../utils/animations";
import { Building2, BookOpen, UserCheck, TrendingUp, MessageSquare, FileText, Phone, Mail, GraduationCap, ArrowRight, Quote, BarChart3, Monitor } from "lucide-react";

const sidebarLinks = [
  { id: "department", label: "The Department", icon: Building2 },
  { id: "infrastructure", label: "Placement Infrastructure", icon: BookOpen },
  { id: "mentoring", label: "Alumni Mentoring", icon: UserCheck },
  { id: "statistics", label: "Placement Statistics", icon: TrendingUp },
  { id: "recruiters", label: "Recruiters Speak", icon: MessageSquare },
  { id: "notices", label: "Placement Notices", icon: FileText },
];

const recruiterTestimonials = [
  { name: "Anirban Mukherjee", role: "VP Engineering, TCS", quote: "Trident students consistently demonstrate strong fundamentals and adaptability. They integrate seamlessly into our project teams from day one." },
  { name: "Atul Srivastava", role: "Campus Lead, Infosys", quote: "The quality of talent at TAT has improved year over year. Their pre-placement training program is one of the best we've seen." },
  { name: "D.P. Das", role: "HR Director, Wipro", quote: "We've been recruiting from Trident for over 8 years. The placement cell's professionalism makes our campus drives smooth and efficient." },
];

export default function PlacementSidebar() {
  const [activeSection, setActiveSection] = useState("department");

  return (
    <section className="py-24 lg:py-36 relative overflow-hidden">
      {/* Background 2: Plus Grid & Soft Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-tr from-[#F3E5F5] via-[#E8DAEF] to-[#F5EEF8]">
        
        {/* Plus (+) Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at center, #1A2660 0.5px, transparent 0.5px), radial-gradient(circle at center, #1A2660 0.5px, transparent 0.5px)`,
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 20px 20px"
          }}
        />

        {/* Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#A5C5E8]/30 to-[#D4E4F6]/10 blur-[30px]" />
        <div className="absolute top-[20%] right-[-5%] w-[45%] h-[45%] rounded-full bg-gradient-to-br from-[#E2D4F0]/40 to-[#F2EBF9]/10 blur-[20px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#FCDED7]/40 to-[#FFF0EC]/10 blur-[25px]" />
        <div className="absolute top-[35%] left-[25%] w-[35%] h-[35%] rounded-full bg-gradient-to-br from-[#D9E6F6]/30 to-transparent blur-[40px]" />

        {/* Subtle Geometric Watermark */}
        <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-30">
          <polygon points="100,100 200,50 300,100 200,150" fill="none" stroke="#1A2660" strokeWidth="0.5" />
          <polygon points="1100,800 1200,750 1300,800 1200,850" fill="none" stroke="#1A2660" strokeWidth="0.5" />
          <polygon points="500,400 600,350 700,400 600,450" fill="none" stroke="#1A2660" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Sticky Sidebar */}
          <div className="lg:col-span-3">
            <FadeInUp>
              <div className="lg:sticky lg:top-32 space-y-10">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#A59381] block mb-2">Navigation</span>
                  <h3 className="serif text-2xl font-bold text-[#3E3A36] tracking-tight">Placement Guide</h3>
                </div>

                <nav className="flex flex-col gap-2.5">
                  {sidebarLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = activeSection === link.id;
                    return (
                      <button
                        key={link.id}
                        onClick={() => setActiveSection(link.id)}
                        className={`group flex items-center gap-4 text-left py-4 px-5 transition-all duration-500 rounded-2xl relative ${
                          isActive
                            ? "bg-gradient-to-r from-[#1A2660] to-[#2C3A8C] text-white shadow-[0_12px_30px_rgba(26,38,96,0.18)] border border-[#E8BD63]/25 scale-[1.03] font-bold"
                            : "text-[#3E3A36]/70 hover:text-[#1A2660] hover:bg-white/60 hover:scale-[1.01] border border-transparent"
                        }`}
                      >
                        <Icon size={16} className={`transition-colors duration-500 ${isActive ? "text-[#E8BD63]" : "text-[#A59381] group-hover:text-[#1A2660]"}`} />
                        <span className="text-[14px] tracking-wide font-extrabold">{link.label}</span>
                        
                        {isActive && (
                          <motion.div 
                            layoutId="activeIndicator"
                            className="absolute right-4 w-1.5 h-1.5 rounded-full bg-[#E8BD63]"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </nav>

                {/* Quick Contact Box (Exquisite Glassmorphic Widget) */}
                <div className="p-7 bg-gradient-to-br from-[#1A2660] to-[#2C3A8C] rounded-3xl shadow-[0_20px_45px_rgba(26,38,96,0.22)] border border-[#E8BD63]/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8BD63]/5 rounded-full blur-[40px] group-hover:bg-[#E8BD63]/10 transition-all duration-700 pointer-events-none" />
                  <h4 className="text-[9px] font-extrabold uppercase tracking-[0.35em] text-[#E8BD63] mb-6">Training & Placement Cell</h4>
                  <div className="space-y-4 relative z-10">
                    <a href="tel:+919861191195" className="flex items-center gap-3.5 text-[13.5px] text-white/80 hover:text-[#E8BD63] transition-colors font-bold group/item">
                      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#E8BD63] group-hover/item:scale-110 transition-transform duration-500">
                        <Phone size={13} />
                      </div>
                      +91 98611 91195
                    </a>
                    <a href="mailto:placement@trident.ac.in" className="flex items-center gap-3.5 text-[13.5px] text-white/80 hover:text-[#E8BD63] transition-colors font-bold group/item">
                      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#E8BD63] group-hover/item:scale-110 transition-transform duration-500">
                        <Mail size={13} />
                      </div>
                      placement@trident.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9 lg:pl-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="min-h-[500px]"
              >
                {/* 1. Department */}
                {activeSection === "department" && (
                  <div className="space-y-10">
                    <div>
                      <div className="w-20 h-1 bg-gradient-to-r from-[#E8BD63] to-[#2C3A8C] mb-6 rounded-full" />
                      <h2 className="serif text-4xl sm:text-5xl md:text-6xl font-light text-[#3E3A36] leading-tight">
                        The <span className="italic font-bold text-[#2C3A8C] font-serif">Department</span>
                      </h2>
                    </div>

                    <div className="space-y-6 text-[#3E3A36]/75 text-lg leading-relaxed font-light">
                      <p>
                        The Training & Placement Cell at Trident Academy of Technology is a dedicated division focused on bridging the gap between academic excellence and professional success. Operating as a core pillar of the institution, the cell works year-round to equip students with the skills, confidence, and opportunities needed to thrive in today's competitive job market.
                      </p>
                      
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl my-10 group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2660]/30 to-transparent z-10" />
                        <img 
                          src="/src/assets/students.png" 
                          alt="Students celebrating" 
                          className="w-full h-[400px] object-cover transition-transform duration-[2000ms] group-hover:scale-[1.03]" 
                        />
                      </div>

                      <p>
                        Headed by industry veterans, the department manages strategic corporate alignments with over <strong className="text-[#3E3A36] font-bold">120+ leading recruiters</strong> across core engineering, global software, finance, and advanced technology sectors.
                      </p>

                      {/* Exquisite Mission Card */}
                      <div className="p-8 md:p-10 bg-gradient-to-br from-[#1A2660] to-[#2C3A8C] text-white rounded-3xl shadow-[0_20px_45px_-10px_rgba(26,38,96,0.3)] mt-12 relative overflow-hidden group">
                        <div className="absolute top-[-10%] right-[-10%] w-48 h-48 bg-[#E8BD63]/10 rounded-full blur-[60px] pointer-events-none" />
                        <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
                          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#E8BD63] flex-shrink-0 shadow-lg">
                            <GraduationCap size={28} />
                          </div>
                          <div>
                            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#E8BD63] mb-3">Department Mission</h4>
                            <p className="text-white/90 text-lg md:text-xl font-light italic leading-relaxed font-serif">
                              "To build industry-ready professionals through structured technical and soft-skill development, empowering mentorship networks, and deep corporate alignments — ensuring every graduate achieves their highest prospective career outcome."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Officers */}
                    <div className="pt-8">
                      <h3 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#A59381] mb-6">Key Officers</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          { name: "Prof. D.P. Samantarai", role: "Training & Placement Officer", desc: "25+ years in academia & industry linkage" },
                          { name: "Prof. P.U. Jacob", role: "Asst. Placement Coordinator", desc: "Corporate relations & student mentoring" },
                        ].map((officer) => (
                          <div key={officer.name} className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-[#EFE7DF] hover:border-[#2C3A8C]/20 hover:shadow-xl transition-all duration-500 group">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1A2660] to-[#2C3A8C] flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                              {officer.name.split(" ").pop()[0]}
                            </div>
                            <div>
                              <h4 className="font-extrabold text-[#3E3A36] text-[16px]">{officer.name}</h4>
                              <p className="text-[#2C3A8C] text-xs font-extrabold tracking-wider uppercase mt-0.5">{officer.role}</p>
                              <p className="text-[#3E3A36]/55 text-sm mt-2 leading-relaxed">{officer.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Infrastructure */}
                {activeSection === "infrastructure" && (
                  <div className="space-y-10">
                    <div>
                      <div className="w-20 h-1 bg-gradient-to-r from-[#E8BD63] to-[#2C3A8C] mb-6 rounded-full" />
                      <h2 className="serif text-4xl sm:text-5xl md:text-6xl font-light text-[#3E3A36] leading-tight">
                        Placement <span className="italic font-bold text-[#2C3A8C] font-serif">Infrastructure</span>
                      </h2>
                    </div>

                    <p className="text-[#3E3A36]/75 text-lg font-light leading-relaxed">
                      Our world-class recruitment facilities provide an impeccable environment for corporate selection teams, supporting high-volume drives, multi-step interviews, and digital certifications seamlessly.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      {[
                        { title: "Interview Chambers", desc: "6 fully air-conditioned, soundproofed interview suites with dual fiber-backed videoconferencing setups.", icon: Building2 },
                        { title: "GD Hall", desc: "Dedicated group discussion lounge configured for 30+ candidates with active observation desks.", icon: MessageSquare },
                        { title: "Presentation Hall", desc: "200-seat digital auditorium with projection systems and acoustic tuning for pre-placement talks.", icon: BarChart3 },
                        { title: "Computer Lab", desc: "150+ high-end workstations with dedicated high-speed internet portals for online coding tests.", icon: Monitor },
                      ].map((facility) => {
                        const FacilityIcon = facility.icon;
                        return (
                        <div key={facility.title} className="p-8 bg-white rounded-3xl border border-[#EFE7DF] relative overflow-hidden group hover:border-[#E8BD63]/40 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-500">
                          <div className="absolute top-0 right-0 w-28 h-28 bg-[#E8BD63]/5 rounded-full blur-[35px] group-hover:bg-[#E8BD63]/10 transition-all duration-500" />
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1A2660] to-[#2C3A8C] flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500">
                            <FacilityIcon size={22} className="text-[#E8BD63]" />
                          </div>
                          <h4 className="font-extrabold text-[#3E3A36] text-lg mb-2">{facility.title}</h4>
                          <p className="text-[#3E3A36]/60 text-[14.5px] leading-relaxed font-light">{facility.desc}</p>
                        </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 3. Alumni Mentoring */}
                {activeSection === "mentoring" && (
                  <div className="space-y-10">
                    <div>
                      <div className="w-20 h-1 bg-gradient-to-r from-[#E8BD63] to-[#2C3A8C] mb-6 rounded-full" />
                      <h2 className="serif text-5xl md:text-6xl font-light text-[#3E3A36] leading-tight">
                        Alumni <span className="italic font-bold text-[#2C3A8C] font-serif">Mentoring</span>
                      </h2>
                    </div>

                    <p className="text-[#3E3A36]/75 text-lg font-light leading-relaxed">
                      Our rich global alumni base of <strong className="text-[#3E3A36] font-bold">5,000+ professionals</strong> guides TAT students through portfolio reviews, technical mentorships, and corporate interview prep.
                    </p>

                    <div className="space-y-6 mt-8">
                      {[
                        { name: "Arpita Nayak", company: "Amazon", batch: "CSE '21", quote: "The mentoring sessions gave me absolute clarity on what top-tier tech companies expect. My mentor guided me through rigorous DSA prep and mock technical loops." },
                        { name: "Akash Bhoi", company: "TCS Digital", batch: "ETC '22", quote: "Having an alumnus mentor who had navigated the exact same placement pipeline was invaluable. They helped me focus on what truly matters in interviews." },
                        { name: "Pragati Behera", company: "Infosys", batch: "CSE '23", quote: "The alumni loop matched me with a senior who thoroughly reviewed my project portfolio and polished my situational/behavioral communication." },
                      ].map((alumni, i) => (
                        <div key={alumni.name} className="p-8 md:p-10 bg-white rounded-3xl border border-[#EFE7DF] shadow-[0_15px_35px_rgba(26,38,96,0.03)] hover:border-[#1A2660]/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                          {/* Top-right glowing decoration */}
                          <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8BD63]/5 rounded-full blur-[30px] group-hover:bg-[#E8BD63]/10 transition-all duration-500 pointer-events-none" />
                          <Quote className="absolute top-6 right-8 text-[#E8BD63]/15 w-16 h-16 pointer-events-none" strokeWidth={1} />
                          
                          <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                            {/* Avatar */}
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1A2660] to-[#E8BD63] flex items-center justify-center text-white font-serif font-bold text-xl flex-shrink-0 shadow-md">
                              {alumni.name[0]}
                            </div>
                            
                            <div className="space-y-4 flex-1">
                              <p className="text-[#3E3A36]/80 text-[17px] italic leading-relaxed font-serif">
                                "{alumni.quote}"
                              </p>
                              
                              <div className="flex flex-wrap items-center gap-3 pt-2">
                                <span className="font-extrabold text-[#3E3A36] text-[15px]">{alumni.name}</span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#1A2660]/5 text-[#1A2660] border border-[#1A2660]/10">
                                  @ {alumni.company}
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-[#A59381]/10 text-[#A59381]">
                                  {alumni.batch}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Statistics */}
                {activeSection === "statistics" && (
                  <div className="space-y-10">
                    <div>
                      <div className="w-20 h-1 bg-gradient-to-r from-[#E8BD63] to-[#2C3A8C] mb-6 rounded-full" />
                      <h2 className="serif text-5xl md:text-6xl font-light text-[#3E3A36] leading-tight">
                        Placement <span className="italic font-bold text-[#2C3A8C] font-serif">Statistics</span>
                      </h2>
                    </div>

                    <p className="text-[#3E3A36]/75 text-lg font-light leading-relaxed">
                      Our institutional performance across past batch cycles details steady career placements and higher study selections year-on-year.
                    </p>

                    {/* Exquisite Dashboard Table */}
                    <div className="overflow-hidden rounded-3xl border border-[#EFE7DF] bg-white shadow-[0_20px_45px_rgba(26,38,96,0.04)]">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-gradient-to-r from-[#1A2660] to-[#2C3A8C] text-white">
                              <th className="text-left py-5 px-6 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#E8BD63]">Batch Year</th>
                              <th className="text-left py-5 px-6 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/90">Enrolled</th>
                              <th className="text-left py-5 px-6 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/90">Placed</th>
                              <th className="text-left py-5 px-6 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/90">Higher Ed</th>
                              <th className="text-left py-5 px-6 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/90">Outcome</th>
                              <th className="text-left py-5 px-6 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#E8BD63]">Outcome %</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { year: "2019-20", total: 744, placed: 504, studies: 23, outcome: 527, percent: "70.8%", isGreen: false },
                              { year: "2020-21", total: 671, placed: 486, studies: 20, outcome: 506, percent: "75.4%", isGreen: false },
                              { year: "2021-22", total: 559, placed: 410, studies: 27, outcome: 437, percent: "78.1%", isGreen: false },
                              { year: "2022-23", total: 586, placed: 455, studies: 32, outcome: 487, percent: "83.1%", isGreen: true },
                              { year: "2023-24", total: 569, placed: 398, studies: 44, outcome: 442, percent: "77.6%", isGreen: false },
                            ].map((row) => (
                              <tr key={row.year} className="border-t border-[#F0EBE6] hover:bg-[#1A2660]/5 transition-colors duration-300">
                                <td className="py-5 px-6 font-extrabold text-[#2C3A8C] text-[15px]">{row.year}</td>
                                <td className="py-5 px-6 font-semibold text-[#3E3A36]/80">{row.total}</td>
                                <td className="py-5 px-6 font-semibold text-[#3E3A36]/80">{row.placed}</td>
                                <td className="py-5 px-6 font-semibold text-[#3E3A36]/80">{row.studies}</td>
                                <td className="py-5 px-6 font-semibold text-[#3E3A36]/80">{row.outcome}</td>
                                <td className="py-5 px-6">
                                  <span className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wide ${
                                    row.isGreen 
                                      ? "bg-[#E6F4EA] text-[#1E8E3E]" 
                                      : "bg-[#E8F0FE] text-[#1A73E8]"
                                  }`}>
                                    {row.percent}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. Recruiters */}
                {activeSection === "recruiters" && (
                  <div className="space-y-10">
                    <div>
                      <div className="w-20 h-1 bg-gradient-to-r from-[#E8BD63] to-[#2C3A8C] mb-6 rounded-full" />
                      <h2 className="serif text-5xl md:text-6xl font-light text-[#3E3A36] leading-tight">
                        Recruiters <span className="italic font-bold text-[#2C3A8C] font-serif">Speak</span>
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {recruiterTestimonials.map((rec, i) => (
                        <div key={rec.name} className="relative p-10 bg-white rounded-3xl border border-[#EFE7DF] shadow-[0_15px_35px_rgba(26,38,96,0.03)] flex flex-col md:flex-row items-center gap-8 group hover:border-[#1A2660]/20 hover:shadow-2xl transition-all duration-500">
                          {/* Glowing effect inside card */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-[#2C3A8C]/5 rounded-full blur-[40px] pointer-events-none" />
                          <Quote className="absolute top-6 right-8 text-[#E8BD63]/10 w-24 h-24 pointer-events-none" strokeWidth={1} />
                          
                          {i === 0 && (
                            <div className="relative flex-shrink-0">
                              <div className="absolute inset-0 bg-[#E8BD63] rounded-full scale-105 blur-[8px] opacity-25 group-hover:opacity-40 transition-opacity" />
                              <img src="/src/assets/recruiter.png" alt={rec.name} className="relative w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white" />
                            </div>
                          )}
                          
                          <div className="flex-1">
                            <p className="text-[#3E3A36]/85 text-[18px] italic leading-relaxed mb-6 font-serif relative z-10">
                              "{rec.quote}"
                            </p>
                            
                            <div className="flex items-center gap-4 relative z-10">
                              {i !== 0 && (
                                <div className="w-12 h-12 rounded-xl bg-[#2C3A8C]/10 flex items-center justify-center text-[#2C3A8C] font-bold text-lg">
                                  {rec.name[0]}
                                </div>
                              )}
                              <div>
                                <h4 className="font-extrabold text-[#3E3A36] text-[16px]">{rec.name}</h4>
                                <p className="text-[#2C3A8C] text-xs font-extrabold tracking-wider uppercase">{rec.role}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 6. Notices */}
                {activeSection === "notices" && (
                  <div className="space-y-10">
                    <div>
                      <div className="w-20 h-1 bg-gradient-to-r from-[#E8BD63] to-[#2C3A8C] mb-6 rounded-full" />
                      <h2 className="serif text-5xl md:text-6xl font-light text-[#3E3A36] leading-tight">
                        Placement <span className="italic font-bold text-[#2C3A8C] font-serif">Notices</span>
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {[
                        { date: "May 28, 2026", title: "TCS NQT Registration — Final Year Students", tag: "Urgent", tagColor: "#C41E3A" },
                        { date: "May 25, 2026", title: "Infosys InfyTQ Certification Results Announced", tag: "Result", tagColor: "#3EA644" },
                        { date: "May 22, 2026", title: "Campus Drive: Wipro — 30th May 2026", tag: "Drive", tagColor: "#2C3A8C" },
                        { date: "May 20, 2026", title: "Pre-Placement Talk: Capgemini — All Branches", tag: "PPT", tagColor: "#E57345" },
                        { date: "May 18, 2026", title: "Mock Interview Schedule — Week 4", tag: "Training", tagColor: "#8B6914" },
                        { date: "May 15, 2026", title: "Resume Submission Deadline Extended to May 20", tag: "Notice", tagColor: "#6B7280" },
                      ].map((notice) => (
                        <a 
                          key={notice.title} 
                          href="#" 
                          className="flex items-center gap-6 p-5 bg-white rounded-2xl border border-[#EFE7DF] hover:border-[#2C3A8C]/20 group transition-all duration-500 hover:shadow-[0_15px_30px_rgba(26,38,96,0.06)] hover:scale-[1.005]"
                        >
                          {/* Calendar block */}
                          <div className="bg-[#1A2660]/5 rounded-2xl w-20 h-20 flex flex-col items-center justify-center flex-shrink-0 border border-[#1A2660]/10 transition-colors group-hover:bg-[#1A2660]/10">
                            <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#A59381]">{notice.date.split(" ")[0]}</div>
                            <div className="serif text-2xl font-black text-[#3E3A36] leading-none mt-1">{notice.date.split(" ")[1].replace(",", "")}</div>
                          </div>
                          
                          <div className="h-12 w-px bg-[#EFE7DF]" />
                          
                          <div className="flex-1">
                            <h4 className="font-extrabold text-[#3E3A36] group-hover:text-[#2C3A8C] transition-colors duration-300 text-[16px] leading-snug">{notice.title}</h4>
                            <p className="text-[11px] text-[#A59381] font-bold uppercase tracking-wider mt-1">{notice.date}</p>
                          </div>
                          
                          <span 
                            className="text-[10px] font-extrabold uppercase tracking-[0.15em] px-4 py-1.5 rounded-full hidden sm:inline-block" 
                            style={{ backgroundColor: notice.tagColor + "12", color: notice.tagColor, border: `1px solid ${notice.tagColor}15` }}
                          >
                            {notice.tag}
                          </span>
                          
                          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#A59381] group-hover:bg-[#2C3A8C] group-hover:text-white transition-colors duration-500 flex-shrink-0">
                            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
