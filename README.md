# 세무신고 플랫폼 - "영수증 없어도 신고는 됩니다"

> **사진만 있으면 시작할 수 있어요. 세금은 우리가 계산하고, 결정은 당신이 합니다.**

프리랜서와 초소형 자영업자를 위한, 세상에서 가장 쉬운 세무 신고 플랫폼입니다.

---

## 🎯 프로젝트 개요

### 디자인 컨셉 (Design Identity)

**핵심 키워드:**
- **"두려움을 제거하는 인터페이스"**
- **"복잡보다 확신, 설명보다 선택"**
- **"당신이 모를 것을 우리가 전제로 한다"**

**디자인 목표:**

| 항목 | 기존 세무 서비스 | 제안 컨셉 |
|------|-----------------|-----------|
| 감정 톤 | 위협적, 경고, 책임 강조 | 안심감, 안내, 동행형 |
| 정보 구조 | 정보 과잉, 세무 용어 난립 | 3~5개 요소만 정제 |
| 색감 | 차가운 금융 UI | 따뜻한 전문가 느낌 + 신뢰 |
| 타이포 | 테크/관공서 스타일 | 인간 친화 + 브랜드 정체감 |

### UI 컬러 시스템

**Primary (신뢰/전문)**
- Midnight Navy `#0D1B2A`
- Deep Green Ledger `#102D29`

**Secondary (편안/친숙)**
- Cream White `#FAF9F6`
- Sand Beige `#EDE9E3`
- Soft Fog Gray `#F4F4F4`

**Accent (핵심 CTA)**
- Clear Mint `#25C2A0` (주요 버튼)
- Amber Audit `#F8A10F` (검토/주의)
- Coral Trust `#F26B5F` (위험도 표시)

### 폰트 시스템

- **Headline**: Pretendard SemiBold (제목, 강조)
- **Body**: Inter / SUIT (본문)
- **Number**: Roboto Mono (금액, 숫자 - 가독성)

---

## ✨ 핵심 기능

### 1. 영수증 촬영 📸
- 카메라로 즉시 촬영 또는 파일 업로드
- OCR 자동 인식 (일자, 금액, 업체명, 카테고리)
- 신뢰도 점수 표시

### 2. 통장 캡처 🏦 **NEW!**
- 뱅킹앱 거래내역 화면 촬영
- 자동 경비 분류 (사업추정/개인추정/검토필요)
- **영수증 없이도 경비 처리 가능**
- 위험도 자동 스코어링

### 3. 갤러리 일괄 업로드 🖼️ **NEW!**
- 사진첩에 저장된 영수증 최대 20장 동시 업로드
- 일괄 OCR 분석 및 자동 분류
- 한 번에 여러 경비 항목 추가

### 4. 위험도 스코어링 ⚖️
- **안전(Low)**: 자동 처리 가능
- **검토(Mid)**: 전문가 확인 권장
- **주의(High)**: 반드시 검토 필요
- 금액, 거래패턴, 빈도 기반 자동 분석

### 5. Spot Review (건당 전문가 리뷰) 👨‍💼
- **월 정액 NO, 건당 1,900원만 지불**
- 애매한 항목만 세무사 확인
- 24시간 내 피드백
- "여기만 좀 봐주세요" - 세무 서비스 최초 문구

### 6. 실시간 세금 계산 💰
- 총 경비 / 공제 가능액 / 예상 환급액
- 위험도별 항목 통계
- 자동 신고서 생성

### 7. 다국어 FAQ 챗봇 🤖
- 6개 언어 지원 (한국어, 영어, 중국어, 일본어, 독일어, 스페인어)
- 25개 핵심 질문 답변
- 실시간 검색 기능

---

## 🌐 접속 URL

### 개발 서버 (Sandbox)
- **URL**: https://3000-icxfg6c1xu0drf6l6aa3g-c07dda5e.sandbox.novita.ai
- **상태**: ✅ Online
- **관리**: PM2 Daemon

### 프로덕션 (Cloudflare Pages)
- **배포 대기 중**
- 명령어: `npm run deploy`

---

## 📊 데이터 아키텍처

