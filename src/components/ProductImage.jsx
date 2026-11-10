import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { CATEGORY_MAP } from '../data/products';
import { productAlt } from '../utils/productText';

// Shows the product photo in full (object-fit: contain) on a clean background.
// Without a genuine photo it shows a neutral placeholder instead of an unrelated image.
export default function ProductImage({ product, className = '' }) {
  const [failed, setFailed] = useState(false);
  const theme = CATEGORY_MAP[product.category]?.theme ?? 'from-blue-100 to-indigo-50';

  if (product.image && !failed) {
    return (
      <div className={`flex aspect-[4/3] w-full items-center justify-center bg-white p-2 ${className}`}>
        <img
          src={product.image}
          alt={productAlt(product)}
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${productAlt(product)} – photo coming soon`}
      className={`relative flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden bg-linear-to-br ${theme} ${className}`}
    >
      <span className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-white/50" aria-hidden="true" />
      <span className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-white/40" aria-hidden="true" />
      <span className="relative text-5xl drop-shadow-sm sm:text-6xl" aria-hidden="true">
        {product.emoji}
      </span>
      <span className="relative mt-2 inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-medium text-slate-500" aria-hidden="true">
        <ImageOff className="h-3 w-3" /> Photo coming soon
      </span>
    </div>
  );
}
