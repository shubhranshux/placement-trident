import { lazy, Suspense } from "react";
import { NoiseOverlay } from "./utils/animations";
import Header from "./components/Header";

const PlacementPage = lazy(() => import("./components/PlacementPage"));
const Footer = lazy(() => import("./components/Footer"));

function SectionFallback() {
  return <div style={{ minHeight: "200px" }} />;
}

export default function App() {
  return (
    <div className="text-[#3E3A36] bg-[#EFE7DF] font-sans" style={{ overflowX: "clip" }}>
      <style>{`
        :root {
          --primary-rose: #2C3A8C;
          --secondary-beige: #A59381;
          --bg-light: #EFE7DF;
          --bg-soft: #F5EEEC;
          --text-dark: #3E3A36;
        }

        html { scroll-behavior: auto; }
        body { font-family: 'Inter', 'DM Sans', sans-serif; background-color: var(--bg-light); color: var(--text-dark); font-weight: 400; font-size: 18px; line-height: 1.7; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        .serif { font-family: 'Source Serif 4', Georgia, serif; font-weight: 700; line-height: 1.08; letter-spacing: -0.025em; }
        h1, h2, h3 { font-weight: 700; letter-spacing: -0.02em; }
        p { font-size: 18px; line-height: 1.75; font-weight: 400; letter-spacing: -0.01em; }
        
        .bg-primary { background-color: var(--primary-rose) !important; color: white; }
        .bg-secondary { background-color: var(--secondary-beige) !important; color: white; }
        .bg-soft { background-color: var(--bg-soft) !important; }
        .text-primary { color: var(--primary-rose) !important; }
        .text-secondary { color: var(--secondary-beige) !important; }
        .border-primary { border-color: var(--primary-rose) !important; }
        
        .btn-rose, .btn-outline-rose, .btn-outline-white, .btn-creative {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.6s ease, background-color 0.4s ease;
          transform-style: preserve-3d;
          perspective: 800px;
          will-change: transform;
        }
        .btn-creative:hover {
          transform: scale(1.08) rotateX(12deg) translateY(-2px); 
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4); 
        }
        .btn-rose { 
          background-color: var(--primary-rose); color: white; text-transform: uppercase;
          letter-spacing: 0.1em; box-shadow: 0 10px 30px -10px rgba(27, 77, 142, 0.6);
          position: relative; overflow: hidden; z-index: 1;
        }
        .btn-rose::before {
          content: ''; position: absolute; top: 0; left: 0; width: 0%; height: 100%;
          background: rgba(255,255,255,0.1); z-index: -1; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .btn-rose:hover::before { width: 100%; }
        .btn-rose:hover { 
          transform: scale(1.08) rotateX(12deg) translateY(-2px); 
          box-shadow: 0 20px 40px -10px rgba(27, 77, 142, 0.8); 
        }
        .btn-outline-rose { border: 1.5px solid var(--primary-rose); color: var(--primary-rose); letter-spacing: 0.1em;}
        .btn-outline-rose:hover { 
          background-color: var(--primary-rose); color: white; 
          transform: scale(1.08) rotateX(12deg) translateY(-2px); 
          box-shadow: 0 20px 40px -10px rgba(27, 77, 142, 0.4);
        }
        .btn-outline-white { border: 1.5px solid rgba(255,255,255,0.8); color: white; backdrop-filter: blur(4px); letter-spacing: 0.1em;}
        .btn-outline-white:hover { 
          background-color: white; color: var(--primary-rose) !important; 
          transform: scale(1.08) rotateX(12deg) translateY(-2px);
          box-shadow: 0 20px 40px -10px rgba(255, 255, 255, 0.4);
        }
        .rose-rule { display: block; width: 80px; height: 3px; background-color: #EAB308; margin-bottom: 1.5rem; transition: width 0.6s ease; }
        .group:hover .rose-rule { width: 120px; }
        
        .utility-link { transition: color 0.3s ease; }
        .utility-link:hover { color: var(--bg-soft) !important; }
        .nav-link { font-weight: 600; font-size: 0.95rem; transition: color 0.3s ease; padding-bottom: 4px; position:relative;}
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: var(--primary-rose); transition: width 0.3s ease; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .nav-link.active, .nav-link:hover { color: var(--primary-rose) !important; }
        
        .dropdown { box-shadow: 0 20px 50px -20px rgba(15, 23, 42, 0.2); border-top: 3px solid var(--primary-rose); border-radius: 0 0 12px 12px; }
        .dropdown a { transition: all 0.3s ease; position: relative; }
        .dropdown a:hover { background-color: var(--bg-soft); color: var(--primary-rose) !important; padding-left: 1.75rem; }
        .dropdown a::before { content: '→'; position: absolute; left: 1rem; opacity: 0; transform: translateX(-10px); transition: all 0.3s ease; color: var(--primary-rose); }
        .dropdown a:hover::before { opacity: 1; transform: translateX(0); }
        
        .card-hover { transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); border: 1px solid rgba(232, 167, 35, 0.2); background: #ffffff; }
        .card-hover:hover { 
          border-color: var(--primary-rose) !important; 
          box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.1); 
          transform: translateY(-4px);
        }
        
        .ticker-wrap { overflow: hidden; background-color: var(--bg-soft) !important; border-top: 1px solid rgba(15, 23, 42, 0.1); border-bottom: 1px solid rgba(15, 23, 42, 0.1); }
        .ticker-inner { display: inline-flex; white-space: nowrap; animation: ticker 50s linear infinite; }
        .ticker-inner span { color: var(--text-dark) !important; }
        @keyframes ticker { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }
        @keyframes scrollBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
        .scroll-caret { animation: scrollBounce 2s ease-in-out infinite; }

        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: var(--bg-soft); }
        ::-webkit-scrollbar-thumb { background: var(--secondary-beige); border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--primary-rose); }
        .custom-scrollbar-mini::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar-mini::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar-mini::-webkit-scrollbar-thumb { background: var(--secondary-beige); border-radius: 4px; }
      `}</style>

      <NoiseOverlay opacity={0.018} />
      <Header />
      <Suspense fallback={<SectionFallback />}>
        <PlacementPage />
      </Suspense>
      <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
    </div>
  );
}
