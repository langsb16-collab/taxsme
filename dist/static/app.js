// ==================== 전역 상태 관리 ====================
let currentLang = localStorage.getItem('selectedLang') || 'ko';
let expenses = [];
let faqData = [];
let bankTransactions = [];
let galleryImages = [];
let selectedBankItems = new Set();
let currentMode = null;

// ==================== 다국어 지원 ====================

// 언어 드롭다운 토글
window.toggleLangDropdown = function() {
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
};

// 페이지 외부 클릭 시 드롭다운 닫기
document.addEventListener('click', function(e) {
  const dropdown = document.getElementById('langDropdown');
  const btn = document.getElementById('langDropdownBtn');
  
  if (dropdown && btn && !dropdown.contains(e.target) && !btn.contains(e.target)) {
    dropdown.classList.add('hidden');
  }
});

// 언어 변경
window.changeLang = function(lang) {
  currentLang = lang;
  localStorage.setItem('selectedLang', lang);
  
  // 드롭다운 닫기
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) {
    dropdown.classList.add('hidden');
  }
  
  // UI 업데이트
  updateUILanguage();
  
  // FAQ 다시 로드
  loadFAQ(lang);
  
  // 토스트 메시지
  showToast(t(lang, 'toast.languageChanged'));
};

// UI 언어 업데이트
function updateUILanguage() {
  const lang = currentLang;
  
  // HTML lang 속성
  const htmlRoot = document.getElementById('htmlRoot');
  if (htmlRoot) {
    htmlRoot.setAttribute('lang', lang);
  }
  
  // 페이지 타이틀
  const titleMap = {
    'ko': '세무신고 플랫폼 - 영수증 없어도 신고는 됩니다',
    'en': 'Tax Filing Platform - No receipt needed',
    'zh-CN': '税务申报平台 - 无需收据',
    'zh-TW': '稅務申報平台 - 無需收據',
    'ja': '税務申告プラットフォーム - レシート不要',
    'vi': 'Nền tảng khai thuế - Không cần hóa đơn',
    'es': 'Plataforma de declaración fiscal - Sin recibo',
    'de': 'Steuererklärungsplattform - Kein Beleg erforderlich'
  };
  
  const pageTitle = document.getElementById('pageTitle');
  if (pageTitle && titleMap[lang]) {
    pageTitle.textContent = titleMap[lang];
  }
  
  // 현재 언어 국기 및 텍스트
  const langFlagMap = {
    'ko': '🇰🇷',
    'en': '🇺🇸',
    'zh-CN': '🇨🇳',
    'zh-TW': '🇹🇼',
    'ja': '🇯🇵',
    'vi': '🇻🇳',
    'es': '🇪🇸',
    'de': '🇩🇪'
  };
  
  const currentLangFlag = document.getElementById('currentLangFlag');
  const currentLangText = document.getElementById('currentLangText');
  
  if (currentLangFlag && langFlagMap[lang]) {
    currentLangFlag.textContent = langFlagMap[lang];
  }
  
  if (currentLangText && window.translations && window.translations[lang]) {
    currentLangText.textContent = window.translations[lang].languageName;
  }
  
  // 언어 옵션 활성화 표시
  document.querySelectorAll('.lang-option').forEach(option => {
    const optionLang = option.getAttribute('data-lang');
    if (optionLang === lang) {
      option.style.background = 'var(--soft-fog)';
      option.style.fontWeight = '600';
    } else {
      option.style.background = 'none';
      option.style.fontWeight = '500';
    }
  });
  
  // 네비게이션
  const navTitle = document.getElementById('navTitle');
  const navNotice = document.getElementById('navNotice');
  const navLogin = document.getElementById('navLogin');
  const navSignup = document.getElementById('navSignup');
  
  if (navTitle) navTitle.textContent = t(lang, 'nav.title');
  if (navNotice) navNotice.textContent = t(lang, 'nav.notice');
  if (navLogin) navLogin.textContent = t(lang, 'nav.login');
  if (navSignup) navSignup.textContent = t(lang, 'nav.signup');
  
  // 히어로 섹션
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const heroDescription = document.getElementById('heroDescription');
  const heroCtaStart = document.getElementById('heroCtaStart');
  const heroCtaHow = document.getElementById('heroCtaHow');
  const reassureMessage = document.getElementById('reassureMessage');
  
  if (heroTitle) heroTitle.textContent = t(lang, 'hero.title');
  if (heroSubtitle) heroSubtitle.textContent = t(lang, 'hero.subtitle');
  if (heroDescription) heroDescription.innerHTML = t(lang, 'hero.description');
  if (heroCtaStart) heroCtaStart.innerHTML = '<i class="fas fa-rocket"></i> ' + t(lang, 'hero.ctaStart');
  if (heroCtaHow) heroCtaHow.innerHTML = '<i class="fas fa-play-circle"></i> ' + t(lang, 'hero.ctaHow');
  if (reassureMessage) reassureMessage.innerHTML = t(lang, 'hero.reassureMessage');
  
  // 챗봇 제목
  const chatbotTitle = document.getElementById('chatbotTitle');
  if (chatbotTitle) {
    chatbotTitle.textContent = t(lang, 'chatbot.title');
  }
  
  // FAQ 검색 플레이스홀더
  const faqSearch = document.getElementById('faqSearch');
  if (faqSearch) {
    faqSearch.placeholder = t(lang, 'chatbot.searchPlaceholder');
  }
  
  // 경비 목록 업데이트 (언어 변경 반영)
  updateExpenseList();
  updateTaxSummary();
}

