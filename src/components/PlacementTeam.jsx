import { FadeInUp } from "../utils/animations";

const teamMembers = [
  { name: "Mr. Jaydev Das", designation: "Executive Director", email: "edp@tat.ac.in", mobile: "+91 94375 55123" },
  { name: "Mr. Rudra Pratap Mohanty", designation: "Joint Director", email: "jd@tat.ac.in", mobile: "+91 97764 62430" },
  { name: "Mr. Pradipta Kr Nanda", designation: "Joint Director (Training)", email: "jdtrg@tat.ac.in", mobile: "+91 98612 37415" },
  { name: "Mr. Bharat Bhusan Pati", designation: "Associate Director", email: "assodir1@tat.ac.in", mobile: "+91 70082 72255" },
  { name: "Mr. Sarbeswar Panda", designation: "Associate Director", email: "assodir2@tat.ac.in", mobile: "+91 94384 86627" },
  { name: "Mr. Sujit Kr Das", designation: "Deputy Director", email: "dydir1@tat.ac.in", mobile: "+91 78731 00791" },
  { name: "Mr. Akshya Kumar Das", designation: "Deputy Director", email: "dydir2@tat.ac.in", mobile: "+91 94372 29972" },
  { name: "Mr. Rajesh Parida", designation: "Deputy Director", email: "dydir3@tat.ac.in", mobile: "+91 81003 92269" },
  { name: "Mr. Biplab Kumar Patra", designation: "Assistant Director", email: "asstdir@tat.ac.in", mobile: "+91 78941 23941" },
  { name: "Ms. NangTrisangi Changmai", designation: "Placement Executive", email: "pe@tat.ac.in", mobile: "+91 70024 19799" },
];

export default function PlacementTeam() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden z-0">
      
      {/* Background 4: Topographic Texture & Mesh Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft Mesh Gradient Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#2C3A8C]/[0.03] to-transparent blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[#E8BD63]/[0.04] to-transparent blur-[60px]" />

        {/* Topographic Map SVG Pattern (Subtle) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <filter id="displacementFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <g filter="url(#displacementFilter)">
            <circle cx="20%" cy="30%" r="400" fill="none" stroke="#1A2660" strokeWidth="2" />
            <circle cx="20%" cy="30%" r="500" fill="none" stroke="#1A2660" strokeWidth="2" />
            <circle cx="20%" cy="30%" r="600" fill="none" stroke="#1A2660" strokeWidth="2" />
            <circle cx="80%" cy="80%" r="300" fill="none" stroke="#1A2660" strokeWidth="2" />
            <circle cx="80%" cy="80%" r="400" fill="none" stroke="#1A2660" strokeWidth="2" />
          </g>
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <FadeInUp>
            <h2 className="serif text-5xl md:text-6xl font-light text-[#111827] mb-6">
              Training & Placement <span className="italic font-serif text-[#2C3A8C] font-bold">Team</span>
            </h2>
            <p className="text-[#3E3A36]/60 text-xl font-light leading-relaxed max-w-2xl">
              Our dedicated professionals are your single point of contact for all campus recruitment and partnership enquiries.
            </p>
          </FadeInUp>
        </div>

        {/* Minimalist Editorial List */}
        <div className="border-t border-[#111827]">
          {teamMembers.map((member, i) => (
            <FadeInUp key={member.name} delay={i * 50}>
              <div className="group flex flex-col md:flex-row md:items-center py-6 border-b border-[#EFE7DF] hover:border-[#2C3A8C] transition-colors duration-500 cursor-default">
                
                <div className="w-full md:w-2/5 mb-2 md:mb-0">
                  <h4 className="serif text-2xl font-bold text-[#111827] group-hover:text-[#2C3A8C] transition-colors duration-300">
                    {member.name}
                  </h4>
                </div>
                
                <div className="w-full md:w-1/4 mb-2 md:mb-0">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#A59381]">
                    {member.designation}
                  </span>
                </div>
                
                <div className="w-full md:w-1/4 mb-2 md:mb-0">
                  <a href={`mailto:${member.email}`} className="text-[#111827]/70 font-medium hover:text-[#2C3A8C] transition-colors">
                    {member.email}
                  </a>
                </div>
                
                <div className="w-full md:w-auto md:ml-auto text-right">
                  <span className="text-[#111827]/70 font-medium whitespace-nowrap">
                    {member.mobile}
                  </span>
                </div>

              </div>
            </FadeInUp>
          ))}
        </div>

      </div>
    </section>
  );
}
