import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'

const app = new Hono()

// CORS 활성화
app.use('/api/*', cors())

// 정적 파일 제공
app.use('/static/*', serveStatic({ root: './public' }))

// API 엔드포인트들 (기존 + 신규)

// 영수증 OCR
app.post('/api/ocr', async (c) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 800))
    
    return c.json({
      success: true,
      data: {
        date: '2026-01-01',
        amount: 45000,
        vendor: '스타벅스 코리아',
        vat: 4500,
        category: '식비',
        confidence: 0.95,
        risk_level: 'low',
        source_type: 'receipt'
      },
      message: 'OCR 인식 완료'
    })
  } catch (error) {
    return c.json({ success: false, message: '오류가 발생했습니다' }, 400)
  }
})

// 통장 캡처 OCR (신규)
app.post('/api/bank-capture', async (c) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1200))
    
    const mockTransactions = [
      {
        id: 'tx_1',
        date: '2026-01-01',
        merchant: '카페베네 강남점',
        amount: 15000,
        type: 'withdraw',
        category: '식비',
        label: '사업추정',
        confidence: 0.88,
        risk_level: 'low',
        selected: true
      },
      {
        id: 'tx_2',
        date: '2026-01-02',
        merchant: '쿠팡 온라인결제',
        amount: 32000,
        type: 'withdraw',
        category: '사무용품',
        label: '사업추정',
        confidence: 0.75,
        risk_level: 'mid',
        selected: true
      },
      {
        id: 'tx_3',
        date: '2026-01-03',
        merchant: '택시 결제',
        amount: 8500,
        type: 'withdraw',
        category: '교통비',
        label: '검토필요',
        confidence: 0.65,
        risk_level: 'mid',
        selected: false
      }
    ]
    
    return c.json({
      success: true,
      data: {
        transactions: mockTransactions,
        summary: {
          total: mockTransactions.length,
          business: mockTransactions.filter(t => t.label === '사업추정').length,
          review_needed: mockTransactions.filter(t => t.label === '검토필요').length
        }
      },
      message: '통장 내역 인식 완료'
    })
  } catch (error) {
    return c.json({ success: false, message: '오류가 발생했습니다' }, 400)
  }
})

// 갤러리 일괄 업로드 (신규)
app.post('/api/gallery-upload', async (c) => {
  try {
    const body = await c.req.json()
    const imageCount = body.count || 5
    
    const mockResults = Array.from({ length: imageCount }, (_, index) => ({
      id: `img_${index + 1}`,
      source: 'gallery',
      type: index % 3 === 0 ? 'receipt' : index % 3 === 1 ? 'statement' : 'screenshot',
      data: {
        date: `2026-01-0${(index % 9) + 1}`,
        amount: Math.floor(Math.random() * 100000) + 5000,
        vendor: ['스타벅스', '쿠팡', '올리브영', '이마트', 'GS25'][index % 5],
        category: ['식비', '사무용품', '통신비', '교통비', '소모품'][index % 5],
        confidence: 0.7 + Math.random() * 0.25,
        risk_level: index % 4 === 0 ? 'high' : index % 2 === 0 ? 'mid' : 'low'
      }
    }))
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    return c.json({
      success: true,
      data: {
        processed: mockResults,
        summary: {
          total: mockResults.length,
          receipts: mockResults.filter((r: any) => r.type === 'receipt').length,
          statements: mockResults.filter((r: any) => r.type === 'statement').length,
          screenshots: mockResults.filter((r: any) => r.type === 'screenshot').length
        }
      },
      message: `${mockResults.length}개 이미지 처리 완료`
    })
  } catch (error) {
    return c.json({ success: false, message: '오류가 발생했습니다' }, 400)
  }
})

