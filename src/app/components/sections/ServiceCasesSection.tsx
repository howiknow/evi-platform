'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabList, TabTrigger, TabContent } from '../ui/Tabs';
import { Card, CardContent } from '../ui/Card';

export default function ServiceCasesSection() {
  const [activeTab, setActiveTab] = useState('evpedia');

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
            주요 서비스 케이스
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AUTOCRYPT EVI Platform이 제공하는 혁신적인 서비스를 통해 전기차 생태계의 문제를 해결합니다.
            각 서비스는 보안과 AI를 결합하여 최적의 사용자 경험을 제공합니다.
          </p>
        </motion.div>
        
        <Tabs defaultValue="evpedia" className="mb-12">
          <TabList>
            <TabTrigger value="evpedia" onClick={() => setActiveTab('evpedia')}>
              EVPEDIA
            </TabTrigger>
            <TabTrigger value="evlocate" onClick={() => setActiveTab('evlocate')}>
              EV Locate
            </TabTrigger>
            <TabTrigger value="securecharge" onClick={() => setActiveTab('securecharge')}>
              SecureCharge
            </TabTrigger>
          </TabList>
          
          <TabContent value="evpedia" activeTab={activeTab}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <Card className="bg-gray-50 dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-[#0B2C46] dark:text-white">
                        EVPEDIA: 전기차 통합 지식 베이스
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#71B0FF] mb-2">문제 상황</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          전기차 관련 정보가 분산되어 있어 사용자가 필요한 정보를 찾기 어렵고, 정보의 신뢰성을 판단하기 어렵습니다.
                          또한 기술적 문제 발생 시 즉각적인 해결책을 찾기 어려운 상황입니다.
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#71B0FF] mb-2">솔루션</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          AI 기반 전기차 지식 베이스를 통해 사용자 질문에 맞춤형 답변을 제공하고, 보안 검증된 정보만을 제공합니다.
                          자연어 처리 기술을 활용하여 복잡한 질문도 이해하고 정확한 답변을 제공합니다.
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#71B0FF] mb-2">고객 가치</h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                          <li className="flex items-start">
                            <span className="text-[#71B0FF] mr-2">✓</span>
                            <span>신뢰할 수 있는 정보 접근성 향상</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#71B0FF] mr-2">✓</span>
                            <span>의사결정 시간 단축</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#71B0FF] mr-2">✓</span>
                            <span>전기차 관련 지식 격차 해소</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#71B0FF] mr-2">✓</span>
                            <span>기술적 문제 해결 시간 단축</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#71B0FF] mb-2">적용 사례</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          전기차 제조사 고객 지원, 충전소 운영자 기술 지원, 전기차 사용자 커뮤니티, 정비소 기술 지원 등에 활용되고 있습니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="bg-gradient-to-br from-[#71B0FF]/10 to-[#7E72FF]/10 dark:from-[#71B0FF]/20 dark:to-[#7E72FF]/20 rounded-lg h-full flex items-center justify-center p-8">
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md">
                          <div className="flex items-center mb-4">
                            <div className="bg-[#71B0FF] h-10 w-10 rounded-full flex items-center justify-center text-white mr-3">
                              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.5 9.09H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.6947 13.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.6947 16.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.9955 13.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.9955 16.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.29431 13.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-[#0B2C46] dark:text-white">EVPEDIA</h3>
                          </div>
                          
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              전기차 배터리 효율을 최대화하는 방법은 무엇인가요?
                            </p>
                          </div>
                          
                          <div className="bg-[#71B0FF]/10 rounded-lg p-4 mb-4">
                            <p className="text-gray-700 dark:text-gray-200 text-sm">
                              전기차 배터리 효율을 최대화하기 위한 주요 방법은 다음과 같습니다:
                            </p>
                            <ul className="text-gray-700 dark:text-gray-200 text-sm mt-2 space-y-1">
                              <li>1. 20-80% 충전 범위 유지</li>
                              <li>2. 급속 충전 빈도 최소화</li>
                              <li>3. 극단적 온도 환경 피하기</li>
                              <li>4. 에코 모드 활용</li>
                              <li>5. 정기적인 소프트웨어 업데이트</li>
                            </ul>
                            <p className="text-gray-700 dark:text-gray-200 text-sm mt-2">
                              자세한 내용이 필요하신가요?
                            </p>
                          </div>
                          
                          <div className="flex">
                            <input 
                              type="text" 
                              placeholder="질문을 입력하세요..." 
                              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#71B0FF] dark:bg-gray-800 dark:text-white"
                            />
                            <button className="bg-[#71B0FF] text-white px-4 py-2 rounded-r-md">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.11 13.6501L13.69 10.0601" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#71B0FF] to-[#7E72FF] rounded-full opacity-20 blur-xl"></div>
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#71B0FF] to-[#7E72FF] rounded-full opacity-10 blur-xl"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabContent>
          
          <TabContent value="evlocate" activeTab={activeTab}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <Card className="bg-gray-50 dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-[#0B2C46] dark:text-white">
                        EV Locate: 지능형 충전소 위치 서비스
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#7E72FF] mb-2">문제 상황</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          전기차 사용자들은 충전소 위치 정보뿐만 아니라 실시간 가용성, 충전 속도, 호환성 등 다양한 정보가 필요하지만
                          이러한 정보가 통합되어 있지 않아 충전 계획을 세우기 어렵습니다.
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#7E72FF] mb-2">솔루션</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          AI 기반 충전소 위치 서비스는 실시간 데이터를 분석하여 사용자의 위치, 배터리 상태, 주행 패턴 등을 고려한
                          최적의 충전소를 추천합니다. 또한 보안 인증을 통해 충전소 정보의 신뢰성을 보장합니다.
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#7E72FF] mb-2">고객 가치</h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                          <li className="flex items-start">
                            <span className="text-[#7E72FF] mr-2">✓</span>
                            <span>충전 불안감 해소</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#7E72FF] mr-2">✓</span>
                            <span>충전 시간 최적화</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#7E72FF] mr-2">✓</span>
                            <span>주행 경로 효율성 향상</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#7E72FF] mr-2">✓</span>
                            <span>충전 비용 절감</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#7E72FF] mb-2">적용 사례</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          전기차 내비게이션 시스템, 모빌리티 서비스 앱, 충전 인프라 운영 플랫폼, 플릿 관리 시스템 등에 활용되고 있습니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="bg-gradient-to-br from-[#71B0FF]/10 to-[#7E72FF]/10 dark:from-[#71B0FF]/20 dark:to-[#7E72FF]/20 rounded-lg h-full flex items-center justify-center p-8">
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md">
                          <div className="flex items-center mb-4">
                            <div className="bg-[#7E72FF] h-10 w-10 rounded-full flex items-center justify-center text-white mr-3">
                              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="currentColor" strokeWidth="1.5"/>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-[#0B2C46] dark:text-white">EV Locate</h3>
                          </div>
                          
                          <div className="bg-gray-200 dark:bg-gray-700 h-40 rounded-lg mb-4 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <p className="text-gray-500 dark:text-gray-400">지도 인터페이스</p>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                              <svg className="w-5 h-5 text-[#7E72FF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                              <svg className="w-5 h-5 text-[#7E72FF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.02 2.84004L3.63 7.04004C2.73 7.74004 2 9.23004 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29004 21.19 7.74004 20.2 7.05004L14.02 2.72004C12.62 1.74004 10.37 1.79004 9.02 2.84004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 17.99V14.99" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                          
                          <div className="space-y-3 mb-4">
                            <div className="flex items-center justify-between bg-[#7E72FF]/10 p-3 rounded-lg">
                              <div className="flex items-center">
                                <div className="bg-[#7E72FF] h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">
                                  <span className="text-xs font-bold">1</span>
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-[#0B2C46] dark:text-white">그린 충전소</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">1.2km • 2/4 사용 가능</p>
                                </div>
                              </div>
                              <button className="text-[#7E72FF] text-sm font-semibold">선택</button>
                            </div>
                            
                            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                              <div className="flex items-center">
                                <div className="bg-gray-300 dark:bg-gray-600 h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">
                                  <span className="text-xs font-bold">2</span>
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-[#0B2C46] dark:text-white">스마트 충전소</p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">2.5km • 1/3 사용 가능</p>
                                </div>
                              </div>
                              <button className="text-[#7E72FF] text-sm font-semibold">선택</button>
                            </div>
                          </div>
                          
                          <div className="flex">
                            <button className="bg-[#7E72FF] text-white px-4 py-2 rounded-md w-full flex items-center justify-center">
                              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.5 9.09H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.9955 13.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.29431 13.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              충전 예약하기
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#71B0FF] to-[#7E72FF] rounded-full opacity-20 blur-xl"></div>
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#71B0FF] to-[#7E72FF] rounded-full opacity-10 blur-xl"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabContent>
          
          <TabContent value="securecharge" activeTab={activeTab}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <Card className="bg-gray-50 dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-[#0B2C46] dark:text-white">
                        SecureCharge: 안전한 충전 인증 서비스
                      </h3>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#71B0FF] mb-2">문제 상황</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          전기차 충전 과정에서 사용자 인증, 결제, 데이터 전송 등 다양한 보안 위협이 존재하며,
                          이로 인한 개인정보 유출, 결제 사기, 충전 시스템 해킹 등의 위험이 있습니다.
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#71B0FF] mb-2">솔루션</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          SecureCharge는 다중 인증, 암호화 통신, 실시간 모니터링을 통해 충전 과정 전반의 보안을 강화합니다.
                          블록체인 기술을 활용하여 충전 기록의 무결성을 보장하고, AI 기반 이상 탐지 시스템으로 보안 위협에 선제적으로 대응합니다.
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#71B0FF] mb-2">고객 가치</h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                          <li className="flex items-start">
                            <span className="text-[#71B0FF] mr-2">✓</span>
                            <span>안전한 충전 경험 보장</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#71B0FF] mr-2">✓</span>
                            <span>개인정보 및 결제 정보 보호</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#71B0FF] mr-2">✓</span>
                            <span>충전 인프라 신뢰성 향상</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#71B0FF] mr-2">✓</span>
                            <span>투명한 충전 기록 관리</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#71B0FF] mb-2">적용 사례</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          공공 충전 인프라, 개인 충전 시스템, 전기차 공유 서비스, 플릿 충전 관리 시스템 등에 활용되고 있습니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="bg-gradient-to-br from-[#71B0FF]/10 to-[#7E72FF]/10 dark:from-[#71B0FF]/20 dark:to-[#7E72FF]/20 rounded-lg h-full flex items-center justify-center p-8">
                        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md">
                          <div className="flex items-center mb-4">
                            <div className="bg-gradient-to-r from-[#71B0FF] to-[#7E72FF] h-10 w-10 rounded-full flex items-center justify-center text-white mr-3">
                              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51001 17.22C9.33001 17.41 8.96001 17.53 8.69001 17.49L7.49001 17.33C7.09001 17.28 6.73001 16.9 6.67001 16.51L6.51001 15.31C6.47001 15.05 6.60001 14.68 6.78001 14.49L9.36001 11.91C8.92001 10.48 9.26001 8.86001 10.39 7.73001C12.01 6.11001 14.65 6.11001 16.28 7.73001C17.9 9.34001 17.9 11.98 16.28 13.61Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10.45 16.28L9.59998 15.42" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.3945 10.7H13.4035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <h3 className="text-lg font-bold text-[#0B2C46] dark:text-white">SecureCharge</h3>
                          </div>
                          
                          <div className="mb-6">
                            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
                              <h4 className="text-sm font-semibold text-[#0B2C46] dark:text-white mb-2">충전 인증</h4>
                              <div className="flex items-center justify-between mb-3">
                                <p className="text-xs text-gray-500 dark:text-gray-400">차량 ID</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">EV-2023-45678</p>
                              </div>
                              <div className="flex items-center justify-between mb-3">
                                <p className="text-xs text-gray-500 dark:text-gray-400">충전소 ID</p>
                                <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">CS-GN-1234</p>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-gray-500 dark:text-gray-400">인증 상태</p>
                                <div className="flex items-center">
                                  <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                                  <p className="text-sm text-green-500">인증됨</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                              <h4 className="text-sm font-semibold text-[#0B2C46] dark:text-white mb-2">보안 상태</h4>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <p className="text-xs text-gray-500 dark:text-gray-400">암호화 통신</p>
                                  <div className="flex items-center">
                                    <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                                    <p className="text-sm text-green-500">활성화</p>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <p className="text-xs text-gray-500 dark:text-gray-400">이상 탐지</p>
                                  <div className="flex items-center">
                                    <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                                    <p className="text-sm text-green-500">정상</p>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <p className="text-xs text-gray-500 dark:text-gray-400">블록체인 검증</p>
                                  <div className="flex items-center">
                                    <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                                    <p className="text-sm text-green-500">완료</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex">
                            <button className="bg-gradient-to-r from-[#71B0FF] to-[#7E72FF] text-white px-4 py-2 rounded-md w-full flex items-center justify-center">
                              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              안전한 충전 시작
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#71B0FF] to-[#7E72FF] rounded-full opacity-20 blur-xl"></div>
                      <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#71B0FF] to-[#7E72FF] rounded-full opacity-10 blur-xl"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabContent>
        </Tabs>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 italic">
            "AUTOCRYPT EVI Platform의 서비스는 단순한 기능 제공을 넘어 전기차 생태계의 안전과 효율성을 근본적으로 향상시킵니다."
          </p>
          <p className="text-[#0B2C46] dark:text-white font-semibold mt-2">
            - AUTOCRYPT 기술 연구소
          </p>
        </motion.div>
      </div>
    </section>
  );
}
