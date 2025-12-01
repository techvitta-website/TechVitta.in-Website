import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Services } from './pages/Services';
import { Blogs } from './pages/Blogs';
import { BlogDetail } from './pages/BlogDetail';
import { Contact } from './pages/Contact';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const AppRouter = () => {
  // Normalize pathname (remove trailing slash except for root)
  const normalizePath = (path: string) => {
    if (path === '/') return '/';
    return path.replace(/\/$/, '') || '/';
  };

  const [currentPage, setCurrentPage] = useState(normalizePath(window.location.pathname));

  useEffect(() => {
    const handleNavigation = () => {
      const normalizedPath = normalizePath(window.location.pathname);
      setCurrentPage(normalizedPath);
      // Scroll to top on back/forward button navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  useEffect(() => {
    // Scroll to top whenever currentPage changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigateTo = (path: string) => {
    const normalizedPath = normalizePath(path);
    window.history.pushState({}, '', normalizedPath);
    setCurrentPage(normalizedPath);
  };

  // Make navigateTo available globally for navbar
  (window as any).navigateTo = navigateTo;

  if (currentPage.startsWith('/blogs/') && currentPage !== '/blogs') {
    return <BlogDetail />;
  }

  switch (currentPage) {
    case '/':
      return <App />;
    case '/about':
      return <About />;
    case '/products':
      return <Products />;
    case '/services':
      return <Services />;
    case '/blogs':
      return <Blogs />;
    case '/contact':
      return <Contact />;
    default:
      return <App />;
  }
};

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);