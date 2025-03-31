'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0B2C46] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AUTOCRYPT</h3>
            <p className="text-gray-300 mb-4">전기차를 위한 Security-Native AI 솔루션</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#evpedia" className="text-gray-300 hover:text-white transition-colors">EVPEDIA</Link>
              </li>
              <li>
                <Link href="#ev-locate" className="text-gray-300 hover:text-white transition-colors">EV Locate</Link>
              </li>
              <li>
                <Link href="#securecharge" className="text-gray-300 hover:text-white transition-colors">SecureCharge</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">회사 정보</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">회사 소개</Link>
              </li>
              <li>
                <Link href="#careers" className="text-gray-300 hover:text-white transition-colors">채용</Link>
              </li>
              <li>
                <Link href="#news" className="text-gray-300 hover:text-white transition-colors">뉴스</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">문의</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">이메일: info@autocrypt.com</span>
              </li>
              <li className="text-gray-300">
                <span className="block">전화: 02-1234-5678</span>
              </li>
              <li>
                <Link href="#contact" className="text-white bg-[#7E72FF] hover:bg-opacity-90 px-4 py-2 rounded-md inline-block mt-2 transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} AUTOCRYPT. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              개인정보 처리방침
            </Link>
            <Link href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              이용약관
            </Link>
            <Link href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              쿠키 정책
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
