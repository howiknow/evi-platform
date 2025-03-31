'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '../../utils/cn';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc = '/placeholder.jpg',
}: ImageWithFallbackProps) {
  const [error, setError] = React.useState(false);

  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      width={width}
      height={height}
      className={cn('object-cover', className)}
      onError={() => setError(true)}
    />
  );
}
