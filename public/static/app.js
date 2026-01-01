// 전역 상태
let currentLang = 'ko';
let expenses = [];
let faqData = [];
let bankTransactions = [];
let galleryImages = [];
let selectedBankItems = [];

// 모드 전환 함수
window.switchMode = function(mode) {
  // 모든 섹션 숨기기
  document.getElementById('receiptSection').classList.add('hidden');
  document.getElementById('bankCaptureSection').classList.add('hidden');
  document.getElementById('gallerySection').classList.add('hidden');
  
  // 선택된 섹션만 표시
  if (mode === 'receipt') {
    document.getElementById('receiptSection').classList.remove('hidden');
  } else if (mode === 'bank') {
    document.getElementById('bankCaptureSection').classList.remove('hidden');
  } else if (mode === 'gallery') {
    document.getElementById('gallerySection').classList.remove('hidden');
  }
  
  // 섹션으로 스크롤
  setTimeout(() => {
    const section = document.getElementById(mode === 'receipt' ? 'receiptSection' : mode === 'bank' ? 'bankCaptureSection' : 'gallerySection');
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
};

// 언어별 텍스트
const i18n = {
  ko: {
    searchPlaceholder: '검색...',
    noResults: '검색 결과가 없습니다',
    loading: '로딩 중...'
  },
  en: {
    searchPlaceholder: 'Search...',
    noResults: 'No results found',
    loading: 'Loading...'
  },
  zh: {
    searchPlaceholder: '搜索...',
    noResults: '未找到结果',
    loading: '加载中...'
  },
  ja: {
    searchPlaceholder: '検索...',
    noResults: '検索結果がありません',
    loading: '読み込み中...'
  },
  de: {
    searchPlaceholder: 'Suchen...',
    noResults: 'Keine Ergebnisse gefunden',
    loading: 'Wird geladen...'
  },
  es: {
    searchPlaceholder: 'Buscar...',
    noResults: 'No se encontraron resultados',
    loading: 'Cargando...'
  }
};

// DOM 요소
const chatbotIcon = document.getElementById('chatbotIcon');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatbot = document.getElementById('closeChatbot');
const receiptInput = document.getElementById('receiptInput');
const previewArea = document.getElementById('previewArea');
const previewImage = document.getElementById('previewImage');
const analyzeBtn = document.getElementById('analyzeBtn');
const ocrResults = document.getElementById('ocrResults');
const ocrData = document.getElementById('ocrData');
const addExpenseBtn = document.getElementById('addExpenseBtn');

// 통장 캡처 DOM 요소
const bankInput = document.getElementById('bankInput');
const bankPreviewArea = document.getElementById('bankPreviewArea');
const bankPreviewImage = document.getElementById('bankPreviewImage');
const analyzeBankBtn = document.getElementById('analyzeBankBtn');
const bankResults = document.getElementById('bankResults');
const bankTransactionsEl = document.getElementById('bankTransactions');
const addBankExpensesBtn = document.getElementById('addBankExpensesBtn');

// 갤러리 DOM 요소
const galleryInput = document.getElementById('galleryInput');
const galleryFileCount = document.getElementById('galleryFileCount');
const galleryResults = document.getElementById('galleryResults');
const galleryGrid = document.getElementById('galleryGrid');
const galleryCount = document.getElementById('galleryCount');
const processGalleryBtn = document.getElementById('processGalleryBtn');
const galleryProcessedResults = document.getElementById('galleryProcessedResults');
const addGalleryExpensesBtn = document.getElementById('addGalleryExpensesBtn');
const expenseList = document.getElementById('expenseList');
const calculateBtn = document.getElementById('calculateBtn');
const taxResult = document.getElementById('taxResult');
const taxSummary = document.getElementById('taxSummary');
const faqSearch = document.getElementById('faqSearch');
const faqItems = document.getElementById('faqItems');
const langBtns = document.querySelectorAll('.lang-btn');

// 챗봇 토글
chatbotIcon.addEventListener('click', () => {
  chatbotWindow.classList.toggle('hidden');
  if (!chatbotWindow.classList.contains('hidden')) {
    loadFAQ(currentLang);
  }
});

closeChatbot.addEventListener('click', () => {
  chatbotWindow.classList.add('hidden');
});

// 언어 변경
langBtns.forEach(btn => {
  btn.addEventListener('click', async () => {
    const lang = btn.getAttribute('data-lang');
    currentLang = lang;
    
    // 언어 버튼 활성화 상태 변경
    langBtns.forEach(b => b.classList.remove('opacity-100'));
    langBtns.forEach(b => b.classList.add('opacity-60'));
    btn.classList.remove('opacity-60');
    btn.classList.add('opacity-100', 'scale-110');
    
    // FAQ 데이터 다시 로드
    await loadFAQ(lang);
    
    // 검색창 placeholder 변경
    faqSearch.placeholder = i18n[lang].searchPlaceholder;
  });
});

// FAQ 로드
async function loadFAQ(lang) {
  try {
    faqItems.innerHTML = `<p class="text-gray-500 text-center py-4">${i18n[lang].loading}</p>`;
    
    const response = await fetch(`/api/faq/${lang}`);
    const result = await response.json();
    
    if (result.success) {
      faqData = result.data;
      renderFAQ(faqData);
    }
  } catch (error) {
    console.error('FAQ 로드 오류:', error);
    faqItems.innerHTML = '<p class="text-red-500 text-center py-4">오류가 발생했습니다</p>';
  }
}

// FAQ 렌더링
function renderFAQ(data) {
  if (data.length === 0) {
    faqItems.innerHTML = `<p class="text-gray-500 text-center py-4">${i18n[currentLang].noResults}</p>`;
    return;
  }
  
  faqItems.innerHTML = data.map(faq => `
    <div class="faq-item bg-white rounded-lg shadow-sm hover:shadow-md transition">
      <button class="faq-question w-full text-left px-4 py-3 font-semibold text-gray-800 hover:text-purple-600 transition flex justify-between items-center" onclick="toggleFAQ(${faq.id})">
        <span>${faq.question}</span>
        <i class="fas fa-chevron-down transition-transform" id="icon-${faq.id}"></i>
      </button>
      <div class="faq-answer hidden px-4 py-3 text-gray-600 border-t border-gray-100" id="answer-${faq.id}">
        ${faq.answer}
      </div>
    </div>
  `).join('');
}

// FAQ 토글
window.toggleFAQ = function(id) {
  const answer = document.getElementById(`answer-${id}`);
  const icon = document.getElementById(`icon-${id}`);
  
  answer.classList.toggle('hidden');
  icon.classList.toggle('rotate-180');
};

// FAQ 검색
faqSearch.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = faqData.filter(faq => 
    faq.question.toLowerCase().includes(query) || 
    faq.answer.toLowerCase().includes(query)
  );
  renderFAQ(filtered);
});

