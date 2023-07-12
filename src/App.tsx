import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContentSection from "./components/ContentSection/ContentSection";
import AgenciesPage from "./pages/AgenciesPage";
import AgencyPage from "./pages/AgencyPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/authenticateContext";
import { ThemeProvider } from "./context/themeContext";
import ConvertToAgenciesPage from "./pages/ConvertAgenciesPage";
import BusinessWorkSpace from "./pages/BusinessWorkSpace";
import CreatePage from "./pages/CreatePage";
import EditWorkSpacePage from "./pages/EditWorkSpacePage";
import { SearchProvider } from "./context/searchContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <SearchProvider>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/agency">
                  <Route path="" element={<AgenciesPage />} />
                </Route>
                <Route path="/business">
                  <Route path="" element={<ConvertToAgenciesPage />} />
                </Route>
                <Route path="/business/:id" element={<BusinessWorkSpace />} />
                <Route
                  path="/business/:id/create-page"
                  element={<CreatePage />}
                />
                <Route
                  path="/business/pages/:id"
                  element={<EditWorkSpacePage />}
                />
                <Route path="agency/:id" element={<AgencyPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>

              <Footer />
            </Router>
          </SearchProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
