'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface SkipToContentProps {
  contentId?: string;
  className?: string;
}

export const SkipToContent: React.FC<SkipToContentProps> = ({
  contentId = 'main-content',
  className = '',
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname}#${contentId}`}
      className={`fixed top-0 left-0 p-3 bg-white dark:bg-gray-900 text-[#0B2C46] dark:text-white z-50 transform -translate-y-full focus:translate-y-0 transition-transform duration-200 outline-none focus:ring-2 focus:ring-[#71B0FF] ${className}`}
      aria-label="메인 콘텐츠로 건너뛰기"
    >
      메인 콘텐츠로 건너뛰기
    </Link>
  );
};