// 영수증 파일 선택
receiptInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      previewImage.src = event.target.result;
      previewArea.classList.remove('hidden');
      document.getElementById('cameraArea').querySelector('.text-center').classList.add('hidden');
    };
    reader.readAsDataURL(file);
  }
});

// OCR 분석
let currentOCRData = null;

analyzeBtn.addEventListener('click', async () => {
  try {
    analyzeBtn.disabled = true;
    analyzeBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> 분석 중...';
    
    const response = await fetch('/api/ocr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: previewImage.src })
    });
    
    const result = await response.json();
    
    if (result.success) {
      currentOCRData = result.data;
      displayOCRResults(result.data);
    }
  } catch (error) {
    console.error('OCR 오류:', error);
    alert('OCR 분석 중 오류가 발생했습니다');
  } finally {
    analyzeBtn.disabled = false;
    analyzeBtn.innerHTML = '<i class="fas fa-magic mr-2"></i> OCR 분석 시작';
  }
});

// OCR 결과 표시
function displayOCRResults(data) {
  ocrData.innerHTML = `
    <div class="space-y-2">
      <div class="flex justify-between items-center bg-white rounded-lg p-3">
        <span class="text-gray-600">날짜</span>
        <span class="font-semibold">${data.date}</span>
      </div>
      <div class="flex justify-between items-center bg-white rounded-lg p-3">
        <span class="text-gray-600">금액</span>
        <span class="font-semibold text-lg text-purple-600">${data.amount.toLocaleString()}원</span>
      </div>
      <div class="flex justify-between items-center bg-white rounded-lg p-3">
        <span class="text-gray-600">업체명</span>
        <span class="font-semibold">${data.vendor}</span>
      </div>
      <div class="flex justify-between items-center bg-white rounded-lg p-3">
        <span class="text-gray-600">부가세</span>
        <span class="font-semibold">${data.vat.toLocaleString()}원</span>
      </div>
      <div class="flex justify-between items-center bg-white rounded-lg p-3">
        <span class="text-gray-600">카테고리</span>
        <span class="font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">${data.category}</span>
      </div>
      <div class="flex justify-between items-center bg-white rounded-lg p-3">
        <span class="text-gray-600">신뢰도</span>
        <span class="font-semibold text-green-600">${(data.confidence * 100).toFixed(0)}%</span>
      </div>
    </div>
  `;
  
  ocrResults.classList.remove('hidden');
}

