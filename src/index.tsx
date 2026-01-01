import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'

const app = new Hono()

// CORS 활성화
app.use('/api/*', cors())

// 정적 파일 제공
app.use('/static/*', serveStatic({ root: './public' }))

// API 엔드포인트 - OCR 시뮬레이션
app.post('/api/ocr', async (c) => {
  try {
    const body = await c.req.json()
    
    // 시뮬레이션: 실제로는 OCR API를 호출해야 함
    const mockResult = {
      success: true,
      data: {
        date: '2026-01-01',
        amount: 45000,
        vendor: '스타벅스 코리아',
        vat: 4500,
        category: '식비',
        confidence: 0.95
      },
      message: 'OCR 인식 완료'
    }
    
    // 약간의 지연으로 실제 API 호출 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 800))
    
    return c.json(mockResult)
  } catch (error) {
    return c.json({ success: false, message: '오류가 발생했습니다' }, 400)
  }
})

// API 엔드포인트 - 세무 계산 시뮬레이션
app.post('/api/calculate-tax', async (c) => {
  try {
    const { expenses } = await c.req.json()
    
    const totalExpense = expenses.reduce((sum: number, exp: any) => sum + exp.amount, 0)
    const deductible = Math.floor(totalExpense * 0.8)
    const vat = Math.floor(totalExpense * 0.1)
    const estimatedTax = Math.floor(deductible * 0.15)
    const refundEstimate = Math.floor(vat * 0.5)
    
    return c.json({
      success: true,
      data: {
        totalExpense,
        deductible,
        vat,
        estimatedTax,
        refundEstimate,
        summary: `총 경비: ${totalExpense.toLocaleString()}원 | 공제 가능: ${deductible.toLocaleString()}원 | 환급 예상: ${refundEstimate.toLocaleString()}원`
      }
    })
  } catch (error) {
    return c.json({ success: false, message: '계산 오류' }, 400)
  }
})

