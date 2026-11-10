import { Link } from 'react-router-dom';
import { BadgePercent, Boxes, Eye, HeartHandshake, MapPin, PackageCheck, Smile, Store, Target, Users } from 'lucide-react';
import { PageHeader, SectionHeading } from '../components/Section';
import { BUSINESS } from '../config/business';
import usePageMeta from '../hooks/usePageMeta';

const WHY = [
  { icon: BadgePercent, title: 'Affordable pricing', text: 'Competitive market prices with attractive wholesale rates.' },
  { icon: Boxes, title: 'Wide variety', text: 'Grocery, snacks, beverages, personal care, household and Puja Samagri.' },
  { icon: PackageCheck, title: 'Trusted brands', text: 'Popular FMCG brands, including a wide range of ITC products.' },
  { icon: MapPin, title: 'Easy to reach', text: 'Conveniently located in Koilathan, near Darbhanga Airport.' },
];

export default function About() {
  usePageMeta('About Us', "About RamBilash Sah General & Wholesale Store in Koilathan, Darbhanga – a trusted store for grocery, general items and Puja Samagri, for wholesale and retail customers.");
  return (
    <>
      <PageHeader eyebrow="About Us" title={`About ${BUSINESS.name}`} subtitle={BUSINESS.tagline} />

      <section className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-saffron-600 uppercase">Our Story</p>
          <h2 className="mt-2 text-2xl font-bold text-forest-950 sm:text-3xl">Your neighbourhood general &amp; wholesale store</h2>
          <div className="mt-5 space-y-4 text-slate-700">
            <p>
              RamBilash Sah General &amp; Wholesale Store is a local general and wholesale store located in Koilathan, near Darbhanga Airport, Darbhanga, Bihar. We provide a wide variety of grocery items, packaged food, snacks, beverages, household essentials, personal care products and Puja Samagri at affordable and competitive prices.
            </p>
            <p>
              Our goal is to provide customers with quality daily-use products, convenient shopping and attractive wholesale and retail pricing.
            </p>
            <p>
              From everyday grocery essentials to special festive requirements like Chhath Puja Samagri, we aim to make your shopping convenient and affordable.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-2xl bg-forest-900 p-6 text-white">
            <Target className="h-8 w-8 text-sun-400" />
            <h3 className="mt-3 text-lg font-bold">Our Mission</h3>
            <p className="mt-2 text-sm text-forest-100/90">
              To make quality daily-use products available to every household and shopkeeper at fair, affordable prices — with honest, friendly service.
            </p>
          </div>
          <div className="rounded-2xl bg-sun-300/60 p-6 text-forest-950">
            <Eye className="h-8 w-8 text-forest-800" />
            <h3 className="mt-3 text-lg font-bold">Our Vision</h3>
            <p className="mt-2 text-sm">
              To be the most trusted general and wholesale store in the Darbhanga area — the first place customers think of for grocery, FMCG and Puja needs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Why Choose Us" title="What makes us different" />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-100 text-forest-800">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-semibold text-forest-950">{title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page grid gap-6 py-14 sm:py-20 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-7">
          <Store className="h-9 w-9 text-saffron-600" />
          <h2 className="mt-4 text-xl font-bold text-forest-950">Wholesale and Retail Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-700">
            <li className="flex gap-2"><Users className="h-5 w-5 shrink-0 text-forest-700" /> <span><strong>Wholesale:</strong> bulk supply for kirana shops, small retailers, caterers and events.</span></li>
            <li className="flex gap-2"><HeartHandshake className="h-5 w-5 shrink-0 text-forest-700" /> <span><strong>Retail:</strong> everyday household shopping in the quantity you need.</span></li>
            <li className="flex gap-2"><PackageCheck className="h-5 w-5 shrink-0 text-forest-700" /> <span><strong>Enquiries:</strong> share your list on WhatsApp or by phone for prices and availability.</span></li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-7">
          <Smile className="h-9 w-9 text-saffron-600" />
          <h2 className="mt-4 text-xl font-bold text-forest-950">Customer Satisfaction</h2>
          <p className="mt-4 text-sm text-slate-700">
            We value every customer. We focus on fair prices, quality products and helpful service, so that you can shop with confidence — whether it is your monthly ration or your festive Chhath Puja preparation.
          </p>
          <Link to="/contact" className="btn-primary mt-6">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