// 경비 목록에 추가
addExpenseBtn.addEventListener('click', () => {
  if (currentOCRData) {
    expenses.push(currentOCRData);
    renderExpenseList();
    
    // 초기화
    previewArea.classList.add('hidden');
    ocrResults.classList.add('hidden');
    document.getElementById('cameraArea').querySelector('.text-center').classList.remove('hidden');
    receiptInput.value = '';
    currentOCRData = null;
    
    alert('경비 목록에 추가되었습니다!');
  }
});

// 경비 목록 렌더링
function renderExpenseList() {
  if (expenses.length === 0) {
    expenseList.innerHTML = '<p class="text-gray-500 text-center py-8">영수증을 추가하세요</p>';
    return;
  }
  
  expenseList.innerHTML = expenses.map((exp, index) => {
    const riskBadge = exp.risk_level === 'high' 
      ? '<span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">⚠️ 검토권장</span>'
      : exp.risk_level === 'mid'
      ? '<span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">⚡ 주의</span>'
      : '<span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">✅ 안전</span>';
    
    return `
    <div class="bg-gradient-to-r from-white to-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition flex justify-between items-center">
      <div class="flex-1">
        <div class="flex items-center space-x-3 mb-2">
          <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">${exp.category}</span>
          <span class="text-gray-600 text-sm">${exp.date}</span>
          ${riskBadge}
        </div>
        <p class="font-semibold text-gray-800">${exp.vendor}</p>
        <p class="text-lg font-bold text-purple-600">${exp.amount.toLocaleString()}원</p>
        ${exp.risk_level === 'high' ? '<button onclick="requestSpotReview(' + index + ')" class="mt-2 text-xs text-blue-600 hover:underline">💡 전문가 검토 요청 (1,900원)</button>' : ''}
      </div>
      <button onclick="removeExpense(${index})" class="text-red-500 hover:text-red-700 transition">
        <i class="fas fa-trash-alt text-xl"></i>
      </button>
    </div>
  `}).join('');
}

// 건당 전문가 리뷰 요청
window.requestSpotReview = async function(index) {
  const expense = expenses[index];
  
  if (!confirm(`"${expense.vendor}" 항목을 전문가에게 검토 요청하시겠습니까?\n비용: 1,900원 (24시간 이내 답변)`)) {
    return;
  }
  
  try {
    const response = await fetch('/api/spot-review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        expense_id: `exp_${index}`,
        user_note: ''
      })
    });
    
    const result = await response.json();
    
    if (result.success) {
      alert(`✅ ${result.data.message}\n검토 ID: ${result.data.review_id}`);
    }
  } catch (error) {
    console.error('검토 요청 오류:', error);
    alert('요청 중 오류가 발생했습니다');
  }
};

// 통장 캡처 파일 선택
bankInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      bankPreviewImage.src = event.target.result;
      bankPreviewArea.classList.remove('hidden');
      document.querySelector('#bankCaptureSection .text-center').classList.add('hidden');
    };
    reader.readAsDataURL(file);
  }
});

// 통장 내역 분석
analyzeBankBtn.addEventListener('click', async () => {
  try {
    analyzeBankBtn.disabled = true;
    analyzeBankBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> 분석 중...';
    
    const response = await fetch('/api/bank-capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: bankPreviewImage.src })
    });
    
    const result = await response.json();
    
    if (result.success) {
      bankTransactions = result.data.transactions;
      displayBankTransactions(result.data.transactions);
      selectedBankItems = result.data.transactions.map((_, i) => i);
    }
  } catch (error) {
    console.error('통장 분석 오류:', error);
    alert('분석 중 오류가 발생했습니다');
  } finally {
    analyzeBankBtn.disabled = false;
    analyzeBankBtn.innerHTML = '<i class="fas fa-magic mr-2"></i> 거래내역 분석 시작';
  }
});

