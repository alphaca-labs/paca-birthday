# 🎂 paca-birthday

생일을 축하하기 위한 인터랙티브 웹 페이지 프로젝트입니다. React 19와 Framer Motion을 기반으로 부드러운 애니메이션과 감성적인 사용자 경험을 제공합니다.

## 📖 프로젝트 개요

- **이름**: paca-birthday
- **목적**: 생일을 맞이한 누군가를 위한 특별한 웹 경험 제공
- **기술 스택**:
  - React 19 (`react`, `react-dom`)
  - Framer Motion 12 (애니메이션)
  - Vite 7 (개발 서버 및 번들러)
  - ESLint 9 (코드 품질 관리)
- **번들러**: Vite + `@vitejs/plugin-react`
- **언어**: JavaScript (ESM, `"type": "module"`)

## ⚙️ 설치 방법

### 사전 요구사항

- Node.js 18 이상 (Vite 7 권장 사양)
- npm 9 이상

### 설치 절차

저장소를 클론한 뒤 의존성을 설치합니다.

    git clone https://github.com/alphaca-labs/paca-birthday.git
    cd paca-birthday
    npm install

## 🚀 사용법

프로젝트에서 제공하는 npm 스크립트는 다음과 같습니다.

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버를 실행합니다. 기본 주소는 `http://localhost:5173` 입니다. |
| `npm run build` | 프로덕션 빌드를 생성합니다. 결과물은 `dist/` 디렉터리에 저장됩니다. |
| `npm run preview` | 빌드된 결과물을 로컬에서 미리 확인합니다. |
| `npm run lint` | ESLint로 전체 소스 코드를 검사합니다. |

### 빠른 시작

    npm run dev

브라우저에서 표시된 주소(기본값: `http://localhost:5173`)에 접속하여 결과를 확인할 수 있습니다.

## 🗂️ 프로젝트 구조

    paca-birthday/
    ├── public/              # 정적 자산 (이미지, 폰트 등)
    ├── src/                 # 애플리케이션 소스 코드 (React 컴포넌트, 스타일 등)
    ├── index.html           # Vite 진입점 HTML
    ├── vite.config.js       # Vite 설정 파일
    ├── eslint.config.js     # ESLint 설정 파일
    ├── package.json         # 프로젝트 메타 및 의존성 정의
    ├── package-lock.json    # 잠금 파일 (의존성 버전 고정)
    └── README.md            # 프로젝트 문서 (본 문서)

### 주요 디렉터리 설명

- **`public/`**: 빌드 시 그대로 복사되는 정적 리소스를 보관합니다. 이미지, 아이콘, 폰트 등을 배치하세요.
- **`src/`**: React 컴포넌트, 페이지, 훅, 스타일 등 실제 애플리케이션 로직이 위치합니다.
- **`index.html`**: Vite가 사용하는 진입 HTML로, `src/`의 엔트리 모듈을 로드합니다.
- **`vite.config.js`**: Vite 빌드 옵션 및 플러그인 설정을 정의합니다.
- **`eslint.config.js`**: 코드 스타일과 린트 규칙을 정의합니다.

## 🧪 개발 가이드

- **컴포넌트 작성**: `src/` 하위에 기능 단위로 컴포넌트를 분리하여 작성하세요.
- **애니메이션**: 인터랙션과 트랜지션은 `framer-motion`의 `motion` 컴포넌트와 `AnimatePresence`를 활용해 구현합니다.
- **코드 품질**: 커밋 전 `npm run lint`를 실행하여 ESLint 경고와 오류가 없는지 확인하세요.
- **HMR**: Vite의 빠른 HMR(Hot Module Replacement)을 통해 저장과 동시에 변경사항이 반영됩니다.

## 📄 라이선스

본 프로젝트의 라이선스 정보는 별도로 명시되지 않았습니다. 사용 또는 배포 전 저장소 관리자에게 문의해 주세요.

---

🎉 **Happy Birthday!** 이 작은 웹페이지가 특별한 하루를 더욱 빛나게 해주길 바랍니다.
