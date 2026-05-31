import { FadeInUp } from "../utils/animations";
import { Phone, Mail, MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import { Tilt3D } from "../utils/advanced-animations";

export default function PlacementCTA() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#F5EEEC] overflow-hidden z-0">
      {/* Background 7: Radial Burst & Diagonal Pinstripes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* Fine Diagonal Pinstripes */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #1A2660 0px, #1A2660 1px, transparent 1px, transparent 15px)"
          }}
        />

        {/* Warm Radial Burst */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#E8BD63]/[0.07] to-transparent blur-[120px]" />

        {/* Ambient Corner Glows */}
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[60%] bg-[#2C3A8C]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-white/40 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* LEFT: Contact Directory (6 cols) */}
          <div className="lg:col-span-6">
            <FadeInUp>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-[#A59381] block mb-4">Connect Directly</span>
              <h2 className="serif text-4xl sm:text-5xl md:text-6xl font-light text-[#3E3A36] mb-8 leading-tight">
                Training & <span className="italic font-bold text-[#2C3A8C] font-serif">Placement Cell</span>
              </h2>
              <p className="text-[#3E3A36]/65 text-lg font-light leading-relaxed mb-12 max-w-lg">
                Reach out to our placement division for recruiters onboarding, mock collaborations, or career scheduling queries.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Hotline", value: "+91 98611 91195", href: "tel:+919861191195" },
                  { icon: Mail, label: "Recruiter Helpdesk", value: "edp@tat.ac.in", href: "mailto:edp@tat.ac.in" },
                  { icon: MapPin, label: "Placement Block", value: "Training & Placement Block, Infocity Campus, Bhubaneswar", href: "#" },
                  { icon: Clock, label: "Operating Hours", value: "Monday – Friday: 9:00 AM – 5:00 PM", href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a 
                    key={label} 
                    href={href} 
                    className="flex items-center gap-5 group/item transition-transform duration-500 hover:translate-x-1.5"
                  >
                    {/* Circle icon with gradient brand background */}
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1A2660] to-[#2C3A8C] flex items-center justify-center text-white border border-[#1A2660]/10 shadow-lg group-hover/item:scale-105 transition-all duration-500 flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#A59381] block mb-0.5 group-hover/item:text-[#2C3A8C] transition-colors duration-500">{label}</span>
                      <span className="text-[#3E3A36] font-extrabold text-[14px] sm:text-[15px] group-hover/item:text-[#1A2660] transition-colors duration-500 break-words">{value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </FadeInUp>
          </div>

          {/* RIGHT: Dynamic Interactive 3D Callout (6 cols) */}
          <div className="lg:col-span-6 w-full">
            <FadeInUp delay={200}>
              <Tilt3D intensity={8} scale={1.015} className="w-full">
                <div className="relative p-7 sm:p-10 md:p-14 bg-gradient-to-br from-[#1A2660] via-[#2C3A8C] to-[#111827] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(26,38,96,0.25)] border border-[#E8BD63]/25 group">
                  {/* Glowing decorative corner lights */}
                  <div className="absolute top-[-10%] right-[-10%] w-56 h-56 bg-[#E8BD63]/15 rounded-full blur-[80px] pointer-events-none group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-[#4A6CC4]/20 rounded-full blur-[65px] pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 border border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-500">
                      <Briefcase size={26} className="text-[#E8BD63]" />
                    </div>
                    
                    <h3 className="serif text-3xl md:text-4xl font-extrabold text-white mb-4">
                      For Corporate Recruiters
                    </h3>
                    <p className="text-white/60 text-[15px] font-light leading-relaxed mb-10">
                      Partner with Trident for your engineering recruitment programs. Gain active access to a skilled talent cohort of over 1,500+ pre-vetted graduating professionals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="#" 
                        className="group/btn flex items-center justify-center gap-3 bg-[#E8BD63] text-[#1A2660] px-8 py-4.5 rounded-2xl font-extrabold text-xs uppercase tracking-widest hover:bg-[#F0D080] shadow-xl transition-all duration-500 flex-1 whitespace-nowrap border border-[#E8BD63]/20"
                      >
                        Schedule Drive
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                      <a 
                        href="#" 
                        className="group/btn flex items-center justify-center gap-3 border border-white/15 text-white px-8 py-4.5 rounded-2xl font-extrabold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/30 transition-all duration-500 flex-1 whitespace-nowrap"
                      >
                        Download Brochure
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </FadeInUp>
          </div>

        </div>
      </div>
    </section>
  );
}
