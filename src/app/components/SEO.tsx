'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'AUTOCRYPT EVI Platform: 전기차를 위한 Security-Native AI',
  description = '전기차 지식(EVPEDIA), 충전소 위치(EV Locate), 보안 기술의 완벽한 통합 플랫폼',
  keywords = '전기차, EV, 보안, AI, 충전소, EVPEDIA, EV Locate, AUTOCRYPT',
  ogImage = '/og-image.jpg',
  noIndex = false,
}) => {
  const pathname = usePathname();
  const siteUrl = 'https://autocrypt-evi.com';
  const canonicalUrl = `${siteUrl}${pathname}`;

  return (
    <Head>
      {/* 기본 메타 태그 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* 오픈 그래프 태그 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AUTOCRYPT EVI Platform" />
      <meta property="og:locale" content="ko_KR" />
      
      {/* 트위터 카드 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* 검색 엔진 지시사항 */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* 접근성 및 언어 설정 */}
      <html lang="ko" />
    </Head>
  );
};
