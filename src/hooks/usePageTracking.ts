import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, id: string, config?: any) => void;
  }
}

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-PLACEHOLDER', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};
