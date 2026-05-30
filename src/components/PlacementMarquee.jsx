import { logos as CompanyLogos } from "../data/companyLogos";

const domains = {
  giants: {
    companies: ["Amazon", "Microsoft", "Google", "Goldman Sachs", "JP Morgan", "Morgan Stanley", "Atlassian", "Oracle", "SAP", "Flipkart", "PhonePe", "Zepto", "Paytm", "Persistent"]
  },
  consulting: {
    companies: ["TCS", "Infosys", "Wipro", "HCL", "Capgemini", "Accenture", "Cognizant", "Tech Mahindra", "IBM", "Deloitte", "EY India", "KPMG India", "PwC India"]
  },
  core: {
    companies: ["Siemens", "Schneider Electric", "ABB India", "Bosch India", "Tata Power", "JSW Steel", "L&T Construction", "Godrej & Boyce", "HDFC Bank", "ICICI Bank", "Axis Bank"]
  }
};

export default function PlacementMarquee() {
  const marqueeCompanies = Object.values(domains).flatMap(d => d.companies).slice(0, 20);

  return (
    <section className="relative py-8 overflow-hidden bg-gradient-to-r from-[#1A2660] via-[#2C3A8C] to-[#1A2660] border-y border-[#E8BD63]/25 shadow-xl">
      {/* Deep Glowing Abstract Waves & Particle Field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-[#E8BD63]/5 rounded-full blur-[50px]" />
        
        {/* Subtle wavy lines */}
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-10">
          <path d="M0,10 Q25,2 50,10 T100,10" fill="none" stroke="#FFFFFF" strokeWidth="0.2" />
          <path d="M0,12 Q25,20 50,12 T100,12" fill="none" stroke="#FFFFFF" strokeWidth="0.2" />
        </svg>

        {/* Starfield / Particles */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(circle, #FFFFFF 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0"
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(circle, #E8BD63 1px, transparent 1px)",
            backgroundSize: "75px 75px",
            backgroundPosition: "20px 20px"
          }}
        />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-scroll { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
        .marquee-track {
          will-change: transform;
          backface-visibility: hidden;
        }
      `}} />

      <div className="flex marquee-track" style={{ animation: "marquee-scroll 35s linear infinite", width: "max-content" }}>
        {[...Array(2)].map((_, setIdx) => (
          <div key={setIdx} className="flex items-center gap-8 px-4">
            {marqueeCompanies.map((name, i) => {
              const Logo = CompanyLogos[name];
              return (
                <div 
                  key={`${setIdx}-${i}`} 
                  className="flex items-center gap-3.5 flex-shrink-0 bg-white border border-[#1A2660]/10 px-6 py-3 rounded-full hover:bg-slate-50 hover:border-[#E8BD63]/60 hover:scale-105 transition-all duration-500 group cursor-pointer shadow-md"
                >
                  {Logo ? (
                    <div className="[&>svg]:h-6 [&>svg]:w-auto flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                      <Logo size={22} />
                    </div>
                  ) : (
                    <span className="text-[#1A2660] group-hover:text-[#BA7517] text-[11px] font-extrabold uppercase tracking-widest whitespace-nowrap transition-colors duration-500">{name}</span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
