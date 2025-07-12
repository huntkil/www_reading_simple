# UI 라이브러리 복사 명령어

이 문서는 UI 라이브러리를 다른 프로젝트로 복사하는 방법을 설명합니다.

## 📁 폴더 구조

```
ui-library/
├── README.md                 # 라이브러리 설명서
├── package.json              # 의존성 정보
├── tailwind.config.js        # Tailwind 설정
├── globals.css               # CSS 변수
├── install-guide.md          # 설치 가이드
├── COPY-COMMAND.md           # 이 파일
├── lib/
│   └── utils.ts              # 유틸리티 함수
└── components/
    ├── ui/                   # 모든 UI 컴포넌트
    ├── ThemeProvider.tsx     # 테마 프로바이더
    └── ThemeToggle.tsx       # 테마 토글
```

## 🚀 복사 명령어

### 1. 전체 UI 라이브러리 복사

```bash
# 현재 프로젝트에서 ui-library 폴더를 다른 프로젝트로 복사
cp -r ui-library /path/to/your/new-project/

# 또는 압축 후 복사
tar -czf ui-library.tar.gz ui-library/
scp ui-library.tar.gz user@server:/path/to/project/
tar -xzf ui-library.tar.gz
```

### 2. 필요한 파일만 선택적 복사

```bash
# 컴포넌트만 복사
cp -r ui-library/components /path/to/your/new-project/

# 설정 파일만 복사
cp ui-library/tailwind.config.js /path/to/your/new-project/
cp ui-library/globals.css /path/to/your/new-project/app/
cp ui-library/lib/utils.ts /path/to/your/new-project/lib/
```

### 3. Git을 통한 복사

```bash
# 현재 프로젝트를 서브모듈로 추가
cd /path/to/your/new-project
git submodule add <current-repo-url> ui-library

# 또는 특정 브랜치/태그만 복사
git clone -b ui-library <current-repo-url> temp-ui
cp -r temp-ui/ui-library ./
rm -rf temp-ui
```

## 📋 복사 후 설정

### 1. 의존성 설치

```bash
cd /path/to/your/new-project
npm install @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast class-variance-authority clsx tailwind-merge tailwindcss-animate lucide-react next-themes
```

### 2. 파일 경로 수정

복사한 파일들의 import 경로를 새 프로젝트에 맞게 수정해야 할 수 있습니다:

```bash
# 모든 파일에서 @/ 경로를 확인하고 필요시 수정
find . -name "*.tsx" -exec sed -i 's/@\/components/@\/components/g' {} \;
```

### 3. TypeScript 설정

`tsconfig.json`에 경로 매핑 추가:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## 🔧 자동화 스크립트

### 복사 스크립트 (copy-ui-library.sh)

```bash
#!/bin/bash

# UI 라이브러리 복사 스크립트
TARGET_PROJECT=$1

if [ -z "$TARGET_PROJECT" ]; then
    echo "사용법: ./copy-ui-library.sh <target-project-path>"
    exit 1
fi

echo "UI 라이브러리를 $TARGET_PROJECT로 복사합니다..."

# 필요한 디렉토리 생성
mkdir -p "$TARGET_PROJECT/components"
mkdir -p "$TARGET_PROJECT/lib"
mkdir -p "$TARGET_PROJECT/app"

# 파일 복사
cp -r ui-library/components/* "$TARGET_PROJECT/components/"
cp ui-library/lib/utils.ts "$TARGET_PROJECT/lib/"
cp ui-library/tailwind.config.js "$TARGET_PROJECT/"
cp ui-library/globals.css "$TARGET_PROJECT/app/"

# package.json 의존성 추가
echo "의존성을 설치하세요:"
echo "npm install @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast class-variance-authority clsx tailwind-merge tailwindcss-animate lucide-react next-themes"

echo "복사 완료!"
```

### 사용법

```bash
chmod +x copy-ui-library.sh
./copy-ui-library.sh /path/to/your/new-project
```

## 📦 NPM 패키지로 배포 (선택사항)

UI 라이브러리를 NPM 패키지로 만들어 배포할 수도 있습니다:

### 1. package.json 수정

```json
{
  "name": "reading-training-ui",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "components",
    "lib"
  ],
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build"
  }
}
```

### 2. 배포

```bash
npm login
npm publish
```

### 3. 다른 프로젝트에서 사용

```bash
npm install reading-training-ui
```

## ✅ 검증

복사가 완료된 후 다음 명령어로 확인하세요:

```bash
# TypeScript 컴파일 확인
npx tsc --noEmit

# 빌드 확인
npm run build

# 개발 서버 실행
npm run dev
```

## 🚨 주의사항

1. **경로 충돌**: 기존 프로젝트에 동일한 이름의 파일이 있다면 백업 후 복사하세요.
2. **의존성 충돌**: 기존 의존성과 버전이 다를 수 있으니 주의하세요.
3. **TypeScript 설정**: 새 프로젝트의 TypeScript 설정과 호환되는지 확인하세요.
4. **테마 충돌**: 기존 CSS 변수나 테마 설정과 충돌할 수 있습니다.

## 📞 문제 해결

복사 중 문제가 발생하면:

1. `install-guide.md` 파일을 참조하세요
2. 기존 프로젝트의 설정과 비교하세요
3. TypeScript 오류를 하나씩 해결하세요
4. 필요시 컴포넌트를 개별적으로 수정하세요 