// 통장 거래내역 표시
function displayBankTransactions(transactions) {
  bankTransactionsEl.innerHTML = transactions.map((tx, index) => {
    const labelColor = tx.label === '사업추정' ? 'bg-blue-100 text-blue-800' 
                      : tx.label === '검토필요' ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-gray-100 text-gray-800';
    
    const riskIcon = tx.risk_level === 'high' ? '⚠️' : tx.risk_level === 'mid' ? '⚡' : '✅';
    
    return `
    <div class="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition">
      <div class="flex items-center justify-between mb-2">
        <label class="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" checked class="bank-tx-checkbox" data-index="${index}" onchange="toggleBankItem(${index})">
          <span class="font-semibold text-gray-800">${tx.merchant}</span>
        </label>
        <span class="${labelColor} px-2 py-1 rounded-full text-xs">${riskIcon} ${tx.label}</span>
      </div>
      <div class="flex justify-between items-center text-sm">
        <span class="text-gray-600">${tx.date}</span>
        <span class="font-bold text-purple-600">${tx.amount.toLocaleString()}원</span>
      </div>
      <div class="mt-1 text-xs text-gray-500">
        <span class="bg-purple-50 text-purple-700 px-2 py-1 rounded">${tx.category}</span>
        <span class="ml-2">신뢰도: ${(tx.confidence * 100).toFixed(0)}%</span>
      </div>
    </div>
  `}).join('');
  
  bankResults.classList.remove('hidden');
}

// 통장 항목 선택 토글
window.toggleBankItem = function(index) {
  const idx = selectedBankItems.indexOf(index);
  if (idx > -1) {
    selectedBankItems.splice(idx, 1);
  } else {
    selectedBankItems.push(index);
  }
};

// 통장 항목 경비에 추가
addBankExpensesBtn.addEventListener('click', () => {
  const selectedTransactions = selectedBankItems.map(i => bankTransactions[i]);
  
  selectedTransactions.forEach(tx => {
    expenses.push({
      date: tx.date,
      amount: tx.amount,
      vendor: tx.merchant,
      category: tx.category,
      confidence: tx.confidence,
      risk_level: tx.risk_level,
      source: 'bank'
    });
  });
  
  renderExpenseList();
  
  // 초기화
  bankPreviewArea.classList.add('hidden');
  bankResults.classList.add('hidden');
  document.querySelector('#bankCaptureSection .text-center').classList.remove('hidden');
  bankInput.value = '';
  
  alert(`${selectedTransactions.length}개 항목이 경비에 추가되었습니다!`);
});

// 갤러리 파일 선택
galleryInput.addEventListener('change', (e) => {
  const files = Array.from(e.target.files);
  if (files.length > 0) {
    galleryImages = files;
    galleryFileCount.classList.remove('hidden');
    galleryFileCount.textContent = `${files.length}개 파일 선택됨`;
    galleryResults.classList.remove('hidden');
    galleryCount.textContent = files.length;
    
    // 썸네일 표시
    displayGalleryThumbnails(files);
  }
});

// 갤러리 썸네일 표시
function displayGalleryThumbnails(files) {
  galleryGrid.innerHTML = files.map((file, index) => {
    const url = URL.createObjectURL(file);
    return `
    <div class="relative">
      <img src="${url}" class="w-full h-32 object-cover rounded-lg shadow-md">
      <div class="absolute top-2 right-2 bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
        ${index + 1}
      </div>
    </div>
  `}).join('');
}

// 갤러리 일괄 분석
processGalleryBtn.addEventListener('click', async () => {
  try {
    processGalleryBtn.disabled = true;
    processGalleryBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> 분석 중...';
    
    // 이미지를 base64로 변환
    const imagePromises = galleryImages.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    });
    
    const images = await Promise.all(imagePromises);
    
    const response = await fetch('/api/gallery-upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ images })
    });
    
    const result = await response.json();
    
    if (result.success) {
      displayGalleryResults(result.data.processed);
    }
  } catch (error) {
    console.error('갤러리 분석 오류:', error);
    alert('분석 중 오류가 발생했습니다');
  } finally {
    processGalleryBtn.disabled = false;
    processGalleryBtn.innerHTML = '<i class="fas fa-magic mr-2"></i> 일괄 분석 시작';
  }
});

