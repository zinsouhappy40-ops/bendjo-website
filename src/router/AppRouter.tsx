import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const Services = lazy(() => import("../pages/Services"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

function RouteTree() {
  return (
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
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <RouteTree />
    </BrowserRouter>
  );
}

export default AppRouter;
