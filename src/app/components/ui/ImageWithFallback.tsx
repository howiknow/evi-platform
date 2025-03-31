'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/app/utils/cn';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}) => {
  const [error, setError] = React.useState(false);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={error ? '/placeholder.jpg' : src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
        onError={() => setError(true)}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
};
