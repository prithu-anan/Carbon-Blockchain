import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import ProSidebar from "./scenes/global/Sidebar";
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
import { auditorActions, communityMemberActions, millActions } from "./store";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const user = localStorage.getItem("user");

  const dispatch = useDispatch();
  const isAuditorLoggedIn = useSelector((state) => state.auditor.isLoggedIn);
  const isMillLoggedIn = useSelector((state) => state.mill.isLoggedIn);
  const isCommunityMemberLoggedIn = useSelector((state) => state.communityMember.isLoggedIn);
  console.log("isAuditorLoggedIn", isAuditorLoggedIn);
  console.log("isMillLoggedIn", isMillLoggedIn);
  console.log("isCommunityMemberLoggedIn", isCommunityMemberLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("auditorId")) {
      dispatch(auditorActions.login());
    } else if (localStorage.getItem("millId")) {
      dispatch(millActions.login());
    } else if (localStorage.getItem("communityMemberId")) {
      dispatch(communityMemberActions.login());
    }
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!user && <ProSidebar isSidebar={isSidebar} />}          
          <main className="content">
            {!user && <Topbar setIsSidebar={setIsSidebar} />}            
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Dashboard />} />
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
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
