import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp } from "../utils/animations";
import { logos as CompanyLogos } from "../data/companyLogos";

const domains = {
  giants: {
    label: "Tech Giants & Product",
    companies: ["Amazon", "Microsoft", "Google", "Goldman Sachs", "JP Morgan", "Morgan Stanley", "Atlassian", "Oracle", "SAP", "Flipkart", "PhonePe", "Zepto", "Paytm", "Persistent"]
  },
  consulting: {
    label: "Consulting & Services",
    companies: ["TCS", "Infosys", "Wipro", "HCL", "Capgemini", "Accenture", "Cognizant", "Tech Mahindra", "IBM", "Deloitte", "EY India", "KPMG India", "PwC India"]
  },
  core: {
    label: "Core & Infrastructure",
    companies: ["Siemens", "Schneider Electric", "ABB India", "Bosch India", "Tata Power", "JSW Steel", "L&T Construction", "Godrej & Boyce", "HDFC Bank", "ICICI Bank", "Axis Bank"]
  }
};

const getBrandColor = (name) => {
  const colors = {
    "Amazon": "#FF9900", "Microsoft": "#00A4EF", "Google": "#4285F4", "Goldman Sachs": "#C39B62",
    "JP Morgan": "#003087", "Morgan Stanley": "#1A5C9A", "Atlassian": "#0052CC", "Oracle": "#F80000",
    "SAP": "#00A3E0", "Flipkart": "#2874F0", "PhonePe": "#5f259f", "Zepto": "#5c14ab",
    "Paytm": "#00b9f1", "Persistent": "#FF5E00", "TCS": "#003366", "Infosys": "#004B8D",
    "Wipro": "#7B2D8B", "HCL": "#0077B5", "Capgemini": "#0070AD", "Accenture": "#A100FF",
    "Cognizant": "#0033A0", "Tech Mahindra": "#C8102E", "IBM": "#1F70C1", "Deloitte": "#86BC25",
    "EY India": "#FFE600", "KPMG India": "#00338D", "PwC India": "#E0301E",
    "Siemens": "#00828A", "Schneider Electric": "#3DCD58", "ABB India": "#FF0000",
    "Bosch India": "#E30613", "Tata Power": "#00A4EF", "JSW Steel": "#002D62",
    "L&T Construction": "#FDB913", "Godrej & Boyce": "#C41E3A", "HDFC Bank": "#004C8F",
    "ICICI Bank": "#F37021", "Axis Bank": "#841439",
  };
  return colors[name] || "#6B7280";
};

export default function PlacementRecruiters() {
  const [activeTab, setActiveTab] = useState("giants");

  return (
    <section className="relative py-24 lg:py-32 bg-[#F9F7F5] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-[#2C3A8C]/5 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-48 h-48 rounded-full bg-[#E8BD63]/8 blur-[80px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <div className="text-center mb-16">
          <FadeInUp>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#A59381] block mb-4">Our Recruiters</span>
            <h2 className="serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#3E3A36] mb-4">
              Who <span className="italic font-light text-[#2C3A8C] font-serif">Recruits</span> from Us
            </h2>
            <p className="text-[#3E3A36]/50 text-lg max-w-2xl mx-auto">Leading companies across technology, consulting, core engineering, and financial services.</p>
          </FadeInUp>
        </div>

        {/* Domain Tabs */}
        <FadeInUp delay={100}>
          <div className="flex flex-wrap justify-center p-1.5 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#EFE7DF] max-w-max mx-auto gap-1 mb-16 shadow-sm">
            {Object.entries(domains).map(([key, domain]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-3 px-7 text-[11px] md:text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 whitespace-nowrap ${
                  activeTab === key
                    ? "bg-[#2C3A8C] text-white shadow-lg shadow-[#2C3A8C]/20"
                    : "text-[#3E3A36]/60 hover:text-[#3E3A36] hover:bg-white"
                }`}
              >
                {domain.label}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Logo Grid — Honeycomb Style */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap justify-center gap-5 md:gap-6"
            >
              {domains[activeTab].companies.map((name, i) => {
                const Logo = CompanyLogos[name];
                const brandColor = getBrandColor(name);
                const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

                return (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="group relative"
                  >
                    <div
                      className="w-[130px] h-[110px] md:w-[150px] md:h-[120px] flex flex-col items-center justify-center bg-white rounded-2xl border border-[#EFE7DF] transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                      style={{ '--brand': brandColor }}
                    >
                      {/* Hover accent */}
                      <div className="absolute bottom-0 left-0 w-full h-1 transition-all duration-500 opacity-0 group-hover:opacity-100" style={{ backgroundColor: brandColor }} />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${brandColor}08, transparent 70%)` }} />

                      <div className="relative z-10 flex items-center justify-center w-16 h-12 mb-2">
                        {Logo ? (
                          <div className="[&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain">
                            <Logo size={36} />
                          </div>
                        ) : (
                          <span className="text-lg font-black tracking-wider" style={{ color: brandColor }}>{initials}</span>
                        )}
                      </div>
                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-[#3E3A36]/40 group-hover:text-[#3E3A36]/70 transition-colors text-center px-2 truncate w-full">
                        {name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