// FAQ 데이터 엔드포인트
app.get('/api/faq/:lang', (c) => {
  const lang = c.req.param('lang') || 'ko'
  
  const faqData: any = {
    ko: [
      { id: 1, question: '이 플랫폼은 어떤 서비스인가요?', answer: '영수증 촬영만으로 지출 인식 → 자동 분류 → 세액 계산 → 제출/파일 생성 → 대행까지 이어지는 자동 세무신고 시스템입니다.' },
      { id: 2, question: '진짜 영수증만 찍어도 되나요?', answer: '기본 신고는 가능합니다. 다만 복잡 신고(법인·수출입·다국적)일 경우 계좌/카드/홈택스/전문가 검토를 병행합니다.' },
      { id: 3, question: 'OCR은 무엇을 인식하나요?', answer: '날짜·금액·사업자명·세율·항목·부가세를 자동 추출하며 오류 감지 시 보정 제안이 뜹니다.' },
      { id: 4, question: '세무 계산은 자동인가요?', answer: '네. AI 엔진이 과세/면세/경비 인정 비율·환급 예상액을 자동 산출하고 신고 유형에 매핑합니다.' },
      { id: 5, question: '홈택스로 자동 제출되나요?', answer: '자동 제출/파일 다운로드/전문가 대행 3가지 중 선택합니다. 홈택스 XML·CSV 출력도 지원합니다.' },
      { id: 6, question: '어떤 세금이 지원되나요?', answer: '부가세, 종소세 단순 신고, 프리랜서·1인사업자 경비처리 중심이며, 법인·무역은 전문가 옵션이 활성화됩니다.' },
      { id: 7, question: '예상 환급액도 보이나요?', answer: '영수증 누적 시 상단에 "예상 세금/환급 미터기"가 실시간으로 표시됩니다.' },
      { id: 8, question: '자동 분류 정확도는 어느 정도인가요?', answer: '업종/금액/가맹점 패턴 기반 추천이며, 반복 사용 시 사용자/업종별로 정밀도가 개선됩니다.' },
      { id: 9, question: '똑같은 영수증이 중복되면요?', answer: '중복 인식 방지 및 중복 경고가 자동 표시됩니다.' },
      { id: 10, question: '실수하면 수정할 수 있나요?', answer: 'OCR 결과는 즉시 수정 가능하며, 수정 기록은 로그로 남아 증빙에 포함됩니다.' }
    ],
    en: [
      { id: 1, question: 'What is this platform?', answer: 'An automated tax filing system: Receipt capture → Automatic classification → Tax calculation → Submission/File generation → Delegation.' },
      { id: 2, question: 'Can I just take a photo of the receipt?', answer: 'Basic filing is possible. For complex cases (corporate, import/export, multinational), we recommend combining with bank/card/tax system review.' },
      { id: 3, question: 'What does OCR recognize?', answer: 'Automatically extracts date, amount, business name, tax rate, category, and VAT. Suggests corrections when errors are detected.' },
      { id: 4, question: 'Is tax calculation automatic?', answer: 'Yes. AI engine automatically calculates taxable/exempt/deductible ratios and estimated refunds, mapping to filing types.' },
      { id: 5, question: 'Does it auto-submit to tax authority?', answer: 'Choose from 3 options: Auto-submission, File download, Expert delegation. Supports XML/CSV formats.' },
      { id: 6, question: 'What taxes are supported?', answer: 'VAT, simple income tax for freelancers and sole proprietors. Corporate/trade cases activate expert options.' },
      { id: 7, question: 'Can I see estimated refunds?', answer: 'As receipts accumulate, a real-time "Tax/Refund Meter" displays at the top.' },
      { id: 8, question: 'How accurate is auto-classification?', answer: 'Based on industry/amount/merchant patterns. Improves with repeated use per user/industry.' },
      { id: 9, question: 'What if I scan duplicate receipts?', answer: 'Duplicate detection prevents and warns automatically.' },
      { id: 10, question: 'Can I correct mistakes?', answer: 'OCR results are immediately editable, and correction history is logged for documentation.' }
    ],
    zh: [
      { id: 1, question: '这个平台是什么服务？', answer: '仅需拍摄收据即可实现支出识别 → 自动分类 → 税额计算 → 提交/文件生成 → 代办的自动报税系统。' },
      { id: 2, question: '真的只需拍摄收据就可以吗？', answer: '基本申报可行。但复杂申报（法人、进出口、跨国）需结合账户/卡片/税务系统/专家审核。' },
      { id: 3, question: 'OCR识别什么内容？', answer: '自动提取日期、金额、商家名称、税率、项目、增值税，并在检测到错误时提供修正建议。' },
      { id: 4, question: '税务计算是自动的吗？', answer: '是的。AI引擎自动计算应税/免税/费用认定比率和预计退税额，并映射到申报类型。' },
      { id: 5, question: '自动提交到税务局吗？', answer: '可选择3种方式：自动提交/文件下载/专家代办。支持XML/CSV格式输出。' },
      { id: 6, question: '支持哪些税种？', answer: '增值税、简易所得税申报，以自由职业者和个体户费用处理为中心，法人和贸易业务会启用专家选项。' },
      { id: 7, question: '能看到预计退税额吗？', answer: '收据累积时，顶部会实时显示"预计税额/退税仪表盘"。' },
      { id: 8, question: '自动分类准确度如何？', answer: '基于行业/金额/商家模式推荐，重复使用时按用户/行业提高精度。' },
      { id: 9, question: '如果扫描重复收据怎么办？', answer: '自动检测重复并显示警告。' },
      { id: 10, question: '能修正错误吗？', answer: 'OCR结果可立即修改，修改记录会记录在日志中作为凭证。' }
    ],
    ja: [
      { id: 1, question: 'このプラットフォームは何のサービスですか？', answer: 'レシート撮影だけで支出認識 → 自動分類 → 税額計算 → 提出/ファイル生成 → 代行までつながる自動税務申告システムです。' },
      { id: 2, question: '本当にレシートを撮るだけでいいですか？', answer: '基本申告は可能です。ただし複雑な申告（法人・輸出入・多国籍）の場合、口座/カード/税務システム/専門家の検討を併用します。' },
      { id: 3, question: 'OCRは何を認識しますか？', answer: '日付・金額・事業者名・税率・項目・付加税を自動抽出し、エラー検出時には修正提案が表示されます。' },
      { id: 4, question: '税務計算は自動ですか？', answer: 'はい。AIエンジンが課税/免税/経費認定比率・還付予想額を自動算出し、申告タイプにマッピングします。' },
      { id: 5, question: '税務署へ自動提出されますか？', answer: '自動提出/ファイルダウンロード/専門家代行の3つから選択します。XML・CSV出力もサポートします。' },
      { id: 6, question: 'どの税金に対応していますか？', answer: '付加価値税、簡易所得税申告、フリーランス・個人事業主の経費処理を中心とし、法人・貿易は専門家オプションが有効になります。' },
      { id: 7, question: '予想還付額も見えますか？', answer: 'レシート累積時、上部に「予想税金/還付メーター」がリアルタイム表示されます。' },
      { id: 8, question: '自動分類の精度はどの程度ですか？', answer: '業種/金額/加盟店パターンベースの推奨で、繰り返し使用時にユーザー/業種別に精度が向上します。' },
      { id: 9, question: '同じレシートが重複したら？', answer: '重複認識防止および重複警告が自動表示されます。' },
      { id: 10, question: 'ミスしたら修正できますか？', answer: 'OCR結果は即座に修正可能で、修正記録はログに残り証憑に含まれます。' }
    ],
    de: [
      { id: 1, question: 'Was ist diese Plattform?', answer: 'Ein automatisches Steuererklärungssystem: Belegerfassung → Automatische Klassifizierung → Steuerberechnung → Einreichung/Dateierstellung → Delegation.' },
      { id: 2, question: 'Reicht es wirklich, nur ein Foto des Belegs zu machen?', answer: 'Grundlegende Erklärungen sind möglich. Bei komplexen Fällen (Unternehmen, Import/Export, multinational) empfehlen wir die Kombination mit Bank-/Karten-/Steuersystem-Prüfung.' },
      { id: 3, question: 'Was erkennt die OCR?', answer: 'Extrahiert automatisch Datum, Betrag, Firmenname, Steuersatz, Kategorie und Mehrwertsteuer. Schlägt Korrekturen vor, wenn Fehler erkannt werden.' },
      { id: 4, question: 'Ist die Steuerberechnung automatisch?', answer: 'Ja. Die KI-Engine berechnet automatisch steuerpflichtige/steuerfreie/abzugsfähige Verhältnisse und geschätzte Rückerstattungen und ordnet sie den Erklärungstypen zu.' },
      { id: 5, question: 'Wird automatisch an das Finanzamt übermittelt?', answer: 'Wählen Sie aus 3 Optionen: Automatische Übermittlung, Datei-Download, Experten-Delegation. Unterstützt XML/CSV-Formate.' },
      { id: 6, question: 'Welche Steuern werden unterstützt?', answer: 'Mehrwertsteuer, einfache Einkommensteuer für Freiberufler und Einzelunternehmer. Bei Unternehmen/Handel werden Expertenoptionen aktiviert.' },
      { id: 7, question: 'Kann ich geschätzte Rückerstattungen sehen?', answer: 'Wenn sich Belege ansammeln, wird oben ein Echtzeit-"Steuer-/Rückerstattungsmesser" angezeigt.' },
      { id: 8, question: 'Wie genau ist die automatische Klassifizierung?', answer: 'Basierend auf Branchen-/Betrags-/Händlermustern. Verbessert sich bei wiederholter Nutzung pro Benutzer/Branche.' },
      { id: 9, question: 'Was ist, wenn ich doppelte Belege scanne?', answer: 'Duplikaterkennung verhindert und warnt automatisch.' },
      { id: 10, question: 'Kann ich Fehler korrigieren?', answer: 'OCR-Ergebnisse sind sofort editierbar, und der Korrekturverlauf wird protokolliert für die Dokumentation.' }
    ],
    es: [
      { id: 1, question: '¿Qué es esta plataforma?', answer: 'Un sistema automatizado de declaración de impuestos: Captura de recibos → Clasificación automática → Cálculo de impuestos → Presentación/Generación de archivos → Delegación.' },
      { id: 2, question: '¿Realmente solo necesito tomar una foto del recibo?', answer: 'La declaración básica es posible. Para casos complejos (corporativos, importación/exportación, multinacionales), recomendamos combinar con revisión bancaria/tarjeta/sistema fiscal.' },
      { id: 3, question: '¿Qué reconoce el OCR?', answer: 'Extrae automáticamente fecha, monto, nombre comercial, tasa impositiva, categoría e IVA. Sugiere correcciones cuando se detectan errores.' },
      { id: 4, question: '¿El cálculo de impuestos es automático?', answer: 'Sí. El motor AI calcula automáticamente proporciones gravables/exentas/deducibles y reembolsos estimados, mapeando a tipos de declaración.' },
      { id: 5, question: '¿Se presenta automáticamente a la autoridad fiscal?', answer: 'Elija entre 3 opciones: Presentación automática, Descarga de archivos, Delegación de expertos. Admite formatos XML/CSV.' },
      { id: 6, question: '¿Qué impuestos se admiten?', answer: 'IVA, impuesto sobre la renta simple para autónomos y empresarios individuales. Los casos corporativos/comerciales activan opciones de expertos.' },
      { id: 7, question: '¿Puedo ver reembolsos estimados?', answer: 'A medida que se acumulan recibos, se muestra un "Medidor de Impuestos/Reembolsos" en tiempo real en la parte superior.' },
      { id: 8, question: '¿Qué tan precisa es la clasificación automática?', answer: 'Basado en patrones de industria/monto/comerciante. Mejora con el uso repetido por usuario/industria.' },
      { id: 9, question: '¿Qué pasa si escaneo recibos duplicados?', answer: 'La detección de duplicados previene y advierte automáticamente.' },
      { id: 10, question: '¿Puedo corregir errores?', answer: 'Los resultados de OCR son editables inmediatamente, y el historial de correcciones se registra para documentación.' }
    ]
  }
  
  return c.json({ success: true, data: faqData[lang] || faqData.ko })
})

