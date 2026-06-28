import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);

    // Update gtag consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[999] p-4 md:p-6"
        >
          <div className="max-w-[1180px] mx-auto bg-bg-mid border border-border-gold shadow-[0_4px_30px_rgba(0,0,0,0.4)] rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 backdrop-blur-md">
            <div className="flex-1">
              <h3 className="font-serif text-gold text-[1.1rem] font-semibold mb-1">
                We value your privacy
              </h3>
              <p className="text-cream-muted text-[0.85rem] leading-relaxed">
                We use cookies to analyze site traffic and improve your experience. By clicking "Accept", you agree to our use of cookies and tracking technologies.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-5 py-2.5 rounded-lg border border-border-subtle text-cream-dim text-[0.85rem] font-medium hover:text-cream hover:bg-white/5 transition-colors duration-200"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2.5 rounded-lg bg-gold text-[#140C00] text-[0.85rem] font-medium hover:bg-gold-bright transition-colors duration-200 shadow-[0_0_15px_rgba(200,150,60,0.2)] hover:shadow-[0_0_20px_rgba(230,184,74,0.4)]"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
