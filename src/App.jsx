import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Articles from "./pages/Articles.jsx";
import Contact from "./pages/Contact.jsx";
import FlashcardLayout from "./components/FlashcardLayout.jsx";
import PageTransition from "./components/PageTransition.jsx";

function PageWrapper({ children }) {
  return (
    <FlashcardLayout>
      {children}
    </FlashcardLayout>
  );
}

export default function App() {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <PageTransition isAnimating={isAnimating}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/articles" element={<PageWrapper><Articles /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </PageTransition>
  );
}
