import { Boxes, ShoppingBag } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { productEnquiryLink, retailEnquiryLink, wholesaleEnquiryLink } from '../utils/whatsapp';

const ext = { target: '_blank', rel: 'noopener noreferrer' };

// WhatsApp enquiry + Retail / Bulk order buttons, all opening WhatsApp with a prefilled message.
export default function EnquiryButtons({ name, size = 'sm' }) {
  // `!` makes these win over the base .btn padding/text size.
  const pad = size === 'lg' ? 'py-3! text-sm!' : 'py-2! text-xs! whitespace-nowrap';
  return (
    <div className="grid gap-2">
      <a href={productEnquiryLink(name)} {...ext} className={`btn-whatsapp w-full ${size === 'lg' ? 'py-3.5 text-base' : 'py-2.5'}`} aria-label={`Enquire about ${name} on WhatsApp`}>
        <WhatsAppIcon className="h-4 w-4 shrink-0" />
        {size === 'lg' ? 'WhatsApp Enquiry' : (
          <>
            <span className="sm:hidden">Enquire</span>
            <span className="hidden sm:inline">WhatsApp Enquiry</span>
          </>
        )}
      </a>
      <div className="grid grid-cols-2 gap-2">
        <a href={retailEnquiryLink(name)} {...ext} className={`btn-outline gap-1! px-2! ${pad}`} aria-label={`Retail order enquiry for ${name}`}>
          <ShoppingBag className="h-3.5 w-3.5 shrink-0" /> Retail
        </a>
        <a href={wholesaleEnquiryLink(name)} {...ext} className={`btn gap-1! bg-forest-700 px-2! text-white hover:bg-forest-800 ${pad}`} aria-label={`Bulk order enquiry for ${name}`}>
          <Boxes className="h-3.5 w-3.5 shrink-0" />
          {size === 'lg' ? 'Bulk Order' : (
            <>
              <span className="sm:hidden">Bulk</span>
              <span className="hidden sm:inline">Bulk Order</span>
            </>
          )}
        </a>
      </div>
    </div>
  );
}
