import { useState } from 'react';
import { CheckCircle2, MapPin, Phone, Store } from 'lucide-react';
import { PageHeader } from '../components/Section';
import { WhatsAppIcon } from '../components/Icons';
import { BUSINESS, FULL_ADDRESS, MAP_EMBED_URL, MAP_LINK_URL } from '../config/business';
import { GENERAL_ENQUIRY_LINK, telLink, waLink } from '../utils/whatsapp';
import usePageMeta from '../hooks/usePageMeta';

const EMPTY = { name: '', mobile: '', message: '' };

function validate({ name, mobile, message }) {
  const errors = {};
  if (name.trim().length < 2) errors.name = 'Please enter your name (at least 2 letters).';
  else if (!/^[\p{L} .'-]+$/u.test(name.trim())) errors.name = 'Name should contain letters only.';
  const digits = mobile.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '');
  if (!/^[6-9]\d{9}$/.test(digits)) errors.mobile = 'Please enter a valid 10-digit Indian mobile number.';
  if (message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.';
  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-forest-950">
        {label} <span className="text-saffron-600">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  usePageMeta('Contact Us', "Contact RamBilash Sah General & Wholesale Store, Koilathan, Near Darbhanga Airport, Darbhanga, Bihar – 846005. Call or WhatsApp 9470621075.");
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }
    setSubmitted(form);
    setForm(EMPTY);
  };

  const fieldProps = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: `field ${errors[name] ? 'border-red-400' : ''}`,
  });

  return (
    <>
      <PageHeader eyebrow="Contact Us" title="We're happy to help" subtitle="Call, WhatsApp or visit our store for prices, availability and wholesale enquiries." />

      <section className="container-page grid gap-8 py-12 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-100 text-forest-800">
                <Store className="h-5 w-5" />
              </span>
              <h2 className="font-bold text-forest-950">{BUSINESS.name}</h2>
            </div>
            <address className="mt-5 space-y-4 text-sm not-italic text-slate-700">
              <p className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-saffron-600" /> {FULL_ADDRESS}
              </p>
              <p className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-saffron-600" />
                <a href={telLink()} className="font-semibold text-forest-800 hover:underline">
                  {BUSINESS.phone}
                </a>
              </p>
              {BUSINESS.alternatePhone && (
                <p className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-saffron-600" />
                  <a href={telLink(BUSINESS.alternatePhone)} className="font-semibold text-forest-800 hover:underline">
                    {BUSINESS.alternatePhone}
                  </a>
                </p>
              )}
            </address>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href={telLink()} className="btn-primary">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a href={GENERAL_ENQUIRY_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <iframe
              title="Map showing RamBilash Sah General & Wholesale Store location"
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0"
            />
            <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer" className="block p-4 text-sm font-semibold text-forest-800 hover:underline">
              Open in Google Maps →
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-forest-950">Send us an enquiry</h2>
          <p className="mt-1 text-sm text-slate-600">Fill in your details and we'll help you with prices and availability.</p>

          {submitted ? (
            <div className="mt-6 rounded-2xl bg-forest-50 p-6 ring-1 ring-forest-100" role="status">
              <CheckCircle2 className="h-10 w-10 text-forest-700" />
              <p className="mt-3 text-lg font-semibold text-forest-950">Thank you, {submitted.name.trim()}!</p>
              <p className="mt-2 text-sm text-slate-700">
                Your enquiry has been recorded on this page. This website does not send form messages to the store automatically — to reach us right away, send the same message on WhatsApp or call us.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(`Hello, I am ${submitted.name.trim()} (${submitted.mobile.trim()}). ${submitted.message.trim()}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Send on WhatsApp
                </a>
                <button type="button" onClick={() => setSubmitted(null)} className="btn-outline">
                  Write another enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
              <Field id="name" label="Name" error={errors.name}>
                <input type="text" autoComplete="name" placeholder="Your full name" {...fieldProps('name')} />
              </Field>
              <Field id="mobile" label="Mobile Number" error={errors.mobile}>
                <input type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile number" maxLength={14} {...fieldProps('mobile')} />
              </Field>
              <Field id="message" label="Message" error={errors.message}>
                <textarea rows={5} placeholder="Which products do you need? Wholesale or retail?" {...fieldProps('message')} />
              </Field>
              <button type="submit" className="btn-primary w-full py-3.5 text-base">
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
