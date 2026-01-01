# 세무신고 플랫폼

영수증 촬영만으로 세무신고까지 자동으로 완료하는 혁신적인 플랫폼입니다.

## 🌟 프로젝트 개요

**목표**: 영수증 사진 촬영 → OCR 자동인식 → 자동분류 → 세액계산 → 제출/파일생성 → 전문가 대행까지 원스톱 세무신고 시스템

**주요 기능**:
- 📸 영수증 촬영 및 자동 인식 (OCR)
- 🤖 AI 기반 자동 경비 분류
- 💰 실시간 세금 계산 및 환급 예상액 표시
- 🌏 6개 언어 지원 (한국어, 영어, 중국어, 일본어, 독일어, 스페인어)
- 💬 다국어 FAQ 자동응답 챗봇
- 📊 세무 신고서 자동 생성 (XML/CSV)

## 🔗 배포된 URL

- **개발 서버**: https://3000-icxfg6c1xu0drf6l6aa3g-c07dda5e.sandbox.novita.ai
- **프로덕션**: (Cloudflare Pages 배포 후 업데이트 예정)

## 🛠️ 기술 스택

### 백엔드
- **Hono** - 경량 고성능 웹 프레임워크
- **Cloudflare Workers** - 엣지 런타임
- **TypeScript** - 타입 안정성

### 프론트엔드
- **Vanilla JavaScript** - 순수 JS로 최적화
- **Tailwind CSS** - 유틸리티 기반 CSS
- **Font Awesome** - 아이콘

### 인프라
- **Cloudflare Pages** - 정적 사이트 호스팅
- **Wrangler** - 배포 도구
- **PM2** - 프로세스 관리 (개발 환경)

## 📂 프로젝트 구조

```
webapp/
├── src/
│   └── index.tsx          # 메인 애플리케이션 (Hono 서버 + API)
├── public/
│   └── static/
│       ├── app.js         # 프론트엔드 로직
│       └── style.css      # 커스텀 스타일
├── dist/                  # 빌드 출력 (자동 생성)
├── ecosystem.config.cjs   # PM2 설정
├── wrangler.jsonc         # Cloudflare 설정
├── package.json           # 의존성 및 스크립트
└── README.md              # 프로젝트 문서
```

## 🚀 주요 기능

### 1. 영수증 OCR 자동 인식
- 날짜, 금액, 업체명, 부가세, 카테고리 자동 추출
- 신뢰도 점수 표시
- 오류 감지 시 수정 제안

### 2. 경비 자동 분류
- AI 기반 업종/금액/가맹점 패턴 분석
- 업무용/개인용 자동 구분
- 학습 기능으로 정확도 향상

### 3. 세금 자동 계산
- 총 경비 및 공제 가능액 계산
- 예상 세금 및 환급액 실시간 표시
- 과세/면세 자동 분류

### 4. 다국어 FAQ 챗봇
- 6개 언어 실시간 전환
- 25개 핵심 질문/답변
- 검색 기능 지원

### 5. API 엔드포인트

#### POST /api/ocr
영수증 이미지 OCR 분석 (시뮬레이션)

**요청**:
```json
{
  "image": "data:image/jpeg;base64,..."
}
```

**응답**:
```json
{
  "success": true,
  "data": {
    "date": "2026-01-01",
    "amount": 45000,
    "vendor": "스타벅스 코리아",
    "vat": 4500,
    "category": "식비",
    "confidence": 0.95
  }
}
```

#### POST /api/calculate-tax
세금 계산

**요청**:
```json
{
  "expenses": [
    { "amount": 45000, "category": "식비" }
  ]
}
```

**응답**:
```json
{
  "success": true,
  "data": {
    "totalExpense": 45000,
    "deductible": 36000,
    "vat": 4500,
    "estimatedTax": 5400,
    "refundEstimate": 2250
  }
}
```

#### GET /api/faq/:lang
다국어 FAQ 데이터 (ko/en/zh/ja/de/es)

## 📝 데이터 모델

### 영수증 데이터
```typescript
{
  date: string;          // 날짜
  amount: number;        // 금액
  vendor: string;        // 업체명
  vat: number;          // 부가세
  category: string;     // 카테고리
  confidence: number;   // 신뢰도 (0-1)
}
```

### 세금 계산 결과
```typescript
{
  totalExpense: number;     // 총 경비
  deductible: number;       // 공제 가능액
  vat: number;             // 부가세
  estimatedTax: number;    // 예상 세금
  refundEstimate: number;  // 환급 예상액
}
```

