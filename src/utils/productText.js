// Text helpers shared by product components.

export const productAlt = (product) =>
  [
    product.name,
    product.brand && !product.brand.startsWith('Assorted') && !product.brand.startsWith('Loose') ? `by ${product.brand}` : '',
    product.pack ? `(${product.pack})` : '',
  ]
    .filter(Boolean)
    .join(' ');

export const packLabel = (product) => {
  const parts = [product.pack, product.sizes?.length ? product.sizes.join(' · ') : null].filter(Boolean);
  return parts.length ? parts.join(' — ') : 'Pack sizes on enquiry';
};
