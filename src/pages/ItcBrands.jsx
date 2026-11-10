import { PageHeader } from '../components/Section';
import ProductGrid from '../components/ProductGrid';
import { ITC_BRAND_MAP, ITC_PRODUCTS } from '../data/products';
import usePageMeta from '../hooks/usePageMeta';

const labelFor = (p) => ITC_BRAND_MAP[p.brandId].range;

export default function ItcBrands() {
  usePageMeta('ITC Brands', "ITC brands catalogue – Aashirvaad, Sunfeast, Bingo!, YiPPee!, Mangaldeep, Fiama, Savlon, Classmate and more. Enquire for price and availability.");
  return (
    <>
      <PageHeader
        eyebrow="Trusted FMCG Brands"
        title="ITC Brands Catalogue"
        subtitle="Popular ITC brands across food, snacks, personal care, household and stationery. Enquire on WhatsApp for price and availability."
      />
      <section className="container-page py-8 sm:py-10">
        <ProductGrid products={ITC_PRODUCTS} labelFor={labelFor} />
      </section>
    </>
  );
}
