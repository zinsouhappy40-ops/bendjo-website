import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/products" element={<Products />} />

          <Route path="/services" element={<Services />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
