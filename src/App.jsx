import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Home loads immediately; other pages are split into separate chunks.
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const ItcBrands = lazy(() => import('./pages/ItcBrands'));
const HulBrands = lazy(() => import('./pages/HulBrands'));
const PujaSamagri = lazy(() => import('./pages/PujaSamagri'));
const ChhathOffers = lazy(() => import('./pages/ChhathOffers'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="itc-brands" element={<ItcBrands />} />
          <Route path="hul-brands" element={<HulBrands />} />
          <Route path="puja-samagri" element={<PujaSamagri />} />
          <Route path="chhath-puja-offers" element={<ChhathOffers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
