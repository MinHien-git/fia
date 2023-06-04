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
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/agency">
            <Route path="" element={<AgenciesPage />} />
          </Route>
          <Route path="agency/:id" element={<AgencyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} /> */}
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
