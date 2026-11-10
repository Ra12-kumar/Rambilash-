import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-6xl" aria-hidden="true">🛒</p>
      <h1 className="mt-4 text-3xl font-bold text-forest-950">Page not found</h1>
      <p className="mt-2 text-slate-600">The page you are looking for doesn't exist.</p>
      <Link to="/" className="btn-primary mt-6">
        Back to Home
      </Link>
    </section>
  );
}
