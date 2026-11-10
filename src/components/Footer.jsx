import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { LogoMark, WhatsAppIcon } from './Icons';
import { BUSINESS, FULL_ADDRESS, MAP_LINK_URL } from '../config/business';
import { GENERAL_ENQUIRY_LINK, telLink } from '../utils/whatsapp';

const QUICK = [
  ['/about', 'About Us'],
  ['/products', 'All Products'],
  ['/itc-brands', 'ITC Brands'],
  ['/hul-brands', 'HUL Brands'],
  ['/puja-samagri', 'Puja Samagri'],
  ['/chhath-puja-offers', 'Special Offers'],
  ['/contact', 'Contact Us'],
];

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-100">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark />
            <p className="font-bold text-white">{BUSINESS.name}</p>
          </div>
          <p className="mt-4 max-w-sm text-sm text-forest-100/80">{BUSINESS.tagline}</p>
          <p className="mt-2 text-sm text-forest-100/80">Wholesale &amp; retail grocery, FMCG, household and Puja Samagri.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold tracking-wider text-sun-400 uppercase">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {QUICK.map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-sun-300">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <h2 className="text-sm font-semibold tracking-wider text-sun-400 uppercase">Visit or Call</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-sun-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun-400" /> {FULL_ADDRESS}
              </a>
            </li>
            <li>
              <a href={telLink()} className="flex items-center gap-2 hover:text-sun-300">
                <Phone className="h-4 w-4 text-sun-400" /> {BUSINESS.phone}
              </a>
            </li>
            {BUSINESS.alternatePhone && (
              <li>
                <a href={telLink(BUSINESS.alternatePhone)} className="flex items-center gap-2 hover:text-sun-300">
                  <Phone className="h-4 w-4 text-sun-400" /> {BUSINESS.alternatePhone}
                </a>
              </li>
            )}
            <li>
              <a href={GENERAL_ENQUIRY_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sun-300">
                <WhatsAppIcon className="h-4 w-4 text-whatsapp" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </address>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-5 text-xs text-forest-100/60">
          © {YEAR} {BUSINESS.name}. Brand names belong to their respective owners. Product availability and prices are subject to confirmation.
        </p>
      </div>
    </footer>
  );
}
