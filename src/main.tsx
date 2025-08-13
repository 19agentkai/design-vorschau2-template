import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { applySeoFromConfig } from './lib/config';
import './index.css';

// Wait for config to load, then apply SEO and render app
const initApp = () => {
  if (typeof window !== 'undefined' && window.CONFIG) {
    applySeoFromConfig(window.CONFIG);
    
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } else {
    // Retry after a short delay if config not loaded yet
    setTimeout(initApp, 10);
  }
};

initApp();
