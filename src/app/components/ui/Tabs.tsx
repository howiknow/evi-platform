'use client';

import React, { useState } from 'react';
import { cn } from '@/app/utils/cn';

interface TabsProps {
  defaultValue?: string;
  className?: string;
  children: React.ReactNode;
}

interface TabListProps {
  className?: string;
  children: React.ReactNode;
}

interface TabTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: (value: string) => void;
}

interface TabContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
  activeTab?: string;
}

export function Tabs({ defaultValue, className, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || '');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  // Clone children to pass activeTab and handleTabChange
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        activeTab,
        onTabChange: handleTabChange,
      });
    }
    return child;
  });

  return (
    <div className={cn("w-full", className)}>
      {childrenWithProps}
    </div>
  );
}

export function TabList({ className, children, onTabChange, activeTab }: TabListProps & { onTabChange?: (value: string) => void; activeTab?: string }) {
  // Clone children to pass activeTab and handleTabChange
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        isActive: (child.props as any).value === activeTab,
        onClick: onTabChange,
      });
    }
    return child;
  });

  return (
    <div className={cn("flex border-b border-gray-200 dark:border-gray-700", className)}>
      {childrenWithProps}
    </div>
  );
}

export function TabTrigger({ value, className, children, isActive, onClick }: TabTriggerProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 font-medium transition-colors focus:outline-none",
        isActive 
          ? "border-b-2 border-[#71B0FF] text-[#71B0FF]" 
          : "text-gray-500 dark:text-gray-400 hover:text-[#71B0FF] dark:hover:text-[#71B0FF]",
        className
      )}
      onClick={() => onClick && onClick(value)}
    >
      {children}
    </button>
  );
}

export function TabContent({ value, className, children, activeTab }: TabContentProps) {
  return activeTab === value ? (
    <div className={cn("mt-6", className)}>
      {children}
    </div>
  ) : null;
}
