import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { CartProvider } from "../context/CartContext";

function MainLayout() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default MainLayout;
