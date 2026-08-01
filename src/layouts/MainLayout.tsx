import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollMotion from "../components/ui/ScrollMotion";
import { CartProvider } from "../context/CartContext";

function MainLayout() {
  return (
    <CartProvider>
      <ScrollMotion />
      <a href="#main-content" className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-bendjo-sm bg-cream px-4 py-3 font-semibold text-ink shadow-bendjo-soft transition-transform focus:translate-y-0">
        Aller au contenu
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default MainLayout;
