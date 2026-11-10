import { useEffect } from 'react';
import { BUSINESS } from '../config/business';

const DEFAULT_TITLE = `${BUSINESS.name} | Darbhanga`;

// Updates (or creates) a <meta> tag in <head>.
function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Sets the page title, meta description and Open Graph / Twitter tags for the current page.
 * index.html keeps sensible defaults for crawlers that don't run JavaScript.
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BUSINESS.name}` : DEFAULT_TITLE;
    document.title = fullTitle;
    setMeta('property', 'og:title', fullTitle);
    setMeta('name', 'twitter:title', fullTitle);
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }
  }, [title, description]);
}
