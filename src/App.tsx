import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";
import SignupModal from "./components/SignupModal/SignupModal";
import LoginModal from "./components/LoginModal/LoginModal";
import HeroSection from "./components/HeroSection/HeroSection";
import SliderSection from "./components/SliderSection/SliderSection";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import InfoSection from "./components/InfoSection/InfoSection";
import ConnectSection from "./components/ConnectSection/ConnectSection";
import CtaSection from "./components/CtaSection/CtaSection";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Header onSignup={() => setShowSignup(true)} onLogin={() => setShowLogin(true)} />
      <SignupModal open={showSignup} onClose={() => setShowSignup(false)} />
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
      <main>
        <HeroSection />
        <SliderSection />
        <QuoteSection />
        <InfoSection />
        <ConnectSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
