import { Link } from 'react-router-dom';
import { LayoutGrid, Phone } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { GENERAL_ENQUIRY_LINK, telLink } from '../utils/whatsapp';

// Sticky quick actions for phones: call, WhatsApp and browse.
export default function MobileActionBar() {
  const item = 'flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-semibold';
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgb(0_0_0/0.08)] backdrop-blur sm:hidden"
    >
      <a href={telLink()} className={`${item} text-forest-800`}>
        <Phone className="h-5 w-5" /> Call
      </a>
      <a href={GENERAL_ENQUIRY_LINK} target="_blank" rel="noopener noreferrer" className={`${item} m-1.5 rounded-xl bg-whatsapp text-forest-950`}>
        <WhatsAppIcon className="h-5 w-5" /> WhatsApp
      </a>
      <Link to="/products" className={`${item} text-forest-800`}>
        <LayoutGrid className="h-5 w-5" /> Products
      </Link>
    </nav>
  );
}
