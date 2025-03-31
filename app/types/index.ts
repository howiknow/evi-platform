// 타입 정의 파일

// 서비스 케이스 타입
export interface ServiceCase {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  value: string;
  useCase: string;
  icon?: string;
}

// 고객군 타입
export interface CustomerGroup {
  id: string;
  title: string;
  description: string;
  valueProposition: string;
  icon?: string;
}

// AI 기능 타입
export interface AIFeature {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon?: string;
}

// 도입 과정 단계 타입
export interface ImplementationStep {
  id: string;
  title: string;
  description: string;
  order: number;
  icon?: string;
}

// 고객 후기 타입
export interface CustomerTestimonial {
  id: string;
  customerName: string;
  companyName: string;
  position: string;
  testimonial: string;
  results: string[];
  logo?: string;
}

// FAQ 항목 타입
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'implementation';
}

// 문의 폼 데이터 타입
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  interestedIn: string[];
  consent: boolean;
}
