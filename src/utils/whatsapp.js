import { BUSINESS } from '../config/business';

const WA_NUMBER = `${BUSINESS.countryCode}${BUSINESS.whatsapp}`;

export const waLink = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const productEnquiryLink = (productName) =>
  waLink(
    `Hello, I am interested in purchasing ${productName} from ${BUSINESS.name}. Please share the price and availability.`,
  );

export const retailEnquiryLink = (productName) =>
  waLink(`Hello, I want to purchase ${productName} for personal use. Please share the price and availability.`);

export const wholesaleEnquiryLink = (productName) =>
  waLink(
    `Hello, I want to order ${productName} in bulk from ${BUSINESS.name}. Please share wholesale rates and available quantities.`,
  );

export const CHHATH_ENQUIRY_LINK = waLink(
  'Hello, I want to purchase Chhath Puja Samagri. Please share the available products and special discount details.',
);

export const GENERAL_ENQUIRY_LINK = waLink(
  `Hello, I would like to know more about products available at ${BUSINESS.name}.`,
);

export const telLink = (phone = BUSINESS.phone) => `tel:+${BUSINESS.countryCode}${phone}`;

export const WHOLESALE_ENQUIRY_LINK = waLink(
  `Hello, I want to buy items in bulk from ${BUSINESS.name}. Please share wholesale rates and available quantities.`,
);
