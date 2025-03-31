# AUTOCRYPT EVI Platform 랜딩 페이지 유지보수 가이드

이 문서는 AUTOCRYPT EVI Platform 랜딩 페이지의 유지보수를 위한 가이드입니다. 개발자와 관리자가 웹사이트를 효과적으로 관리하고 업데이트할 수 있도록 필요한 정보를 제공합니다.

## 1. 프로젝트 개요

- **프로젝트명**: AUTOCRYPT EVI Platform 랜딩 페이지
- **기술 스택**: Next.js 14, TypeScript, Tailwind CSS
- **배포 환경**: Vercel
- **저장소**: [GitHub 저장소 URL]

## 2. 프로젝트 구조

```
autocrypt-evi-platform/
├── public/               # 정적 파일 (이미지, 폰트 등)
│   ├── fonts/            # Pretendard 폰트 파일
│   └── images/           # 이미지 파일
├── src/
│   ├── app/              # Next.js App Router 구조
│   │   ├── components/   # 컴포넌트 폴더
│   │   │   ├── layout/   # 레이아웃 관련 컴포넌트
│   │   │   ├── sections/ # 페이지 섹션 컴포넌트
│   │   │   └── ui/       # UI 컴포넌트
│   │   ├── types/        # TypeScript 타입 정의
│   │   ├── utils/        # 유틸리티 함수
│   │   ├── layout.tsx    # 루트 레이아웃
│   │   ├── page.tsx      # 메인 페이지
│   │   ├── globals.css   # 전역 스타일
│   │   └── providers.tsx # 전역 프로바이더
│   └── ...
├── package.json          # 프로젝트 의존성
└── tailwind.config.js    # Tailwind CSS 설정
```

## 3. 주요 컴포넌트 설명

### 레이아웃 컴포넌트

- **Header.tsx**: 네비게이션 바, 로고, 다크모드 토글 포함
- **Footer.tsx**: 회사 정보, 서비스 링크, 문의 정보 포함
- **Layout.tsx**: 전체 페이지 레이아웃 구조

### 섹션 컴포넌트

- **HeroSection.tsx**: 메인 히어로 섹션
- **ValuePropositionSection.tsx**: 핵심 가치 제안 섹션
- **ArchitectureSection.tsx**: 아키텍처 소개 다이어그램
- **ServiceCasesSection.tsx**: 주요 서비스 케이스 (탭 인터페이스)
- **CustomerSegmentsSection.tsx**: 주요 고객군 섹션
- **AgenticAISection.tsx**: Agentic AI 기능 소개
- **ImplementationProcessSection.tsx**: 도입 과정 섹션
- **TestimonialsSection.tsx**: 고객 사례 섹션 (슬라이더)
- **FAQSection.tsx**: FAQ 섹션 (아코디언)
- **ContactSection.tsx**: 문의/연락처 섹션

### UI 컴포넌트

- **Button.tsx**: 다양한 스타일과 크기의 버튼
- **Card.tsx**: 카드 컴포넌트
- **Tabs.tsx**: 탭 인터페이스
- **Slider.tsx**: 슬라이더 컴포넌트
- **ContactForm.tsx**: 문의 폼 (유효성 검증 포함)
- **CookieConsent.tsx**: 쿠키 동의 배너
- **ImageWithFallback.tsx**: 이미지 최적화 컴포넌트
- **AccessibilityWrapper.tsx**: 접근성 개선 래퍼
- **SkipToContent.tsx**: 키보드 네비게이션 지원
- **ThemeToggle.tsx**: 다크/라이트 모드 전환 버튼

## 4. 콘텐츠 업데이트 방법

### 텍스트 콘텐츠 수정

1. 각 섹션 컴포넌트 파일에서 텍스트 콘텐츠를 찾아 수정합니다.
2. 대부분의 텍스트는 컴포넌트 내부에 직접 작성되어 있습니다.
3. 자주 변경되는 콘텐츠는 별도의 데이터 파일로 분리되어 있습니다:
   - `src/app/data/services.ts`: 서비스 케이스 정보
   - `src/app/data/customers.ts`: 고객군 정보
   - `src/app/data/features.ts`: AI 기능 정보
   - `src/app/data/faqs.ts`: FAQ 항목

