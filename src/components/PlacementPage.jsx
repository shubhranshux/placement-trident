import { useEffect } from "react";
import SectionDivider from "./SectionDivider";
import PlacementHero from "./PlacementHero";
import Placements from "./Placements";
import PlacementBranches from "./PlacementBranches";
import PlacementProcess from "./PlacementProcess";
import PlacementTraining from "./PlacementTraining";
import PlacementMarquee from "./PlacementMarquee";
import PlacementSidebar from "./PlacementSidebar";
import PlacementChart from "./PlacementChart";
import PlacementTeam from "./PlacementTeam";
import PlacementFacilities from "./PlacementFacilities";
import InstitutionGlance from "./InstitutionGlance";
import PlacementCTA from "./PlacementCTA";

export default function PlacementPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ overflowX: "clip" }} className="bg-[#EFE7DF]">
      {/* 1. Hero Section */}
      <PlacementHero />

      {/* 2. Original Placements Component (Cards) */}
      <div className="relative z-10">
        <SectionDivider type="straight" topColor="#050B14" bottomColor="#F2F7FD" height={2} />
      </div>
      <Placements />

      {/* 3. Branch-wise Placements */}
      <SectionDivider type="wave" topColor="#FFFFFF" bottomColor="#E2F0D9" height={70} />
      <PlacementBranches />

      {/* 4. Placement Process Timeline */}
      <div className="relative z-[20]">
        <SectionDivider type="curve" topColor="#E2F0D9" bottomColor="#FEF5D9" height={80} />
      </div>
      <PlacementProcess />

      {/* 5. Our 4-Vertical Training Model */}
      <SectionDivider type="curve" topColor="#FEF5D9" bottomColor="#FFD700" height={60} />
      <PlacementTraining />

      {/* 6. Marquee Band */}
      <div className="relative z-[20]" style={{ marginTop: '-2px' }}>
        <SectionDivider type="wave" topColor="#FFD700" bottomColor="#2C3A8C" height={50} />
      </div>
      <PlacementMarquee />

      {/* 7. Sidebar Section */}
      <SectionDivider type="curve" topColor="#2C3A8C" bottomColor="#F3E5F5" height={50} />
      <PlacementSidebar />

      {/* 8. Placement Chart (Stats) */}
      <SectionDivider type="wave" topColor="#F5EEF8" bottomColor="#FFF3E0" height={50} />
      <div className="bg-[#FFF3E0] py-12">
        <PlacementChart />
      </div>

      {/* 9. Training & Placement Team */}
      <SectionDivider type="curve" topColor="#FFF3E0" bottomColor="#FFFFFF" height={50} />
      <PlacementTeam />

      {/* 10. World-Class Facilities */}
      <SectionDivider type="curve" topColor="#FFFFFF" bottomColor="#111827" height={60} />
      <PlacementFacilities />

      {/* 11. Institution at a Glance */}
      {/* Seamless transition between dark themes */}
      <SectionDivider type="wave" topColor="#111827" bottomColor="#080F26" height={50} />
      <InstitutionGlance />

      {/* 12. CTA Section */}
      <SectionDivider type="gradient" topColor="#080F26" bottomColor="#F5EEEC" accentColor="#E8BD63" accentHeight={8} height={50} />
      <PlacementCTA />
      
    </main>
  );
}