// 위험도 분석 (신규)
app.post('/api/risk-analysis', async (c) => {
  try {
    const { expense } = await c.req.json()
    
    let riskScore = 0
    let riskFactors = []
    
    if (expense.amount > 150000) {
      riskScore += 30
      riskFactors.push('고액 거래 (15만원 초과)')
    }
    
    if (expense.confidence < 0.7) {
      riskScore += 25
      riskFactors.push('낮은 인식 신뢰도')
    }
    
    if (['기타', '미분류'].includes(expense.category)) {
      riskScore += 20
      riskFactors.push('불명확한 카테고리')
    }
    
    const riskLevel = riskScore >= 50 ? 'high' : riskScore >= 25 ? 'mid' : 'low'
    const reviewRecommended = riskScore >= 40
    
    return c.json({
      success: true,
      data: {
        riskScore,
        riskLevel,
        riskFactors,
        reviewRecommended,
        reviewCost: reviewRecommended ? 1900 : 0,
        message: reviewRecommended 
          ? '전문가 검토를 권장합니다 (1,900원)' 
          : '자동 처리 가능합니다'
      }
    })
  } catch (error) {
    return c.json({ success: false, message: '분석 오류' }, 400)
  }
})

// Spot Review 요청 (신규)
app.post('/api/spot-review', async (c) => {
  try {
    const { expense_id, user_note } = await c.req.json()
    
    await new Promise(resolve => setTimeout(resolve, 800))
    
    return c.json({
      success: true,
      data: {
        review_id: `review_${Date.now()}`,
        status: 'pending',
        estimated_time: '24시간 이내',
        cost: 1900,
        expert_name: '김세무 세무사',
        message: '전문가 검토가 요청되었습니다. 24시간 이내 답변 예정입니다.'
      }
    })
  } catch (error) {
    return c.json({ success: false, message: '요청 오류' }, 400)
  }
})

// 세무 계산
app.post('/api/calculate-tax', async (c) => {
  try {
    const { expenses } = await c.req.json()
    
    const totalExpense = expenses.reduce((sum: number, exp: any) => sum + exp.amount, 0)
    const deductible = Math.floor(totalExpense * 0.8)
    const vat = Math.floor(totalExpense * 0.1)
    const estimatedTax = Math.floor(deductible * 0.15)
    const refundEstimate = Math.floor(vat * 0.5)
    
    const highRisk = expenses.filter((e: any) => e.risk_level === 'high').length
    const midRisk = expenses.filter((e: any) => e.risk_level === 'mid').length
    
    return c.json({
      success: true,
      data: {
        totalExpense,
        deductible,
        vat,
        estimatedTax,
        refundEstimate,
        riskStats: {
          high: highRisk,
          mid: midRisk,
          low: expenses.length - highRisk - midRisk
        },
        summary: `총 경비: ${totalExpense.toLocaleString()}원 | 공제 가능: ${deductible.toLocaleString()}원 | 환급 예상: ${refundEstimate.toLocaleString()}원`
      }
    })
  } catch (error) {
    return c.json({ success: false, message: '계산 오류' }, 400)
  }
})