### 이미지 업데이트

1. 새 이미지 파일을 `public/images/` 디렉토리에 추가합니다.
2. 이미지를 사용하는 컴포넌트에서 경로를 업데이트합니다.
3. 항상 `ImageWithFallback` 컴포넌트를 사용하여 이미지를 표시합니다.
4. 이미지 최적화를 위해 적절한 `width`, `height`, `alt` 속성을 설정합니다.

### 섹션 추가/제거

1. 새 섹션 컴포넌트를 `src/app/components/sections/` 디렉토리에 생성합니다.
2. `src/app/page.tsx` 파일에서 섹션 컴포넌트를 추가하거나 제거합니다.
3. 섹션 순서를 변경하려면 `page.tsx` 파일에서 컴포넌트 순서를 변경합니다.

## 5. 스타일 가이드

### 색상 팔레트

- 주요 브랜드 색상:
  - 네이비 블루: `#0B2C46`
  - 라이트 블루: `#71B0FF`
  - 퍼플: `#7E72FF`

- 다크 모드 색상:
  - 배경: `bg-gray-900`
  - 텍스트: `text-white` 또는 `text-gray-300`

### 타이포그래피

- 기본 폰트: Pretendard
- 제목 크기:
  - H1: `text-4xl md:text-5xl lg:text-6xl font-bold`
  - H2: `text-3xl md:text-4xl font-bold`
  - H3: `text-2xl md:text-3xl font-semibold`
  - H4: `text-xl md:text-2xl font-semibold`
- 본문 텍스트: `text-base text-gray-700 dark:text-gray-300`

### 컴포넌트 스타일링

- Tailwind CSS 클래스를 사용하여 스타일링합니다.
- 공통 스타일은 `cn` 유틸리티 함수를 사용하여 결합합니다.
- 복잡한 애니메이션은 Framer Motion 라이브러리를 사용합니다.

## 6. 성능 최적화 가이드

### 이미지 최적화

- 항상 Next.js의 `Image` 컴포넌트 또는 `ImageWithFallback` 컴포넌트를 사용합니다.
- 적절한 이미지 크기와 포맷을 사용합니다 (WebP 권장).
- 중요한 이미지에는 `priority` 속성을 설정합니다.

### 코드 최적화

- 큰 컴포넌트는 코드 스플리팅을 위해 동적 임포트를 사용합니다:
  ```typescript
  const DynamicComponent = dynamic(() => import('./Component'), {
    loading: () => <LoadingComponent />,
  });
  ```
- 불필요한 리렌더링을 방지하기 위해 `React.memo`, `useMemo`, `useCallback`을 적절히 사용합니다.

### SEO 최적화

- 페이지 메타데이터는 `layout.tsx`에서 관리됩니다.
- 페이지별 메타데이터는 `SEO` 컴포넌트를 사용하여 설정합니다.

## 7. 배포 및 업데이트 프로세스

### Vercel 배포

1. GitHub 저장소에 변경사항을 푸시합니다.
2. Vercel은 자동으로 변경사항을 감지하고 새 버전을 배포합니다.
3. 배포 상태는 Vercel 대시보드에서 확인할 수 있습니다.

### 수동 배포

```bash
# 프로젝트 빌드
npm run build

# 로컬에서 빌드 결과 테스트
npm run start

# Vercel CLI를 사용한 수동 배포
vercel --prod
```

## 8. 문제 해결

### 일반적인 문제

- **이미지가 표시되지 않음**: 이미지 경로가 올바른지, 파일이 존재하는지 확인합니다.
- **스타일이 적용되지 않음**: Tailwind 클래스가 올바르게 적용되었는지 확인합니다.
- **다크 모드가 작동하지 않음**: `next-themes` 설정과 다크 모드 클래스를 확인합니다.

### 디버깅 방법

- 개발 서버에서 콘솔 로그를 확인합니다.
- React Developer Tools를 사용하여 컴포넌트 구조와 props를 검사합니다.
- Lighthouse를 사용하여 성능, 접근성, SEO 문제를 확인합니다.

## 9. 연락처 및 지원

- 기술 지원: [이메일 주소]
- 문서 및 리소스: [문서 URL]
- 이슈 트래커: [GitHub 이슈 URL]
