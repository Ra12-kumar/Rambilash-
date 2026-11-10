// Central business details. Change values here and they update across the whole site.
export const BUSINESS = {
  name: 'RamBilash Sah General & Wholesale Store',
  shortName: 'RamBilash Sah General',
  tagline: 'Your Trusted Store for Grocery, General Items & Puja Samagri.',
  address: {
    line1: 'Koilathan, Near Darbhanga Airport',
    city: 'Darbhanga',
    state: 'Bihar',
    pincode: '846005',
  },
  phone: '9470621075',
  // Optional second number, shown in the footer and on the Contact page when set.
  alternatePhone: null,
  whatsapp: '9470621075',
  countryCode: '91',
};

export const FULL_ADDRESS = `${BUSINESS.address.line1}, ${BUSINESS.address.city}, ${BUSINESS.address.state} – ${BUSINESS.address.pincode}`;

export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  'Koilathan, Near Darbhanga Airport, Darbhanga, Bihar 846005',
)}&z=15&output=embed`;

export const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Koilathan, Darbhanga Airport, Darbhanga, Bihar 846005',
)}`;