// 갤러리 분석 결과 표시
function displayGalleryResults(processed) {
  galleryProcessedResults.innerHTML = processed.map((item, index) => {
    const typeIcon = item.type === 'receipt' ? '🧾' : item.type === 'statement' ? '📊' : '📱';
    const riskColor = item.data.risk_level === 'high' ? 'border-red-500' 
                     : item.data.risk_level === 'mid' ? 'border-yellow-500' 
                     : 'border-green-500';
    
    return `
    <div class="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition border-l-4 ${riskColor}">
      <div class="flex justify-between items-start mb-2">
        <div class="flex items-center space-x-2">
          <span class="text-2xl">${typeIcon}</span>
          <div>
            <p class="font-semibold text-gray-800">${item.data.vendor}</p>
            <p class="text-xs text-gray-500">${item.type === 'receipt' ? '영수증' : item.type === 'statement' ? '거래내역' : '스크린샷'}</p>
          </div>
        </div>
        <span class="text-lg font-bold text-purple-600">${item.data.amount.toLocaleString()}원</span>
      </div>
      <div class="flex justify-between items-center text-sm">
        <span class="text-gray-600">${item.data.date}</span>
        <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">${item.data.category}</span>
      </div>
    </div>
  `}).join('');
  
  galleryProcessedResults.classList.remove('hidden');
  addGalleryExpensesBtn.classList.remove('hidden');
  
  // 전역 변수에 저장
  window.galleryProcessedData = processed;
}

// 갤러리 항목 모두 경비에 추가
addGalleryExpensesBtn.addEventListener('click', () => {
  if (!window.galleryProcessedData) return;
  
  window.galleryProcessedData.forEach(item => {
    expenses.push({
      ...item.data,
      source: 'gallery',
      type: item.type
    });
  });
  
  renderExpenseList();
  
  // 초기화
  galleryResults.classList.add('hidden');
  galleryProcessedResults.classList.add('hidden');
  addGalleryExpensesBtn.classList.add('hidden');
  galleryFileCount.classList.add('hidden');
  galleryInput.value = '';
  
  alert(`${window.galleryProcessedData.length}개 항목이 경비에 추가되었습니다!`);
});

// 경비 삭제
window.removeExpense = function(index) {
  if (confirm('이 항목을 삭제하시겠습니까?')) {
    expenses.splice(index, 1);
    renderExpenseList();
  }
};

// 세금 계산
calculateBtn.addEventListener('click', async () => {
  if (expenses.length === 0) {
    alert('먼저 영수증을 추가하세요');
    return;
  }
  
  try {
    calculateBtn.disabled = true;
    calculateBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> 계산 중...';
    
    const response = await fetch('/api/calculate-tax', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expenses })
    });
    
    const result = await response.json();
    
    if (result.success) {
      displayTaxResults(result.data);
    }
  } catch (error) {
    console.error('세금 계산 오류:', error);
    alert('세금 계산 중 오류가 발생했습니다');
  } finally {
    calculateBtn.disabled = false;
    calculateBtn.innerHTML = '<i class="fas fa-calculator mr-2"></i> 세금 계산하기';
  }
});

// 세금 결과 표시
function displayTaxResults(data) {
  taxSummary.innerHTML = `
    <div class="bg-white rounded-xl p-6 shadow-lg text-center">
      <i class="fas fa-receipt text-4xl text-purple-600 mb-3"></i>
      <h3 class="text-lg font-semibold text-gray-600 mb-2">총 경비</h3>
      <p class="text-3xl font-bold text-gray-800">${data.totalExpense.toLocaleString()}<span class="text-lg">원</span></p>
    </div>
    <div class="bg-white rounded-xl p-6 shadow-lg text-center">
      <i class="fas fa-check-circle text-4xl text-blue-600 mb-3"></i>
      <h3 class="text-lg font-semibold text-gray-600 mb-2">공제 가능</h3>
      <p class="text-3xl font-bold text-gray-800">${data.deductible.toLocaleString()}<span class="text-lg">원</span></p>
    </div>
    <div class="bg-white rounded-xl p-6 shadow-lg text-center">
      <i class="fas fa-calculator text-4xl text-orange-600 mb-3"></i>
      <h3 class="text-lg font-semibold text-gray-600 mb-2">예상 세금</h3>
      <p class="text-3xl font-bold text-gray-800">${data.estimatedTax.toLocaleString()}<span class="text-lg">원</span></p>
    </div>
    <div class="bg-white rounded-xl p-6 shadow-lg text-center">
      <i class="fas fa-money-bill-wave text-4xl text-green-600 mb-3"></i>
      <h3 class="text-lg font-semibold text-gray-600 mb-2">환급 예상</h3>
      <p class="text-3xl font-bold text-green-600">${data.refundEstimate.toLocaleString()}<span class="text-lg">원</span></p>
    </div>
  `;
  
  taxResult.classList.remove('hidden');
  taxResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  // 기본 언어로 FAQ 로드
  loadFAQ(currentLang);
});
