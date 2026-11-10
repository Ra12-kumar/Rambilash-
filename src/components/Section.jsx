export function SectionHeading({ eyebrow, title, subtitle, align = 'center', action }) {
  const centered = align === 'center';
  return (
    <div className={`mb-8 flex flex-col gap-4 sm:mb-10 ${centered ? 'items-center text-center' : 'sm:flex-row sm:items-end sm:justify-between'}`}>
      <div className={centered ? 'max-w-2xl' : 'max-w-2xl'}>
        {eyebrow && <p className="text-xs font-semibold tracking-[0.18em] text-saffron-600 uppercase">{eyebrow}</p>}
        <h2 className="mt-2 text-2xl font-bold text-forest-950 sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function PageHeader({ eyebrow, title, subtitle, children, tone = 'green' }) {
  const tones = {
    green: 'bg-forest-900 text-white',
    festive: 'bg-linear-to-br from-saffron-600 via-saffron-500 to-sun-400 text-white',
  };
  return (
    <section className={`relative overflow-hidden ${tones[tone]}`}>
      <div className="festive-pattern absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-page relative py-8 sm:py-14">
        {eyebrow && <p className="text-xs font-semibold tracking-[0.18em] text-sun-300 uppercase">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl text-2xl font-extrabold sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-sm text-white/85 sm:mt-3 sm:text-base">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