// FAQ 데이터
app.get('/api/faq/:lang', (c) => {
  const lang = c.req.param('lang') || 'ko'
  
  const faqData: any = {
    ko: [
      { id: 1, question: '이 플랫폼은 어떤 서비스인가요?', answer: '사진만 있으면 시작할 수 있어요. 영수증, 통장 캡처, 갤러리 사진 모두 가능합니다. 세금은 우리가 계산하고, 결정은 당신이 합니다.' },
      { id: 2, question: '영수증이 없어도 되나요? 💡', answer: '네! 통장 캡처나 갤러리 사진만으로도 경비 처리가 가능합니다. 영수증 없이도 경비 후보로 쌓아둘 수 있습니다.' },
      { id: 3, question: '갤러리에 있는 사진도 사용할 수 있나요? 📸', answer: '가능합니다! 사진첩에 저장된 영수증, 스크린샷, 거래 내역 등을 한 번에 업로드하면 자동으로 분류합니다.' },
      { id: 4, question: '통장 캡처는 어떻게 하나요? 🏦', answer: '뱅킹앱 거래 내역 화면을 캡처하여 업로드하면 날짜, 거래처, 금액을 자동으로 추출하여 경비로 등록합니다.' },
      { id: 5, question: '업무용인지 개인용인지 헷갈려요', answer: '이 거래는 애매합니다. 확인만 받아보실래요? 업무/개인/검토필요 중 선택하시면 됩니다. 검토필요를 선택하면 전문가가 확인해드립니다.' },
      { id: 6, question: '위험도 게이지는 무엇인가요? ⚠️', answer: '각 경비 항목의 세무 리스크를 자동 분석합니다. 전문가의 검토가 필요해 보이는 항목은 표시됩니다.' },
      { id: 7, question: '건당 전문가 리뷰는 무엇인가요? 👨‍💼', answer: '여기만 좀 봐주세요. 세무 서비스에 처음 생긴 문장입니다. 애매한 항목만 1,900원에 세무사 확인을 받을 수 있습니다.' },
      { id: 8, question: '월 정액을 내야 하나요? 💸', answer: '아니요! 무료 자동신고(소규모), 건당 리뷰(1,900원), 전면 대행(월 정액) 중 선택 가능합니다. 필요한 만큼만 비용을 지불하세요.' },
      { id: 9, question: '프리랜서도 사용할 수 있나요? 💼', answer: '네! 오히려 프리랜서와 소규모 자영업자를 위해 설계되었습니다. 간편 모드로 3번의 클릭으로 신고 준비가 완료됩니다.' },
      { id: 10, question: '실수하면 어떡하죠?', answer: '제출 버튼을 누르기 전까지, 무조건 다시 되돌릴 수 있게 설계했습니다. 수정 기록은 로그로 남아 증빙에 포함됩니다.' },
      { id: 11, question: '세무 계산은 자동인가요?', answer: '네. AI 엔진이 과세/면세/경비 인정 비율·환급 예상액을 자동 산출합니다. 내가 몰라도 됩니다. 숫자는 자동으로 자리 찾아갑니다.' },
      { id: 12, question: '홈택스로 자동 제출되나요?', answer: '파일 업로드, 직접 제출, 대행 요청 — 상황에 맞는 문을 고르세요. 홈택스 XML·CSV 출력도 지원합니다.' },
      { id: 13, question: '어떤 세금이 지원되나요?', answer: '부가세, 종소세 단순 신고, 프리랜서·1인사업자 경비처리 중심입니다. 법인·무역은 전문가 옵션이 활성화됩니다.' },
      { id: 14, question: '예상 환급액도 보이나요?', answer: '영수증 누적 시 상단에 "예상 세금/환급 미터기"가 실시간으로 표시됩니다.' },
      { id: 15, question: '자동 분류 정확도는 어느 정도인가요?', answer: '업종/금액/가맹점 패턴 기반 추천이며, 반복 사용 시 사용자/업종별로 정밀도가 개선됩니다.' },
      { id: 16, question: '중복되는 영수증은요?', answer: '중복 인식 방지 및 중복 경고가 자동 표시됩니다.' },
      { id: 17, question: '세무사 비용이 부담돼요', answer: '1,900원으로 불확실성을 지우는 경험. 예측 가능한 안심 비용입니다. 월 구독 없이 단건 검토로 해결 가능합니다.' },
      { id: 18, question: '간편 모드는 무엇인가요? ⚡', answer: '복잡한 메뉴 없이 "갤러리 선택 → 1클릭 분류 → 자동 계산 → 제출" 4단계로 끝나는 초간단 워크플로우입니다.' }
    ]
  }
  
  return c.json({ success: true, data: faqData[lang] || faqData.ko })
})

// 메인 페이지
app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="ko" id="htmlRoot">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="pageTitle">세무신고 플랫폼 - 영수증 없어도 신고는 됩니다</title>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="/static/style.css" rel="stylesheet">
    <script src="/static/i18n.js"></script>
