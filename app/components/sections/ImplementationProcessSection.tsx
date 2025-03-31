'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ImplementationProcessSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#0B2C46] dark:text-white">
            도입 과정
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AUTOCRYPT EVI Platform의 도입은 체계적인 프로세스를 통해 진행됩니다.
            고객의 요구사항을 정확히 파악하고 최적의 솔루션을 제공하기 위한 단계별 접근 방식을 따릅니다.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* 타임라인 라인 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#71B0FF] to-[#7E72FF] rounded-full hidden md:block"></div>
          
          <div className="space-y-12">
            {/* 단계 1: 요구사항 분석 */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 md:pr-12 md:text-right"
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md inline-block">
                  <h3 className="text-xl font-bold mb-3 text-[#0B2C46] dark:text-white">1. 요구사항 분석</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    고객의 비즈니스 목표, 기술 환경, 보안 요구사항을 심층적으로 분석합니다.
                    전기차 생태계 내 고객의 위치와 역할을 파악하여 맞춤형 솔루션의 기반을 마련합니다.
                  </p>
                  <ul className="mt-4 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li className="flex items-start justify-end">
                      <span>비즈니스 목표 정의</span>
                      <span className="text-[#71B0FF] ml-2">✓</span>
                    </li>
                    <li className="flex items-start justify-end">
                      <span>기술 환경 평가</span>
                      <span className="text-[#71B0FF] ml-2">✓</span>
                    </li>
                    <li className="flex items-start justify-end">
                      <span>보안 요구사항 식별</span>
                      <span className="text-[#71B0FF] ml-2">✓</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#71B0FF] rounded-full flex items-center justify-center text-white font-bold text-lg z-10 hidden md:flex">1</div>
            </div>
            
            {/* 단계 2: 솔루션 설계 */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 md:pl-12 md:ml-auto"
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md inline-block">
                  <h3 className="text-xl font-bold mb-3 text-[#0B2C46] dark:text-white">2. 솔루션 설계</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    분석된 요구사항을 바탕으로 맞춤형 솔루션을 설계합니다.
                    필요한 서비스 모듈을 선택하고, 고객 환경에 최적화된 아키텍처를 구성합니다.
                  </p>
                  <ul className="mt-4 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="text-[#7E72FF] mr-2">✓</span>
                      <span>서비스 모듈 선택</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#7E72FF] mr-2">✓</span>
                      <span>아키텍처 설계</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#7E72FF] mr-2">✓</span>
                      <span>통합 계획 수립</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#7E72FF] rounded-full flex items-center justify-center text-white font-bold text-lg z-10 hidden md:flex">2</div>
            </div>
            
            {/* 단계 3: 구현 및 통합 */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 md:pr-12 md:text-right"
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md inline-block">
                  <h3 className="text-xl font-bold mb-3 text-[#0B2C46] dark:text-white">3. 구현 및 통합</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    설계된 솔루션을 구현하고 고객의 기존 시스템과 통합합니다.
                    데이터 마이그레이션, API 연동, 보안 설정 등을 수행하여 원활한 작동을 보장합니다.
                  </p>
                  <ul className="mt-4 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li className="flex items-start justify-end">
                      <span>시스템 구현</span>
                      <span className="text-[#71B0FF] ml-2">✓</span>
                    </li>
                    <li className="flex items-start justify-end">
                      <span>데이터 마이그레이션</span>
                      <span className="text-[#71B0FF] ml-2">✓</span>
                    </li>
                    <li className="flex items-start justify-end">
                      <span>API 연동</span>
                      <span className="text-[#71B0FF] ml-2">✓</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#71B0FF] rounded-full flex items-center justify-center text-white font-bold text-lg z-10 hidden md:flex">3</div>
            </div>
            
            {/* 단계 4: 테스트 및 검증 */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 md:pl-12 md:ml-auto"
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md inline-block">
                  <h3 className="text-xl font-bold mb-3 text-[#0B2C46] dark:text-white">4. 테스트 및 검증</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    구현된 솔루션의 기능, 성능, 보안을 철저히 테스트하고 검증합니다.
                    실제 환경에서의 작동을 확인하고, 발견된 문제점을 수정하여 완벽한 솔루션을 보장합니다.
                  </p>
                  <ul className="mt-4 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="text-[#7E72FF] mr-2">✓</span>
                      <span>기능 테스트</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#7E72FF] mr-2">✓</span>
                      <span>성능 테스트</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#7E72FF] mr-2">✓</span>
                      <span>보안 취약점 검사</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#7E72FF] rounded-full flex items-center justify-center text-white font-bold text-lg z-10 hidden md:flex">4</div>
            </div>
            
            {/* 단계 5: 배포 및 교육 */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 md:pr-12 md:text-right"
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md inline-block">
                  <h3 className="text-xl font-bold mb-3 text-[#0B2C46] dark:text-white">5. 배포 및 교육</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    검증된 솔루션을 실제 환경에 배포하고, 고객 팀에게 시스템 사용법을 교육합니다.
                    원활한 전환을 위한 지원과 함께 사용자 매뉴얼과 기술 문서를 제공합니다.
                  </p>
                  <ul className="mt-4 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li className="flex items-start justify-end">
                      <span>시스템 배포</span>
                      <span className="text-[#71B0FF] ml-2">✓</span>
                    </li>
                    <li className="flex items-start justify-end">
                      <span>사용자 교육</span>
                      <span className="text-[#71B0FF] ml-2">✓</span>
                    </li>
                    <li className="flex items-start justify-end">
                      <span>문서화</span>
                      <span className="text-[#71B0FF] ml-2">✓</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#71B0FF] rounded-full flex items-center justify-center text-white font-bold text-lg z-10 hidden md:flex">5</div>
            </div>
            
            {/* 단계 6: 지속적 지원 및 최적화 */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 md:pl-12 md:ml-auto"
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md inline-block">
                  <h3 className="text-xl font-bold mb-3 text-[#0B2C46] dark:text-white">6. 지속적 지원 및 최적화</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    배포 후에도 지속적인 기술 지원과 시스템 모니터링을 제공합니다.
                    정기적인 업데이트와 최적화를 통해 시스템의 성능과 보안을 유지하고 향상시킵니다.
                  </p>
                  <ul className="mt-4 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="text-[#7E72FF] mr-2">✓</span>
                      <span>기술 지원</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#7E72FF] mr-2">✓</span>
                      <span>성능 모니터링</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#7E72FF] mr-2">✓</span>
                      <span>정기 업데이트</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#7E72FF] rounded-full flex items-center justify-center text-white font-bold text-lg z-10 hidden md:flex">6</div>
            </div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="bg-gradient-to-r from-[#71B0FF] to-[#7E72FF] h-20 w-20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.31 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#0B2C46] dark:text-white">
                도입 상담이 필요하신가요?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                AUTOCRYPT EVI Platform 도입에 관한 상담을 원하시면 언제든지 연락주세요.
                전문 컨설턴트가 귀사의 요구사항을 분석하고 최적의 솔루션을 제안해 드립니다.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-[#0B2C46] to-[#7E72FF] text-white rounded-md font-semibold hover:opacity-90 transition-colors"
              >
                무료 상담 신청하기
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
