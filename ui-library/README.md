# Reading Training UI Library

이 프로젝트의 UI 디자인과 스타일을 다른 프로젝트에서 재사용할 수 있는 컴포넌트 라이브러리입니다.

## 🚀 빠른 시작

### 1. 의존성 설치

```bash
npm install @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast class-variance-authority clsx tailwind-merge tailwindcss-animate lucide-react next-themes
```

### 2. Tailwind CSS 설정

`tailwind.config.js` 파일을 프로젝트 루트에 생성하고 다음 내용을 추가하세요:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
```

### 3. CSS 변수 설정

`globals.css` 파일에 다음 CSS 변수들을 추가하세요:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 224 71.4% 4.1%;
    --card: 0 0% 100%;
    --card-foreground: 224 71.4% 4.1%;
    --popover: 0 0% 100%;
    --popover-foreground: 224 71.4% 4.1%;
    --primary: 220.9 39.3% 11%;
    --primary-foreground: 210 20% 98%;
    --secondary: 220 14.3% 95.9%;
    --secondary-foreground: 220.9 39.3% 11%;
    --muted: 220 14.3% 95.9%;
    --muted-foreground: 220 8.9% 46.1%;
    --accent: 220 14.3% 95.9%;
    --accent-foreground: 220.9 39.3% 11%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 20% 98%;
    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 224 71.4% 4.1%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --background: 224 71.4% 4.1%;
    --foreground: 210 20% 98%;
    --card: 224 71.4% 4.1%;
    --card-foreground: 210 20% 98%;
    --popover: 224 71.4% 4.1%;
    --popover-foreground: 210 20% 98%;
    --primary: 210 20% 98%;
    --primary-foreground: 220.9 39.3% 11%;
    --secondary: 215 27.9% 16.9%;
    --secondary-foreground: 210 20% 98%;
    --muted: 215 27.9% 16.9%;
    --muted-foreground: 217.9 10.6% 64.9%;
    --accent: 215 27.9% 16.9%;
    --accent-foreground: 210 20% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 20% 98%;
    --border: 215 27.9% 16.9%;
    --input: 215 27.9% 16.9%;
    --ring: 216 12.2% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### 4. 유틸리티 함수 추가

`lib/utils.ts` 파일을 생성하고 다음 내용을 추가하세요:

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 5. 테마 프로바이더 설정

`components/ThemeProvider.tsx` 파일을 생성하고 다음 내용을 추가하세요:

```typescript
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  )
}
```

### 6. 컴포넌트 복사

`ui-library/components/` 폴더의 모든 컴포넌트를 프로젝트의 `components/ui/` 폴더로 복사하세요.

## 🎨 사용 예시

### 기본 버튼

```tsx
import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <Button variant="default">
      클릭하세요
    </Button>
  )
}
```

### 카드 컴포넌트

```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>카드 제목</CardTitle>
        <CardDescription>카드 설명</CardDescription>
      </CardHeader>
      <CardContent>
        <p>카드 내용</p>
      </CardContent>
    </Card>
  )
}
```

### 다크모드 토글

```tsx
import { ThemeToggle } from "@/components/ui/ThemeToggle"

export function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  )
}
```

## 📦 포함된 컴포넌트

- **Alert**: 알림 메시지
- **Avatar**: 사용자 아바타
- **Badge**: 상태 표시 배지
- **Button**: 버튼 (다양한 variant)
- **Card**: 카드 컨테이너
- **Checkbox**: 체크박스
- **Collapsible**: 접을 수 있는 컨테이너
- **Dialog**: 모달 다이얼로그
- **Dropdown Menu**: 드롭다운 메뉴
- **Input**: 입력 필드
- **Label**: 라벨
- **Progress**: 진행률 표시
- **Radio Group**: 라디오 버튼 그룹
- **Scroll Area**: 스크롤 영역
- **Select**: 선택 드롭다운
- **Separator**: 구분선
- **Sheet**: 사이드 시트
- **Switch**: 토글 스위치
- **Tabs**: 탭 인터페이스
- **Textarea**: 텍스트 영역
- **Toast**: 토스트 알림
- **ThemeToggle**: 테마 토글 버튼

## 🎯 특징

- **완전한 다크모드 지원**: 모든 컴포넌트가 라이트/다크 모드를 지원
- **접근성**: WCAG 가이드라인 준수
- **반응형**: 모든 화면 크기에 최적화
- **TypeScript**: 완전한 타입 안전성
- **커스터마이징**: Tailwind CSS를 통한 쉬운 스타일링

## 🔧 커스터마이징

### 색상 테마 변경

`globals.css`의 CSS 변수를 수정하여 색상 테마를 변경할 수 있습니다:

```css
:root {
  --primary: 220.9 39.3% 11%; /* 기본 색상 */
  --secondary: 220 14.3% 95.9%; /* 보조 색상 */
  /* ... */
}
```

### 컴포넌트 스타일 수정

각 컴포넌트 파일의 className을 수정하여 스타일을 변경할 수 있습니다:

```tsx
// components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        // 커스텀 variant 추가
        custom: "bg-blue-500 text-white hover:bg-blue-600",
      },
      // ...
    }
  }
)
```

## 📄 라이선스

이 UI 라이브러리는 MIT 라이선스 하에 제공됩니다. 