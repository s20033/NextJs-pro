'use client'
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['cookieConsent']);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cookies.cookieConsent) {
      setIsVisible(true);
    }
  }, [cookies.cookieConsent]);

  const handleAccept = () => {
    setCookie('cookieConsent', 'true', { path: '/', maxAge: 31536000 }); // 1 year
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-teal-950 text-white">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <p className="text-sm">
          We use cookies to improve your experience on our site. By using our site, you accept our use of cookies.
        </p>
        <button
          onClick={handleAccept}
          className="ml-4 px-4 py-2 bg-neutral-100 text-neutral-800 rounded-lg hover:bg-amber-600"
        >
          Accept
        </button>
      </div>
    </div>
  ) : null;
};
