'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CookieConsentProps {
  className?: string;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    // 쿠키 동의 상태 확인
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // 페이지 로드 후 약간의 지연 시간을 두고 배너 표시
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setAccepted(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setAccepted(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 ${className}`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#0B2C46] dark:text-white mb-2">
                  쿠키 사용에 대한 안내
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AUTOCRYPT EVI Platform은 웹사이트 경험을 향상시키기 위해 쿠키를 사용합니다. 
                  필수 쿠키는 웹사이트의 기본 기능을 위해 항상 활성화되며, 분석 쿠키는 서비스 개선에 도움이 됩니다. 
                  자세한 내용은 <a href="#" className="text-[#71B0FF] hover:underline">개인정보처리방침</a>을 참조하세요.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  필수 쿠키만 허용
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 bg-gradient-to-r from-[#0B2C46] to-[#7E72FF] text-white rounded-md hover:opacity-90 transition-colors"
                >
                  모든 쿠키 허용
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
