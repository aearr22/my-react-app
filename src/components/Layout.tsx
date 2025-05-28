import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface LayoutProps {
  onSignup: () => void;
  onLogin: () => void;
}

const Layout: React.FC<LayoutProps> = ({ onSignup, onLogin }) => (
  <>
    <Header onSignup={onSignup} onLogin={onLogin} />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