## 💻 로컬 개발

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
# Vite 개발 서버
npm run dev

# Wrangler 개발 서버 (PM2)
npm run build
pm2 start ecosystem.config.cjs
```

### 3. 빌드
```bash
npm run build
```

### 4. 포트 정리
```bash
npm run clean-port
```

## 🌐 배포

### Cloudflare Pages 배포
```bash
# 빌드 및 배포
npm run deploy

# 프로덕션 배포 (프로젝트명 지정)
npm run deploy:prod
```

### 배포 전 체크리스트
- [ ] `npm run build` 성공 확인
- [ ] 로컬 테스트 완료
- [ ] 환경 변수 설정 확인
- [ ] Git 커밋 완료

## 🔧 설정

### wrangler.jsonc
```jsonc
{
  "name": "webapp",
  "compatibility_date": "2026-01-01",
  "pages_build_output_dir": "./dist",
  "compatibility_flags": ["nodejs_compat"]
}
```

### package.json 스크립트
- `npm run dev` - Vite 개발 서버
- `npm run dev:sandbox` - Wrangler 개발 서버 (샌드박스)
- `npm run build` - 프로젝트 빌드
- `npm run preview` - 빌드 미리보기
- `npm run deploy` - Cloudflare Pages 배포
- `npm run clean-port` - 포트 3000 정리
- `npm test` - 서버 응답 테스트

## 📊 현재 구현 상태

### ✅ 완료된 기능
- [x] Hono + Cloudflare Pages 프로젝트 설정
- [x] 영수증 촬영 UI
- [x] OCR 시뮬레이션 API
- [x] 경비 목록 관리
- [x] 세금 계산 기능
- [x] 다국어 FAQ 챗봇 (6개 언어)
- [x] 반응형 디자인
- [x] PM2 프로세스 관리

### 🚧 개발 예정
- [ ] 실제 OCR API 연동 (Google Vision API / Tesseract)
- [ ] 사용자 인증 시스템
- [ ] 데이터베이스 연동 (Cloudflare D1)
- [ ] 홈택스 XML 파일 생성
- [ ] 전문가 매칭 시스템
- [ ] 이메일 알림 기능
- [ ] 영수증 중복 감지
- [ ] 환급 예상액 그래프

## 🌍 다국어 지원

### 지원 언어
- 🇰🇷 한국어 (ko)
- 🇺🇸 영어 (en)
- 🇨🇳 중국어 (zh)
- 🇯🇵 일본어 (ja)
- 🇩🇪 독일어 (de)
- 🇪🇸 스페인어 (es)

### FAQ 주제
1. 플랫폼 소개
2. 사용 방법
3. OCR 인식 범위
4. 자동 계산 기능
5. 제출 방식
6. 지원 세금 종류
7. 환급액 표시
8. 분류 정확도
9. 중복 방지
10. 수정 기능

## 📱 사용자 가이드

### 1단계: 영수증 촬영
1. "사진 선택" 버튼 클릭
2. 영수증 촬영 또는 파일 선택
3. "OCR 분석 시작" 클릭

### 2단계: 결과 확인
1. 자동 인식된 데이터 확인
2. 필요시 수정
3. "경비 목록에 추가" 클릭

### 3단계: 세금 계산
1. 여러 영수증 추가
2. "세금 계산하기" 클릭
3. 결과 확인 (총 경비, 공제액, 예상 세금, 환급액)

### 챗봇 사용
1. 우측 하단 챗봇 아이콘 클릭
2. 언어 선택 (🇰🇷🇺🇸🇨🇳🇯🇵)
3. 질문 클릭하여 답변 확인
4. 검색 기능으로 원하는 질문 찾기

## 🔐 보안

### 현재 구현
- CORS 설정
- 입력 검증
- 에러 핸들링

### 추가 예정
- JWT 인증
- Rate limiting
- 데이터 암호화
- HTTPS 강제

## 🐛 알려진 이슈

현재 알려진 이슈는 없습니다.

## 📞 문의 및 지원

이슈나 문의사항은 GitHub Issues를 통해 남겨주세요.

## 📄 라이선스

MIT License

## 🎯 다음 단계

1. **GitHub 저장소 연동** (진행 중)
2. **Cloudflare Pages 배포** (대기 중)
3. **실제 OCR API 연동** (계획 중)
4. **사용자 인증 구현** (계획 중)

---

**최종 업데이트**: 2026-01-01  
**개발 상태**: ✅ MVP 완료  
**배포 상태**: 🚀 개발 서버 실행 중

