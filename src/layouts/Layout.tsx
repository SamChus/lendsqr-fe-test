
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useOpenMobileSideNavStore } from "../store/openMobileSideNavStore";
import "../styles/components/DashboardLayout.scss";

export const dynamic = "force-dynamic";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const isMobileSideNavOpen = useOpenMobileSideNavStore(
    (state) => state.isMobileSideNavOpen
  );

  const [isMobileView, setIsMobileView] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 878 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 878);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dashboardLayout">
      <Header />
      {isMobileView ? isMobileSideNavOpen && <Sidebar /> : <Sidebar />}
      <main className="dashboardLayout__main">
        <div className="dashboardLayout__main__container">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
