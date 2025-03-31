'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/Card';

export default function CustomerSegmentsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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
            주요 고객군
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            다양한 전기차 생태계 참여자들에게 맞춤형 가치를 제공합니다.
            각 고객군의 특성과 요구사항에 맞는 솔루션으로 비즈니스 성과를 극대화합니다.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-[#71B0FF] h-16 w-16 rounded-full mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0B2C46] dark:text-white">전기차 OEM</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  차량 제조사를 위한 통합 보안 및 지능형 서비스 솔루션으로 차별화된 고객 경험을 제공합니다.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>차량 데이터 보안 강화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>사용자 경험 향상을 위한 AI 기반 서비스</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>충전 인프라 통합 관리</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>차량 소프트웨어 보안 업데이트</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-[#7E72FF] h-16 w-16 rounded-full mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.01001 11.22V15.71C3.01001 20.2 4.81001 22 9.30001 22H14.69C19.18 22 20.98 20.2 20.98 15.71V11.22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.67001L9.00001 8.68C8.82001 10.51 10.17 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.31 12C20.33 12 21.81 10.36 21.61 8.35L21.33 5.6C20.97 3 19.97 2 17.35 2H14.3L15 9.01C15.17 10.66 16.66 12 18.31 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.64 12C7.29 12 8.78 10.66 8.94 9.01L9.16 6.8L9.64001 2H6.59C3.97001 2 2.97 3 2.61 5.6L2.34 8.35C2.14 10.36 3.62 12 5.64 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0B2C46] dark:text-white">충전 인프라 운영자</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  충전소 네트워크를 위한 보안 및 최적화 솔루션으로 운영 효율성과 사용자 만족도를 높입니다.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#7E72FF] mr-2">✓</span>
                    <span>안전한 충전 인증 및 결제</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7E72FF] mr-2">✓</span>
                    <span>충전소 사용률 최적화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7E72FF] mr-2">✓</span>
                    <span>실시간 모니터링 및 유지보수</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7E72FF] mr-2">✓</span>
                    <span>수요 예측 및 용량 계획</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-[#71B0FF] to-[#7E72FF] h-16 w-16 rounded-full mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V8L14 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 12V8.00004C5 5.99004 5 4.33004 8 4.04004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 12V8.00004C19 5.99004 19 4.33004 16 4.04004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0B2C46] dark:text-white">EV 모빌리티 서비스</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  전기차 공유 및 모빌리티 서비스 제공업체를 위한 솔루션으로 운영 효율성과 사용자 경험을 향상시킵니다.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>차량 및 사용자 인증 보안</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>최적 경로 및 충전 계획</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>플릿 관리 효율화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>사용자 행동 분석 및 서비스 최적화</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-full bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-[#71B0FF] h-16 w-16 rounded-full mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9 2.10001L9.55999 5.46001C9.32999 6.05001 8.68999 6.49001 8.05999 6.49001H4.55999C2.48999 6.49001 1.88999 9.06001 3.54999 10.26L6.42999 12.33C6.93999 12.71 7.17999 13.37 6.99999 13.97L5.92999 17.27C5.31999 19.36 7.56999 21.15 9.29999 19.98L12.24 17.86C12.77 17.48 13.51 17.48 14.03 17.86L16.98 19.98C18.71 21.15 20.96 19.36 20.35 17.27L19.28 13.97C19.1 13.37 19.34 12.71 19.85 12.33L22.73 10.26C24.39 9.06001 23.79 6.49001 21.72 6.49001H18.22C17.6 6.49001 16.96 6.05001 16.72 5.46001L15.38 2.10001C14.55 0.230012 11.73 0.230012 10.9 2.10001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0B2C46] dark:text-white">에너지 관리 서비스</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  전기차 충전과 에너지 그리드를 연계한 통합 에너지 관리 솔루션으로 효율성과 지속가능성을 높입니다.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>스마트 그리드 통합</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>V2G(Vehicle-to-Grid) 최적화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>피크 부하 관리</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>에너지 사용 분석 및 예측</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="h-full bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-[#7E72FF] h-16 w-16 rounded-full mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.74V4.67C22 3.47 21.02 2.58 19.83 2.68H19.77C17.67 2.86 14.48 3.93 12.7 5.05L12.53 5.16C12.24 5.34 11.76 5.34 11.47 5.16L11.22 5.01C9.44 3.9 6.26 2.84 4.16 2.67C2.97 2.57 2 3.47 2 4.66V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5.49V20.49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.75 8.49H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 11.49H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0B2C46] dark:text-white">전기차 Fleet 관리자</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  기업 및 공공 전기차 플릿을 위한 통합 관리 솔루션으로 운영 비용 절감과 효율성을 극대화합니다.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#7E72FF] mr-2">✓</span>
                    <span>차량 상태 실시간 모니터링</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7E72FF] mr-2">✓</span>
                    <span>충전 일정 최적화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7E72FF] mr-2">✓</span>
                    <span>운영 비용 분석 및 절감</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7E72FF] mr-2">✓</span>
                    <span>차량 배치 및 경로 최적화</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="h-full bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-[#71B0FF] to-[#7E72FF] h-16 w-16 rounded-full mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.16 14.56C1.74 16.18 1.74 18.82 4.16 20.43C6.91 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.92 12.73 4.16 14.56Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0B2C46] dark:text-white">정부 및 공공기관</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  전기차 정책 수립 및 인프라 계획을 위한 데이터 기반 의사결정 지원 솔루션을 제공합니다.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>충전 인프라 최적 배치 분석</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>전기차 보급 효과 분석</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>공공 충전소 보안 강화</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#71B0FF] mr-2">✓</span>
                    <span>정책 효과 모니터링 및 평가</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="bg-gradient-to-r from-[#71B0FF] to-[#7E72FF] h-20 w-20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#0B2C46] dark:text-white">
                맞춤형 솔루션이 필요하신가요?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                AUTOCRYPT EVI Platform은 다양한 고객군의 특수한 요구사항에 맞게 커스터마이징이 가능합니다.
                귀사의 비즈니스 목표와 기술 환경에 최적화된 솔루션을 제공해 드립니다.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-[#0B2C46] to-[#7E72FF] text-white rounded-md font-semibold hover:opacity-90 transition-colors"
              >
                맞춤 상담 신청하기
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