</head>
<body>
    <!-- 네비게이션 -->
    <nav style="background: white; box-shadow: 0 2px 8px rgba(13, 27, 42, 0.08); position: fixed; width: 100%; top: 0; z-index: 50;">
        <div class="container" style="display: flex; justify-content: space-between; align-items: center; height: 72px;">
            <div style="display: flex; align-items: center; gap: 12px;">
                <i class="fas fa-receipt" style="font-size: 32px; color: var(--clear-mint);"></i>
                <span id="navTitle" style="font-family: var(--font-headline); font-size: 18px; font-weight: 700; color: var(--midnight-navy);">세무신고 플랫폼</span>
            </div>
            <div style="display: flex; align-items: center; gap: 24px;">
                <!-- 언어 선택 드롭다운 -->
                <div style="position: relative;">
                    <button id="langDropdownBtn" onclick="toggleLangDropdown()" class="btn btn-ghost" style="display: flex; align-items: center; gap: 4px; padding: 6px 12px; min-width: auto;">
                        <span id="currentLangFlag" style="font-size: 1.25rem;">🇰🇷</span>
                        <i class="fas fa-chevron-down" style="font-size: 0.75rem;"></i>
                    </button>
                    <div id="langDropdown" class="hidden" style="position: absolute; top: 100%; right: 0; margin-top: 8px; background: white; border-radius: 12px; box-shadow: 0 8px 32px rgba(13, 27, 42, 0.16); min-width: 200px; z-index: 100;">
                        <div style="padding: 8px;">
                            <button onclick="changeLang('ko')" class="lang-option" data-lang="ko" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇰🇷</span>
                                <span style="font-weight: 500;">한국어</span>
                            </button>
                            <button onclick="changeLang('en')" class="lang-option" data-lang="en" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇺🇸</span>
                                <span style="font-weight: 500;">English</span>
                            </button>
                            <button onclick="changeLang('zh-CN')" class="lang-option" data-lang="zh-CN" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇨🇳</span>
                                <span style="font-weight: 500;">简体中文</span>
                            </button>
                            <button onclick="changeLang('zh-TW')" class="lang-option" data-lang="zh-TW" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇹🇼</span>
                                <span style="font-weight: 500;">繁體中文</span>
                            </button>
                            <button onclick="changeLang('ja')" class="lang-option" data-lang="ja" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇯🇵</span>
                                <span style="font-weight: 500;">日本語</span>
                            </button>
                            <button onclick="changeLang('vi')" class="lang-option" data-lang="vi" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇻🇳</span>
                                <span style="font-weight: 500;">Tiếng Việt</span>
                            </button>
                            <button onclick="changeLang('es')" class="lang-option" data-lang="es" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇪🇸</span>
                                <span style="font-weight: 500;">Español</span>
                            </button>
                            <button onclick="changeLang('de')" class="lang-option" data-lang="de" style="width: 100%; text-align: left; padding: 12px 16px; border: none; background: none; cursor: pointer; border-radius: 8px; display: flex; align-items: center; gap: 12px; transition: all 0.2s;">
                                <span style="font-size: 1.25rem;">🇩🇪</span>
                                <span style="font-weight: 500;">Deutsch</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; gap: 12px;">
                    <a href="#" id="navNotice" style="color: var(--text-secondary); text-decoration: none; font-weight: 500; font-size: 0.875rem;">공지</a>
                    <a href="#" id="navLogin" style="color: var(--text-secondary); text-decoration: none; font-weight: 500; font-size: 0.875rem;">로그인</a>
                </div>
                <button class="btn btn-primary" id="navSignup" style="padding: 8px 16px; font-size: 0.875rem;">회원가입</button>
            </div>
        </div>
    </nav>

    <!-- 메인 컨텐츠 -->
    <div style="padding-top: 100px; padding-bottom: 48px;">
        <div class="container">
            
            <!-- 히어로 섹션 -->
            <div class="text-center animate-fade-in" style="margin-bottom: 48px;">
                <h1 id="heroTitle" style="font-size: 3.5rem; font-weight: 700; line-height: 1.2; margin-bottom: 24px; color: var(--midnight-navy);">
                    사진(Snap)으로 해결하는 세금
                </h1>
                <p id="heroSubtitle" style="font-size: 1.5rem; color: var(--text-secondary); margin-bottom: 16px;">
                    카메라 렌즈로 끝나는 신고
                </p>
                <p id="heroDescription" style="font-size: 1.125rem; color: var(--text-tertiary); margin-bottom: 32px;">
                    영수증 없어도 괜찮습니다<br>
                    통장 캡처로 경비 처리
                </p>
                <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                    <button id="heroCtaStart" onclick="scrollToSection('modes')" class="btn btn-primary" style="font-size: 1.125rem; padding: 16px 32px;">
                        <i class="fas fa-rocket"></i>
                        지금 시작하기
                    </button>
                    <button id="heroCtaHow" class="btn btn-outline" style="font-size: 1.125rem; padding: 16px 32px;">
                        <i class="fas fa-play-circle"></i>
                        어떻게 작동하나요?
                    </button>
                </div>
            </div>

            <!-- 안심 메시지 배너 -->
            <div class="message-box message-reassure animate-slide-up" style="font-size: 1.125rem; text-align: center;">
                <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                <span id="reassureMessage" style="font-size: 0.875rem; line-height: 1.5;">
                    사진만 있으면 시작할 수 있어요.<br>
                    정식 장부가 없어도 출발할 수 있어야 진짜 초보자를 위한 서비스죠.
                </span>
            </div>

            <!-- 주요 기능 카드 -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 64px;">
                <div class="card" style="text-align: center;">
                    <i class="fas fa-images" style="font-size: 48px; color: var(--clear-mint); margin-bottom: 16px;"></i>
                    <h3 style="margin-bottom: 12px;">갤러리 속 사진</h3>
                    <p style="color: var(--text-secondary);">찍어둔 사진만 있어도 신고는 갑니다</p>
                </div>
                <div class="card" style="text-align: center;">
                    <i class="fas fa-university" style="font-size: 48px; color: var(--amber-audit); margin-bottom: 16px;"></i>
                    <h3 style="margin-bottom: 12px;">통장 캡처</h3>
                    <p style="color: var(--text-secondary);">영수증 없이도 경비 후보로 인정</p>
                </div>
                <div class="card" style="text-align: center;">
                    <i class="fas fa-user-tie" style="font-size: 48px; color: var(--coral-trust); margin-bottom: 16px;"></i>
                    <h3 style="margin-bottom: 12px;">건당 전문가 리뷰</h3>
                    <p style="color: var(--text-secondary);">애매한 항목만 1,900원에 확인</p>
                </div>
            </div>

            <!-- 모드 선택 섹션 -->
            <div id="modes" style="margin-bottom: 64px;">
                <h2 style="text-align: center; margin-bottom: 16px; color: var(--midnight-navy);">어떤 방식으로 시작하시겠어요?</h2>
                <p style="text-align: center; color: var(--text-secondary); margin-bottom: 32px;">상황에 맞는 방식을 선택하세요. 언제든 바꿀 수 있습니다.</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
                    <div class="card" onclick="switchMode('receipt')" style="cursor: pointer; text-align: center; border: 3px solid transparent; transition: all 0.3s;">
                        <i class="fas fa-camera" style="font-size: 64px; color: var(--clear-mint); margin-bottom: 16px;"></i>
                        <h3 style="margin-bottom: 12px;">영수증 촬영</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 16px;">정식 영수증이 있을 때</p>
                        <button class="btn btn-primary" style="width: 100%;">선택하기</button>
                    </div>
                    
                    <div class="card" onclick="switchMode('bank')" style="cursor: pointer; text-align: center; border: 3px solid transparent; transition: all 0.3s;">
                        <i class="fas fa-university" style="font-size: 64px; color: var(--amber-audit); margin-bottom: 16px;"></i>
                        <h3 style="margin-bottom: 12px;">통장 캡처 💡</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 16px;">영수증 없을 때 추천</p>
                        <button class="btn btn-secondary" style="width: 100%;">선택하기</button>
                    </div>
                    
                    <div class="card" onclick="switchMode('gallery')" style="cursor: pointer; text-align: center; border: 3px solid transparent; transition: all 0.3s;">
                        <i class="fas fa-images" style="font-size: 64px; color: #3B82F6; margin-bottom: 16px;"></i>
                        <h3 style="margin-bottom: 12px;">갤러리 업로드 📸</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 16px;">사진첩에 여러 장 있을 때</p>
                        <button class="btn btn-outline" style="width: 100%;">선택하기</button>
                    </div>
                </div>
            </div>

            <!-- 영수증 촬영 섹션 -->
            <div id="receiptSection" class="mode-section hidden" style="margin-bottom: 64px;">
                <div class="card">
                    <h2 style="text-align: center; margin-bottom: 32px;">
                        <i class="fas fa-camera" style="color: var(--clear-mint); margin-right: 12px;"></i>
                        영수증 촬영하기
                    </h2>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
                        <div class="file-upload-area" onclick="document.getElementById('receiptInput').click()">
                            <i class="fas fa-camera" style="font-size: 64px; color: var(--clear-mint); margin-bottom: 16px;"></i>
                            <p style="font-size: 1.125rem; font-weight: 600; margin-bottom: 8px;">영수증을 촬영하세요</p>
                            <p style="color: var(--text-tertiary);">또는 파일을 업로드하세요</p>
                            <input type="file" id="receiptInput" accept="image/*" capture="environment">
                            <div id="receiptPreviewArea" class="hidden" style="margin-top: 16px;">
                                <img id="receiptPreviewImage" style="width: 100%; border-radius: 12px; margin-bottom: 16px;">
                                <button id="analyzeReceiptBtn" class="btn btn-primary" style="width: 100%;">
                                    <i class="fas fa-magic"></i>
                                    분석 시작
                                </button>
                            </div>
                        </div>
                        
                        <div id="receiptResults" class="hidden card-fog">
                            <h3 style="margin-bottom: 16px;">
                                <i class="fas fa-check-circle" style="color: var(--clear-mint);"></i>
                                인식 결과
                            </h3>
                            <div id="receiptData"></div>
                            <button id="addReceiptBtn" class="btn btn-primary" style="width: 100%; margin-top: 16px;">
                                <i class="fas fa-plus-circle"></i>
                                경비 목록에 추가
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 통장 캡처 섹션 -->
            <div id="bankSection" class="mode-section hidden" style="margin-bottom: 64px;">
                <div class="card">
                    <h2 style="text-align: center; margin-bottom: 16px;">
                        <i class="fas fa-university" style="color: var(--amber-audit); margin-right: 12px;"></i>
                        통장 거래내역 캡처하기
                    </h2>
                    <p style="text-align: center; color: var(--text-secondary); margin-bottom: 32px;">
                        뱅킹앱 거래내역 화면을 촬영하면 자동으로 경비로 분류합니다
                    </p>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
                        <div class="file-upload-area" onclick="document.getElementById('bankInput').click()">
                            <i class="fas fa-mobile-alt" style="font-size: 64px; color: var(--amber-audit); margin-bottom: 16px;"></i>
                            <p style="font-size: 1.125rem; font-weight: 600; margin-bottom: 8px;">통장 화면을 촬영하세요</p>
                            <p style="color: var(--text-tertiary);">거래내역이 보이는 화면 캡처</p>
                            <input type="file" id="bankInput" accept="image/*" capture="environment">
                            <div id="bankPreviewArea" class="hidden" style="margin-top: 16px;">
                                <img id="bankPreviewImage" style="width: 100%; border-radius: 12px; margin-bottom: 16px;">
                                <button id="analyzeBankBtn" class="btn btn-secondary" style="width: 100%;">
                                    <i class="fas fa-magic"></i>
                                    거래내역 분석 시작
                                </button>
                            </div>
                        </div>
                        
                        <div id="bankResults" class="hidden">
                            <h3 style="margin-bottom: 16px;">
                                <i class="fas fa-check-circle" style="color: var(--amber-audit);"></i>
                                거래내역 인식 결과
                            </h3>
                            <div id="bankTransactions" style="max-height: 400px; overflow-y: auto;"></div>
                            <button id="addBankBtn" class="btn btn-secondary" style="width: 100%; margin-top: 16px;">
                                <i class="fas fa-plus-circle"></i>
                                선택 항목 경비에 추가
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 갤러리 업로드 섹션 -->
            <div id="gallerySection" class="mode-section hidden" style="margin-bottom: 64px;">
                <div class="card">
                    <h2 style="text-align: center; margin-bottom: 16px;">
                        <i class="fas fa-images" style="color: #3B82F6; margin-right: 12px;"></i>
                        갤러리 사진 일괄 업로드
                    </h2>
                    <p style="text-align: center; color: var(--text-secondary); margin-bottom: 32px;">
                        사진첩에 저장된 영수증, 스크린샷 등을 한 번에 업로드하세요 (최대 20장)
                    </p>
                    
                    <div class="file-upload-area" onclick="document.getElementById('galleryInput').click()" style="margin-bottom: 32px;">
                        <i class="fas fa-cloud-upload-alt" style="font-size: 64px; color: #3B82F6; margin-bottom: 16px;"></i>
                        <p style="font-size: 1.125rem; font-weight: 600; margin-bottom: 8px;">여러 사진을 한 번에 선택하세요</p>
                        <p style="color: var(--text-tertiary);">최대 20장까지 동시 업로드 가능</p>
                        <input type="file" id="galleryInput" accept="image/*" multiple>
                        <div id="galleryFileCount" class="hidden" style="margin-top: 16px; font-weight: 600; color: #3B82F6;"></div>
                    </div>
                    
                    <div id="galleryResults" class="hidden">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                            <h3>
                                <i class="fas fa-check-circle" style="color: #3B82F6;"></i>
                                선택된 파일 (<span id="galleryCount">0</span>개)
                            </h3>
                            <button id="processGalleryBtn" class="btn btn-primary">
                                <i class="fas fa-magic"></i>
                                일괄 분석 시작
                            </button>
                        </div>
                        
                        <div id="galleryGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px; margin-bottom: 24px;"></div>
                        
                        <div id="galleryProcessedResults" class="hidden card-fog" style="padding: 24px;"></div>
                        
                        <button id="addGalleryBtn" class="hidden btn btn-primary" style="width: 100%; margin-top: 16px;">
                            <i class="fas fa-plus-circle"></i>
                            모두 경비에 추가
                        </button>
                    </div>
                </div>
            </div>

            <!-- 경비 목록 섹션 -->
            <div style="margin-bottom: 64px;">
                <div class="card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                        <h2>
                            <i class="fas fa-list" style="color: var(--clear-mint); margin-right: 12px;"></i>
                            경비 목록
                        </h2>
                        <button id="calculateBtn" class="btn btn-primary">
                            <i class="fas fa-calculator"></i>
                            세금 계산하기
                        </button>
                    </div>
                    <div id="expenseList">
                        <div style="text-align: center; padding: 48px; color: var(--text-tertiary);">
                            <i class="fas fa-inbox" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                            <p>아직 추가된 경비가 없습니다</p>
                            <p style="font-size: 0.875rem; margin-top: 8px;">위에서 영수증, 통장 캡처, 또는 갤러리 사진을 업로드하세요</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 세금 계산 결과 -->
            <div id="taxResult" class="hidden" style="margin-bottom: 64px;">
                <div class="card" style="background: var(--midnight-navy); color: white;">
                    <h2 style="text-align: center; margin-bottom: 32px; color: white;">
                        <i class="fas fa-chart-line" style="margin-right: 12px;"></i>
                        세금 계산 결과
                    </h2>
                    <div id="taxSummary" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px;"></div>
                    <div id="riskSummary" class="hidden" style="margin-top: 32px; padding: 24px; background: rgba(255,255,255,0.1); border-radius: 12px;"></div>
                </div>
            </div>

        </div>
    </div>

    <!-- 챗봇 아이콘 -->
    <div id="chatbotIcon">
        <i class="fas fa-comments"></i>
        <div style="position: absolute; top: -4px; right: -4px; width: 20px; height: 20px; background: var(--coral-trust); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700;">?</div>
    </div>

    <!-- 챗봇 윈도우 -->
    <div id="chatbotWindow" class="hidden">
        <div class="chatbot-header">
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-robot" style="font-size: 24px;"></i>
                </div>
                <div>
                    <h3 style="margin-bottom: 4px;">FAQ 도우미</h3>
                    <p style="font-size: 0.875rem; opacity: 0.9;">25개 질문 답변</p>
                </div>
            </div>
            <button id="closeChatbot" style="background: rgba(255,255,255,0.1); border: none; color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; transition: all 0.2s;">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <div class="chatbot-body">
            <div id="faqList">
                <!-- FAQ 그리드가 여기에 동적으로 로드됩니다 -->
            </div>
        </div>
    </div>

    <script src="/static/i18n.js"></script>
    <script src="/static/faq-data.js"></script>
    <script src="/static/app.js"></script>
</body>
</html>
  `)
})

export default app