// 메인 페이지
app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>세무신고 플랫폼 - 영수증 촬영으로 세무신고 완료</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="/static/style.css" rel="stylesheet">
</head>
<body class="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 min-h-screen">
    <!-- 네비게이션 -->
    <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center space-x-3">
                    <i class="fas fa-receipt text-3xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"></i>
                    <span class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">세무신고 플랫폼</span>
                </div>
                <div class="hidden md:flex items-center space-x-6">
                    <a href="#" class="text-gray-700 hover:text-purple-600 transition">공지</a>
                    <a href="#" class="text-gray-700 hover:text-purple-600 transition">로그인</a>
                    <button class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">회원가입</button>
                </div>
            </div>
        </div>
    </nav>

    <!-- 메인 컨텐츠 -->
    <div class="pt-24 pb-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- 헤더 섹션 -->
            <div class="text-center mb-12 animate-fade-in">
                <h1 class="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                    영수증만 사진 찍으면<br>세무신고 끝!
                </h1>
                <p class="text-xl text-gray-600 mb-8">
                    OCR 자동인식 → 자동분류 → 세액계산 → 제출까지 한 번에
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <button class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:-translate-y-1">
                        <i class="fas fa-camera mr-2"></i>
                        지금 시작하기
                    </button>
                    <button class="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition border-2 border-purple-600">
                        <i class="fas fa-play mr-2"></i>
                        시연 영상 보기
                    </button>
                </div>
            </div>

            <!-- 영수증 촬영 섹션 -->
            <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
                <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">
                    <i class="fas fa-camera text-purple-600 mr-3"></i>
                    영수증 촬영하기
                </h2>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- 촬영 영역 -->
                    <div class="border-4 border-dashed border-purple-300 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-purple-600 transition bg-gradient-to-br from-purple-50 to-blue-50">
                        <div id="cameraArea" class="w-full max-w-md">
                            <div class="text-center space-y-4">
                                <i class="fas fa-camera text-6xl text-purple-600 animate-bounce"></i>
                                <p class="text-lg text-gray-700 font-semibold">영수증을 촬영하세요</p>
                                <p class="text-sm text-gray-500">또는 파일을 업로드하세요</p>
                                <input type="file" id="receiptInput" accept="image/*" capture="environment" class="hidden">
                                <button onclick="document.getElementById('receiptInput').click()" class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                                    <i class="fas fa-upload mr-2"></i>
                                    사진 선택
                                </button>
                            </div>
                            <div id="previewArea" class="hidden mt-4">
                                <img id="previewImage" class="w-full rounded-lg shadow-md">
                                <button id="analyzeBtn" class="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                                    <i class="fas fa-magic mr-2"></i>
                                    OCR 분석 시작
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- OCR 결과 영역 -->
                    <div id="ocrResults" class="hidden bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                        <h3 class="text-xl font-bold mb-4 text-gray-800">
                            <i class="fas fa-check-circle text-green-600 mr-2"></i>
                            OCR 인식 결과
                        </h3>
                        <div id="ocrData" class="space-y-3">
                            <!-- 동적으로 생성됨 -->
                        </div>
                        <button id="addExpenseBtn" class="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                            <i class="fas fa-plus-circle mr-2"></i>
                            경비 목록에 추가
                        </button>
                    </div>
                </div>
            </div>

            <!-- 경비 목록 섹션 -->
            <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-3xl font-bold text-gray-800">
                        <i class="fas fa-list text-blue-600 mr-3"></i>
                        경비 목록
                    </h2>
                    <button id="calculateBtn" class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition">
                        <i class="fas fa-calculator mr-2"></i>
                        세금 계산하기
                    </button>
                </div>
                <div id="expenseList" class="space-y-3">
                    <p class="text-gray-500 text-center py-8">영수증을 추가하세요</p>
                </div>
            </div>

            <!-- 세금 계산 결과 -->
            <div id="taxResult" class="hidden bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
                <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">
                    <i class="fas fa-chart-line text-green-600 mr-3"></i>
                    세금 계산 결과
                </h2>
                <div id="taxSummary" class="grid md:grid-cols-4 gap-6">
                    <!-- 동적으로 생성됨 -->
                </div>
            </div>

            <!-- 주요 기능 -->
            <div class="grid md:grid-cols-4 gap-6 mb-12">
                <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center">
                    <i class="fas fa-camera text-5xl text-purple-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">영수증 촬영</h3>
                    <p class="text-gray-600">사진만 찍으면<br>자동 인식</p>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center">
                    <i class="fas fa-magic text-5xl text-blue-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">자동 분류</h3>
                    <p class="text-gray-600">AI가 경비를<br>자동 분류</p>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center">
                    <i class="fas fa-calculator text-5xl text-green-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">세액 계산</h3>
                    <p class="text-gray-600">실시간<br>세금 계산</p>
                </div>
                <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition text-center">
                    <i class="fas fa-file-export text-5xl text-pink-600 mb-4"></i>
                    <h3 class="text-xl font-bold mb-2">자동 제출</h3>
                    <p class="text-gray-600">홈택스 XML<br>자동 생성</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 챗봇 아이콘 -->
    <div id="chatbotIcon" class="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:shadow-2xl transition transform hover:scale-110 z-50">
        <i class="fas fa-comments text-2xl"></i>
        <div class="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">?</div>
    </div>

    <!-- 챗봇 윈도우 -->
    <div id="chatbotWindow" class="hidden fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl w-96 max-h-[600px] flex flex-col z-50">
        <!-- 챗봇 헤더 -->
        <div class="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <i class="fas fa-robot text-xl"></i>
                </div>
                <div>
                    <h3 class="font-bold">세무신고 도우미</h3>
                    <p class="text-xs opacity-90">온라인</p>
                </div>
            </div>
            <div class="flex items-center space-x-2">
                <div class="flex space-x-1 bg-white bg-opacity-20 rounded-full px-2 py-1">
                    <button class="lang-btn text-lg hover:scale-110 transition" data-lang="ko" title="한국어">🇰🇷</button>
                    <button class="lang-btn text-lg hover:scale-110 transition" data-lang="en" title="English">🇺🇸</button>
                    <button class="lang-btn text-lg hover:scale-110 transition" data-lang="zh" title="中文">🇨🇳</button>
                    <button class="lang-btn text-lg hover:scale-110 transition" data-lang="ja" title="日本語">🇯🇵</button>
                </div>
                <button id="closeChatbot" class="hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center transition">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

        <!-- FAQ 리스트 -->
        <div id="faqList" class="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div class="mb-4">
                <input type="text" id="faqSearch" placeholder="검색..." class="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-purple-600">
            </div>
            <div id="faqItems" class="space-y-2">
                <!-- 동적으로 생성됨 -->
            </div>
        </div>
    </div>

    <script src="/static/app.js"></script>
</body>
</html>
  `)
})

export default app
