import React from "react";
import type { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CardList from "./CardList/CardList";

interface LayoutProps {
  children: ReactNode;
  onSignup: () => void;
  onLogin: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onSignup, onLogin }) => (
  <>
    <Header onSignup={onSignup} onLogin={onLogin} />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
