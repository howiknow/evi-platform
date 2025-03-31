'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function AnalyticsScript() {
  const pathname = usePathname();

  // 페이지 변경 시 분석 이벤트 전송
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-MEASUREMENT-ID', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return (
    <>
      {/* Google Analytics 스크립트 */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT-ID"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MEASUREMENT-ID', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
