'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AgenticAISection() {
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
            Agentic AI 핵심 기능
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AUTOCRYPT EVI Platform의 AI 에이전트는 전기차 생태계를 위한 지능형 의사결정을 지원합니다.
            보안을 기반으로 한 자율적 AI 시스템이 전기차 환경의 복잡한 문제를 해결합니다.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#71B0FF]/10 to-[#7E72FF]/10 dark:from-[#71B0FF]/20 dark:to-[#7E72FF]/20 rounded-lg h-full flex items-center justify-center p-8">
              <div className="relative w-full h-96 bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                {/* AI 시각화 - 네트워크 그래프 */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 배경 그리드 */}
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5E7EB" strokeWidth="0.5" opacity="0.5" />
                  </pattern>
                  <rect width="800" height="600" fill="url(#grid)" />
                  
                  {/* 중앙 노드 - AI 코어 */}
                  <circle cx="400" cy="300" r="50" fill="url(#ai-gradient)" />
                  <text x="400" y="305" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">AI 코어</text>
                  
                  {/* 연결 노드들 */}
                  <circle cx="250" cy="200" r="30" fill="#71B0FF" opacity="0.8" />
                  <text x="250" y="205" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">데이터</text>
                  
                  <circle cx="550" cy="200" r="30" fill="#7E72FF" opacity="0.8" />
                  <text x="550" y="205" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">보안</text>
                  
                  <circle cx="250" cy="400" r="30" fill="#71B0FF" opacity="0.8" />
                  <text x="250" y="405" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">충전</text>
                  
                  <circle cx="550" cy="400" r="30" fill="#7E72FF" opacity="0.8" />
                  <text x="550" y="405" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">차량</text>
                  
                  <circle cx="180" cy="300" r="25" fill="#71B0FF" opacity="0.6" />
                  <text x="180" y="305" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">분석</text>
                  
                  <circle cx="620" cy="300" r="25" fill="#7E72FF" opacity="0.6" />
                  <text x="620" y="305" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">예측</text>
                  
                  <circle cx="320" cy="120" r="25" fill="#71B0FF" opacity="0.6" />
                  <text x="320" y="125" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">학습</text>
                  
                  <circle cx="480" cy="120" r="25" fill="#7E72FF" opacity="0.6" />
                  <text x="480" y="125" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">추론</text>
                  
                  <circle cx="320" cy="480" r="25" fill="#71B0FF" opacity="0.6" />
                  <text x="320" y="485" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">최적화</text>
                  
                  <circle cx="480" cy="480" r="25" fill="#7E72FF" opacity="0.6" />
                  <text x="480" y="485" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">결정</text>
                  
                  {/* 연결선 */}
                  <line x1="400" y1="300" x2="250" y2="200" stroke="#71B0FF" strokeWidth="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
                  </line>
                  <line x1="400" y1="300" x2="550" y2="200" stroke="#7E72FF" strokeWidth="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="400" y1="300" x2="250" y2="400" stroke="#71B0FF" strokeWidth="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
                  </line>
                  <line x1="400" y1="300" x2="550" y2="400" stroke="#7E72FF" strokeWidth="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="4.5s" repeatCount="indefinite" />
                  </line>
                  
                  <line x1="400" y1="300" x2="180" y2="300" stroke="#71B0FF" strokeWidth="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3.2s" repeatCount="indefinite" />
                  </line>
                  <line x1="400" y1="300" x2="620" y2="300" stroke="#7E72FF" strokeWidth="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="3.7s" repeatCount="indefinite" />
                  </line>
                  
                  <line x1="400" y1="300" x2="320" y2="120" stroke="#71B0FF" strokeWidth="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="4.2s" repeatCount="indefinite" />
                  </line>
                  <line x1="400" y1="300" x2="480" y2="120" stroke="#7E72FF" strokeWidth="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="4.7s" repeatCount="indefinite" />
                  </line>
                  
                  <line x1="400" y1="300" x2="320" y2="480" stroke="#71B0FF" strokeWidth="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite" />
                  </line>
                  <line x1="400" y1="300" x2="480" y2="480" stroke="#7E72FF" strokeWidth="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="5.5s" repeatCount="indefinite" />
                  </line>
                  
                  {/* 보조 연결선 */}
                  <line x1="250" y1="200" x2="320" y2="120" stroke="#71B0FF" strokeWidth="1" opacity="0.4" />
                  <line x1="550" y1="200" x2="480" y2="120" stroke="#7E72FF" strokeWidth="1" opacity="0.4" />
                  <line x1="250" y1="400" x2="320" y2="480" stroke="#71B0FF" strokeWidth="1" opacity="0.4" />
                  <line x1="550" y1="400" x2="480" y2="480" stroke="#7E72FF" strokeWidth="1" opacity="0.4" />
                  
                  <line x1="250" y1="200" x2="180" y2="300" stroke="#71B0FF" strokeWidth="1" opacity="0.4" />
                  <line x1="550" y1="200" x2="620" y2="300" stroke="#7E72FF" strokeWidth="1" opacity="0.4" />
                  <line x1="250" y1="400" x2="180" y2="300" stroke="#71B0FF" strokeWidth="1" opacity="0.4" />
                  <line x1="550" y1="400" x2="620" y2="300" stroke="#7E72FF" strokeWidth="1" opacity="0.4" />
                  
                  {/* 데이터 흐름 애니메이션 */}
                  <circle r="4" fill="white">
                    <animateMotion path="M400,300 L250,200" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="white">
                    <animateMotion path="M400,300 L550,200" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="white">
                    <animateMotion path="M400,300 L250,400" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle r="4" fill="white">
                    <animateMotion path="M400,300 L550,400" dur="3.5s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* 그라데이션 정의 */}
                  <defs>
                    <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#71B0FF" />
                      <stop offset="100%" stopColor="#7E72FF" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* 오버레이 텍스트 */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-gray-900/80 p-3 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-[#0B2C46] dark:text-white font-semibold">
                    Security-Native AI 아키텍처
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    보안 중심 설계로 안전한 AI 의사결정 지원
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#71B0FF] to-[#7E72FF] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#71B0FF] to-[#7E72FF] rounded-full opacity-10 blur-xl"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#0B2C46] dark:text-white flex items-center">
                <span className="bg-[#71B0FF] h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">1</span>
                EV 중심 자율 의사결정
              </h3>
              <p className="text-gray-600 dark:text-gray-300 ml-11">
                전기차 특화 데이터를 기반으로 최적의 충전 시점, 경로, 에너지 관리 등에 대한 자율적 의사결정을 지원합니다.
                사용자 패턴을 학습하여 개인화된 추천을 제공하고, 배터리 수명과 효율성을 극대화합니다.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#0B2C46] dark:text-white flex items-center">
                <span className="bg-[#7E72FF] h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">2</span>
                전문 도메인 추론
              </h3>
              <p className="text-gray-600 dark:text-gray-300 ml-11">
                전기차 도메인 지식을 기반으로 복잡한 문제 상황에서 전문적인 추론과 해결책을 제시합니다.
                방대한 전기차 관련 데이터를 분석하여 정확한 진단과 예측을 제공하고, 문제 해결 시간을 단축합니다.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#0B2C46] dark:text-white flex items-center">
                <span className="bg-[#71B0FF] h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">3</span>
                EV 생태계 통합 인텔리전스
              </h3>
              <p className="text-gray-600 dark:text-gray-300 ml-11">
                차량, 충전 인프라, 에너지 그리드 등 다양한 시스템 간의 데이터를 통합하여 전체 생태계 최적화를 지원합니다.
                시스템 간 상호작용을 이해하고 조율하여 자원 활용을 극대화하고 비용을 절감합니다.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-[#0B2C46] dark:text-white flex items-center">
                <span className="bg-[#7E72FF] h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">4</span>
                보안 중심 상호작용
              </h3>
              <p className="text-gray-600 dark:text-gray-300 ml-11">
                모든 AI 상호작용이 보안 프로토콜을 준수하며, 데이터 프라이버시와 무결성을 보장합니다.
                암호화된 통신 채널과 권한 기반 접근 제어를 통해 안전한 데이터 교환과 명령 실행을 보장합니다.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-[#71B0FF]/10 to-[#7E72FF]/10 dark:from-[#71B0FF]/20 dark:to-[#7E72FF]/20 p-4 rounded-lg">
              <h4 className="font-semibold text-[#0B2C46] dark:text-white mb-2">Security-Native AI란?</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Security-Native AI는 보안을 AI 시스템의 핵심 설계 원칙으로 삼는 접근 방식입니다. 
                데이터 수집부터 분석, 의사결정, 실행에 이르는 전 과정에서 보안이 내장되어 있어 
                사이버 위협으로부터 안전하면서도 정확한 AI 서비스를 제공합니다.
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-[#71B0FF] h-10 w-10 rounded-full flex items-center justify-center text-white mr-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 8.00001V16L15.5 12L10.5 8.00001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0B2C46] dark:text-white">자동화된 충전 최적화</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              AI가 사용자의 주행 패턴, 전력 요금, 배터리 상태를 분석하여 최적의 충전 시간과 장소를 자동으로 추천하고 예약합니다.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-[#7E72FF] h-10 w-10 rounded-full flex items-center justify-center text-white mr-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0B2C46] dark:text-white">이상 탐지 및 예방</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              AI가 차량 및 충전 시스템의 데이터를 실시간으로 모니터링하여 잠재적 문제를 사전에 감지하고 예방 조치를 제안합니다.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-[#71B0FF] to-[#7E72FF] h-10 w-10 rounded-full flex items-center justify-center text-white mr-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.9965 11H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.9955 11H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.99451 11H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0B2C46] dark:text-white">지능형 사용자 지원</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              자연어 처리 기술을 활용한 AI 어시스턴트가 전기차 관련 질문에 답변하고, 문제 해결을 위한 맞춤형 가이드를 제공합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
