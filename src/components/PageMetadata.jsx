import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { defaultTitle, pendingLinks, profile, projects } from '../data/portfolio';

function PageMetadata() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  const project = projects.find((item) => path === `/projects/${item.slug}`);
  const isNotFound = path !== '/' && !project;
  const title = project ? `${project.name} — ${profile.name}` : isNotFound ? `Page not found — ${profile.name}` : defaultTitle;
  const description = project ? project.cardDescription : profile.introduction;
  const url = new URL(path, pendingLinks.productionUrl).href;

  useEffect(() => {
    document.title = title;
    const values = {
      'meta[name="description"]': description,
      'meta[property="og:title"]': title,
      'meta[property="og:description"]': description,
      'meta[property="og:url"]': url,
      'meta[name="twitter:title"]': title,
      'meta[name="twitter:description"]': description,
      'meta[name="robots"]': isNotFound ? 'noindex, follow' : 'index, follow',
    };
    Object.entries(values).forEach(([selector, value]) => {
      document.querySelector(selector)?.setAttribute('content', value);
    });
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
  }, [title, description, url, isNotFound]);

  return null;
}

export default PageMetadata;
