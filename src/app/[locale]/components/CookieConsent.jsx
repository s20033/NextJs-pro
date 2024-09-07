'use client'
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export const CookieConsent = () => {
  const t = useTranslations("cookies")
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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-customTeal text-white">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <p className="text-sm">
          {t("text")}
        </p>
        <button
          onClick={handleAccept}
          className="ml-6 px-6 py-0 bg-neutral-100 text-neutral-800 rounded-lg hover:bg-amber-600"
        >
          {t("button")}
        </button>
      </div>
    </div>
  ) : null;
};
