# 세무신고 플랫폼

영수증 촬영만으로 세무신고까지 자동으로 완료하는 혁신적인 플랫폼입니다.

## 🌟 프로젝트 개요

**목표**: 영수증 사진 촬영 → OCR 자동인식 → 자동분류 → 세액계산 → 제출/파일생성 → 전문가 대행까지 원스톱 세무신고 시스템

**타겟**: 프리랜서, 초소형 자영업자, 1인 사업자 (월 매출 소규모, 부업)

**주요 기능**:
- 📸 **영수증 촬영** - 정식 영수증 자동 인식 (OCR)
- 🏦 **통장 캡처** - 영수증 없어도 거래내역만으로 경비 처리 ✨ NEW
- 🖼️ **갤러리 일괄 업로드** - 사진첩 이미지 한 번에 처리 (최대 20장) ✨ NEW
- 🤖 AI 기반 자동 경비 분류
- ⚠️ **위험도 스코어링** - 세무 리스크 자동 분석 ✨ NEW
- 👨‍💼 **건당 전문가 리뷰** - 애매한 항목만 1,900원에 검토 ✨ NEW
- 💰 실시간 세금 계산 및 환급 예상액 표시
- 🌏 6개 언어 지원 (한국어, 영어, 중국어, 일본어, 독일어, 스페인어)
- 💬 다국어 FAQ 자동응답 챗봇 (18개 질문)
- 📊 세무 신고서 자동 생성 (XML/CSV)

## 💡 프리랜서 맞춤 차별화 기능

### 1. 영수증 없어도 OK! 통장 캡처 🏦
```
문제: 현금 지출, 개인 계좌 이체 등 영수증이 없는 경비
해결: 뱅킹앱 거래내역 화면 캡처 → 자동으로 경비 후보 등록
장점: 
  - 증빙 부족 문제 해결
  - 날짜, 거래처, 금액 자동 추출
  - 사업/개인 자동 분류 추천
```

### 2. 갤러리 사진 일괄 처리 📸
```
문제: 여러 장의 영수증을 일일이 촬영하기 번거로움
해결: 사진첩에 저장된 이미지를 한 번에 업로드 (최대 20장)
장점:
  - 시간 절약 (1장씩 → 20장 동시)
  - 영수증, 스크린샷, 거래내역 등 다양한 형식 인식
  - 자동 분류 및 정리
```

### 3. 위험도 게이지 & 건당 리뷰 ⚠️
```
문제: 세무사 전체 대행은 비용 부담, 혼자 하기엔 불안
해결: 위험도 자동 분석 + 애매한 항목만 골라서 검토
비용:
  - 자동 처리 (저위험): 무료
  - 건당 전문가 리뷰: 1,900원 (24시간 이내)
  - 전면 대행: 월 정액 (필요시)
```

### 4. 간편 모드 (3가지 방식 선택) ⚡
```
워크플로우:
1. 방식 선택
   - 영수증 촬영 (정식 영수증)
   - 통장 캡처 (영수증 없음)
   - 갤러리 업로드 (사진첩)
   
2. 1클릭 분류
   - 업무용 / 개인용 / 검토필요
   
3. 자동 계산
   - 총 경비, 공제액, 예상 세금/환급
   
4. 제출
   - 자동 제출 / 파일 다운로드 / 전문가 대행
```

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

