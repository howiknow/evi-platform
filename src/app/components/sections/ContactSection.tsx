'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '../ui/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#0B2C46] dark:text-white">
            문의하기
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AUTOCRYPT EVI Platform에 대해 더 알아보고 싶으신가요?
            데모 신청, 가격 문의, 기술 상담 등 어떤 내용이든 편하게 문의해 주세요.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#0B2C46] dark:text-white">문의 양식</h3>
            <ContactForm />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#0B2C46] dark:text-white">연락처 정보</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#71B0FF] h-12 w-12 rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.31 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B2C46] dark:text-white mb-1">전화</h4>
                    <p className="text-gray-600 dark:text-gray-300">+82-2-1234-5678</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">평일 09:00 - 18:00 (공휴일 제외)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#7E72FF] h-12 w-12 rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B2C46] dark:text-white mb-1">이메일</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@autocrypt-evi.com</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">24시간 이내 답변 드립니다</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-[#71B0FF] to-[#7E72FF] h-12 w-12 rounded-full flex items-center justify-center text-white mr-4 shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B2C46] dark:text-white mb-1">주소</h4>
                    <p className="text-gray-600 dark:text-gray-300">서울특별시 강남구 테헤란로 123</p>
                    <p className="text-gray-600 dark:text-gray-300">AUTOCRYPT 빌딩 7층</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold text-[#0B2C46] dark:text-white mb-4">데모 신청</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AUTOCRYPT EVI Platform의 실제 작동 모습을 확인하고 싶으신가요?
                맞춤형 데모를 통해 귀사의 요구사항에 맞는 솔루션을 직접 경험해 보세요.
              </p>
              <button 
                className="w-full px-4 py-2 bg-gradient-to-r from-[#0B2C46] to-[#7E72FF] text-white rounded-md font-semibold hover:opacity-90 transition-colors"
              >
                데모 신청하기
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6 text-[#0B2C46] dark:text-white text-center">글로벌 지사</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-[#0B2C46] dark:text-white mb-2">서울 본사</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">서울특별시 강남구 테헤란로 123</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">+82-2-1234-5678</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#0B2C46] dark:text-white mb-2">미국 지사</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">California, Silicon Valley</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">+1-123-456-7890</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-[#0B2C46] dark:text-white mb-2">유럽 지사</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Germany, Munich</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">+49-123-456-789</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
