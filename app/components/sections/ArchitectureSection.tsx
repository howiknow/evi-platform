'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#0B2C46] dark:text-white">
            5단계 레이어 아키텍처
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AUTOCRYPT EVI Platform은 5개의 레이어로 구성된 아키텍처를 통해 보안과 AI를 완벽하게 통합합니다.
            각 레이어는 특정 기능을 담당하며 전체 시스템의 안정성과 확장성을 보장합니다.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg mb-12"
        >
          <div className="relative h-96 bg-gradient-to-br from-[#0B2C46]/5 to-[#7E72FF]/5 dark:from-[#0B2C46]/20 dark:to-[#7E72FF]/20 rounded-lg flex items-center justify-center mb-8 overflow-hidden">
            {/* 아키텍처 다이어그램 SVG */}
            <svg className="w-full h-full max-w-4xl mx-auto p-4" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* 배경 그리드 */}
              <path d="M0 200 H800" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M400 0 V400" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* 레이어 1: 데이터 레이어 */}
              <rect x="100" y="320" width="600" height="60" rx="8" fill="#0B2C46" />
              <text x="400" y="355" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">데이터 레이어</text>
              <text x="400" y="375" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">안전한 데이터 수집 및 저장</text>
              
              {/* 레이어 2: 보안 레이어 */}
              <rect x="120" y="250" width="560" height="60" rx="8" fill="#1A3E5A" />
              <text x="400" y="285" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">보안 레이어</text>
              <text x="400" y="305" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">암호화 및 접근 제어</text>
              
              {/* 레이어 3: AI 코어 레이어 */}
              <rect x="140" y="180" width="520" height="60" rx="8" fill="#2A506E" />
              <text x="400" y="215" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">AI 코어 레이어</text>
              <text x="400" y="235" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">EVE 엔진 기반 처리</text>
              
              {/* 레이어 4: 서비스 레이어 */}
              <rect x="160" y="110" width="480" height="60" rx="8" fill="#3A6282" />
              <text x="400" y="145" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">서비스 레이어</text>
              <text x="400" y="165" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">EVPEDIA, EV Locate 등</text>
              
              {/* 레이어 5: 인터페이스 레이어 */}
              <rect x="180" y="40" width="440" height="60" rx="8" fill="#4A7496" />
              <text x="400" y="75" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">인터페이스 레이어</text>
              <text x="400" y="95" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">API 및 사용자 인터페이스</text>
              
              {/* 연결선 */}
              <path d="M400 100 V110" stroke="white" strokeWidth="2" strokeDasharray="2 2" />
              <path d="M400 170 V180" stroke="white" strokeWidth="2" strokeDasharray="2 2" />
              <path d="M400 240 V250" stroke="white" strokeWidth="2" strokeDasharray="2 2" />
              <path d="M400 310 V320" stroke="white" strokeWidth="2" strokeDasharray="2 2" />
              
              {/* 아이콘 */}
              <circle cx="250" y="70" r="15" fill="#71B0FF" />
              <circle cx="550" y="70" r="15" fill="#7E72FF" />
              <circle cx="300" y="140" r="15" fill="#71B0FF" />
              <circle cx="500" y="140" r="15" fill="#7E72FF" />
              <circle cx="400" y="210" r="20" fill="url(#gradient)" />
              <circle cx="250" y="280" r="15" fill="#71B0FF" />
              <circle cx="550" y="280" r="15" fill="#7E72FF" />
              <circle cx="300" y="350" r="15" fill="#71B0FF" />
              <circle cx="500" y="350" r="15" fill="#7E72FF" />
              
              {/* 그라데이션 정의 */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#71B0FF" />
                  <stop offset="100%" stopColor="#7E72FF" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* 장식용 요소 */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#71B0FF]/20 to-[#7E72FF]/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#71B0FF]/20 to-[#7E72FF]/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-[#0B2C46] text-white p-4 rounded-lg"
            >
              <h4 className="font-bold mb-2">데이터 레이어</h4>
              <p className="text-sm">전기차 및 충전 인프라에서 수집된 데이터를 안전하게 저장하고 관리합니다. 데이터 무결성과 프라이버시를 보장합니다.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[#1A3E5A] text-white p-4 rounded-lg"
            >
              <h4 className="font-bold mb-2">보안 레이어</h4>
              <p className="text-sm">모든 데이터와 통신을 암호화하고 접근 제어를 관리합니다. 사이버 위협을 실시간으로 감지하고 대응합니다.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-[#2A506E] text-white p-4 rounded-lg"
            >
              <h4 className="font-bold mb-2">AI 코어 레이어</h4>
              <p className="text-sm">EVE 엔진을 기반으로 데이터를 분석하고 인사이트를 도출합니다. 머신러닝 모델이 지속적으로 학습하여 정확도를 향상시킵니다.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-[#3A6282] text-white p-4 rounded-lg"
            >
              <h4 className="font-bold mb-2">서비스 레이어</h4>
              <p className="text-sm">EVPEDIA, EV Locate 등 다양한 서비스를 제공합니다. 각 서비스는 AI 코어와 보안 레이어를 활용하여 안전하고 지능적인 기능을 제공합니다.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-[#4A7496] text-white p-4 rounded-lg"
            >
              <h4 className="font-bold mb-2">인터페이스 레이어</h4>
              <p className="text-sm">사용자와 시스템 간의 상호작용을 관리합니다. API와 사용자 인터페이스를 통해 서비스에 접근할 수 있습니다.</p>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 text-[#0B2C46] dark:text-white flex items-center">
              <span className="bg-[#71B0FF] h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">1</span>
              보안 우선 설계
            </h3>
            <p className="text-gray-600 dark:text-gray-300 ml-11">
              모든 레이어가 보안을 기본 원칙으로 설계되어 있어, 데이터 수집부터 사용자 인터페이스까지 전체 과정에서 보안이 보장됩니다.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 text-[#0B2C46] dark:text-white flex items-center">
              <span className="bg-[#7E72FF] h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">2</span>
              확장 가능한 구조
            </h3>
            <p className="text-gray-600 dark:text-gray-300 ml-11">
              모듈식 아키텍처로 설계되어 새로운 서비스와 기능을 쉽게 추가할 수 있으며, 사용자 요구사항 변화에 빠르게 대응할 수 있습니다.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 text-[#0B2C46] dark:text-white flex items-center">
              <span className="bg-[#71B0FF] h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">3</span>
              통합 데이터 관리
            </h3>
            <p className="text-gray-600 dark:text-gray-300 ml-11">
              데이터 레이어에서 모든 정보를 중앙 집중식으로 관리하여 데이터 일관성을 유지하고, 서비스 간 원활한 데이터 공유가 가능합니다.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 text-[#0B2C46] dark:text-white flex items-center">
              <span className="bg-[#7E72FF] h-8 w-8 rounded-full flex items-center justify-center text-white mr-3">4</span>
              AI 기반 최적화
            </h3>
            <p className="text-gray-600 dark:text-gray-300 ml-11">
              AI 코어 레이어가 지속적으로 데이터를 분석하고 학습하여 서비스 품질을 향상시키고, 사용자 경험을 최적화합니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
