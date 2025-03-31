'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';

// 폼 데이터 타입 정의
interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  agreeToTerms: boolean;
}

// 유효성 검증 스키마
const schema = yup.object({
  name: yup.string().required('이름을 입력해주세요'),
  company: yup.string().required('회사명을 입력해주세요'),
  email: yup.string().email('유효한 이메일 주소를 입력해주세요').required('이메일을 입력해주세요'),
  phone: yup.string().matches(/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/, '전화번호 형식이 올바르지 않습니다 (예: 010-1234-5678)'),
  message: yup.string().required('문의 내용을 입력해주세요'),
  agreeToTerms: yup.boolean().oneOf([true], '개인정보 수집 및 이용에 동의해주세요'),
});

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // 실제 구현에서는 API 호출 등을 통해 데이터 전송
    console.log('Form data:', data);
    
    // 폼 제출 성공 시 폼 초기화 (1초 지연 후)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className="w-full">
      {isSubmitSuccessful ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center"
        >
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">문의가 접수되었습니다</h3>
          <p className="text-green-600 dark:text-green-400 mb-4">
            빠른 시일 내에 담당자가 연락드리겠습니다. 감사합니다.
          </p>
          <button
            onClick={() => reset({ name: '', company: '', email: '', phone: '', message: '', agreeToTerms: false })}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            새 문의하기
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#71B0FF] dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                회사명 <span className="text-red-500">*</span>
              </label>
              <input
                id="company"
                type="text"
                {...register('company')}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#71B0FF] dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.company ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#71B0FF] dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                전화번호
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="010-1234-5678"
                {...register('phone')}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#71B0FF] dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.phone ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              문의 내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              {...register('message')}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#71B0FF] dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="agreeToTerms"
                type="checkbox"
                {...register('agreeToTerms')}
                className="w-4 h-4 text-[#71B0FF] border-gray-300 rounded focus:ring-[#71B0FF] dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agreeToTerms" className="font-medium text-gray-700 dark:text-gray-300">
                개인정보 수집 및 이용에 동의합니다 <span className="text-red-500">*</span>
              </label>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                수집된 정보는 문의 답변 목적으로만 사용되며, 관련 법령에 따라 보관됩니다.
                자세한 내용은 <a href="#" className="text-[#71B0FF] hover:underline">개인정보처리방침</a>을 참조하세요.
              </p>
              {errors.agreeToTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms.message}</p>}
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#0B2C46] to-[#7E72FF] text-white rounded-md font-semibold hover:opacity-90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  제출 중...
                </div>
              ) : (
                '문의하기'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
