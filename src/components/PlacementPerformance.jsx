import { FadeInUp } from "../utils/animations";

export default function PlacementPerformance() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "linear-gradient(175deg, #0B112A 0%, #1A2660 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#2C3A8C] blur-[120px] opacity-20" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#4A6CC4] blur-[150px] opacity-15" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        <div className="text-center mb-16">
          <FadeInUp>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#E8BD63] block mb-4">Analytics Dashboard</span>
            <h2 className="serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Year-wise <span className="italic font-light text-[#D1D5DB] font-serif">Performance</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">Five years of consistent growth in placement offers and recruiter partnerships.</p>
          </FadeInUp>
        </div>

        {/* Graph Container */}
        <FadeInUp delay={200}>
          <div className="relative max-w-4xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-[#1E4490]/40 to-[#162F6E]/40 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="w-full">
              <svg viewBox="0 0 650 350" className="w-full h-auto font-sans" style={{ overflow: 'visible' }}>
                <defs>
                  <linearGradient id="pg-offersGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E57345" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#E57345" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="pg-recruitersGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2E6DB4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2E6DB4" stopOpacity="0.0" />
                  </linearGradient>
                  <filter id="pg-shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.1" />
                  </filter>
                </defs>

                {[0, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((val) => {
                  const y = 310 - (val / 900) * 270;
                  return (
                    <g key={val}>
                      <line x1="35" y1={y} x2="630" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      <text x="25" y={y + 4} fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="end" fontWeight="700">{val}</text>
                    </g>
                  );
                })}

                {["2020-21", "2021-22", "2022-23", "2023-24", "2024-25"].map((year, i) => {
                  const x = 60 + (540 / 4) * i;
                  return (
                    <text key={year} x={x} y="335" fill="rgba(255,255,255,0.6)" fontSize="13" textAnchor="middle" fontWeight="bold">
                      {year}
                    </text>
                  );
                })}

                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes pgDrawLine { to { stroke-dashoffset: 0; } }
                  @keyframes pgFadePoint { to { opacity: 1; transform: translateY(0); } }
                  .pg-path-anim { stroke-dasharray: 2000; stroke-dashoffset: 2000; animation: pgDrawLine 2s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
                  .pg-point-anim { opacity: 0; transform: translateY(10px); animation: pgFadePoint 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
                `}} />

                <path className="pg-path-anim" d="M 60,169.6 L 195,61.9 L 330,139.6 L 465,112.6 L 600,108.4 L 600,310 L 60,310 Z" fill="url(#pg-offersGrad)" style={{ animationDelay: '0.1s' }} />
                <path className="pg-path-anim" d="M 60,276.4 L 195,230.5 L 330,273.4 L 465,272.8 L 600,274.0 L 600,310 L 60,310 Z" fill="url(#pg-recruitersGrad)" style={{ animationDelay: '0.3s' }} />
                <path className="pg-path-anim" d="M 60,169.6 L 195,61.9 L 330,139.6 L 465,112.6 L 600,108.4" fill="none" stroke="#E57345" strokeWidth="4" filter="url(#pg-shadow)" style={{ animationDelay: '0.2s' }} />
                <path className="pg-path-anim" d="M 60,276.4 L 195,230.5 L 330,273.4 L 465,272.8 L 600,274.0" fill="none" stroke="#2E6DB4" strokeWidth="4" filter="url(#pg-shadow)" style={{ animationDelay: '0.4s' }} />

                {[
                  { x: 60, y: 169.6, val: 468 }, { x: 195, y: 61.9, val: 827 },
                  { x: 330, y: 139.6, val: 568 }, { x: 465, y: 112.6, val: 658 }, { x: 600, y: 108.4, val: 672 },
                ].map((pt, i) => (
                  <g key={`o-${i}`} className="pg-point-anim" style={{ animationDelay: `${0.6 + i * 0.2}s` }}>
                    <circle cx={pt.x} cy={pt.y} r="6" fill="#E57345" stroke="#1A2660" strokeWidth="2.5" filter="url(#pg-shadow)" />
                    <text x={pt.x} y={pt.y - 14} fill="#ffffff" fontSize="12" textAnchor="middle" fontWeight="800">{pt.val}</text>
                  </g>
                ))}
                {[
                  { x: 60, y: 276.4, val: 112 }, { x: 195, y: 230.5, val: 265 },
                  { x: 330, y: 273.4, val: 122 }, { x: 465, y: 272.8, val: 124 }, { x: 600, y: 274.0, val: 120 },
                ].map((pt, i) => (
                  <g key={`r-${i}`} className="pg-point-anim" style={{ animationDelay: `${0.6 + i * 0.2}s` }}>
                    <circle cx={pt.x} cy={pt.y} r="6" fill="#2E6DB4" stroke="#1A2660" strokeWidth="2.5" filter="url(#pg-shadow)" />
                    <text x={pt.x} y={pt.y - 14} fill="#ffffff" fontSize="12" textAnchor="middle" fontWeight="800">{pt.val}</text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="flex items-center justify-center gap-8 border-t border-white/10 pt-6 mt-4">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-1.5 rounded-full" style={{ background: '#2E6DB4' }} />
                <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Recruiters</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-1.5 rounded-full" style={{ background: '#E57345' }} />
                <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Offers Secured</span>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
