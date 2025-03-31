'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';

export default function ValuePropositionSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#0B2C46] dark:text-white">
            AUTOCRYPT EVI Platform의 핵심 가치
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            전기차 생태계를 위한 보안 중심 AI 솔루션으로, 안전하고 지능적인 전기차 경험을 제공합니다.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-[#71B0FF] h-16 w-16 rounded-full mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 12.9V10.1C16 8.6 15.5 8 13.9 8H10.1C8.5 8 8 8.6 8 10.1V13.9C8 15.4 8.5 16 10.1 16H13.9C15.5 16 16 15.4 16 13.9V12.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 6H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 18H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5 11H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5 13H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0B2C46] dark:text-white">보안 중심 접근법</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  설계부터 내장된 보안으로 전기차 생태계의 안전을 보장합니다. 모든 데이터와 상호작용이 보안 중심으로 설계되어 있어 사이버 위협으로부터 안전합니다.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>엔드투엔드 암호화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>실시간 위협 감지</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>안전한 데이터 처리</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-[#7E72FF] h-16 w-16 rounded-full mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0B2C46] dark:text-white">AI 기반 맥락 이해</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  사용자 상황에 맞는 최적의 솔루션을 제공합니다. AI가 맥락을 이해하고 상황에 맞는 정보와 서비스를 제공하여 사용자 경험을 향상시킵니다.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#7E72FF] mr-2">✓</span>
                    <span>사용자 행동 패턴 학습</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7E72FF] mr-2">✓</span>
                    <span>상황별 맞춤형 추천</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7E72FF] mr-2">✓</span>
                    <span>지능형 의사결정 지원</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-[#71B0FF] to-[#7E72FF] h-16 w-16 rounded-full mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 12C17 14.76 14.76 17 12 17V7C14.76 7 17 9.24 17 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7V17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0B2C46] dark:text-white">통합 플랫폼</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  분산된 시스템이 아닌 단일 인터페이스로 모든 전기차 관련 서비스를 통합하여 제공합니다. 이를 통해 사용자는 하나의 플랫폼에서 모든 기능을 이용할 수 있습니다.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>단일 인터페이스</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>통합 데이터 관리</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>원활한 서비스 연계</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
