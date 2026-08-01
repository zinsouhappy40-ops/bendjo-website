import { BrowserRouter, Route, Routes, StaticRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

interface AppRouterProps {
  location?: string;
}

function RouteTree() {
  return (
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
  );
}

function AppRouter({ location }: AppRouterProps) {
  if (location) {
    return (
      <StaticRouter location={location}>
        <RouteTree />
      </StaticRouter>
    );
  }

  return (
    <BrowserRouter>
      <RouteTree />
    </BrowserRouter>
  );
}

export default AppRouter;
