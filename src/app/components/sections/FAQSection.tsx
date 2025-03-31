'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-[#0B2C46] dark:text-white">{question}</span>
        <svg
          className={`w-5 h-5 text-[#71B0FF] transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-300`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 8.5L12 15.5L5 8.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5 px-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 dark:text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      question: "AUTOCRYPT EVI Platform은 어떤 기업에 적합한가요?",
      answer: "AUTOCRYPT EVI Platform은 전기차 OEM, 충전 인프라 운영자, EV 모빌리티 서비스, 에너지 관리 서비스, 전기차 Fleet 관리자 등 전기차 생태계에 참여하는 모든 기업에 적합합니다. 특히 보안과 AI를 통합한 솔루션이 필요한 기업에 최적화되어 있습니다."
    },
    {
      question: "기존 시스템과의 통합은 어떻게 이루어지나요?",
      answer: "AUTOCRYPT EVI Platform은 표준 API를 통해 기존 시스템과 쉽게 통합됩니다. 도입 과정 중 '구현 및 통합' 단계에서 고객의 기존 시스템과 원활하게 연동되도록 맞춤형 통합 작업을 수행합니다. 데이터 마이그레이션, API 연동, 보안 설정 등을 통해 기존 시스템과의 원활한 작동을 보장합니다."
    },
    {
      question: "Security-Native AI란 무엇인가요?",
      answer: "Security-Native AI는 보안을 AI 시스템의 핵심 설계 원칙으로 삼는 AUTOCRYPT의 독자적인 접근 방식입니다. 데이터 수집부터 분석, 의사결정, 실행에 이르는 전 과정에서 보안이 내장되어 있어 사이버 위협으로부터 안전하면서도 정확한 AI 서비스를 제공합니다. 이는 단순히 보안 기능을 추가하는 것이 아니라, AI 시스템 자체가 보안 중심으로 설계되었음을 의미합니다."
    },
    {
      question: "도입 기간은 얼마나 소요되나요?",
      answer: "도입 기간은 고객의 요구사항과 기존 시스템의 복잡성에 따라 달라집니다. 일반적으로 요구사항 분석부터 배포 및 교육까지 약 2~3개월이 소요됩니다. 단, 대규모 엔터프라이즈 환경이나 복잡한 통합이 필요한 경우 더 오래 걸릴 수 있습니다. 정확한 일정은 초기 상담 과정에서 제공해 드립니다."
    },
    {
      question: "데이터 보안은 어떻게 보장되나요?",
      answer: "AUTOCRYPT EVI Platform은 엔드투엔드 암호화, 다중 인증, 권한 기반 접근 제어, 실시간 위협 감지 등 다양한 보안 기술을 적용하여 데이터 보안을 보장합니다. 또한 국제 보안 표준을 준수하며, 정기적인 보안 감사와 취약점 테스트를 통해 지속적으로 보안 수준을 유지합니다."
    },
    {
      question: "어떤 종류의 지원과 유지보수가 제공되나요?",
      answer: "AUTOCRYPT EVI Platform은 24/7 기술 지원, 정기적인 소프트웨어 업데이트, 보안 패치, 성능 모니터링 등 포괄적인 지원과 유지보수 서비스를 제공합니다. 또한 고객 요구에 따라 맞춤형 SLA(서비스 수준 계약)를 제공하여 비즈니스 요구사항에 맞는 지원 수준을 보장합니다."
    },
    {
      question: "플랫폼의 확장성은 어떻게 되나요?",
      answer: "AUTOCRYPT EVI Platform은 모듈식 아키텍처로 설계되어 비즈니스 성장에 따라 쉽게 확장할 수 있습니다. 클라우드 기반 인프라를 활용하여 사용량 증가에 따라 자동으로 리소스를 조정하며, 새로운 서비스 모듈을 추가하여 기능을 확장할 수 있습니다. 이를 통해 초기 투자를 최소화하면서 필요에 따라 시스템을 확장할 수 있습니다."
    },
    {
      question: "EVPEDIA와 EV Locate는 어떻게 연동되나요?",
      answer: "EVPEDIA와 EV Locate는 AI 'EVE' 코어 엔진을 통해 통합됩니다. EVPEDIA의 전기차 지식 베이스는 EV Locate의 충전소 위치 서비스에 정보를 제공하여 더 정확하고 맥락에 맞는 충전소 추천이 가능합니다. 예를 들어, 특정 차량 모델의 충전 특성과 호환성을 고려한 최적의 충전소를 추천할 수 있습니다. 두 서비스는 보안 프로토콜을 통해 안전하게 데이터를 교환합니다."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#0B2C46] dark:text-white">
            자주 묻는 질문
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AUTOCRYPT EVI Platform에 대해 자주 묻는 질문들을 모았습니다.
            더 궁금한 점이 있으시면 언제든지 문의해 주세요.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            여기에서 답을 찾지 못하셨나요? 저희 전문가 팀이 도와드리겠습니다.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-gradient-to-r from-[#0B2C46] to-[#7E72FF] text-white rounded-md font-semibold hover:opacity-90 transition-colors"
          >
            문의하기
          </button>
        </motion.div>
      </div>
    </section>
  );
}
