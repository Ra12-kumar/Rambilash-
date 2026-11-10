import { SearchX } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, labelFor, onReset, emptyText = 'No products match your search.' }) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
        <SearchX className="h-10 w-10 text-slate-400" />
        <p className="mt-3 font-semibold text-forest-950">{emptyText}</p>
        <p className="mt-1 text-sm text-slate-500">Try a different word or filter, or ask us on WhatsApp — we may still have it.</p>
        {onReset && (
          <button type="button" onClick={onReset} className="btn-outline mt-5">
            Clear filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} categoryLabel={labelFor?.(p)} />
      ))}
    </div>
  );
}