// 단축 함수
function t(lang, key) {
  return window.getTranslation ? window.getTranslation(lang, key) : key;
}

// ==================== 유틸리티 함수 ====================

// 토스트 메시지 표시
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// 숫자 포맷팅 (금액용 - Mono 폰트)
function formatAmount(amount) {
  return `<span class="amount">${amount.toLocaleString('ko-KR')}원</span>`;
}

// 위험도 배지 생성
function createRiskBadge(level) {
  const badges = {
    low: { text: '안전', icon: 'check-circle', class: 'risk-low' },
    mid: { text: '검토', icon: 'exclamation-triangle', class: 'risk-mid' },
    high: { text: '주의', icon: 'exclamation-circle', class: 'risk-high' }
  };
  
  const badge = badges[level] || badges.low;
  return `
    <span class="risk-badge ${badge.class}">
      <i class="fas fa-${badge.icon}"></i>
      ${badge.text}
    </span>
  `;
}

// 스크롤 헬퍼
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// ==================== 모드 전환 함수 ====================

window.switchMode = function(mode) {
  // 모든 섹션 숨기기
  ['receiptSection', 'bankSection', 'gallerySection'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  
  // 선택된 모드 표시
  const sectionMap = {
    receipt: 'receiptSection',
    bank: 'bankSection',
    gallery: 'gallerySection'
  };
  
  const sectionId = sectionMap[mode];
  if (sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.remove('hidden');
      section.classList.add('active');
      setTimeout(() => scrollToElement(sectionId), 200);
    }
  }
  
  currentMode = mode;
  showToast(`${mode === 'receipt' ? '영수증 촬영' : mode === 'bank' ? '통장 캡처' : '갤러리 업로드'} 모드로 전환되었습니다`);
};

// ==================== 영수증 촬영 모드 ====================

// 영수증 입력 이벤트
if (document.getElementById('receiptInput')) {
  document.getElementById('receiptInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
      const previewArea = document.getElementById('receiptPreviewArea');
      const previewImage = document.getElementById('receiptPreviewImage');
      const analyzeBtn = document.getElementById('analyzeReceiptBtn');
      
      if (previewImage) {
        previewImage.src = event.target.result;
        previewArea.classList.remove('hidden');
        analyzeBtn.disabled = false;
      }
      
      showToast('영수증 이미지가 로드되었습니다');
    };
    reader.readAsDataURL(file);
  });
}

// 영수증 분석 버튼
if (document.getElementById('analyzeReceiptBtn')) {
  document.getElementById('analyzeReceiptBtn').addEventListener('click', async function() {
    const btn = this;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 분석 중...';
    
    try {
      const response = await fetch('/api/ocr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: 'placeholder' })
      });
      
      const result = await response.json();
      
      if (result.success) {
        displayReceiptResult(result.data);
        showToast('✅ 영수증 분석 완료!');
      } else {
        showToast('❌ 분석에 실패했습니다');
      }
    } catch (error) {
      showToast('❌ 오류가 발생했습니다');
      console.error(error);
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-magic"></i> 분석 시작';
    }
  });
}

