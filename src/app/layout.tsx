import type { Metadata } from 'next';
import { Pretendard } from './fonts';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'AUTOCRYPT EVI Platform: 전기차를 위한 Security-Native AI',
  description: '전기차 지식(EVPEDIA), 충전소 위치(EV Locate), 보안 기술의 완벽한 통합 플랫폼',
  keywords: '전기차, EV, 보안, AI, 충전소, EVPEDIA, EV Locate, AUTOCRYPT',
  authors: [{ name: 'AUTOCRYPT' }],
  openGraph: {
    title: 'AUTOCRYPT EVI Platform: 전기차를 위한 Security-Native AI',
    description: '전기차 지식(EVPEDIA), 충전소 위치(EV Locate), 보안 기술의 완벽한 통합 플랫폼',
    url: 'https://autocrypt-evi.com',
    siteName: 'AUTOCRYPT EVI Platform',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AUTOCRYPT EVI Platform: 전기차를 위한 Security-Native AI',
    description: '전기차 지식(EVPEDIA), 충전소 위치(EV Locate), 보안 기술의 완벽한 통합 플랫폼',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${Pretendard.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
