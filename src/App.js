import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Login from "./scenes/login/login";
import { useDispatch, useSelector } from "react-redux";
import { auditorActions, communityMemberActions, investorActions, projectDeveloperActions, sidebarActions } from "./store";
import Projects from "./scenes/auditor/projects";
import AuditTrails from "./scenes/auditor/trails";
import Opportunities from "./scenes/investor/opportunities";
import Schedule from "./scenes/auditor/schedule";
import AuditCheckList from "./scenes/auditor/checklist";
import InvestmentDetails from "./scenes/investor/project";
import PerformanceMetrics from "./scenes/investor/performance";
import Report from "./scenes/auditor/reports";
import AuditorProjects from "./scenes/auditor/home";
import AuditorProjectDetails from "./scenes/auditor/projects/details";
import FinancialReport from "./scenes/investor/reports/index.jsx";
import LiveMarket from "./scenes/investor/market/index.jsx";
import History from "./scenes/investor/history/index.jsx";
import InvestorHome from "./scenes/investor/dashboard/index.jsx";
import DeveloperHome from "./scenes/developer/dashboard/index.jsx";
import DeveloperPerformanceMetrics from "./scenes/developer/performance/index.jsx";
import DeveloperHistory from "./scenes/developer/history/index.jsx";
import InvestmentUpdates from "./scenes/investor/update/index.jsx";
import DeveloperUpdates from "./scenes/developer/update/index.jsx";
import DeveloperLiveMarket from "./scenes/developer/market/index.jsx";
import Investors from "./scenes/developer/opportunities/index.jsx";
import Investor from "./scenes/developer/Investor/index.jsx";
import Start from "./scenes/login/Start.jsx";
import CarbonOffset from "./scenes/carbonoffset/index.jsx";
import ComplianceReport from "./scenes/auditor/reports/ComplianceReport.jsx";
import Summary from "./scenes/auditor/reports/Summary.jsx";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const user = localStorage.getItem("user");

  const dispatch = useDispatch();
  const isAuditorLoggedIn = useSelector((state) => state.auditor.isLoggedIn);
  const isInvestorLoggedIn = useSelector((state) => state.investor.isLoggedIn);
  const isCommunityMemberLoggedIn = useSelector((state) => state.communityMember.isLoggedIn);
  const isProjectDeveloperLoggedIn = useSelector((state) => state.projectDeveloper.isLoggedIn);
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);
  // console.log("isAuditorLoggedIn", isAuditorLoggedIn);
  // console.log("isInvestorLoggedIn", isInvestorLoggedIn);
  // console.log("isCommunityMemberLoggedIn", isCommunityMemberLoggedIn);
  // console.log("isProjectDeveloperLoggedIn", isProjectDeveloperLoggedIn);
  
  useEffect(() => {
    if (localStorage.getItem("auditorId")) {
      dispatch(auditorActions.login());
    } else if (localStorage.getItem("InvestorId")) {
      dispatch(investorActions.login());
    } else if (localStorage.getItem("projectDeveloperId")) {
      dispatch(projectDeveloperActions.login());
    } else if (localStorage.getItem("communityMemberId")) {
      dispatch(communityMemberActions.login());
    }
    dispatch(isCollapsed ? sidebarActions.collapse() : sidebarActions.expand());
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div 
          className="app"
          style={{
            display: 'flex',
            position: 'relative',
            height: '100vh',
            overflowX: 'auto'
          }}
        >
          {(isAuditorLoggedIn || isInvestorLoggedIn || isProjectDeveloperLoggedIn || isCommunityMemberLoggedIn) && <Sidebar isSidebar={isSidebar} />}          
          <main 
            className="content"
            style={{
              marginLeft: (isAuditorLoggedIn || isInvestorLoggedIn || isProjectDeveloperLoggedIn || isCommunityMemberLoggedIn) ? '270px' : '0px', /* Adjust these values based on your sidebar width */
              flexGrow: 1,
              // whiteSpace: 'nowrap'
            }}
          >
            {(isAuditorLoggedIn || isInvestorLoggedIn || isProjectDeveloperLoggedIn || isCommunityMemberLoggedIn) && <Topbar setIsSidebar={setIsSidebar} />}            
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/login" element={<Login />} />            
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />

              <Route path="/auditor/dashboard" element={<AuditorProjects />} />
              <Route path="/auditor/projects" element={<Projects />} />
              <Route path="/auditor/projects/details" element={<AuditorProjectDetails />} />
              <Route path="/auditor/checklist" element={<AuditCheckList />} />
              <Route path="/auditor/schedule" element={<Schedule />} />
              <Route path="/auditor/trails" element={<AuditTrails />} />
              <Route path="/auditor/reports" element={<Report />} />
              <Route path="/auditor/reports/details" element={<ComplianceReport />} />
              <Route path="/auditor/reports/summary" element={<Summary />} />
              <Route path="auditor/carbonoffset" element={<CarbonOffset />} />

              <Route path="/investor/dashboard" element={<InvestorHome />} />
              <Route path="/investor/opportunities" element={<Opportunities />} />
              <Route path="/investor/opportunities/details" element={<InvestmentDetails />} />
              <Route path="/investor/metrics" element={<PerformanceMetrics />} />
              <Route path="/investor/history" element={<History />} />
              <Route path="/investor/market" element={<LiveMarket />} />
              <Route path="/investor/reports" element={<FinancialReport />} />
              <Route path="/investor/updates" element={<InvestmentUpdates />} />

              <Route path="/developer/dashboard" element={<DeveloperHome />} />
              <Route path="/developer/opportunities" element={<Investors />} />
              <Route path="/developer/opportunities/details" element={<Investor />} />
              <Route path="/developer/metrics" element={<DeveloperPerformanceMetrics />} />
              <Route path="/developer/history" element={<DeveloperHistory />} />
              <Route path="/developer/market" element={<DeveloperLiveMarket />} />
              <Route path="/developer/reports" element={<FinancialReport />} />
              <Route path="/developer/updates" element={<DeveloperUpdates />} />


            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
