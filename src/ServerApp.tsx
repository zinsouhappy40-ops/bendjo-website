import { Suspense } from "react";
import { Route, Routes, StaticRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

interface ServerAppProps {
  location: string;
}

function ServerApp({ location }: ServerAppProps) {
  return (
    <StaticRouter location={location}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Suspense fallback={null}><About /></Suspense>} />
          <Route path="/products" element={<Suspense fallback={null}><Products /></Suspense>} />
          <Route path="/services" element={<Suspense fallback={null}><Services /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={null}><Contact /></Suspense>} />
          <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
        </Route>
      </Routes>
    </StaticRouter>
  );
}

export default ServerApp;