#### POST /api/bank-capture ✨ NEW
통장 거래내역 캡처 분석

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
    "transactions": [
      {
        "date": "2026-01-01",
        "merchant": "카페베네 강남점",
        "amount": 15000,
        "type": "withdraw",
        "category": "식비",
        "label": "사업추정",
        "confidence": 0.88,
        "risk_level": "low"
      }
    ],
    "summary": {
      "total": 3,
      "business": 2,
      "review_needed": 1
    }
  }
}
```

#### POST /api/gallery-upload ✨ NEW
갤러리 이미지 일괄 업로드

**요청**:
```json
{
  "images": [
    "data:image/jpeg;base64,...",
    "data:image/jpeg;base64,..."
  ]
}
```

**응답**:
```json
{
  "success": true,
  "data": {
    "processed": [
      {
        "id": "img_1",
        "source": "gallery",
        "type": "receipt",
        "data": {
          "date": "2026-01-01",
          "amount": 25000,
          "vendor": "스타벅스",
          "category": "식비",
          "confidence": 0.85,
          "risk_level": "low"
        }
      }
    ],
    "summary": {
      "total": 10,
      "receipts": 7,
      "statements": 2,
      "screenshots": 1
    }
  }
}
```

#### POST /api/risk-analysis ✨ NEW
경비 항목 위험도 분석

**요청**:
```json
{
  "expense": {
    "amount": 200000,
    "category": "기타",
    "confidence": 0.65,
    "currency": "USD"
  }
}
```

**응답**:
```json
{
  "success": true,
  "data": {
    "riskScore": 70,
    "riskLevel": "high",
    "riskFactors": [
      "고액 거래 (15만원 초과)",
      "낮은 인식 신뢰도",
      "불명확한 카테고리",
      "해외 거래"
    ],
    "reviewRecommended": true,
    "reviewCost": 1900,
    "message": "전문가 검토를 권장합니다 (1,900원)"
  }
}
```

#### POST /api/spot-review ✨ NEW
건당 전문가 리뷰 요청

**요청**:
```json
{
  "expense_id": "exp_123",
  "user_note": "이 항목이 경비로 인정되나요?"
}
```

**응답**:
```json
{
  "success": true,
  "data": {
    "review_id": "review_1735718400000",
    "status": "pending",
    "estimated_time": "24시간 이내",
    "cost": 1900,
    "message": "전문가 검토가 요청되었습니다. 24시간 이내 답변 예정입니다."
  }
}
```

#### POST /api/calculate-tax
세금 계산

**요청**:
```json
{
  "expenses": [
    { 
      "amount": 45000, 
      "category": "식비",
      "risk_level": "low"
    }
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
    "refundEstimate": 2250,
    "riskStats": {
      "high": 0,
      "mid": 0,
      "low": 1
    }
  }
}
```

#### GET /api/faq/:lang
다국어 FAQ 데이터 (ko/en/zh/ja/de/es)

**응답**: 18개 FAQ 질문/답변 (프리랜서 맞춤 8개 추가)

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
- [x] **통장 캡처 OCR** ✨ NEW
- [x] **갤러리 일괄 업로드 (최대 20장)** ✨ NEW
- [x] **위험도 스코어링 시스템** ✨ NEW
- [x] **건당 전문가 리뷰 (1,900원)** ✨ NEW
- [x] **간편 모드 워크플로우 (3가지 방식)** ✨ NEW
- [x] 경비 목록 관리
- [x] 세금 계산 기능
- [x] 다국어 FAQ 챗봇 (18개 질문, 6개 언어)
- [x] 반응형 디자인
- [x] PM2 프로세스 관리
- [x] Git 버전 관리

### 🚧 개발 예정
- [ ] 실제 OCR API 연동 (Google Vision API / Tesseract)
- [ ] 사용자 인증 시스템
- [ ] 데이터베이스 연동 (Cloudflare D1)
- [ ] 홈택스 XML 파일 생성
- [ ] 실제 전문가 매칭 시스템 (현재는 시뮬레이션)
- [ ] 이메일 알림 기능
- [ ] 영수증 중복 감지 (해시 기반)
- [ ] 환급 예상액 그래프
- [ ] 업종별 자동 매핑 개선
- [ ] 다국어 OCR (영어, 중국어, 일본어)

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

### 간편 모드 선택 (3가지 방식)

#### 방법 1: 영수증 촬영 📸
**언제 사용**: 정식 영수증이 있을 때
1. "영수증 촬영" 버튼 클릭
2. 영수증 사진 촬영 또는 선택
3. "OCR 분석 시작" 클릭
4. 결과 확인 후 "경비 목록에 추가"

#### 방법 2: 통장 캡처 🏦 ✨ NEW
**언제 사용**: 영수증이 없을 때 (현금 지출, 계좌 이체)
1. "통장 캡처" 버튼 클릭
2. 뱅킹앱 거래내역 화면 캡처
3. "거래내역 분석 시작" 클릭
4. 사업/개인 자동 분류 확인
5. 필요한 항목만 체크하여 "선택 항목 경비에 추가"

**💡 Tip**: 거래내역이 보이는 화면이면 OK! 여러 거래가 있어도 자동으로 분리됩니다.

#### 방법 3: 갤러리 업로드 🖼️ ✨ NEW
**언제 사용**: 사진첩에 영수증이 여러 장 있을 때
1. "갤러리 업로드" 버튼 클릭
2. 여러 사진 선택 (최대 20장)
3. "일괄 분석 시작" 클릭
4. 모든 결과 확인 후 "모두 경비에 추가"

**💡 Tip**: 영수증, 스크린샷, 거래내역 등 다양한 형식을 한 번에 업로드 가능!

### 세금 계산 및 제출
1. 경비 목록에 항목 추가 (위 3가지 방법 중 선택)
2. "세금 계산하기" 버튼 클릭
3. 결과 확인:
   - 💰 총 경비
   - ✅ 공제 가능액
   - 🧮 예상 세금
   - 💵 환급 예상액
   - ⚠️ 위험도 통계 (고/중/저)
4. 고위험 항목은 "전문가 검토 요청" 클릭 (1,900원)

### 위험도 게이지 이해하기 ⚠️

#### 🟢 저위험 (안전)
- 자동 처리 가능
- 별도 검토 불필요
- 예: 소액, 일반 가맹점, 높은 신뢰도

#### 🟡 중위험 (주의)
- 일반적으로 문제 없음
- 금액이 크거나 패턴이 불명확한 경우
- 필요시 검토 권장

#### 🔴 고위험 (검토권장)
- 전문가 검토 권장 (1,900원)
- 고액 거래, 해외 거래, 불명확한 카테고리
- 24시간 이내 답변

### 챗봇 사용
1. 우측 하단 챗봇 아이콘 클릭
2. 언어 선택 (🇰🇷🇺🇸🇨🇳🇯🇵)
3. 질문 클릭하여 답변 확인
4. 검색 기능으로 원하는 질문 찾기

**주요 질문**:
- 영수증이 없어도 되나요? 💡
- 갤러리 사진도 사용 가능한가요? 📸
- 통장 캡처는 어떻게 하나요? 🏦
- 위험도 게이지는 무엇인가요? ⚠️
- 건당 전문가 리뷰는? 👨‍💼
- 프리랜서도 사용 가능한가요? 💼

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

