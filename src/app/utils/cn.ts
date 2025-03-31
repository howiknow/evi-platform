/**
 * 클래스 이름을 결합하는 유틸리티 함수
 * Tailwind CSS와 함께 사용하기 위한 헬퍼 함수
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
