import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { LogoMark } from './Icons';
import { BUSINESS } from '../config/business';
import { telLink } from '../utils/whatsapp';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/itc-brands', label: 'ITC Brands' },
  { to: '/hul-brands', label: 'HUL Brands' },
  { to: '/puja-samagri', label: 'Puja Samagri' },
  { to: '/chhath-puja-offers', label: 'Special Offers' },
];

const TICKER = [
  'Wholesale & Retail — one store for home and shop',
  'Grocery · FMCG · Puja Samagri',
  'Bulk orders: send your list on WhatsApp for wholesale rates',
  'Popular brands: Fortune, Aashirvaad, Parle, Rakesh Masala, ITC & more',
  'Koilathan, Near Darbhanga Airport',
];

const linkClass = ({ isActive }) =>
  `rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition ${
    isActive ? 'bg-forest-50 text-forest-800' : 'text-slate-700 hover:text-forest-700'
  }`;

export default function Navbar() {
  // Menu is tied to the path it was opened on, so it closes automatically on navigation.
  const [openOn, setOpenOn] = useState(null);
  const { pathname } = useLocation();
  const open = openOn === pathname;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="bg-forest-900 text-xs text-forest-100">
        <div className="container-page flex items-center gap-4 py-1.5">
          <div className="relative min-w-0 flex-1 overflow-hidden" aria-label="Store highlights">
            <ul className="animate-marquee flex w-max gap-8 whitespace-nowrap">
              {[...TICKER, ...TICKER].map((t, i) => (
                <li key={i} aria-hidden={i >= TICKER.length} className="flex items-center gap-8">
                  <span>{t}</span>
                  <span className="text-sun-400" aria-hidden="true">✦</span>
                </li>
              ))}
            </ul>
          </div>
          <a href={telLink()} className="hidden shrink-0 items-center gap-1.5 font-medium text-sun-300 hover:text-sun-400 sm:flex">
            <Phone className="h-3.5 w-3.5" /> {BUSINESS.phone}
          </a>
        </div>
      </div>

      <nav className="container-page flex h-16 items-center justify-between gap-4" aria-label="Main">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <LogoMark className="h-10 w-10 shrink-0" />
          <span className="min-w-0 leading-tight">
            <span className="block text-base font-extrabold text-forest-900 sm:hidden">RamBilash Sah</span>
            <span className="hidden truncate text-base font-bold text-forest-900 sm:block">{BUSINESS.shortName}</span>
            <span className="block truncate text-[10px] font-semibold tracking-wide text-saffron-600 uppercase sm:text-[11px]">
              General &amp; Wholesale Store
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn-accent hidden py-2.5 sm:inline-flex">
            <Phone className="h-4 w-4" /> Contact Us
          </Link>
          <a
            href={telLink()}
            aria-label={`Call ${BUSINESS.phone}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sun-400 text-forest-950 sm:hidden"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-forest-900 hover:bg-forest-50 xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpenOn(open ? null : pathname)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white xl:hidden">
          <ul className="container-page flex flex-col gap-1 py-3">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.end} onClick={() => setOpenOn(null)} className={({ isActive }) => `${linkClass({ isActive })} block py-3`}>
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/contact" className="btn-accent w-full">
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
