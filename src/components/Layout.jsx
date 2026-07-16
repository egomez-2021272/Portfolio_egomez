import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import CornerCrosses from "./CornerCrosses.jsx";

export default function Layout({ children }) {
  return (
    <div className="dot-grid relative min-h-screen overflow-x-hidden">
      <CornerCrosses />
      <NavBar />
      <main className="relative z-10 mx-auto max-w-6xl px-6 sm:px-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
