import { WhatsAppIcon } from './Icons';
import { GENERAL_ENQUIRY_LINK } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <a
      href={GENERAL_ENQUIRY_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition hover:scale-105 sm:right-6 sm:bottom-6 sm:inline-flex"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
