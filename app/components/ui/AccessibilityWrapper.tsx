'use client';

import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

interface AccessibilityWrapperProps {
  children: React.ReactNode;
  ariaLabel?: string;
  ariaRole?: string;
  tabIndex?: number;
  className?: string;
  animateOnView?: boolean;
  animationDelay?: number;
}

export const AccessibilityWrapper: React.FC<AccessibilityWrapperProps> = ({
  children,
  ariaLabel,
  ariaRole,
  tabIndex,
  className = '',
  animateOnView = false,
  animationDelay = 0,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  React.useEffect(() => {
    if (inView && animateOnView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: animationDelay }
      });
    }
  }, [controls, inView, animateOnView, animationDelay]);

  const accessibilityProps = {
    ...(ariaLabel && { 'aria-label': ariaLabel }),
    ...(ariaRole && { role: ariaRole }),
    ...(tabIndex !== undefined && { tabIndex }),
  };

  if (animateOnView) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className={className}
        {...accessibilityProps}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={className} {...accessibilityProps}>
      {children}
    </div>
  );
};