### 경비 항목 (Expense)
```json
{
  "id": "exp_UUID",
  "date": "2026-01-01",
  "amount": 45000,
  "vendor": "스타벅스 코리아",
  "category": "식비",
  "risk_level": "low|mid|high",
  "source_type": "receipt|bank|gallery",
  "confidence": 0.95,
  "timestamp": "ISO8601"
}
```

### 통장 거래내역 (Bank Transaction)
```json
{
  "id": "tx_UUID",
  "date": "2026-01-01",
  "merchant": "카페베네",
  "amount": 15000,
  "type": "withdraw|deposit",
  "category": "식비",
  "label": "사업추정|개인추정|검토필요",
  "confidence": 0.88,
  "risk_level": "low|mid|high"
}
```

### 위험도 스코어 (Risk Score)
```json
{
  "score": 45,
  "level": "mid",
  "factors": [
    "고액 거래 (10만원 이상)",
    "반복 패턴 없음",
    "업종 평균 대비 높음"
  ]
}
```

---

## 🚀 사용 방법

### 1. 모드 선택
3가지 입력 방식 중 선택:
- **영수증 촬영**: 정식 영수증이 있을 때
- **통장 캡처**: 영수증 없을 때 (추천 💡)
- **갤러리 업로드**: 사진첩에 여러 장 있을 때

### 2. 자동 분석
- OCR이 자동으로 텍스트 추출
- 금액, 일자, 업체명, 카테고리 자동 인식
- 위험도 점수 계산

### 3. 3버튼 선택 (통장 캡처 시)
- **업무**: 사업용 경비로 추가
- **개인**: 개인 지출로 분류
- **검토필요**: Spot Review 대상

### 4. 경비 누적
- 자동으로 경비 목록에 추가
- 실시간 세금 예상 금액 표시
- 위험도 통계 확인

### 5. 세금 계산 & 신고
- "세금 계산하기" 버튼 클릭
- 공제 가능액 / 예상 환급액 확인
- 신고서 제출 또는 PDF 다운로드

---

## 🛠️ 기술 스택

### Backend
- **Hono** - Lightweight Web Framework
- **Cloudflare Workers** - Edge Runtime
- **TypeScript** - Type Safety

### Frontend
- **Vanilla JavaScript** - No Framework
- **Tailwind CSS** (CDN) - Utility CSS
- **Font Awesome** - Icon Library
- **Pretendard, Roboto Mono** - Typography

### Infrastructure
- **Cloudflare Pages** - Static Hosting + Functions
- **Wrangler** - Deployment CLI
- **PM2** - Process Manager (개발 환경)
- **Vite** - Build Tool

---

## 📁 프로젝트 구조

```
webapp/
├── src/
│   ├── index.tsx          # Hono 앱 + HTML 렌더링
│   └── renderer.tsx       # (옵션)
├── public/
│   └── static/
│       ├── app.js         # 프론트엔드 로직
│       └── style.css      # 디자인 시스템
├── dist/                  # 빌드 결과물
│   ├── _worker.js         # Cloudflare Worker
│   ├── _routes.json       # Routing
│   └── static/            # 정적 파일
├── ecosystem.config.cjs   # PM2 설정
├── wrangler.jsonc         # Cloudflare 설정
├── package.json           # Dependencies
└── README.md
```

---

## 🔧 로컬 개발

### 설치
```bash
npm install
```

### 빌드
```bash
npm run build
```

### 개발 서버 시작 (Sandbox)
```bash
# 포트 정리
npm run clean-port

# PM2로 시작
pm2 start ecosystem.config.cjs

# 상태 확인
pm2 list
pm2 logs webapp --nostream
```

### 테스트
```bash
curl http://localhost:3000
curl http://localhost:3000/api/faq/ko
```

---

## 📤 배포

### Cloudflare Pages 배포

**1. Cloudflare API 키 설정 (필수)**
```bash
# 툴로 설정
setup_cloudflare_api_key

# 또는 수동 설정
export CLOUDFLARE_API_TOKEN="your-token"
```

**2. 프로젝트 생성**
```bash
npx wrangler pages project create webapp \
  --production-branch main \
  --compatibility-date 2024-01-01
```

**3. 배포**
```bash
npm run deploy
# 또는
npx wrangler pages deploy dist --project-name webapp
```

