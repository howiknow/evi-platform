'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 z-50 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-[#0B2C46] dark:text-white">
            AUTOCRYPT
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="text-gray-700 dark:text-gray-300 hover:text-[#71B0FF] dark:hover:text-[#71B0FF] transition-colors">
            서비스
          </Link>
          <Link href="#architecture" className="text-gray-700 dark:text-gray-300 hover:text-[#71B0FF] dark:hover:text-[#71B0FF] transition-colors">
            아키텍처
          </Link>
          <Link href="#customers" className="text-gray-700 dark:text-gray-300 hover:text-[#71B0FF] dark:hover:text-[#71B0FF] transition-colors">
            고객군
          </Link>
          <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-[#71B0FF] dark:hover:text-[#71B0FF] transition-colors">
            기능
          </Link>
          <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-[#71B0FF] dark:hover:text-[#71B0FF] transition-colors">
            문의
          </Link>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
          <Link 
            href="#demo" 
            className="px-6 py-2 rounded-md bg-gradient-to-r from-[#0B2C46] to-[#7E72FF] text-white hover:opacity-90 transition-opacity"
          >
            데모 신청
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="#services" 
              className="text-gray-700 dark:text-gray-300 hover:text-[#71B0FF] dark:hover:text-[#71B0FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              서비스
            </Link>
            <Link 
              href="#architecture" 
              className="text-gray-700 dark:text-gray-300 hover:text-[#71B0FF] dark:hover:text-[#71B0FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              아키텍처
            </Link>
            <Link 
              href="#customers" 
              className="text-gray-700 dark:text-gray-300 hover:text-[#71B0FF] dark:hover:text-[#71B0FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              고객군
            </Link>
            <Link 
              href="#features" 
              className="text-gray-700 dark:text-gray-300 hover:text-[#71B0FF] dark:hover:text-[#71B0FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              기능
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 dark:text-gray-300 hover:text-[#71B0FF] dark:hover:text-[#71B0FF] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              문의
            </Link>
            <Link 
              href="#demo" 
              className="px-6 py-2 rounded-md bg-gradient-to-r from-[#0B2C46] to-[#7E72FF] text-white hover:opacity-90 transition-opacity text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              데모 신청
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
