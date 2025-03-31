'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Slider } from '../ui/Slider';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "김성민 이사",
      company: "그린모빌리티",
      role: "전기차 플릿 운영 책임자",
      quote: "AUTOCRYPT EVI Platform을 도입한 후 충전 인프라 관리 효율성이 30% 이상 향상되었습니다. 특히 보안 기능이 강화되어 데이터 보호에 대한 우려가 크게 줄었습니다.",
      image: "/testimonial1.jpg"
    },
    {
      name: "박지영 CTO",
      company: "이노차지",
      role: "충전 인프라 서비스 제공업체",
      quote: "AI 기반 충전소 위치 최적화 서비스는 우리 비즈니스의 게임 체인저였습니다. 사용자 만족도가 크게 향상되었고, 충전소 활용률도 증가했습니다.",
      image: "/testimonial2.jpg"
    },
    {
      name: "이준호 부장",
      company: "스마트에너지",
      role: "에너지 관리 시스템 개발자",
      quote: "EVPEDIA의 지식 베이스는 우리 팀이 전기차 관련 기술 문제를 해결하는 데 큰 도움이 되었습니다. 정확하고 신뢰할 수 있는 정보를 빠르게 얻을 수 있어 개발 시간이 단축되었습니다.",
      image: "/testimonial3.jpg"
    }
  ];

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
            고객 사례
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AUTOCRYPT EVI Platform을 도입한 고객들의 성공 사례를 확인하세요.
            다양한 산업 분야에서 실제 비즈니스 성과를 창출한 사례들을 소개합니다.
          </p>
        </motion.div>
        
        <Slider autoPlay={true} interval={5000} showDots={true} showArrows={true}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-[#71B0FF]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9999 2C6.47992 2 1.99992 6.48 1.99992 12C1.99992 17.52 6.47992 22 11.9999 22C17.5199 22 21.9999 17.52 21.9999 12C21.9999 6.48 17.5199 2 11.9999 2ZM15.9999 13.38C15.9999 13.72 15.7799 14.01 15.4699 14.13C15.3699 14.17 15.2699 14.19 15.1699 14.19C14.9499 14.19 14.7399 14.11 14.5799 13.96L12.0099 11.46C11.8699 11.32 11.7899 11.14 11.7899 10.94V7.75C11.7899 7.34 12.1299 7 12.5399 7C12.9499 7 13.2899 7.34 13.2899 7.75V10.59L15.5799 12.82C15.8499 13.09 15.9999 13.38 15.9999 13.38Z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#71B0FF] to-[#7E72FF] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-[#0B2C46] dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-[#71B0FF] h-12 w-12 rounded-full flex items-center justify-center text-white mr-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0B2C46] dark:text-white">충전 효율성 향상</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              충전소 운영 효율성이 30% 이상 향상되어 운영 비용이 크게 절감되었습니다.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-[#71B0FF] h-12 w-12 rounded-full flex items-center justify-center text-white mr-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0B2C46] dark:text-white">보안 강화</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              강화된 보안 기능으로 데이터 보호에 대한 우려가 크게 줄었습니다.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-[#71B0FF] h-12 w-12 rounded-full flex items-center justify-center text-white mr-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0B2C46] dark:text-white">사용자 만족도</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              사용자 만족도가 크게 향상되어 서비스 이용률이 증가했습니다.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-gradient-to-r from-[#0B2C46] to-[#7E72FF] text-white rounded-md font-semibold hover:opacity-90 transition-colors"
          >
            성공 사례 더 알아보기
          </button>
        </motion.div>
      </div>
    </section>
  );
}
