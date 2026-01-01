// ==================== 다국어 i18n 시스템 ====================
// 지원 언어: 한국어, 영어, 중국어(간체), 중국어(번체), 일본어, 베트남어, 스페인어, 독일어

const translations = {
  // 한국어
  ko: {
    // 언어 이름
    languageName: '한국어',
    languageCode: 'ko',
    
    // 네비게이션
    nav: {
      title: '세무신고 플랫폼',
      notice: '공지',
      login: '로그인',
      signup: '회원가입',
      selectLanguage: '언어 선택'
    },
    
    // 히어로 섹션
    hero: {
      title: '사진(Snap)으로 해결하는 세금',
      subtitle: '카메라 렌즈로 끝나는 신고',
      description: '영수증 없어도 괜찮습니다<br>통장 캡처로 경비 처리',
      ctaStart: '지금 시작하기',
      ctaHow: '어떻게 작동하나요?',
      reassureMessage: '사진만 있으면 시작할 수 있어요.<br>정식 장부가 없어도 출발할 수 있어야 진짜 초보자를 위한 서비스죠.'
    },
    
    // 안심 메시지
    reassurance: {
      message: '사진만 있으면 시작할 수 있어요.',
      detail: '정식 장부가 없어도 출발할 수 있어야 진짜 초보자를 위한 서비스죠.'
    },
    
    // 주요 기능 카드
    features: {
      gallery: {
        title: '갤러리 속 사진',
        description: '찍어둔 사진만 있어도 신고는 갑니다'
      },
      bank: {
        title: '통장 캡처',
        description: '영수증 없이도 경비 후보로 인정'
      },
      expert: {
        title: '건당 전문가 리뷰',
        description: '애매한 항목만 1,900원에 확인'
      }
    },
    
    // 모드 선택
    modes: {
      title: '어떤 방식으로 시작하시겠어요?',
      subtitle: '상황에 맞는 방식을 선택하세요. 언제든 바꿀 수 있습니다.',
      receipt: {
        title: '영수증 촬영',
        description: '정식 영수증이 있을 때',
        button: '선택하기'
      },
      bank: {
        title: '통장 캡처',
        badge: '💡',
        description: '영수증 없을 때 추천',
        button: '선택하기'
      },
      gallery: {
        title: '갤러리 업로드',
        badge: '📸',
        description: '사진첩에 여러 장 있을 때',
        button: '선택하기'
      }
    },
    
    // 영수증 섹션
    receipt: {
      title: '영수증 촬영하기',
      uploadTitle: '영수증을 촬영하세요',
      uploadSubtitle: '또는 파일을 업로드하세요',
      analyzeButton: '분석 시작',
      analyzing: '분석 중...',
      resultTitle: '인식 결과',
      addButton: '경비 목록에 추가',
      fields: {
        date: '일자',
        amount: '금액',
        vendor: '업체명',
        category: '카테고리',
        confidence: '인식 신뢰도'
      }
    },
    
    // 통장 캡처 섹션
    bank: {
      title: '통장 거래내역 캡처하기',
      subtitle: '뱅킹앱 거래내역 화면을 촬영하면 자동으로 경비로 분류합니다',
      uploadTitle: '통장 화면을 촬영하세요',
      uploadSubtitle: '거래내역이 보이는 화면 캡처',
      analyzeButton: '거래내역 분석 시작',
      analyzing: '거래내역 분석 중...',
      resultTitle: '거래내역 인식 결과',
      addButton: '선택 항목 경비에 추가',
      spotReview: '1,900원 검토받기',
      labels: {
        business: '사업추정',
        personal: '개인추정',
        review: '검토필요'
      },
      addedMessage: '경비로 추가됩니다'
    },
    
    // 갤러리 섹션
    gallery: {
      title: '갤러리 사진 일괄 업로드',
      subtitle: '사진첩에 저장된 영수증, 스크린샷 등을 한 번에 업로드하세요 (최대 20장)',
      uploadTitle: '여러 사진을 한 번에 선택하세요',
      uploadSubtitle: '최대 20장까지 동시 업로드 가능',
      selectedFiles: '선택된 파일',
      count: '개',
      processButton: '일괄 분석 시작',
      processing: '일괄 분석 중...',
      resultTitle: '분석 완료',
      addButton: '모두 경비에 추가'
    },
    
    // 경비 목록
    expenses: {
      title: '경비 목록',
      subtitle: '추가된 경비 항목들입니다. 수정 및 삭제가 가능합니다.',
      empty: '아직 추가된 경비가 없습니다',
      emptyDetail: '위에서 영수증을 촬영하거나 통장을 캡처하세요',
      sources: {
        receipt: '영수증',
        bank: '통장',
        gallery: '갤러리'
      },
      deleteButton: '삭제',
      confidence: '신뢰도'
    },
    
    // 세금 계산
    tax: {
      summaryTitle: '세금 요약',
      totalExpense: '총 경비',
      deductible: '공제 가능액',
      estimatedRefund: '예상 환급',
      riskAnalysis: '위험도 분석',
      calculateButton: '세금 계산하기',
      calculating: '계산 중...',
      resultTitle: '세금 계산 결과',
      submitButton: '신고서 제출하기',
      downloadButton: 'PDF 다운로드'
    },
    
    // 위험도
    risk: {
      low: '안전',
      mid: '검토',
      high: '주의'
    },
    
    // 챗봇
    chatbot: {
      title: 'FAQ 챗봇',
      searchPlaceholder: '검색...',
      noResults: '검색 결과가 없습니다',
      close: '닫기'
    },
    
    // 토스트 메시지
    toast: {
      fileLoaded: '이미지가 로드되었습니다',
      analysisComplete: '분석 완료!',
      analysisFailed: '분석에 실패했습니다',
      error: '오류가 발생했습니다',
      expenseAdded: '경비 목록에 추가되었습니다',
      expensesAdded: '건의 경비가 추가되었습니다',
      expenseDeleted: '경비 항목이 삭제되었습니다',
      noSelection: '선택된 항목이 없습니다',
      maxFiles: '최대 20장까지 업로드 가능합니다',
      filesSelected: '개 파일이 선택되었습니다',
      modeChanged: '모드로 전환되었습니다',
      spotReviewRequested: '전문가 검토가 요청되었습니다. 24시간 내 답변 예정입니다.',
      languageChanged: '언어가 변경되었습니다'
    },
    
    // 확인 메시지
    confirm: {
      spotReview: '이 거래내역을 세무 전문가에게 검토 요청하시겠습니까?\n비용: 1,900원'
    }
  },

  // 영어
  en: {
    languageName: 'English',
    languageCode: 'en',
    
    nav: {
      title: 'Tax Filing Platform',
      notice: 'Notice',
      login: 'Login',
      signup: 'Sign Up',
      selectLanguage: 'Select Language'
    },
    
    hero: {
      title: 'Taxes Solved by Photos (Snap)',
      subtitle: 'Filing Done Through Camera Lens',
      description: 'No receipts needed<br>Expenses from bank captures',
      ctaStart: 'Get Started',
      ctaHow: 'How It Works?',
      reassureMessage: 'All you need is a photo to start.<br>A real beginner-friendly service should work without formal bookkeeping.'
    },
    
    reassurance: {
      message: 'All you need is a photo to start.',
      detail: 'A real beginner-friendly service should work without formal bookkeeping.'
    },
    
    features: {
      gallery: {
        title: 'Gallery Photos',
        description: 'Your saved photos are enough to file'
      },
      bank: {
        title: 'Bank Capture',
        description: 'Expenses recognized without receipts'
      },
      expert: {
        title: 'Per-Item Expert Review',
        description: 'Verify unclear items for just $2'
      }
    },
    
    modes: {
      title: 'How would you like to start?',
      subtitle: 'Choose the method that suits you. You can change anytime.',
      receipt: {
        title: 'Receipt Photo',
        description: 'When you have official receipts',
        button: 'Select'
      },
      bank: {
        title: 'Bank Capture',
        badge: '💡',
        description: 'Recommended without receipts',
        button: 'Select'
      },
      gallery: {
        title: 'Gallery Upload',
        badge: '📸',
        description: 'When you have multiple photos',
        button: 'Select'
      }
    },
    
    receipt: {
      title: 'Take Receipt Photo',
      uploadTitle: 'Capture your receipt',
      uploadSubtitle: 'Or upload a file',
      analyzeButton: 'Start Analysis',
      analyzing: 'Analyzing...',
      resultTitle: 'Recognition Result',
      addButton: 'Add to Expenses',
      fields: {
        date: 'Date',
        amount: 'Amount',
        vendor: 'Vendor',
        category: 'Category',
        confidence: 'Confidence'
      }
    },
    
    bank: {
      title: 'Capture Bank Transactions',
      subtitle: 'Capture your banking app transaction screen for automatic expense classification',
      uploadTitle: 'Capture bank screen',
      uploadSubtitle: 'Screen showing transactions',
      analyzeButton: 'Analyze Transactions',
      analyzing: 'Analyzing transactions...',
      resultTitle: 'Transaction Recognition',
      addButton: 'Add Selected to Expenses',
      spotReview: 'Review for $2',
      labels: {
        business: 'Business',
        personal: 'Personal',
        review: 'Needs Review'
      },
      addedMessage: 'Will be added as expense'
    },
    
    gallery: {
      title: 'Bulk Gallery Upload',
      subtitle: 'Upload receipts and screenshots from your gallery at once (max 20 files)',
      uploadTitle: 'Select multiple photos',
      uploadSubtitle: 'Up to 20 files at once',
      selectedFiles: 'Selected Files',
      count: 'files',
      processButton: 'Analyze All',
      processing: 'Analyzing...',
      resultTitle: 'Analysis Complete',
      addButton: 'Add All to Expenses'
    },
    
    expenses: {
      title: 'Expense List',
      subtitle: 'Added expense items. You can edit and delete.',
      empty: 'No expenses added yet',
      emptyDetail: 'Take a receipt photo or capture bank transactions above',
      sources: {
        receipt: 'Receipt',
        bank: 'Bank',
        gallery: 'Gallery'
      },
      deleteButton: 'Delete',
      confidence: 'Confidence'
    },
    
    tax: {
      summaryTitle: 'Tax Summary',
      totalExpense: 'Total Expense',
      deductible: 'Deductible',
      estimatedRefund: 'Est. Refund',
      riskAnalysis: 'Risk Analysis',
      calculateButton: 'Calculate Tax',
      calculating: 'Calculating...',
      resultTitle: 'Tax Calculation Result',
      submitButton: 'Submit Filing',
      downloadButton: 'Download PDF'
    },
    
    risk: {
      low: 'Safe',
      mid: 'Review',
      high: 'Caution'
    },
    
    chatbot: {
      title: 'FAQ Chatbot',
      searchPlaceholder: 'Search...',
      noResults: 'No results found',
      close: 'Close'
    },
    
    toast: {
      fileLoaded: 'Image loaded',
      analysisComplete: 'Analysis complete!',
      analysisFailed: 'Analysis failed',
      error: 'An error occurred',
      expenseAdded: 'Added to expenses',
      expensesAdded: 'expenses added',
      expenseDeleted: 'Expense deleted',
      noSelection: 'No items selected',
      maxFiles: 'Maximum 20 files allowed',
      filesSelected: 'files selected',
      modeChanged: 'Switched to',
      spotReviewRequested: 'Expert review requested. Response within 24 hours.',
      languageChanged: 'Language changed'
    },
    
    confirm: {
      spotReview: 'Request expert review for this transaction?\nCost: $2'
    }
  },

  // 중국어 (간체)
  'zh-CN': {
    languageName: '简体中文',
    languageCode: 'zh-CN',
    
    nav: {
      notice: '公告',
      login: '登录',
      signup: '注册',
      selectLanguage: '选择语言'
    },
    
    hero: {
      title: '不要因为税务而停止',
      subtitle: '您专心工作，申报交给我们',
      features: '无需收据 • 银行截图识别费用 • 单项2美元专家审核',
      startButton: '立即开始',
      howItWorks: '如何使用？'
    },
    
    reassurance: {
      message: '只要有照片就可以开始。',
      detail: '真正为初学者设计的服务，无需正式账簿也能申报。'
    },
    
    features: {
      gallery: {
        title: '相册照片',
        description: '已保存的照片就足够申报'
      },
      bank: {
        title: '银行截图',
        description: '无需收据也能识别费用'
      },
      expert: {
        title: '单项专家审核',
        description: '仅需2美元确认不明项目'
      }
    },
    
    modes: {
      title: '您想如何开始？',
      subtitle: '选择适合您的方式。随时可以更改。',
      receipt: {
        title: '收据拍照',
        description: '有正式收据时',
        button: '选择'
      },
      bank: {
        title: '银行截图',
        badge: '💡',
        description: '无收据时推荐',
        button: '选择'
      },
      gallery: {
        title: '相册上传',
        badge: '📸',
        description: '有多张照片时',
        button: '选择'
      }
    },
    
    receipt: {
      title: '拍摄收据',
      uploadTitle: '拍摄您的收据',
      uploadSubtitle: '或上传文件',
      analyzeButton: '开始分析',
      analyzing: '分析中...',
      resultTitle: '识别结果',
      addButton: '添加到费用',
      fields: {
        date: '日期',
        amount: '金额',
        vendor: '商家',
        category: '类别',
        confidence: '置信度'
      }
    },
    
    bank: {
      title: '截取银行交易记录',
      subtitle: '截取银行应用交易界面，自动分类为费用',
      uploadTitle: '截取银行界面',
      uploadSubtitle: '显示交易的界面',
      analyzeButton: '分析交易',
      analyzing: '分析交易中...',
      resultTitle: '交易识别',
      addButton: '添加选中项到费用',
      spotReview: '2美元审核',
      labels: {
        business: '商务',
        personal: '个人',
        review: '需审核'
      },
      addedMessage: '将添加为费用'
    },
    
    gallery: {
      title: '相册批量上传',
      subtitle: '一次性上传相册中的收据和截图（最多20张）',
      uploadTitle: '选择多张照片',
      uploadSubtitle: '一次最多20个文件',
      selectedFiles: '已选文件',
      count: '个',
      processButton: '批量分析',
      processing: '分析中...',
      resultTitle: '分析完成',
      addButton: '全部添加到费用'
    },
    
    expenses: {
      title: '费用列表',
      subtitle: '已添加的费用项目。可编辑和删除。',
      empty: '尚未添加费用',
      emptyDetail: '请在上方拍摄收据或截取银行记录',
      sources: {
        receipt: '收据',
        bank: '银行',
        gallery: '相册'
      },
      deleteButton: '删除',
      confidence: '置信度'
    },
    
    tax: {
      summaryTitle: '税务摘要',
      totalExpense: '总费用',
      deductible: '可抵扣',
      estimatedRefund: '预计退税',
      riskAnalysis: '风险分析',
      calculateButton: '计算税额',
      calculating: '计算中...',
      resultTitle: '税额计算结果',
      submitButton: '提交申报',
      downloadButton: '下载PDF'
    },
    
    risk: {
      low: '安全',
      mid: '审核',
      high: '注意'
    },
    
    chatbot: {
      title: '常见问题',
      searchPlaceholder: '搜索...',
      noResults: '未找到结果',
      close: '关闭'
    },
    
    toast: {
      fileLoaded: '图片已加载',
      analysisComplete: '分析完成！',
      analysisFailed: '分析失败',
      error: '发生错误',
      expenseAdded: '已添加到费用',
      expensesAdded: '条费用已添加',
      expenseDeleted: '费用已删除',
      noSelection: '未选择项目',
      maxFiles: '最多允许20个文件',
      filesSelected: '个文件已选择',
      modeChanged: '已切换到',
      spotReviewRequested: '已请求专家审核。24小时内回复。',
      languageChanged: '语言已更改'
    },
    
    confirm: {
      spotReview: '是否请求专家审核此交易？\n费用：2美元'
    }
  },

  // 중국어 (번체)
  'zh-TW': {
    languageName: '繁體中文',
    languageCode: 'zh-TW',
    
    nav: {
      notice: '公告',
      login: '登入',
      signup: '註冊',
      selectLanguage: '選擇語言'
    },
    
    hero: {
      title: '不要因爲稅務而停止',
      subtitle: '您專心工作，申報交給我們',
      features: '無需收據 • 銀行截圖識別費用 • 單項2美元專家審核',
      startButton: '立即開始',
      howItWorks: '如何使用？'
    },
    
    reassurance: {
      message: '只要有照片就可以開始。',
      detail: '真正爲初學者設計的服務，無需正式帳簿也能申報。'
    },
    
    features: {
      gallery: {
        title: '相簿照片',
        description: '已保存的照片就足夠申報'
      },
      bank: {
        title: '銀行截圖',
        description: '無需收據也能識別費用'
      },
      expert: {
        title: '單項專家審核',
        description: '僅需2美元確認不明項目'
      }
    },
    
    modes: {
      title: '您想如何開始？',
      subtitle: '選擇適合您的方式。隨時可以更改。',
      receipt: {
        title: '收據拍照',
        description: '有正式收據時',
        button: '選擇'
      },
      bank: {
        title: '銀行截圖',
        badge: '💡',
        description: '無收據時推薦',
        button: '選擇'
      },
      gallery: {
        title: '相簿上傳',
        badge: '📸',
        description: '有多張照片時',
        button: '選擇'
      }
    },
    
    receipt: {
      title: '拍攝收據',
      uploadTitle: '拍攝您的收據',
      uploadSubtitle: '或上傳檔案',
      analyzeButton: '開始分析',
      analyzing: '分析中...',
      resultTitle: '識別結果',
      addButton: '新增到費用',
      fields: {
        date: '日期',
        amount: '金額',
        vendor: '商家',
        category: '類別',
        confidence: '置信度'
      }
    },
    
    bank: {
      title: '截取銀行交易記錄',
      subtitle: '截取銀行應用交易介面，自動分類爲費用',
      uploadTitle: '截取銀行介面',
      uploadSubtitle: '顯示交易的介面',
      analyzeButton: '分析交易',
      analyzing: '分析交易中...',
      resultTitle: '交易識別',
      addButton: '新增選中項到費用',
      spotReview: '2美元審核',
      labels: {
        business: '商務',
        personal: '個人',
        review: '需審核'
      },
      addedMessage: '將新增爲費用'
    },
    
    gallery: {
      title: '相簿批次上傳',
      subtitle: '一次性上傳相簿中的收據和截圖（最多20張）',
      uploadTitle: '選擇多張照片',
      uploadSubtitle: '一次最多20個檔案',
      selectedFiles: '已選檔案',
      count: '個',
      processButton: '批次分析',
      processing: '分析中...',
      resultTitle: '分析完成',
      addButton: '全部新增到費用'
    },
    
    expenses: {
      title: '費用清單',
      subtitle: '已新增的費用項目。可編輯和刪除。',
      empty: '尚未新增費用',
      emptyDetail: '請在上方拍攝收據或截取銀行記錄',
      sources: {
        receipt: '收據',
        bank: '銀行',
        gallery: '相簿'
      },
      deleteButton: '刪除',
      confidence: '置信度'
    },
    
    tax: {
      summaryTitle: '稅務摘要',
      totalExpense: '總費用',
      deductible: '可抵扣',
      estimatedRefund: '預計退稅',
      riskAnalysis: '風險分析',
      calculateButton: '計算稅額',
      calculating: '計算中...',
      resultTitle: '稅額計算結果',
      submitButton: '提交申報',
      downloadButton: '下載PDF'
    },
    
    risk: {
      low: '安全',
      mid: '審核',
      high: '注意'
    },
    
    chatbot: {
      title: '常見問題',
      searchPlaceholder: '搜尋...',
      noResults: '未找到結果',
      close: '關閉'
    },
    
    toast: {
      fileLoaded: '圖片已載入',
      analysisComplete: '分析完成！',
      analysisFailed: '分析失敗',
      error: '發生錯誤',
      expenseAdded: '已新增到費用',
      expensesAdded: '條費用已新增',
      expenseDeleted: '費用已刪除',
      noSelection: '未選擇項目',
      maxFiles: '最多允許20個檔案',
      filesSelected: '個檔案已選擇',
      modeChanged: '已切換到',
      spotReviewRequested: '已請求專家審核。24小時內回覆。',
      languageChanged: '語言已更改'
    },
    
    confirm: {
      spotReview: '是否請求專家審核此交易？\n費用：2美元'
    }
  },

  // 일본어
  ja: {
    languageName: '日本語',
    languageCode: 'ja',
    
    nav: {
      notice: 'お知らせ',
      login: 'ログイン',
      signup: '新規登録',
      selectLanguage: '言語選択'
    },
    
    hero: {
      title: '税金で止まらないでください',
      subtitle: '忙しいあなたに代わって、申告は私たちがします',
      features: 'レシート不要 • 通帳キャプチャで経費処理 • 1項目200円で専門家レビュー',
      startButton: '今すぐ始める',
      howItWorks: '使い方は？'
    },
    
    reassurance: {
      message: '写真があれば始められます。',
      detail: '正式な帳簿がなくても出発できるのが、本当の初心者向けサービスです。'
    },
    
    features: {
      gallery: {
        title: 'ギャラリーの写真',
        description: '撮った写真だけで申告できます'
      },
      bank: {
        title: '通帳キャプチャ',
        description: 'レシートなしでも経費認定'
      },
      expert: {
        title: '項目別専門家レビュー',
        description: '曖昧な項目だけ200円で確認'
      }
    },
    
    modes: {
      title: 'どの方法で始めますか？',
      subtitle: '状況に合った方法を選んでください。いつでも変更できます。',
      receipt: {
        title: 'レシート撮影',
        description: '正式なレシートがある時',
        button: '選択'
      },
      bank: {
        title: '通帳キャプチャ',
        badge: '💡',
        description: 'レシートがない時におすすめ',
        button: '選択'
      },
      gallery: {
        title: 'ギャラリーアップロード',
        badge: '📸',
        description: 'フォトアルバムに複数枚ある時',
        button: '選択'
      }
    },
    
    receipt: {
      title: 'レシートを撮影',
      uploadTitle: 'レシートを撮影してください',
      uploadSubtitle: 'またはファイルをアップロード',
      analyzeButton: '分析開始',
      analyzing: '分析中...',
      resultTitle: '認識結果',
      addButton: '経費リストに追加',
      fields: {
        date: '日付',
        amount: '金額',
        vendor: '店舗名',
        category: 'カテゴリー',
        confidence: '認識信頼度'
      }
    },
    
    bank: {
      title: '通帳取引履歴をキャプチャ',
      subtitle: 'バンキングアプリの取引画面を撮影すると自動的に経費に分類されます',
      uploadTitle: '通帳画面を撮影してください',
      uploadSubtitle: '取引履歴が見える画面キャプチャ',
      analyzeButton: '取引履歴分析開始',
      analyzing: '取引履歴分析中...',
      resultTitle: '取引履歴認識結果',
      addButton: '選択項目を経費に追加',
      spotReview: '200円でレビュー',
      labels: {
        business: '事業推定',
        personal: '個人推定',
        review: '要確認'
      },
      addedMessage: '経費に追加されます'
    },
    
    gallery: {
      title: 'ギャラリー一括アップロード',
      subtitle: 'フォトアルバムに保存されたレシート、スクリーンショットなどを一度にアップロード（最大20枚）',
      uploadTitle: '複数の写真を一度に選択',
      uploadSubtitle: '最大20枚まで同時アップロード可能',
      selectedFiles: '選択されたファイル',
      count: '個',
      processButton: '一括分析開始',
      processing: '一括分析中...',
      resultTitle: '分析完了',
      addButton: 'すべて経費に追加'
    },
    
    expenses: {
      title: '経費リスト',
      subtitle: '追加された経費項目です。修正および削除が可能です。',
      empty: 'まだ追加された経費がありません',
      emptyDetail: '上でレシートを撮影するか通帳をキャプチャしてください',
      sources: {
        receipt: 'レシート',
        bank: '通帳',
        gallery: 'ギャラリー'
      },
      deleteButton: '削除',
      confidence: '信頼度'
    },
    
    tax: {
      summaryTitle: '税金サマリー',
      totalExpense: '総経費',
      deductible: '控除可能額',
      estimatedRefund: '予想還付',
      riskAnalysis: 'リスク分析',
      calculateButton: '税金計算',
      calculating: '計算中...',
      resultTitle: '税金計算結果',
      submitButton: '申告書提出',
      downloadButton: 'PDFダウンロード'
    },
    
    risk: {
      low: '安全',
      mid: '確認',
      high: '注意'
    },
    
    chatbot: {
      title: 'FAQチャットボット',
      searchPlaceholder: '検索...',
      noResults: '検索結果がありません',
      close: '閉じる'
    },
    
    toast: {
      fileLoaded: '画像が読み込まれました',
      analysisComplete: '分析完了！',
      analysisFailed: '分析に失敗しました',
      error: 'エラーが発生しました',
      expenseAdded: '経費リストに追加されました',
      expensesAdded: '件の経費が追加されました',
      expenseDeleted: '経費項目が削除されました',
      noSelection: '選択された項目がありません',
      maxFiles: '最大20枚までアップロード可能です',
      filesSelected: '個のファイルが選択されました',
      modeChanged: 'モードに切り替えられました',
      spotReviewRequested: '専門家レビューがリクエストされました。24時間以内に返信予定です。',
      languageChanged: '言語が変更されました'
    },
    
    confirm: {
      spotReview: 'この取引履歴を税務専門家にレビューリクエストしますか？\n費用：200円'
    }
  },

  // 베트남어
  vi: {
    languageName: 'Tiếng Việt',
    languageCode: 'vi',
    
    nav: {
      notice: 'Thông báo',
      login: 'Đăng nhập',
      signup: 'Đăng ký',
      selectLanguage: 'Chọn ngôn ngữ'
    },
    
    hero: {
      title: 'Đừng Dừng Lại Vì Thuế',
      subtitle: 'Bạn tập trung làm việc, chúng tôi lo khai thuế',
      features: 'Không cần hóa đơn • Chụp sao kê ngân hàng • Chuyên gia xem xét 50.000đ/mục',
      startButton: 'Bắt Đầu Ngay',
      howItWorks: 'Cách Sử Dụng?'
    },
    
    reassurance: {
      message: 'Chỉ cần có ảnh là bắt đầu được.',
      detail: 'Dịch vụ thực sự dành cho người mới, không cần sổ sách chính thức.'
    },
    
    features: {
      gallery: {
        title: 'Ảnh Thư Viện',
        description: 'Ảnh đã lưu là đủ để khai thuế'
      },
      bank: {
        title: 'Chụp Sao Kê',
        description: 'Nhận diện chi phí không cần hóa đơn'
      },
      expert: {
        title: 'Xem Xét Từng Mục',
        description: 'Xác nhận mục không rõ chỉ 50.000đ'
      }
    },
    
    modes: {
      title: 'Bạn muốn bắt đầu bằng cách nào?',
      subtitle: 'Chọn phương thức phù hợp. Bạn có thể thay đổi bất cứ lúc nào.',
      receipt: {
        title: 'Chụp Hóa Đơn',
        description: 'Khi có hóa đơn chính thức',
        button: 'Chọn'
      },
      bank: {
        title: 'Chụp Sao Kê',
        badge: '💡',
        description: 'Khuyến nghị khi không có hóa đơn',
        button: 'Chọn'
      },
      gallery: {
        title: 'Tải Thư Viện',
        badge: '📸',
        description: 'Khi có nhiều ảnh trong album',
        button: 'Chọn'
      }
    },
    
    receipt: {
      title: 'Chụp Hóa Đơn',
      uploadTitle: 'Chụp hóa đơn của bạn',
      uploadSubtitle: 'Hoặc tải file lên',
      analyzeButton: 'Bắt Đầu Phân Tích',
      analyzing: 'Đang phân tích...',
      resultTitle: 'Kết Quả Nhận Diện',
      addButton: 'Thêm Vào Chi Phí',
      fields: {
        date: 'Ngày',
        amount: 'Số tiền',
        vendor: 'Nhà cung cấp',
        category: 'Danh mục',
        confidence: 'Độ tin cậy'
      }
    },
    
    bank: {
      title: 'Chụp Giao Dịch Ngân Hàng',
      subtitle: 'Chụp màn hình giao dịch app ngân hàng để tự động phân loại chi phí',
      uploadTitle: 'Chụp màn hình ngân hàng',
      uploadSubtitle: 'Màn hình hiển thị giao dịch',
      analyzeButton: 'Phân Tích Giao Dịch',
      analyzing: 'Đang phân tích giao dịch...',
      resultTitle: 'Nhận Diện Giao Dịch',
      addButton: 'Thêm Mục Đã Chọn Vào Chi Phí',
      spotReview: 'Xem xét 50.000đ',
      labels: {
        business: 'Kinh doanh',
        personal: 'Cá nhân',
        review: 'Cần xem xét'
      },
      addedMessage: 'Sẽ được thêm vào chi phí'
    },
    
    gallery: {
      title: 'Tải Thư Viện Hàng Loạt',
      subtitle: 'Tải hóa đơn và ảnh chụp màn hình từ thư viện cùng lúc (tối đa 20 file)',
      uploadTitle: 'Chọn nhiều ảnh',
      uploadSubtitle: 'Tối đa 20 file cùng lúc',
      selectedFiles: 'File Đã Chọn',
      count: 'file',
      processButton: 'Phân Tích Tất Cả',
      processing: 'Đang phân tích...',
      resultTitle: 'Phân Tích Hoàn Tất',
      addButton: 'Thêm Tất Cả Vào Chi Phí'
    },
    
    expenses: {
      title: 'Danh Sách Chi Phí',
      subtitle: 'Các mục chi phí đã thêm. Có thể chỉnh sửa và xóa.',
      empty: 'Chưa có chi phí nào được thêm',
      emptyDetail: 'Chụp hóa đơn hoặc chụp sao kê ngân hàng ở trên',
      sources: {
        receipt: 'Hóa đơn',
        bank: 'Ngân hàng',
        gallery: 'Thư viện'
      },
      deleteButton: 'Xóa',
      confidence: 'Độ tin cậy'
    },
    
    tax: {
      summaryTitle: 'Tóm Tắt Thuế',
      totalExpense: 'Tổng Chi Phí',
      deductible: 'Khấu Trừ',
      estimatedRefund: 'Hoàn Thuế Dự Kiến',
      riskAnalysis: 'Phân Tích Rủi Ro',
      calculateButton: 'Tính Thuế',
      calculating: 'Đang tính...',
      resultTitle: 'Kết Quả Tính Thuế',
      submitButton: 'Nộp Khai Thuế',
      downloadButton: 'Tải PDF'
    },
    
    risk: {
      low: 'An toàn',
      mid: 'Xem xét',
      high: 'Cảnh báo'
    },
    
    chatbot: {
      title: 'Chatbot FAQ',
      searchPlaceholder: 'Tìm kiếm...',
      noResults: 'Không tìm thấy kết quả',
      close: 'Đóng'
    },
    
    toast: {
      fileLoaded: 'Ảnh đã được tải',
      analysisComplete: 'Phân tích hoàn tất!',
      analysisFailed: 'Phân tích thất bại',
      error: 'Đã xảy ra lỗi',
      expenseAdded: 'Đã thêm vào chi phí',
      expensesAdded: 'chi phí đã được thêm',
      expenseDeleted: 'Chi phí đã được xóa',
      noSelection: 'Không có mục nào được chọn',
      maxFiles: 'Tối đa 20 file được phép',
      filesSelected: 'file đã được chọn',
      modeChanged: 'Đã chuyển sang',
      spotReviewRequested: 'Đã yêu cầu xem xét chuyên gia. Phản hồi trong 24 giờ.',
      languageChanged: 'Ngôn ngữ đã được thay đổi'
    },
    
    confirm: {
      spotReview: 'Yêu cầu chuyên gia xem xét giao dịch này?\nChi phí: 50.000đ'
    }
  },

  // 스페인어
  es: {
    languageName: 'Español',
    languageCode: 'es',
    
    nav: {
      notice: 'Aviso',
      login: 'Iniciar Sesión',
      signup: 'Registrarse',
      selectLanguage: 'Seleccionar Idioma'
    },
    
    hero: {
      title: 'No Te Detengas Por Los Impuestos',
      subtitle: 'Tú enfócate en trabajar, nosotros nos encargamos de la declaración',
      features: 'Sin recibo necesario • Captura bancaria para gastos • Revisión experta $2 por ítem',
      startButton: 'Comenzar Ahora',
      howItWorks: '¿Cómo Funciona?'
    },
    
    reassurance: {
      message: 'Solo necesitas una foto para comenzar.',
      detail: 'Un servicio verdaderamente amigable para principiantes debe funcionar sin contabilidad formal.'
    },
    
    features: {
      gallery: {
        title: 'Fotos de Galería',
        description: 'Tus fotos guardadas son suficientes para declarar'
      },
      bank: {
        title: 'Captura Bancaria',
        description: 'Gastos reconocidos sin recibos'
      },
      expert: {
        title: 'Revisión Experta Por Ítem',
        description: 'Verifica ítems poco claros por solo $2'
      }
    },
    
    modes: {
      title: '¿Cómo te gustaría comenzar?',
      subtitle: 'Elige el método que te convenga. Puedes cambiar en cualquier momento.',
      receipt: {
        title: 'Foto de Recibo',
        description: 'Cuando tengas recibos oficiales',
        button: 'Seleccionar'
      },
      bank: {
        title: 'Captura Bancaria',
        badge: '💡',
        description: 'Recomendado sin recibos',
        button: 'Seleccionar'
      },
      gallery: {
        title: 'Subir Galería',
        badge: '📸',
        description: 'Cuando tengas múltiples fotos',
        button: 'Seleccionar'
      }
    },
    
    receipt: {
      title: 'Tomar Foto del Recibo',
      uploadTitle: 'Captura tu recibo',
      uploadSubtitle: 'O sube un archivo',
      analyzeButton: 'Iniciar Análisis',
      analyzing: 'Analizando...',
      resultTitle: 'Resultado del Reconocimiento',
      addButton: 'Agregar a Gastos',
      fields: {
        date: 'Fecha',
        amount: 'Monto',
        vendor: 'Proveedor',
        category: 'Categoría',
        confidence: 'Confianza'
      }
    },
    
    bank: {
      title: 'Capturar Transacciones Bancarias',
      subtitle: 'Captura la pantalla de transacciones de tu app bancaria para clasificación automática de gastos',
      uploadTitle: 'Captura pantalla bancaria',
      uploadSubtitle: 'Pantalla mostrando transacciones',
      analyzeButton: 'Analizar Transacciones',
      analyzing: 'Analizando transacciones...',
      resultTitle: 'Reconocimiento de Transacciones',
      addButton: 'Agregar Seleccionados a Gastos',
      spotReview: 'Revisar por $2',
      labels: {
        business: 'Negocio',
        personal: 'Personal',
        review: 'Necesita Revisión'
      },
      addedMessage: 'Se agregará como gasto'
    },
    
    gallery: {
      title: 'Subida Masiva de Galería',
      subtitle: 'Sube recibos y capturas de pantalla desde tu galería de una vez (máx. 20 archivos)',
      uploadTitle: 'Selecciona múltiples fotos',
      uploadSubtitle: 'Hasta 20 archivos a la vez',
      selectedFiles: 'Archivos Seleccionados',
      count: 'archivos',
      processButton: 'Analizar Todo',
      processing: 'Analizando...',
      resultTitle: 'Análisis Completo',
      addButton: 'Agregar Todo a Gastos'
    },
    
    expenses: {
      title: 'Lista de Gastos',
      subtitle: 'Ítems de gastos agregados. Puedes editar y eliminar.',
      empty: 'Aún no se han agregado gastos',
      emptyDetail: 'Toma una foto del recibo o captura transacciones bancarias arriba',
      sources: {
        receipt: 'Recibo',
        bank: 'Banco',
        gallery: 'Galería'
      },
      deleteButton: 'Eliminar',
      confidence: 'Confianza'
    },
    
    tax: {
      summaryTitle: 'Resumen Fiscal',
      totalExpense: 'Gasto Total',
      deductible: 'Deducible',
      estimatedRefund: 'Reembolso Est.',
      riskAnalysis: 'Análisis de Riesgo',
      calculateButton: 'Calcular Impuestos',
      calculating: 'Calculando...',
      resultTitle: 'Resultado del Cálculo Fiscal',
      submitButton: 'Presentar Declaración',
      downloadButton: 'Descargar PDF'
    },
    
    risk: {
      low: 'Seguro',
      mid: 'Revisar',
      high: 'Precaución'
    },
    
    chatbot: {
      title: 'Chatbot de FAQ',
      searchPlaceholder: 'Buscar...',
      noResults: 'No se encontraron resultados',
      close: 'Cerrar'
    },
    
    toast: {
      fileLoaded: 'Imagen cargada',
      analysisComplete: '¡Análisis completo!',
      analysisFailed: 'Análisis fallido',
      error: 'Ocurrió un error',
      expenseAdded: 'Agregado a gastos',
      expensesAdded: 'gastos agregados',
      expenseDeleted: 'Gasto eliminado',
      noSelection: 'No hay ítems seleccionados',
      maxFiles: 'Máximo 20 archivos permitidos',
      filesSelected: 'archivos seleccionados',
      modeChanged: 'Cambiado a',
      spotReviewRequested: 'Revisión experta solicitada. Respuesta en 24 horas.',
      languageChanged: 'Idioma cambiado'
    },
    
    confirm: {
      spotReview: '¿Solicitar revisión experta para esta transacción?\nCosto: $2'
    }
  },

  // 독일어
  de: {
    languageName: 'Deutsch',
    languageCode: 'de',
    
    nav: {
      notice: 'Hinweis',
      login: 'Anmelden',
      signup: 'Registrieren',
      selectLanguage: 'Sprache Wählen'
    },
    
    hero: {
      title: 'Lassen Sie sich nicht von Steuern aufhalten',
      subtitle: 'Sie konzentrieren sich auf die Arbeit, wir übernehmen die Erklärung',
      features: 'Kein Beleg erforderlich • Bankerfassung für Ausgaben • Expertenprüfung 2€ pro Position',
      startButton: 'Jetzt Starten',
      howItWorks: 'Wie Funktioniert Es?'
    },
    
    reassurance: {
      message: 'Alles was Sie brauchen ist ein Foto zum Starten.',
      detail: 'Ein wirklich anfängerfreundlicher Service sollte ohne formelle Buchführung funktionieren.'
    },
    
    features: {
      gallery: {
        title: 'Galerie-Fotos',
        description: 'Ihre gespeicherten Fotos reichen zur Erklärung'
      },
      bank: {
        title: 'Bank-Erfassung',
        description: 'Ausgaben ohne Belege erkannt'
      },
      expert: {
        title: 'Expertenprüfung Pro Position',
        description: 'Unklare Positionen für nur 2€ prüfen'
      }
    },
    
    modes: {
      title: 'Wie möchten Sie beginnen?',
      subtitle: 'Wählen Sie die Methode, die zu Ihnen passt. Sie können jederzeit wechseln.',
      receipt: {
        title: 'Beleg-Foto',
        description: 'Wenn Sie offizielle Belege haben',
        button: 'Auswählen'
      },
      bank: {
        title: 'Bank-Erfassung',
        badge: '💡',
        description: 'Empfohlen ohne Belege',
        button: 'Auswählen'
      },
      gallery: {
        title: 'Galerie-Upload',
        badge: '📸',
        description: 'Wenn Sie mehrere Fotos haben',
        button: 'Auswählen'
      }
    },
    
    receipt: {
      title: 'Beleg Fotografieren',
      uploadTitle: 'Fotografieren Sie Ihren Beleg',
      uploadSubtitle: 'Oder laden Sie eine Datei hoch',
      analyzeButton: 'Analyse Starten',
      analyzing: 'Analysiere...',
      resultTitle: 'Erkennungsergebnis',
      addButton: 'Zu Ausgaben Hinzufügen',
      fields: {
        date: 'Datum',
        amount: 'Betrag',
        vendor: 'Anbieter',
        category: 'Kategorie',
        confidence: 'Vertrauen'
      }
    },
    
    bank: {
      title: 'Banktransaktionen Erfassen',
      subtitle: 'Erfassen Sie Ihren Banking-App-Transaktionsbildschirm für automatische Ausgabenklassifizierung',
      uploadTitle: 'Bankbildschirm erfassen',
      uploadSubtitle: 'Bildschirm mit Transaktionen',
      analyzeButton: 'Transaktionen Analysieren',
      analyzing: 'Analysiere Transaktionen...',
      resultTitle: 'Transaktionserkennung',
      addButton: 'Ausgewählte Zu Ausgaben Hinzufügen',
      spotReview: 'Prüfen für 2€',
      labels: {
        business: 'Geschäftlich',
        personal: 'Privat',
        review: 'Benötigt Prüfung'
      },
      addedMessage: 'Wird als Ausgabe hinzugefügt'
    },
    
    gallery: {
      title: 'Massen-Galerie-Upload',
      subtitle: 'Laden Sie Belege und Screenshots aus Ihrer Galerie auf einmal hoch (max. 20 Dateien)',
      uploadTitle: 'Mehrere Fotos auswählen',
      uploadSubtitle: 'Bis zu 20 Dateien auf einmal',
      selectedFiles: 'Ausgewählte Dateien',
      count: 'Dateien',
      processButton: 'Alle Analysieren',
      processing: 'Analysiere...',
      resultTitle: 'Analyse Abgeschlossen',
      addButton: 'Alle Zu Ausgaben Hinzufügen'
    },
    
    expenses: {
      title: 'Ausgabenliste',
      subtitle: 'Hinzugefügte Ausgabenpositionen. Sie können bearbeiten und löschen.',
      empty: 'Noch keine Ausgaben hinzugefügt',
      emptyDetail: 'Fotografieren Sie einen Beleg oder erfassen Sie Banktransaktionen oben',
      sources: {
        receipt: 'Beleg',
        bank: 'Bank',
        gallery: 'Galerie'
      },
      deleteButton: 'Löschen',
      confidence: 'Vertrauen'
    },
    
    tax: {
      summaryTitle: 'Steuerübersicht',
      totalExpense: 'Gesamtausgaben',
      deductible: 'Abzugsfähig',
      estimatedRefund: 'Geschätzte Rückerstattung',
      riskAnalysis: 'Risikoanalyse',
      calculateButton: 'Steuer Berechnen',
      calculating: 'Berechne...',
      resultTitle: 'Steuerberechnungsergebnis',
      submitButton: 'Erklärung Einreichen',
      downloadButton: 'PDF Herunterladen'
    },
    
    risk: {
      low: 'Sicher',
      mid: 'Prüfen',
      high: 'Vorsicht'
    },
    
    chatbot: {
      title: 'FAQ Chatbot',
      searchPlaceholder: 'Suchen...',
      noResults: 'Keine Ergebnisse gefunden',
      close: 'Schließen'
    },
    
    toast: {
      fileLoaded: 'Bild geladen',
      analysisComplete: 'Analyse abgeschlossen!',
      analysisFailed: 'Analyse fehlgeschlagen',
      error: 'Ein Fehler ist aufgetreten',
      expenseAdded: 'Zu Ausgaben hinzugefügt',
      expensesAdded: 'Ausgaben hinzugefügt',
      expenseDeleted: 'Ausgabe gelöscht',
      noSelection: 'Keine Positionen ausgewählt',
      maxFiles: 'Maximal 20 Dateien erlaubt',
      filesSelected: 'Dateien ausgewählt',
      modeChanged: 'Gewechselt zu',
      spotReviewRequested: 'Expertenprüfung angefordert. Antwort innerhalb von 24 Stunden.',
      languageChanged: 'Sprache geändert'
    },
    
    confirm: {
      spotReview: 'Expertenprüfung für diese Transaktion anfordern?\nKosten: 2€'
    }
  }
};

// i18n 헬퍼 함수
function getTranslation(lang, key) {
  const keys = key.split('.');
  let value = translations[lang];
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      // 폴백: 한국어로
      value = translations['ko'];
      for (const k of keys) {
        if (value && value[k] !== undefined) {
          value = value[k];
        } else {
          return key;
        }
      }
      return value;
    }
  }
  
  return value;
}

// 글로벌 함수로 노출
window.translations = translations;
window.getTranslation = getTranslation;
window.t = getTranslation; // 단축 함수