// 영수증 결과 표시
function displayReceiptResult(data) {
  const resultsDiv = document.getElementById('receiptResults');
  const dataDiv = document.getElementById('receiptData');
  
  if (!resultsDiv || !dataDiv) return;
  
  dataDiv.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="padding: 12px; background: var(--soft-fog); border-radius: 8px;">
        <div style="font-size: 0.875rem; color: var(--text-tertiary); margin-bottom: 4px;">일자</div>
        <div style="font-size: 1.125rem; font-weight: 600;">${data.date}</div>
      </div>
      
      <div style="padding: 12px; background: var(--soft-fog); border-radius: 8px;">
        <div style="font-size: 0.875rem; color: var(--text-tertiary); margin-bottom: 4px;">금액</div>
        <div style="font-size: 1.5rem; font-weight: 700; font-family: var(--font-mono); color: var(--clear-mint);">
          ${data.amount.toLocaleString()}원
        </div>
      </div>
      
      <div style="padding: 12px; background: var(--soft-fog); border-radius: 8px;">
        <div style="font-size: 0.875rem; color: var(--text-tertiary); margin-bottom: 4px;">업체명</div>
        <div style="font-size: 1.125rem; font-weight: 600;">${data.vendor}</div>
      </div>
      
      <div style="padding: 12px; background: var(--soft-fog); border-radius: 8px;">
        <div style="font-size: 0.875rem; color: var(--text-tertiary); margin-bottom: 4px;">카테고리</div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 1rem; font-weight: 600;">${data.category}</span>
          ${createRiskBadge(data.risk_level)}
        </div>
      </div>
      
      <div style="padding: 12px; background: #E8F5F1; border-radius: 8px; border-left: 4px solid var(--clear-mint);">
        <div style="font-size: 0.875rem; color: var(--text-secondary);">
          <i class="fas fa-check-circle" style="color: var(--clear-mint);"></i>
          인식 신뢰도: ${Math.round(data.confidence * 100)}%
        </div>
      </div>
    </div>
  `;
  
  resultsDiv.classList.remove('hidden');
  
  // 데이터 저장
  window.currentReceiptData = data;
}

// 영수증 경비 추가
if (document.getElementById('addReceiptBtn')) {
  document.getElementById('addReceiptBtn').addEventListener('click', function() {
    if (window.currentReceiptData) {
      addExpenseToList(window.currentReceiptData, 'receipt');
      showToast('✅ 경비 목록에 추가되었습니다');
      
      // 경비 섹션으로 스크롤
      setTimeout(() => scrollToElement('expenseSection'), 500);
    }
  });
}

// ==================== 통장 캡처 모드 ====================

// 통장 입력 이벤트
if (document.getElementById('bankInput')) {
  document.getElementById('bankInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(event) {
      const previewArea = document.getElementById('bankPreviewArea');
      const previewImage = document.getElementById('bankPreviewImage');
      
      if (previewImage && previewArea) {
        previewImage.src = event.target.result;
        previewArea.classList.remove('hidden');
      }
      
      showToast('통장 화면이 로드되었습니다');
    };
    reader.readAsDataURL(file);
  });
}

// 통장 분석 버튼
if (document.getElementById('analyzeBankBtn')) {
  document.getElementById('analyzeBankBtn').addEventListener('click', async function() {
    const btn = this;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 거래내역 분석 중...';
    
    try {
      const response = await fetch('/api/bank-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: 'placeholder' })
      });
      
      const result = await response.json();
      
      if (result.success) {
        bankTransactions = result.data.transactions;
        displayBankTransactions(result.data.transactions);
        showToast(`✅ ${result.data.transactions.length}건의 거래내역이 인식되었습니다`);
      } else {
        showToast('❌ 분석에 실패했습니다');
      }
    } catch (error) {
      showToast('❌ 오류가 발생했습니다');
      console.error(error);
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-magic"></i> 거래내역 분석 시작';
    }
  });
}

// 통장 거래내역 표시
function displayBankTransactions(transactions) {
  const resultsDiv = document.getElementById('bankResults');
  const transactionsDiv = document.getElementById('bankTransactions');
  
  if (!resultsDiv || !transactionsDiv) return;
  
  selectedBankItems.clear();
  transactions.forEach(tx => {
    if (tx.selected) selectedBankItems.add(tx.id);
  });
  
  transactionsDiv.innerHTML = transactions.map(tx => `
    <div class="card" style="margin-bottom: 12px; padding: 16px; cursor: pointer; border: 2px solid ${selectedBankItems.has(tx.id) ? 'var(--clear-mint)' : 'transparent'}; transition: all 0.2s;" 
         onclick="toggleBankTransaction('${tx.id}')">
      
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div>
          <div style="font-size: 0.875rem; color: var(--text-tertiary);">${tx.date}</div>
          <div style="font-size: 1.125rem; font-weight: 600; margin-top: 4px;">${tx.merchant}</div>
        </div>
        <div style="text-align: right;">
          <div class="amount" style="font-size: 1.25rem; font-weight: 700; color: var(--coral-trust);">
            -${tx.amount.toLocaleString()}원
          </div>
          ${createRiskBadge(tx.risk_level)}
        </div>
      </div>
      
      <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
        <span style="padding: 4px 12px; background: var(--soft-fog); border-radius: 16px; font-size: 0.875rem;">
          ${tx.category}
        </span>
        <span style="padding: 4px 12px; background: ${tx.label === '사업추정' ? '#E8F5F1' : tx.label === '검토필요' ? '#FFF4E6' : '#F4F4F4'}; 
                     color: ${tx.label === '사업추정' ? 'var(--clear-mint)' : tx.label === '검토필요' ? 'var(--amber-audit)' : 'var(--text-secondary)'}; 
                     border-radius: 16px; font-size: 0.875rem; font-weight: 600;">
          ${tx.label}
        </span>
        ${tx.label === '검토필요' ? `
          <button class="btn-ghost" style="padding: 4px 12px; font-size: 0.875rem; margin-left: auto;" onclick="event.stopPropagation(); requestSpotReview('${tx.id}')">
            <i class="fas fa-user-tie"></i>
            1,900원 검토받기
          </button>
        ` : ''}
      </div>
      
      ${selectedBankItems.has(tx.id) ? `
        <div style="margin-top: 12px; padding: 12px; background: #E8F5F1; border-radius: 8px; border-left: 4px solid var(--clear-mint);">
          <i class="fas fa-check-circle" style="color: var(--clear-mint);"></i>
          <span style="font-size: 0.875rem; color: var(--deep-green);">경비로 추가됩니다</span>
        </div>
      ` : ''}
    </div>
  `).join('');
  
  resultsDiv.classList.remove('hidden');
}

// 통장 거래내역 선택 토글
window.toggleBankTransaction = function(txId) {
  if (selectedBankItems.has(txId)) {
    selectedBankItems.delete(txId);
  } else {
    selectedBankItems.add(txId);
  }
  
  displayBankTransactions(bankTransactions);
};

// Spot Review 요청 (건당 검토)
window.requestSpotReview = async function(txId) {
  const confirmed = confirm('이 거래내역을 세무 전문가에게 검토 요청하시겠습니까?\n비용: 1,900원');
  
  if (confirmed) {
    showToast('🔍 전문가 검토가 요청되었습니다. 24시간 내 답변 예정입니다.');
    
    try {
      await fetch('/api/spot-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transaction_id: txId, amount: 1900 })
      });
    } catch (error) {
      console.error('Spot Review 요청 실패:', error);
    }
  }
};

// 통장 거래내역 경비 추가
if (document.getElementById('addBankBtn')) {
  document.getElementById('addBankBtn').addEventListener('click', function() {
    let addedCount = 0;
    
    bankTransactions.forEach(tx => {
      if (selectedBankItems.has(tx.id)) {
        addExpenseToList({
          date: tx.date,
          amount: tx.amount,
          vendor: tx.merchant,
          category: tx.category,
          risk_level: tx.risk_level,
          source_type: 'bank',
          confidence: tx.confidence
        }, 'bank');
        addedCount++;
      }
    });
    
    if (addedCount > 0) {
      showToast(`✅ ${addedCount}건의 거래내역이 경비로 추가되었습니다`);
      setTimeout(() => scrollToElement('expenseSection'), 500);
    } else {
      showToast('선택된 항목이 없습니다');
    }
  });
}

// ==================== 갤러리 일괄 업로드 ====================

// 갤러리 입력 이벤트
if (document.getElementById('galleryInput')) {
  document.getElementById('galleryInput').addEventListener('change', function(e) {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    
    if (files.length > 20) {
      showToast('⚠️ 최대 20장까지 업로드 가능합니다');
      return;
    }
    
    galleryImages = files;
    displayGalleryFiles(files);
    
    const fileCountDiv = document.getElementById('galleryFileCount');
    const resultsDiv = document.getElementById('galleryResults');
    const countSpan = document.getElementById('galleryCount');
    
    if (fileCountDiv && resultsDiv && countSpan) {
      fileCountDiv.textContent = `${files.length}개 파일 선택됨`;
      fileCountDiv.classList.remove('hidden');
      resultsDiv.classList.remove('hidden');
      countSpan.textContent = files.length;
    }
    
    showToast(`${files.length}개 파일이 선택되었습니다`);
  });
}

// 갤러리 파일 표시
function displayGalleryFiles(files) {
  const gridDiv = document.getElementById('galleryGrid');
  if (!gridDiv) return;
  
  gridDiv.innerHTML = '';
  
  files.forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imgContainer = document.createElement('div');
      imgContainer.style.cssText = 'position: relative; border-radius: 8px; overflow: hidden; aspect-ratio: 1; border: 2px solid var(--soft-fog);';
      
      imgContainer.innerHTML = `
        <img src="${e.target.result}" style="width: 100%; height: 100%; object-fit: cover;">
        <div style="position: absolute; top: 4px; right: 4px; background: var(--clear-mint); color: white; 
                    width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; 
                    justify-content: center; font-size: 0.75rem; font-weight: 600;">
          ${index + 1}
        </div>
      `;
      
      gridDiv.appendChild(imgContainer);
    };
    reader.readAsDataURL(file);
  });
}

// 갤러리 일괄 분석
if (document.getElementById('processGalleryBtn')) {
  document.getElementById('processGalleryBtn').addEventListener('click', async function() {
    const btn = this;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 분석 중...';
    
    try {
      const response = await fetch('/api/gallery-upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          file_count: galleryImages.length,
          files: galleryImages.map((f, i) => `file_${i}`)
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        displayGalleryResults(result.data.receipts);
        showToast(`✅ ${result.data.receipts.length}건의 영수증이 인식되었습니다`);
      } else {
        showToast('❌ 분석에 실패했습니다');
      }
    } catch (error) {
      showToast('❌ 오류가 발생했습니다');
      console.error(error);
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-magic"></i> 일괄 분석 시작';
    }
  });
}

// 갤러리 분석 결과 표시
function displayGalleryResults(receipts) {
  const resultsDiv = document.getElementById('galleryProcessedResults');
  const addBtn = document.getElementById('addGalleryBtn');
  
  if (!resultsDiv || !addBtn) return;
  
  resultsDiv.innerHTML = `
    <h3 style="margin-bottom: 16px;">
      <i class="fas fa-check-circle" style="color: var(--clear-mint);"></i>
      분석 완료 (${receipts.length}건)
    </h3>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      ${receipts.map((receipt, index) => `
        <div class="card-fog" style="padding: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-size: 0.875rem; color: var(--text-tertiary);">#${index + 1} · ${receipt.date}</div>
              <div style="font-size: 1.125rem; font-weight: 600; margin-top: 4px;">${receipt.vendor}</div>
            </div>
            <div style="text-align: right;">
              <div class="amount" style="font-size: 1.25rem; font-weight: 700; color: var(--clear-mint);">
                ${receipt.amount.toLocaleString()}원
              </div>
              ${createRiskBadge(receipt.risk_level)}
            </div>
          </div>
          <div style="margin-top: 8px; font-size: 0.875rem; color: var(--text-secondary);">
            <span style="padding: 4px 12px; background: white; border-radius: 16px;">${receipt.category}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  resultsDiv.classList.remove('hidden');
  addBtn.classList.remove('hidden');
  
  // 데이터 저장
  window.currentGalleryReceipts = receipts;
}

// 갤러리 경비 추가
if (document.getElementById('addGalleryBtn')) {
  document.getElementById('addGalleryBtn').addEventListener('click', function() {
    if (window.currentGalleryReceipts) {
      window.currentGalleryReceipts.forEach(receipt => {
        addExpenseToList(receipt, 'gallery');
      });
      
      showToast(`✅ ${window.currentGalleryReceipts.length}건의 영수증이 경비로 추가되었습니다`);
      setTimeout(() => scrollToElement('expenseSection'), 500);
    }
  });
}

// ==================== 경비 목록 관리 ====================

// 경비 추가
function addExpenseToList(data, source) {
  const expense = {
    id: `exp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    date: data.date,
    amount: data.amount,
    vendor: data.vendor,
    category: data.category || '미분류',
    risk_level: data.risk_level || 'low',
    source_type: source,
    confidence: data.confidence || 0.9,
    timestamp: new Date().toISOString()
  };
  
  expenses.push(expense);
  updateExpenseList();
  updateTaxSummary();
}

// 경비 목록 업데이트
function updateExpenseList() {
  const listDiv = document.getElementById('expenseList');
  if (!listDiv) return;
  
  if (expenses.length === 0) {
    listDiv.innerHTML = `
      <div style="text-align: center; padding: 48px; color: var(--text-tertiary);">
        <i class="fas fa-inbox" style="font-size: 64px; margin-bottom: 16px; opacity: 0.3;"></i>
        <p>아직 추가된 경비가 없습니다</p>
        <p style="font-size: 0.875rem; margin-top: 8px;">위에서 영수증을 촬영하거나 통장을 캡처하세요</p>
      </div>
    `;
    return;
  }
  
  listDiv.innerHTML = expenses.map(exp => `
    <div class="card" style="margin-bottom: 12px; padding: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
        <div style="flex: 1;">
          <div style="font-size: 0.875rem; color: var(--text-tertiary); margin-bottom: 4px;">
            ${exp.date} · ${exp.source_type === 'receipt' ? '영수증' : exp.source_type === 'bank' ? '통장' : '갤러리'}
          </div>
          <div style="font-size: 1.125rem; font-weight: 600;">${exp.vendor}</div>
          <div style="margin-top: 8px;">
            <span style="padding: 4px 12px; background: var(--soft-fog); border-radius: 16px; font-size: 0.875rem;">
              ${exp.category}
            </span>
          </div>
        </div>
        <div style="text-align: right;">
          <div class="amount" style="font-size: 1.5rem; font-weight: 700; color: var(--clear-mint); margin-bottom: 8px;">
            ${exp.amount.toLocaleString()}원
          </div>
          ${createRiskBadge(exp.risk_level)}
        </div>
      </div>
      
      <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid var(--soft-fog);">
        <div style="font-size: 0.875rem; color: var(--text-tertiary);">
          <i class="fas fa-check-circle"></i>
          신뢰도 ${Math.round(exp.confidence * 100)}%
        </div>
        <button class="btn-ghost" style="padding: 6px 12px; font-size: 0.875rem;" onclick="removeExpense('${exp.id}')">
          <i class="fas fa-trash"></i>
          삭제
        </button>
      </div>
    </div>
  `).join('');
}

// 경비 삭제
window.removeExpense = function(expenseId) {
  expenses = expenses.filter(exp => exp.id !== expenseId);
  updateExpenseList();
  updateTaxSummary();
  showToast('경비 항목이 삭제되었습니다');
};

// 세금 요약 업데이트
function updateTaxSummary() {
  const summaryDiv = document.getElementById('taxSummary');
  if (!summaryDiv) return;
  
  const totalAmount = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const deductible = Math.floor(totalAmount * 0.8);
  const refund = Math.floor(totalAmount * 0.05);
  
  const highRisk = expenses.filter(e => e.risk_level === 'high').length;
  const midRisk = expenses.filter(e => e.risk_level === 'mid').length;
  const lowRisk = expenses.filter(e => e.risk_level === 'low').length;
  
  summaryDiv.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
      <div style="text-align: center; padding: 24px; background: white; border-radius: 12px;">
        <div style="font-size: 0.875rem; color: var(--text-tertiary); margin-bottom: 8px;">총 경비</div>
        <div class="amount" style="font-size: 2rem; font-weight: 700; color: var(--midnight-navy);">
          ${totalAmount.toLocaleString()}원
        </div>
      </div>
      
      <div style="text-align: center; padding: 24px; background: white; border-radius: 12px;">
        <div style="font-size: 0.875rem; color: var(--text-tertiary); margin-bottom: 8px;">공제 가능액</div>
        <div class="amount" style="font-size: 2rem; font-weight: 700; color: var(--clear-mint);">
          ${deductible.toLocaleString()}원
        </div>
      </div>
      
      <div style="text-align: center; padding: 24px; background: white; border-radius: 12px;">
        <div style="font-size: 0.875rem; color: var(--text-tertiary); margin-bottom: 8px;">예상 환급</div>
        <div class="amount" style="font-size: 2rem; font-weight: 700; color: var(--amber-audit);">
          ${refund.toLocaleString()}원
        </div>
      </div>
    </div>
    
    <div style="margin-top: 24px; padding: 16px; background: var(--soft-fog); border-radius: 12px;">
      <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 12px; font-weight: 600;">
        <i class="fas fa-shield-alt"></i>
        위험도 분석
      </div>
      <div style="display: flex; gap: 16px;">
        <div style="flex: 1; text-align: center;">
          ${createRiskBadge('low')}
          <div class="amount" style="font-size: 1.25rem; margin-top: 8px;">${lowRisk}건</div>
        </div>
        <div style="flex: 1; text-align: center;">
          ${createRiskBadge('mid')}
          <div class="amount" style="font-size: 1.25rem; margin-top: 8px;">${midRisk}건</div>
        </div>
        <div style="flex: 1; text-align: center;">
          ${createRiskBadge('high')}
          <div class="amount" style="font-size: 1.25rem; margin-top: 8px;">${highRisk}건</div>
        </div>
      </div>
    </div>
  `;
}

// 세금 계산 버튼
if (document.getElementById('calculateBtn')) {
  document.getElementById('calculateBtn').addEventListener('click', async function() {
    if (expenses.length === 0) {
      showToast('⚠️ 경비 항목을 추가해주세요');
      return;
    }
    
    const btn = this;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 계산 중...';
    
    try {
      const response = await fetch('/api/calculate-tax', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expenses })
      });
      
      const result = await response.json();
      
      if (result.success) {
        displayTaxResult(result.data);
        showToast('✅ 세금 계산이 완료되었습니다');
      } else {
        showToast('❌ 계산에 실패했습니다');
      }
    } catch (error) {
      showToast('❌ 오류가 발생했습니다');
      console.error(error);
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-calculator"></i> 세금 계산하기';
    }
  });
}

// 세금 계산 결과 표시
function displayTaxResult(data) {
  const resultDiv = document.getElementById('taxResult');
  if (!resultDiv) return;
  
  resultDiv.innerHTML = `
    <div class="card" style="background: var(--midnight-navy); color: white; padding: 32px;">
      <h2 style="text-align: center; margin-bottom: 32px; color: white;">
        <i class="fas fa-file-invoice-dollar"></i>
        세금 계산 결과
      </h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-bottom: 32px;">
        <div style="text-align: center; padding: 24px; background: rgba(255,255,255,0.1); border-radius: 12px;">
          <div style="font-size: 0.875rem; opacity: 0.8; margin-bottom: 8px;">총 경비</div>
          <div class="amount" style="font-size: 2rem; font-weight: 700;">
            ${data.totalExpense.toLocaleString()}원
          </div>
        </div>
        
        <div style="text-align: center; padding: 24px; background: rgba(37, 194, 160, 0.2); border-radius: 12px;">
          <div style="font-size: 0.875rem; opacity: 0.8; margin-bottom: 8px;">공제 가능액</div>
          <div class="amount" style="font-size: 2rem; font-weight: 700; color: var(--clear-mint);">
            ${data.deductible.toLocaleString()}원
          </div>
        </div>
        
        <div style="text-align: center; padding: 24px; background: rgba(248, 161, 15, 0.2); border-radius: 12px;">
          <div style="font-size: 0.875rem; opacity: 0.8; margin-bottom: 8px;">예상 환급</div>
          <div class="amount" style="font-size: 2rem; font-weight: 700; color: var(--amber-audit);">
            ${data.refundEstimate.toLocaleString()}원
          </div>
        </div>
      </div>
      
      <div class="message-box message-reassure">
        <p style="font-size: 1rem; color: var(--deep-green);">
          <i class="fas fa-check-circle"></i>
          ${data.summary}
        </p>
      </div>
      
      <div style="display: flex; gap: 16px; margin-top: 24px;">
        <button class="btn btn-primary" style="flex: 1; background: var(--clear-mint);">
          <i class="fas fa-paper-plane"></i>
          신고서 제출하기
        </button>
        <button class="btn btn-outline" style="flex: 1; border-color: white; color: white;">
          <i class="fas fa-download"></i>
          PDF 다운로드
        </button>
      </div>
    </div>
  `;
  
  resultDiv.classList.remove('hidden');
  scrollToElement('taxResult');
}

// ==================== 챗봇 FAQ (다국어 지원) ====================

let currentFaqView = 'grid'; // 'grid' or 'detail'
let currentDetailFaq = null;
let currentFaqPage = 0; // 9개씩 페이지 네이션

// 챗봇 토글
if (document.getElementById('chatbotIcon')) {
  document.getElementById('chatbotIcon').addEventListener('click', function() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    if (chatbotWindow) {
      chatbotWindow.classList.toggle('hidden');
      
      if (!chatbotWindow.classList.contains('hidden')) {
        loadFAQGrid(currentLang);
      }
    }
  });
}

if (document.getElementById('closeChatbot')) {
  document.getElementById('closeChatbot').addEventListener('click', function() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    if (chatbotWindow) {
      chatbotWindow.classList.add('hidden');
    }
  });
}

// FAQ 그리드 로드 (9개씩)
function loadFAQGrid(lang = 'ko', page = 0) {
  currentLang = lang;
  currentFaqPage = page;
  currentFaqView = 'grid';
  
  const faqs = window.faqTranslations[lang] || window.faqTranslations['ko'];
  const faqList = document.getElementById('faqList');
  if (!faqList) return;
  
  const startIdx = page * 9;
  const endIdx = startIdx + 9;
  const pageFaqs = faqs.slice(startIdx, endIdx);
  const totalPages = Math.ceil(faqs.length / 9);
  
  faqList.innerHTML = `
    <div class="faq-grid">
      ${pageFaqs.map(faq => `
        <div class="faq-card" onclick="showFaqDetail(${faq.id})">
          <div class="faq-card-number">${faq.id}</div>
          <div class="faq-card-title">${faq.question}</div>
        </div>
      `).join('')}
    </div>
    
    ${totalPages > 1 ? `
      <div style="display: flex; justify-content: center; gap: 12px; margin-top: 16px;">
        ${page > 0 ? `
          <button class="btn btn-ghost" style="padding: 8px 16px;" onclick="loadFAQGrid('${lang}', ${page - 1})">
            <i class="fas fa-chevron-left"></i>
            이전
          </button>
        ` : ''}
        
        <div style="display: flex; align-items: center; gap: 8px; padding: 0 16px;">
          <span style="color: var(--text-tertiary); font-size: 0.875rem;">
            ${page + 1} / ${totalPages}
          </span>
        </div>
        
        ${page < totalPages - 1 ? `
          <button class="btn btn-ghost" style="padding: 8px 16px;" onclick="loadFAQGrid('${lang}', ${page + 1})">
            다음
            <i class="fas fa-chevron-right"></i>
          </button>
        ` : ''}
      </div>
    ` : ''}
  `;
}

// FAQ 상세 표시
window.showFaqDetail = function(faqId) {
  const faqs = window.faqTranslations[currentLang] || window.faqTranslations['ko'];
  const faq = faqs.find(f => f.id === faqId);
  
  if (!faq) return;
  
  currentDetailFaq = faq;
  currentFaqView = 'detail';
  
  const faqList = document.getElementById('faqList');
  if (!faqList) return;
  
  faqList.innerHTML = `
    <button class="faq-back-button" onclick="loadFAQGrid('${currentLang}', ${currentFaqPage})">
      <i class="fas fa-arrow-left"></i>
      목록으로 돌아가기
    </button>
    
    <div class="faq-detail">
      <div class="faq-detail-header">
        <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
          <div class="faq-card-number" style="font-size: 2rem; margin: 0;">${faq.id}</div>
          <div class="faq-detail-question">${faq.question}</div>
        </div>
        <button class="faq-detail-close" onclick="loadFAQGrid('${currentLang}', ${currentFaqPage})">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="faq-detail-answer">${faq.answer}</div>
    </div>
    
    <!-- 이전/다음 FAQ -->
    <div style="display: flex; gap: 12px; justify-content: space-between;">
      ${faq.id > 1 ? `
        <button class="btn btn-outline" style="flex: 1;" onclick="showFaqDetail(${faq.id - 1})">
          <i class="fas fa-chevron-left"></i>
          이전 질문
        </button>
      ` : '<div></div>'}
      
      ${faq.id < 25 ? `
        <button class="btn btn-outline" style="flex: 1;" onclick="showFaqDetail(${faq.id + 1})">
          다음 질문
          <i class="fas fa-chevron-right"></i>
        </button>
      ` : '<div></div>'}
    </div>
  `;
};

// 언어 드롭다운 토글
window.toggleLangDropdown = function() {
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
};

// 문서 클릭 시 드롭다운 닫기
document.addEventListener('click', function(e) {
  const dropdown = document.getElementById('langDropdown');
  const btn = document.getElementById('langDropdownBtn');
  
  if (dropdown && btn && !dropdown.contains(e.target) && !btn.contains(e.target)) {
    dropdown.classList.add('hidden');
  }
});

// 언어 변경 (완전히 재작성)
window.changeLang = function(lang) {
  currentLang = lang;
  
  // 드롭다운 닫기
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) {
    dropdown.classList.add('hidden');
  }
  
  // 현재 언어 텍스트 업데이트
  const currentLangText = document.getElementById('currentLangText');
  const langNames = {
    'ko': '한국어',
    'en': 'English',
    'zh-CN': '简体中文',
    'zh-TW': '繁體中文',
    'ja': '日本語',
    'vi': 'Tiếng Việt',
    'es': 'Español',
    'de': 'Deutsch'
  };
  
  if (currentLangText) {
    currentLangText.textContent = langNames[lang] || '한국어';
  }
  
  // HTML lang 속성 변경
  const htmlRoot = document.getElementById('htmlRoot');
  if (htmlRoot) {
    htmlRoot.setAttribute('lang', lang);
  }
  
  // FAQ 그리드 다시 로드
  if (currentFaqView === 'grid') {
    loadFAQGrid(lang, currentFaqPage);
  } else if (currentDetailFaq) {
    showFaqDetail(currentDetailFaq.id);
  }
  
  // 로컬스토리지에 저장
  try {
    localStorage.setItem('preferred_lang', lang);
  } catch (e) {
    console.warn('localStorage not available');
  }
  
  showToast(`${langNames[lang]} 로 변경되었습니다`);
};

// ==================== 스크롤 헬퍼 ====================

window.scrollToSection = function(sectionId) {
  scrollToElement(sectionId);
};

// ==================== 초기화 ====================

document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ 세무신고 플랫폼 초기화 완료 (다국어 지원)');
  
  // 로컬스토리지에서 저장된 언어 불러오기
  try {
    const savedLang = localStorage.getItem('preferred_lang');
    if (savedLang && window.faqTranslations[savedLang]) {
      currentLang = savedLang;
      // 언어 드롭다운 텍스트 업데이트
      const currentLangText = document.getElementById('currentLangText');
      const langNames = {
        'ko': '한국어',
        'en': 'English',
        'zh-CN': '简体中文',
        'zh-TW': '繁體中文',
        'ja': '日本語',
        'vi': 'Tiếng Việt',
        'es': 'Español',
        'de': 'Deutsch'
      };
      if (currentLangText) {
        currentLangText.textContent = langNames[currentLang] || '한국어';
      }
    }
  } catch (e) {
    console.warn('localStorage not available');
  }
  
  // FAQ 초기 로드 (9개 그리드 방식)
  if (window.faqTranslations) {
    loadFAQGrid(currentLang);
  }
  
  // 경비 목록 초기화
  updateExpenseList();
  updateTaxSummary();
  
  console.log(`Current language: ${currentLang}`);
  console.log(`FAQ data loaded: ${window.faqTranslations ? 'Yes' : 'No'}`);
});