**4. 환경 변수 설정 (옵션)**
```bash
npx wrangler pages secret put API_KEY --project-name webapp
```

---

## 🎨 핵심 UI/UX 원칙

### 3-6 요소 제한
- 한 화면에 최대 3~6개 정보만 표시
- 선택지는 최대 3개 버튼 (업무/개인/검토)

### 안심형 메시지 톤
- ✅ **좋은 예**: "사진만 있으면 시작할 수 있어요"
- ❌ **나쁜 예**: "필수 정보를 입력하세요"

### 숫자는 Mono 폰트
- 금액, 계정번호 → Roboto Mono
- 자동 콤마 처리 (`toLocaleString`)

### 위험도 과도 표시 금지
- 위험도는 최소한만 표시
- 과도한 경고는 불안감 조성

---

## 🌍 다국어 지원

현재 지원 언어:
- 🇰🇷 한국어 (ko)
- 🇺🇸 영어 (en)
- 🇨🇳 중국어 (zh)
- 🇯🇵 일본어 (ja)
- 🇩🇪 독일어 (de)
- 🇪🇸 스페인어 (es)

FAQ 챗봇에서 언어 선택 가능

---

## 📈 향후 로드맵

### v1.1 (현재 MVP)
- ✅ 영수증 OCR
- ✅ 통장 캡처
- ✅ 갤러리 업로드
- ✅ 위험도 스코어
- ✅ Spot Review UI
- ✅ 다국어 FAQ

### v1.2 (다음 단계)
- [ ] 실제 OCR API 연동 (Google Vision / Tesseract.js)
- [ ] Cloudflare D1 데이터베이스 통합
- [ ] 사용자 인증 (JWT / OAuth)
- [ ] 홈택스 XML 자동 생성
- [ ] Spot Review 결제 연동

### v1.3 (확장)
- [ ] 계좌/카드 1회 연동
- [ ] 자동 거래내역 가져오기
- [ ] 세무사 매칭 시스템
- [ ] 다국가 신고 지원 (미국, 싱가포르, 중국)

### v2.0 (Advanced)
- [ ] 법인 세무 지원
- [ ] 무역/수출입 모듈
- [ ] AI 세무 컨설팅
- [ ] 모바일 앱 출시

---

## 🤝 타겟 사용자

1. **프리랜서** (1인 사업자)
   - 정식 장부 없음
   - 영수증 분실 많음
   - 세무 지식 부족

2. **인플루언서/셀러**
   - 온라인 수입 발생
   - 부업 형태
   - 간단한 신고 필요

3. **초소형 자영업자**
   - 연매출 3천만~1억
   - 세무사 비용 부담
   - 간편한 솔루션 필요

---

## 💡 차별화 포인트

| 기준 | 기존 서비스 | 세무신고 플랫폼 |
|------|-----------|---------------|
| 영수증 필수 | ✅ 필수 | ❌ 통장 캡처로 대체 |
| 계좌 연동 | 필수 (매월 유지) | 불필요 |
| 월 비용 | 9,900~29,000원 | 무료 (건당만 유료) |
| 전문가 상담 | 월정액 포함 | 건당 1,900원 |
| 오류 불안감 | 사용자 책임 | Undo 상시 가능 |
| 초보자 진입 | 어려움 (용어 난해) | 쉬움 (3버튼 선택) |

---

## 📞 문의 및 지원

- **GitHub**: (저장소 추가 예정)
- **Email**: support@tax-platform.com
- **FAQ 챗봇**: 우측 하단 아이콘 클릭

---

## 📜 라이선스

MIT License

---

## 🎉 주요 성과

- ✅ **디자인 시스템 완성** - 컬러/폰트/톤앤매너
- ✅ **통장 캡처 기능** - 영수증 없이도 신고 가능
- ✅ **Spot Review** - 세무업계 최초 건당 검토 모델
- ✅ **3버튼 UX** - 초보자 친화적 인터페이스
- ✅ **위험도 스코어** - AI 기반 자동 분석
- ✅ **다국어 지원** - 글로벌 확장 준비

---

**마지막 업데이트**: 2026-01-01  
**버전**: v1.1.0  
**개발 상태**: ✅ MVP 완료, 배포 준비 중
