// --- Полный языковой словарь (i18n) ---
const i18n = {
    ru: {
        subtitle: "Интерактивный симулятор анализа угроз и медиаграмотности",
        shopBtn: "Магазин",
        scoreLabel: "Рейтинг:",
        toolsLabel: "🛠️ Инструменты верификации:",
        verdictLabel: "⚖️ Вынесите вердикт эксперта:",
        btnFake: "Это Фейк / Угроза",
        btnReal: "Подлинный контент",
        addTitle: "➕ Конструктор кейсов (Добавить свой)",
        threatsTitle: "📊 Карта киберугроз РК",
        accuracyTitle: "🎯 Ваша Точность Анализа",
        whoisBtn: "WHOIS Экспертиза",
        sslBtn: "SSL-сертификат",
        dossierPrefix: "ДОСЬЕ",
        
        formTitleLabel: "Заголовок / Новость:",
        formTitlePh: "Например: Выплаты всем гражданам 50 000 ₸",
        formUrlLabel: "URL-адрес:",
        formCategoryLabel: "Категория:",
        formIsFakeLabel: "Это фейк?",
        formDescLabel: "Описание:",
        formDescPh: "В чем заключается суть...",
        submitCaseBtn: "СОХРАНИТЬ КЕЙС В БАЗУ",
        optPhishing: "Фишинг",
        optDeepfake: "Дипфейк",
        optFake: "Фейк",
        optOfficial: "Официально",
        optIsFakeTrue: "Да, это фейк / мошенники",
        optIsFakeFalse: "Нет, это правда / официально",
        caseAddedTitle: "✅ УСПЕШНО",
        caseAddedText: "Новый кейс успешно добавлен в базу!",

        correctVerdictTitle: "✅ ВЕРНЫЙ ВЕРДИКТ (+150 XP)",
        correctVerdictText: "Отличная работа!",
        wrongVerdictTitle: "❌ ОШИБКА В РАССЛЕДОВАНИИ (-100 XP)",
        wrongVerdictText: "Вы попались на уловку!",
        btnOk: "ОК",

        shopTitle: "🏪 МАГАЗИН ИНСТРУМЕНТОВ",
        shopItemTitle: "🔍 WHOIS Auto-Scan",
        shopItemDesc: "Автоматическая подсказка по домену кейса (Стоимость: 200 XP)",
        noXpText: "Недостаточно XP!",
        buyBtn: "Купить",

        certReportTitle: "🛡️ ОФИЦИАЛЬНАЯ СТАТИСТИКА KZ-CERT",
        certReportBody: `
            <div class="space-y-2 font-mono text-xs">
                <p><strong>Данные за последний квартал:</strong></p>
                <ul class="list-disc pl-4 space-y-1 text-gray-700">
                    <li><b>68%</b> — Фишинговые сайты под видом банков и соцвыплат.</li>
                    <li><b>18%</b> — Дипфейк-видео с генерацией ИИ.</li>
                    <li><b>9%</b> — Фейковые рассылки в мессенджерах.</li>
                    <li><b>5%</b> — Другие угрозы информационной безопасности.</li>
                </ul>
                <p class="text-[10px] text-gray-500 mt-2">Источник: Государственная служба реагирования на инциденты информационной безопасности РК (KZ-CERT).</p>
            </div>
        `,

        whoisTitle: "🔍 WHOIS ЭКСПЕРТИЗА",
        sslTitle: "🔒 SSL-СЕРТИФИКАТ",
        whoisDomainLabel: "Доменное имя:",
        whoisCreatedLabel: "Дата создания:",
        whoisRiskLabel: "Уровень угрозы:",
        sslIssuerLabel: "Центр сертификации:",
        sslStatusLabel: "Статус:",

        riskHigh: "ВЫСОКИЙ РИСК (98%)",
        riskMedium: "СРЕДНИЙ РИСК (45%)",
        riskSafe: "БЕЗОПАСНО (0%)",
        sslInvalid: "❌ Недействительный издатель",
        sslValid: "✅ Действителен",
        sslGovValid: "✅ Подтверждено гос. органом",

        smsSimTitle: "💬 SMS СИМУЛЯТОР",
        aiVideoTitle: "📹 АНАЛИЗ ИИ-ВИДЕО",
        officialVerifiedTitle: "🏛️ Официальный источник подтвержден",

        createdDaysAgo: "дней назад",
        createdYearsAgo: "лет назад",
        createdJustNow: "Только что",

        chartCategories: ['Фишинг', 'Дипфейки', 'Фейки', 'Официально'],
        chartAccuracy: ['Верно', 'Ошибки'],
        chartAccuracyLabel: 'Ваши ответы'
    },
    kz: {
        subtitle: "Қауіптерді талдау және медиасауаттылық интерактивті симуляторы",
        shopBtn: "Дүкен",
        scoreLabel: "Рейтинг:",
        toolsLabel: "🛠️ Тексеру құралдары:",
        verdictLabel: "⚖️ Сарапшы үкімін шығарыңыз:",
        btnFake: "Бұл Фейк / Қауіп",
        btnReal: "Шынайы контент",
        addTitle: "➕ Кейс конструкторы (Өзіңдікін қос)",
        threatsTitle: "📊 ҚР Киберқауіптер картасы",
        accuracyTitle: "🎯 Талдау дәлдігіңіз",
        whoisBtn: "WHOIS сараптамасы",
        sslBtn: "SSL-сертификат талдауы",
        dossierPrefix: "ДОСЬЕ",

        formTitleLabel: "Тақырып / Жаңалық:",
        formTitlePh: "Мысалы: Барлық азаматтарға 50 000 ₸ төлем",
        formUrlLabel: "URL-мекенжай:",
        formCategoryLabel: "Санаты:",
        formIsFakeLabel: "Бұл фейк пе?",
        formDescLabel: "Сипаттамасы:",
        formDescPh: "Мәні неде...",
        submitCaseBtn: "КЕЙСТІ БАЗАҒА САҚТАУ",
        optPhishing: "Фишинг",
        optDeepfake: "Дипфейк",
        optFake: "Фейк",
        optOfficial: "Ресми",
        optIsFakeTrue: "Иә, бұл фейк / алаяқтар",
        optIsFakeFalse: "Жоқ, бұл шындық / ресми",
        caseAddedTitle: "✅ СӘТТІ ҚОСЫЛДЫ",
        caseAddedText: "Жаңа кейс базаға сәтті қосылды!",

        correctVerdictTitle: "✅ ДҰРЫС ҮКІМ (+150 XP)",
        correctVerdictText: "Өте жақсы жұмыс!",
        wrongVerdictTitle: "❌ ТЕРГЕУДЕГІ ҚАТЕЛІК (-100 XP)",
        wrongVerdictText: "Сіз алаяқтардың арбауына түстіңіз!",
        btnOk: "ОК",

        shopTitle: "🏪 ҚҰРАЛДАР ДҮКЕНІ",
        shopItemTitle: "🔍 WHOIS Auto-Scan",
        shopItemDesc: "Кейс домені бойынша автоматты кеңес (Құны: 200 XP)",
        noXpText: "XP жеткіліксіз!",
        buyBtn: "Сатып алу",

        certReportTitle: "🛡️ KZ-CERT РЕСМИ СТАТИСТИКАСЫ",
        certReportBody: `
            <div class="space-y-2 font-mono text-xs">
                <p><strong>Соңғы тоқсан бойынша деректер:</strong></p>
                <ul class="list-disc pl-4 space-y-1 text-gray-700">
                    <li><b>68%</b> — Банктер мен әлеуметтік төлемдер түріндегі фишингтік сайттар.</li>
                    <li><b>18%</b> — ЖИ (AI) арқылы жасалған дипфейк-видеолар.</li>
                    <li><b>9%</b> — Мессенджерлердегі фейк таратылымдар.</li>
                    <li><b>5%</b> — Басқа да ақпараттық қауіпсіздік қатерлері.</li>
                </ul>
                <p class="text-[10px] text-gray-500 mt-2">Дереккөз: ҚР Ақпараттық қауіпсіздік оқиғаларына әрекет ету мемлекеттік қызметі (KZ-CERT).</p>
            </div>
        `,

        whoisTitle: "🔍 WHOIS САРАПТАМАСЫ",
        sslTitle: "🔒 SSL-СЕРТИФИКАТЫ",
        whoisDomainLabel: "Домен аты:",
        whoisCreatedLabel: "Жасалған күні:",
        whoisRiskLabel: "Қауіп деңгейі:",
        sslIssuerLabel: "Сертификаттау орталығы:",
        sslStatusLabel: "Мәртебесі:",

        riskHigh: "ЖОҒАРЫ ҚАУІП (98%)",
        riskMedium: "ОРТАША ҚАУІП (45%)",
        riskSafe: "ҚАУІПСІЗ (0%)",
        sslInvalid: "❌ Жарамсыз эмитент",
        sslValid: "✅ Жарамды",
        sslGovValid: "✅ Мемлекеттік орган растаған",

        smsSimTitle: "💬 SMS СИМУЛЯТОРЫ",
        aiVideoTitle: "📹 ЖИ-БЕЙНЕ ТАЛДАУЫ",
        officialVerifiedTitle: "🏛️ Ресми дереккөз расталды",

        createdDaysAgo: "күн бұрын",
        createdYearsAgo: "жыл бұрын",
        createdJustNow: "Жаңа сәтте",

        chartCategories: ['Фишинг', 'Дипфейктер', 'Фейктер', 'Ресми'],
        chartAccuracy: ['Дұрыс', 'Қателіктер'],
        chartAccuracyLabel: 'Сіздің жауаптарыңыз'
    },
    en: {
        subtitle: "Interactive Threat Analysis & Media Literacy Simulator",
        shopBtn: "Shop",
        scoreLabel: "Rating:",
        toolsLabel: "🛠️ Verification Tools:",
        verdictLabel: "⚖️ Pass Expert Verdict:",
        btnFake: "Fake / Threat",
        btnReal: "Authentic Content",
        addTitle: "➕ Case Constructor (Add Yours)",
        threatsTitle: "📊 RK Cyber Threat Map",
        accuracyTitle: "🎯 Your Accuracy Rate",
        whoisBtn: "WHOIS Inspection",
        sslBtn: "SSL Analysis",
        dossierPrefix: "DOSSIER",

        formTitleLabel: "Title / News:",
        formTitlePh: "Example: 50,000 ₸ payout to all citizens",
        formUrlLabel: "URL Address:",
        formCategoryLabel: "Category:",
        formIsFakeLabel: "Is this fake?",
        formDescLabel: "Description:",
        formDescPh: "What is the core idea...",
        submitCaseBtn: "SAVE CASE TO DATABASE",
        optPhishing: "Phishing",
        optDeepfake: "Deepfake",
        optFake: "Fake",
        optOfficial: "Official",
        optIsFakeTrue: "Yes, this is fake / scam",
        optIsFakeFalse: "No, this is true / official",
        caseAddedTitle: "✅ SUCCESS",
        caseAddedText: "New case successfully added to database!",

        correctVerdictTitle: "✅ CORRECT VERDICT (+150 XP)",
        correctVerdictText: "Great job!",
        wrongVerdictTitle: "❌ INVESTIGATION ERROR (-100 XP)",
        wrongVerdictText: "You fell for the trick!",
        btnOk: "OK",

        shopTitle: "🏪 TOOL SHOP",
        shopItemTitle: "🔍 WHOIS Auto-Scan",
        shopItemDesc: "Automatic domain hint for current case (Cost: 200 XP)",
        noXpText: "Not enough XP!",
        buyBtn: "Purchase",

        certReportTitle: "🛡️ OFFICIAL KZ-CERT STATS",
        certReportBody: `
            <div class="space-y-2 font-mono text-xs">
                <p><strong>Recent Quarter Data:</strong></p>
                <ul class="list-disc pl-4 space-y-1 text-gray-700">
                    <li><b>68%</b> — Phishing sites impersonating banks & social payouts.</li>
                    <li><b>18%</b> — AI generated deepfake videos.</li>
                    <li><b>9%</b> — Fake messenger chain messages.</li>
                    <li><b>5%</b> — Other cybersecurity threats.</li>
                </ul>
                <p class="text-[10px] text-gray-500 mt-2">Source: State Computer Emergency Response Team of RK (KZ-CERT).</p>
            </div>
        `,

        whoisTitle: "🔍 WHOIS EXAMINATION",
        sslTitle: "🔒 SSL CERTIFICATE",
        whoisDomainLabel: "Domain Name:",
        whoisCreatedLabel: "Creation Date:",
        whoisRiskLabel: "Threat Level:",
        sslIssuerLabel: "Certificate Authority:",
        sslStatusLabel: "Status:",

        riskHigh: "HIGH RISK (98%)",
        riskMedium: "MEDIUM RISK (45%)",
        riskSafe: "SAFE (0%)",
        sslInvalid: "❌ Invalid Issuer",
        sslValid: "✅ Valid",
        sslGovValid: "✅ Government Validated",

        smsSimTitle: "💬 SMS SIMULATOR",
        aiVideoTitle: "📹 AI VIDEO ANALYSIS",
        officialVerifiedTitle: "🏛️ Official Source Verified",

        createdDaysAgo: "days ago",
        createdYearsAgo: "years ago",
        createdJustNow: "Just now",

        chartCategories: ['Phishing', 'Deepfakes', 'Fakes', 'Official'],
        chartAccuracy: ['Correct', 'Errors'],
        chartAccuracyLabel: 'Your Answers'
    }
};

let currentLang = "kz";

const defaultCases = [
    {
        id: 1,
        url: "https://kaspi-sec-verify-pay.org/auth",
        mediaIcon: "fa-qrcode",
        mediaType: "sms",
        mediaPreview: {
            sender: "Kaspi-Security",
            text: {
                ru: "Внимание! Ваш аккаунт заблокирован из-за подозрительного входа. Сканируйте QR или перейдите на kaspi-sec-verify-pay.org для подтверждения личности.",
                kz: "Назар аударыңыз! Күмәнді кіруге байланысты аккаунтыңыз бұғатталды. Тұлғаңызды растау үшін QR-кодты сканерлеңіз немесе kaspi-sec-verify-pay.org сайтына өтіңіз.",
                en: "Warning! Your account has been locked due to suspicious activity. Scan QR or visit kaspi-sec-verify-pay.org to verify your identity."
            }
        },
        isFake: true,
        content: {
            ru: {
                category: "Фишинг",
                title: "Срочная разблокировка аккаунта через сторонний фишинговый шлюз",
                description: "Вам поступило SMS о блокировке счёта с требованием немедленно авторизоваться на стороннем ресурсе.",
                explanation: "Это опасный фишинг! Банки никогда не отправляют ссылки на сторонние `.org` или `.net` домены для сброса паролей.",
                lesson: "<strong>💡 Урок:</strong> Настоящий банк уведомляет об ограничениях прямо в официальном мобильном приложении, а не через внешние сайты."
            },
            kz: {
                category: "Фишинг",
                title: "Бөгде фишингтік шлюз арқылы аккаунтты шұғыл бұғаттан шығару",
                description: "Сізге шоттың бұғатталғаны және бөгде ресурста дереу авторизациядан өту керектігі туралы SMS келді.",
                explanation: "Бұл қауіпті фишинг! Банктер құпия сөзді ауыстыру үшін ешқашан `.org` немесе `.net` сияқты бөгде домендерге сілтеме жібермейді.",
                lesson: "<strong>💡 Сабақ:</strong> Нағыз банк кез келген шектеулер туралы сыртқы сайттар арқылы емес, тек ресми мобильді қосымша ішінде ескертеді."
            },
            en: {
                category: "Phishing",
                title: "Urgent account unlock via third-party phishing portal",
                description: "You received an SMS claiming your account is locked and requiring immediate login on an external page.",
                explanation: "This is dangerous phishing! Banks never send links to third-party `.org` or `.net` domains for account security procedures.",
                lesson: "<strong>💡 Lesson:</strong> Genuine financial institutions report account status inside their official mobile app, not external sites."
            }
        },
        whoisData: { domain: "kaspi-sec-verify-pay.org", createdDays: 1, riskKey: "riskHigh" },
        sslData: { issuer: "Cloudflare Free Trial CA", statusKey: "sslInvalid" }
    },
    {
        id: 2,
        url: "https://taldyk-news-media.kz/invest-corp",
        mediaIcon: "fa-robot",
        mediaType: "deepfake",
        mediaPreview: {
            artifacts: {
                ru: ["⚠️ Механический синтез голоса", "⚠️ Мигание глаз отсутствует", "⚠️ Нестыковка кадров при движении головы"],
                kz: ["⚠️ Механикалық дауыс синтезі", "⚠️ Көз жыпылықтауы байқалмайды", "⚠️ Бас қозғалысындағы кадрлар алшақтығы"],
                en: ["⚠️ Robotic voice synthesis", "⚠️ Unnatural eye blinking", "⚠️ Frame glitches around head movement"]
            }
        },
        isFake: true,
        content: {
            ru: {
                category: "Дипфейк",
                title: "Видеообращение с призывом инвестировать в новый национальный фонд",
                description: "В видео известное лицо предлагает вложить 50 000 ₸ и получать гарантированный доход 500 000 ₸ в неделю.",
                explanation: "Это ИИ-дипфейк! Мошенники используют нейросети для подделки голоса и мимики известных людей.",
                lesson: "<strong>💡 Урок:</strong> Гарантированная сверхприбыль без риска — главный признак финансовой пирамиды и дипфейк-мошенничества."
            },
            kz: {
                category: "Дипфейк",
                title: "Жаңа ұлттық қорға инвестиция салуға шақыратын видеожолдау",
                description: "Видеода белгілі тұлға 50 000 ₸ салып, аптасына кепілді 500 000 ₸ табыс алуды ұсынады.",
                explanation: "Бұл ЖИ-дипфейк! Алаяқтар танымал адамдардың дауысы мен мимикасын қолдан жасау үшін нейрожеліні пайдаланады.",
                lesson: "<strong>💡 Сабақ:</strong> Тәуекелсіз кепілдендірілген аса жоғары пайда — қаржылық пирамида мен дипфейк-алаяқтықтың басты белгісі."
            },
            en: {
                category: "Deepfake",
                title: "Video addressing citizens to invest in a new national fund",
                description: "A famous personality promises guaranteed returns of 500,000 ₸ weekly for an initial deposit of 50,000 ₸.",
                explanation: "This is an AI deepfake! Fraudsters utilize neural models to clone voices and facial movements.",
                lesson: "<strong>💡 Lesson:</strong> Guaranteed high returns with zero risk is a clear indicator of financial scams and deepfake traps."
            }
        },
        whoisData: { domain: "taldyk-news-media.kz", createdDays: 14, riskKey: "riskMedium" },
        sslData: { issuer: "Let's Encrypt Authority X3", statusKey: "sslValid" }
    },
    {
        id: 3,
        url: "https://egov.kz/cms/ru/articles/cybersecurity_rules",
        mediaIcon: "fa-building-columns",
        mediaType: "official",
        mediaPreview: { source: "eGov.kz" },
        isFake: false,
        content: {
            ru: {
                category: "Официально",
                title: "Обновление правил цифровой безопасности граждан на портале eGov.kz",
                description: "На официальном государственном портале опубликованы инструкции по защите персональных данных и ЭЦП.",
                explanation: "Это подлинный ресурс! Домен принадлежит правительственной инфраструктуре Республики Казахстан.",
                lesson: "<strong>💡 Урок:</strong> Все государственные услуги и официальные уведомления Казахстана размещаются на домене `.kz` или `.gov.kz`."
            },
            kz: {
                category: "Ресми",
                title: "eGov.kz порталында азаматтардың цифрлық қауіпсіздік ережелерінің жаңартылуы",
                description: "Ресми мемлекеттік порталда жеке деректерді және ЭЦҚ-ны қорғау бойынша нұсқаулықтар жарияланды.",
                explanation: "Бұл шынайы ресурс! Домен Қазақстан Республикасының мемлекеттік инфрақұрылымына тиесілі.",
                lesson: "<strong>💡 Сабақ:</strong> Қазақстанның барлық мемлекеттік қызметтері мен ресми хабарландырулары `.kz` немесе `.gov.kz` доменінде орналасады."
            },
            en: {
                category: "Official",
                title: "Digital security rule updates for citizens on eGov.kz portal",
                description: "Official government portal published guidelines regarding personal data protection and digital signatures.",
                explanation: "This is authentic! The domain belongs to the official government infrastructure of Kazakhstan.",
                lesson: "<strong>💡 Lesson:</strong> All official Kazakhstan state services and publications are hosted on `.kz` or `.gov.kz` domains."
            }
        },
        whoisData: { domain: "egov.kz", createdYears: 16, riskKey: "riskSafe" },
        sslData: { issuer: "National Certification Authority of RK (NCA)", statusKey: "sslGovValid" }
    }
];

// Разнообразные динамические шаблоны кейсов
const aiTemplates = {
    phishingScenarios: [
        {
            brand: "Kaspi Bank",
            fakeDomains: ["kaspi-payout-gov.site", "kaspi-verify-tok.online", "kaspi-check-sec.info"],
            realDomain: "kaspi.kz",
            topics: {
                ru: "Запрос на отмену подозрительного перевода",
                kz: "Күмәнді аударымды тоқтату туралы сұраныс",
                en: "Request to cancel a suspicious transfer"
            }
        },
        {
            brand: "Egov.kz",
            fakeDomains: ["egov-social-help.net", "egov-ref-comp.xyz", "egov-info-kz.site"],
            realDomain: "egov.kz",
            topics: {
                ru: "Единовременная социальная компенсация от государства",
                kz: "Мемлекеттен біржолғы әлеуметтік өтемақы",
                en: "One-time social compensation from the state"
            }
        },
        {
            brand: "Kazpost",
            fakeDomains: ["kazpost-track-parcel.top", "post-kz-delivery.site", "kazpost-sec-check.biz"],
            realDomain: "kazpost.kz",
            topics: {
                ru: "Ошибка адреса доставки посылки. Требуется уточнение данных",
                kz: "Сәлемдемені жеткізу мекенжайындағы қате. Деректерді нақтылау қажет",
                en: "Parcel delivery address error. Data update required"
            }
        },
        {
            brand: "Halyk Bank",
            fakeDomains: ["halyk-bonus-claim.online", "halyk-sec-verify.net", "halyk-payout.site"],
            realDomain: "halykbank.kz",
            topics: {
                ru: "Начисление кэшбэка за участие в опросе",
                kz: "Сауалнамаға қатысқаны үшін кэшбэк есептеу",
                en: "Cashback credit for participation in survey"
            }
        }
    ],
    deepfakeScenarios: [
        {
            person: { ru: "Известный медиа-эксперт", kz: "Танымал медиа-сарапшы", en: "Famous media expert" },
            topic: {
                ru: "Платформа автоматического трейдинга с гарантией 100%",
                kz: "100% кепілдігі бар автоматты трейдинг платформасы",
                en: "Automated trading platform with 100% guarantee"
            },
            artifacts: {
                ru: ["⚠️ Неестественные микродвижения губ", "⚠️ Нарушение фокуса лица", "⚠️ ИИ-генерация аудиоряда"],
                kz: ["⚠️ Ерін еріксіз микродірілі", "⚠️ Бет фокусының бұзылуы", "⚠️ ЖИ-арқылы дауысты жасау"],
                en: ["⚠️ Unnatural lip micro-movements", "⚠️ Facial focus blurring", "⚠️ AI generated audio track"]
            }
        },
        {
            person: { ru: "Представитель крупного фонда", kz: "Ірі қор өкілі", en: "Representative of a major fund" },
            topic: {
                ru: "Закрытый инвестиционный клуб с мгновенной выплатой",
                kz: "Заматта төлем жасайтын жабық инвестициялық клуб",
                en: "Closed investment club with instant payout"
            },
            artifacts: {
                ru: ["⚠️ Задержка анимации лица", "⚠️ Несоответствие эмоциональной окраски голоса", "⚠️ Артефакты на краях волос"],
                kz: ["⚠️ Бет анимациясының кідіруі", "⚠️ Дауыс эмоционалдық реңкінің сәйкес келмеуі", "⚠️ Шаш жиектеріндегі артефакттар"],
                en: ["⚠️ Facial animation lag", "⚠️ Voice tone emotion mismatch", "⚠️ Artifacts around hair edges"]
            }
        }
    ],
    officialNewsSources: [
        { name: "Inform.kz", domain: "inform.kz" },
        { name: "Tengrinews.kz", domain: "tengrinews.kz" },
        { name: "Kazinform", domain: "kazinform.kz" },
        { name: "24.kz", domain: "24.kz" }
    ]
};

let cases = [...defaultCases];
let currentCaseIndex = 0;
let userXP = 1000;
let correctAnswers = 0;
let wrongAnswers = 0;
let threatsChart, accuracyChart;
let usedAiCombinations = new Set();

function generateRandomAICase() {
    let isFake = Math.random() < 0.65;
    let typeIndex = Math.floor(Math.random() * 3); // 0: phishing, 1: deepfake, 2: official
    let comboKey = `${typeIndex}-${isFake}-${Math.random()}`;
    
    const types = ["sms", "deepfake", "official"];
    const mediaType = types[typeIndex];

    let generatedCase = {
        id: cases.length + 1,
        mediaType: mediaType,
        isFake: isFake
    };

    if (mediaType === "sms") {
        const scenario = aiTemplates.phishingScenarios[Math.floor(Math.random() * aiTemplates.phishingScenarios.length)];
        const fakeDomain = scenario.fakeDomains[Math.floor(Math.random() * scenario.fakeDomains.length)];
        const domain = isFake ? fakeDomain : scenario.realDomain;

        generatedCase.url = `https://${domain}/action-id=${Math.floor(Math.random() * 89999 + 10000)}`;
        generatedCase.mediaIcon = isFake ? "fa-triangle-exclamation" : "fa-shield-halved";
        generatedCase.whoisData = {
            domain: domain,
            createdDays: isFake ? Math.floor(Math.random() * 5 + 1) : null,
            createdYears: isFake ? null : Math.floor(Math.random() * 10 + 5),
            riskKey: isFake ? "riskHigh" : "riskSafe"
        };
        generatedCase.sslData = {
            issuer: isFake ? "Unknown Free Authority" : "DigiCert Global RSA",
            statusKey: isFake ? "sslInvalid" : "sslValid"
        };

        generatedCase.mediaPreview = {
            sender: isFake ? `${scenario.brand}-Alert` : scenario.brand,
            text: {
                ru: isFake 
                    ? `Уведомление от ${scenario.brand}: ${scenario.topics.ru}. Перейдите на сайт http://${domain} для проверки.`
                    : `Официальное уведомление от ${scenario.brand}: ${scenario.topics.ru}. Подробности в вашем личном кабинете.`,
                kz: isFake 
                    ? `${scenario.brand} хабарламасы: ${scenario.topics.kz}. Тексеру үшін http://${domain} сайтына өтіңіз.`
                    : `${scenario.brand} ресми хабарламасы: ${scenario.topics.kz}. Толығырақ жеке кабинетіңізде.`,
                en: isFake 
                    ? `Notification from ${scenario.brand}: ${scenario.topics.en}. Verify immediately at http://${domain}`
                    : `Official alert from ${scenario.brand}: ${scenario.topics.en}. Details in your account.`
            }
        };

        generatedCase.content = {
            ru: {
                category: isFake ? "Фишинг" : "Официально",
                title: scenario.topics.ru,
                description: `Получено SMS со ссылкой на домен: ${domain}`,
                explanation: isFake ? "Это фишинговая ссылка! Домен не совпадает с официальным адресом организации." : "Это официальный домен сервиса.",
                lesson: "<strong>💡 Урок:</strong> Обращайте внимание на имя доменного адреса до точки первого уровня."
            },
            kz: {
                category: isFake ? "Фишинг" : "Ресми",
                title: scenario.topics.kz,
                description: `Келесі доменге сілтемесі бар SMS алынды: ${domain}`,
                explanation: isFake ? "Бұл фишингтік сілтеме! Домен ұйымның ресми мекенжайына сәйкес келмейді." : "Бұл сервистің ресми домені.",
                lesson: "<strong>💡 Сабақ:</strong> Бірінші деңгейдегі нүктеге дейінгі домендік атауға мұқият қараңыз."
            },
            en: {
                category: isFake ? "Phishing" : "Official",
                title: scenario.topics.en,
                description: `SMS received with link to domain: ${domain}`,
                explanation: isFake ? "Phishing link detected! The domain does not match the official organization address." : "Official domain of the service.",
                lesson: "<strong>💡 Lesson:</strong> Always pay attention to the exact root domain in web links."
            }
        };

    } else if (mediaType === "deepfake") {
        const df = aiTemplates.deepfakeScenarios[Math.floor(Math.random() * aiTemplates.deepfakeScenarios.length)];
        
        generatedCase.url = isFake ? "https://stream-invest-video.site/watch" : "https://official-news.kz/media";
        generatedCase.mediaIcon = "fa-robot";
        generatedCase.whoisData = {
            domain: isFake ? "stream-invest-video.site" : "official-news.kz",
            createdDays: isFake ? 3 : null,
            createdYears: isFake ? null : 8,
            riskKey: isFake ? "riskHigh" : "riskSafe"
        };
        generatedCase.sslData = {
            issuer: isFake ? "Untrusted Certificate Authority" : "Sectigo RSA",
            statusKey: isFake ? "sslInvalid" : "sslValid"
        };

        generatedCase.mediaPreview = { artifacts: df.artifacts };

        generatedCase.content = {
            ru: {
                category: isFake ? "Дипфейк" : "Официально",
                title: `${df.person.ru}: ${df.topic.ru}`,
                description: "Распространяемый в сетях видеоролик с призывом к переводу денежных средств.",
                explanation: isFake ? "Видео сгенерировано искусственным интеллектом." : "Подлинная видеозапись.",
                lesson: "<strong>💡 Урок:</strong> Детально оценивайте синхронизацию губ и качество звуковой дорожки."
            },
            kz: {
                category: isFake ? "Дипфейк" : "Ресми",
                title: `${df.person.kz}: ${df.topic.kz}`,
                description: "Желілерде таралып жатқан ақша аударуға шақыратын бейнеролик.",
                explanation: isFake ? "Бейне жасанды интеллект арқылы жасалған." : "Шынайы бейнежазба.",
                lesson: "<strong>💡 Сабақ:</strong> Ерін сипаттары мен дыбыс жолының сапасын мұқият бағалаңыз."
            },
            en: {
                category: isFake ? "Deepfake" : "Official",
                title: `${df.person.en}: ${df.topic.en}`,
                description: "Circulating online video promoting quick monetary operations.",
                explanation: isFake ? "Video generated using neural AI synthetic technologies." : "Authentic video recording.",
                lesson: "<strong>💡 Lesson:</strong> Carefully evaluate speech-to-lip synchronization and audio anomalies."
            }
        };

    } else {
        const source = aiTemplates.officialNewsSources[Math.floor(Math.random() * aiTemplates.officialNewsSources.length)];

        generatedCase.url = `https://${source.domain}/news/article-${Math.floor(Math.random() * 9000 + 1000)}`;
        generatedCase.mediaIcon = "fa-newspaper";
        generatedCase.whoisData = {
            domain: source.domain,
            createdYears: 12,
            riskKey: "riskSafe"
        };
        generatedCase.sslData = {
            issuer: "GlobalSign CA",
            statusKey: "sslValid"
        };

        generatedCase.mediaPreview = { source: source.name };

        generatedCase.content = {
            ru: {
                category: isFake ? "Фейк" : "Официально",
                title: `Информационный сюжет на портале ${source.name}`,
                description: isFake ? "Новость содержит ничем не подтвержденные слухи о закрытии учебных заведений." : "Официальная сводка о ходе реализации государственных программ.",
                explanation: isFake ? "Публикация является некликбейтной провокацией." : "Информация проверена и подтверждена официальным источником.",
                lesson: "<strong>💡 Урок:</strong> Сверяйте сенсационные новости с официальными пресс-службами ведомств."
            },
            kz: {
                category: isFake ? "Фейк" : "Ресми",
                title: `${source.name} порталындағы ақпараттық сюжет`,
                description: isFake ? "Жаңалықта оқу орындарының жабылуы туралы еш дәлелсіз сыбыстар таратылуда." : "Мемлекеттік бағдарламалардың жүзеге асырылуы туралы ресми ақпарат.",
                explanation: isFake ? "Жарияланым негізсіз провокация болып табылады." : "Ақпарат тексерілген және ресми дереккөзбен расталған.",
                lesson: "<strong>💡 Сабақ:</strong> Сенсациялық жаңалықтарды мемлекеттік органдардың ресми баппасөз қызметімен салыстырыңыз."
            },
            en: {
                category: isFake ? "Fake" : "Official",
                title: `Media coverage on ${source.name}`,
                description: isFake ? "Unverified claims regarding sudden public facility closures." : "Official report regarding standard state development programs.",
                explanation: isFake ? "This publication is clickbait news exaggeration." : "Information verified and backed by credible sources.",
                lesson: "<strong>💡 Lesson:</strong> Cross-check high-impact news with official authority press releases."
            }
        };
    }

    return generatedCase;
}

function changeLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];

    ['kz', 'ru', 'en'].forEach(l => {
        const btn = document.getElementById(`lang-${l}`);
        if (btn) {
            if (l === lang) {
                btn.className = "px-2 py-1 font-bold text-xs uppercase bg-[#FFE500] text-[#1E1E1E] border-2 border-[#1E1E1E] shadow-[2px_2px_0px_0px_#1E1E1E]";
            } else {
                btn.className = "px-2 py-1 font-bold text-xs uppercase bg-white text-[#1E1E1E] hover:bg-gray-100";
            }
        }
    });

    if (document.getElementById("t-subtitle")) document.getElementById("t-subtitle").innerText = t.subtitle;
    if (document.getElementById("t-shop-btn")) document.getElementById("t-shop-btn").innerText = t.shopBtn;
    if (document.getElementById("t-score-label")) document.getElementById("t-score-label").innerText = t.scoreLabel;
    if (document.getElementById("t-tools-label")) document.getElementById("t-tools-label").innerText = t.toolsLabel;
    if (document.getElementById("t-verdict-label")) document.getElementById("t-verdict-label").innerText = t.verdictLabel;
    if (document.getElementById("t-btn-fake")) document.getElementById("t-btn-fake").innerText = t.btnFake;
    if (document.getElementById("t-btn-real")) document.getElementById("t-btn-real").innerText = t.btnReal;
    if (document.getElementById("t-add-title")) document.getElementById("t-add-title").innerText = t.addTitle;
    if (document.getElementById("t-threats-title")) document.getElementById("t-threats-title").innerText = t.threatsTitle;
    if (document.getElementById("t-accuracy-title")) document.getElementById("t-accuracy-title").innerText = t.accuracyTitle;
    if (document.getElementById("t-whois-btn")) document.getElementById("t-whois-btn").innerText = t.whoisBtn;
    if (document.getElementById("t-ssl-btn")) document.getElementById("t-ssl-btn").innerText = t.sslBtn;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) el.innerText = t[key];
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
        const key = el.getAttribute("data-i18n-ph");
        if (t[key]) el.placeholder = t[key];
    });

    const submitBtn = document.getElementById("t-submit-case-btn");
    if (submitBtn) submitBtn.innerText = t.submitCaseBtn;

    loadCase(currentCaseIndex);
    updateChartsLanguage();
}

function loadCase(index) {
    if (index >= cases.length) {
        const newAiCase = generateRandomAICase();
        cases.push(newAiCase);
    }

    const caseData = cases[index];
    const langContent = caseData.content[currentLang] || caseData.content['kz'];
    const t = i18n[currentLang];

    document.getElementById("case-url").innerText = caseData.url;
    document.getElementById("case-category").innerText = langContent.category;
    document.getElementById("case-number").innerText = `${t.dossierPrefix} #${index + 1}`;
    document.getElementById("case-title").innerText = langContent.title;
    document.getElementById("case-description").innerText = langContent.description;
    document.getElementById("case-icon").className = `fa-solid ${caseData.mediaIcon || 'fa-shield-cat'} text-3xl sm:text-4xl`;

    const mediaContainer = document.getElementById("media-preview");
    if (caseData.mediaType === "sms" && caseData.mediaPreview) {
        const smsText = typeof caseData.mediaPreview.text === "object" 
            ? caseData.mediaPreview.text[currentLang] || caseData.mediaPreview.text['kz']
            : caseData.mediaPreview.text;

        mediaContainer.innerHTML = `
            <div class="bg-white p-3 border border-gray-300 shadow-inner">
                <p class="text-[10px] text-gray-500 font-bold uppercase mb-1">${t.smsSimTitle} (${caseData.mediaPreview.sender})</p>
                <p class="text-xs bg-emerald-50 p-2 border-l-4 border-emerald-500 font-sans">${smsText}</p>
            </div>
        `;
    } else if (caseData.mediaType === "deepfake" && caseData.mediaPreview) {
        const artifactsList = caseData.mediaPreview.artifacts[currentLang] || caseData.mediaPreview.artifacts['kz'];

        mediaContainer.innerHTML = `
            <div class="bg-black text-green-400 p-3 border border-gray-800 font-mono">
                <p class="text-xs font-bold text-yellow-400 mb-1">${t.aiVideoTitle}</p>
                <div class="space-y-1">
                    ${artifactsList.map(a => `<p class="text-[11px]">${a}</p>`).join('')}
                </div>
            </div>
        `;
    } else {
        const sourceName = caseData.mediaPreview ? caseData.mediaPreview.source : "Inform.kz";
        mediaContainer.innerHTML = `
            <div class="bg-blue-50 p-2.5 border border-blue-200 text-blue-900 font-mono text-[11px] flex items-center justify-between">
                <span>${t.officialVerifiedTitle}</span>
                <span class="font-bold">${sourceName}</span>
            </div>
        `;
    }
}

function initCharts() {
    const ctx1 = document.getElementById('threatsChart');
    const ctx2 = document.getElementById('accuracyChart');

    if (!ctx1 || !ctx2) return;

    Chart.defaults.font.family = "'Space Grotesk', sans-serif";
    Chart.defaults.font.weight = "bold";
    Chart.defaults.color = "#1E1E1E";

    threatsChart = new Chart(ctx1.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: i18n[currentLang].chartCategories,
            datasets: [{
                data: [68, 18, 9, 5],
                backgroundColor: ['#FF6B6B', '#4D96FF', '#FFE500', '#6BCB77'],
                borderColor: '#1E1E1E',
                borderWidth: 3
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
    });

    accuracyChart = new Chart(ctx2.getContext('2d'), {
        type: 'bar',
        data: {
            labels: i18n[currentLang].chartAccuracy,
            datasets: [{
                label: i18n[currentLang].chartAccuracyLabel,
                data: [correctAnswers, wrongAnswers],
                backgroundColor: ['#6BCB77', '#FF6B6B'],
                borderColor: '#1E1E1E',
                borderWidth: 3
            }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, stepSize: 1 } } }
    });
}

function updateChartsLanguage() {
    if (threatsChart && accuracyChart) {
        threatsChart.data.labels = i18n[currentLang].chartCategories;
        threatsChart.update();

        accuracyChart.data.labels = i18n[currentLang].chartAccuracy;
        accuracyChart.data.datasets[0].label = i18n[currentLang].chartAccuracyLabel;
        accuracyChart.update();
    }
}

function updateChartsData() {
    if (accuracyChart) {
        accuracyChart.data.datasets[0].data = [correctAnswers, wrongAnswers];
        accuracyChart.update();
    }
}

function openThreatsReport() {
    const t = i18n[currentLang];
    showModal(t.certReportTitle, t.certReportBody);
}

function checkAnswer(userIsFake) {
    const currentCase = cases[currentCaseIndex];
    const langContent = currentCase.content[currentLang] || currentCase.content['kz'];
    const t = i18n[currentLang];
    
    const isCorrect = (userIsFake === currentCase.isFake);

    const lessonHTML = langContent.lesson ? `
        <div class="mt-3 p-3 bg-[#FFE500]/30 border-2 border-[#1E1E1E] text-xs font-mono leading-relaxed">
            ${langContent.lesson}
        </div>
    ` : '';

    if (isCorrect) {
        userXP += 150;
        correctAnswers++;
        showModal(t.correctVerdictTitle, `
            <p class="font-bold text-sm text-[#6BCB77]">${t.correctVerdictText}</p>
            <p class="text-xs leading-relaxed font-mono mt-1">${langContent.explanation}</p>
            ${lessonHTML}
        `);
    } else {
        userXP -= 100;
        wrongAnswers++;
        showModal(t.wrongVerdictTitle, `
            <p class="font-bold text-sm text-red-600">${t.wrongVerdictText}</p>
            <p class="text-xs leading-relaxed font-mono mt-1">${langContent.explanation}</p>
            ${lessonHTML}
        `);
    }

    document.getElementById("user-score").innerText = `${userXP} XP`;
    currentCaseIndex++;
    saveProgress();
    updateChartsData();

    loadCase(currentCaseIndex);
}

function inspectDomain() {
    const t = i18n[currentLang];
    const caseData = cases[currentCaseIndex];
    const data = caseData.whoisData || { domain: "domain.kz", createdDays: 1, riskKey: "riskHigh" };

    let createdText = t.createdJustNow;
    if (data.createdDays) createdText = `${data.createdDays} ${t.createdDaysAgo}`;
    if (data.createdYears) createdText = `${data.createdYears} ${t.createdYearsAgo}`;

    const riskText = t[data.riskKey] || data.riskKey;

    showModal(t.whoisTitle, `
        <div class="font-mono text-xs space-y-2">
            <p><strong>${t.whoisDomainLabel}</strong> ${data.domain}</p>
            <p><strong>${t.whoisCreatedLabel}</strong> ${createdText}</p>
            <p><strong>${t.whoisRiskLabel}</strong> <span class="font-bold text-red-600">${riskText}</span></p>
        </div>
    `);
}

function inspectSSL() {
    const t = i18n[currentLang];
    const caseData = cases[currentCaseIndex];
    const data = caseData.sslData || { issuer: "Standard CA", statusKey: "sslValid" };

    const statusText = t[data.statusKey] || data.statusKey;

    showModal(t.sslTitle, `
        <div class="font-mono text-xs space-y-2">
            <p><strong>${t.sslIssuerLabel}</strong> ${data.issuer}</p>
            <p><strong>${t.sslStatusLabel}</strong> ${statusText}</p>
        </div>
    `);
}

function showModal(title, bodyHtml) {
    let modal = document.getElementById("custom-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "custom-modal";
        modal.className = "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50";
        document.body.appendChild(modal);
    }
    
    const t = i18n[currentLang];
    modal.innerHTML = `
        <div class="bg-white border-4 border-[#1E1E1E] shadow-[8px_8px_0px_0px_#1E1E1E] max-w-md w-full p-6 relative">
            <h3 class="font-black text-lg text-[#1E1E1E] uppercase mb-3 border-b-2 border-[#1E1E1E] pb-2">${title}</h3>
            <div class="mb-6">${bodyHtml}</div>
            <button onclick="closeModal()" class="w-full bg-[#FFE500] hover:bg-yellow-400 text-[#1E1E1E] font-black py-2 border-2 border-[#1E1E1E] shadow-[3px_3px_0px_0px_#1E1E1E] uppercase tracking-wider text-xs active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer">
                ${t.btnOk}
            </button>
        </div>
    `;
    modal.classList.remove("hidden");
}

function closeModal() {
    const modal = document.getElementById("custom-modal");
    if (modal) modal.classList.add("hidden");
}

function openShop() {
    const t = i18n[currentLang];
    showModal(t.shopTitle, `
        <div class="space-y-4 font-mono text-xs">
            <div class="p-3 border-2 border-[#1E1E1E] bg-yellow-50 flex items-center justify-between">
                <div>
                    <p class="font-bold text-sm">${t.shopItemTitle}</p>
                    <p class="text-gray-600">${t.shopItemDesc}</p>
                </div>
                <button onclick="buyWhoisScanner()" class="ml-2 bg-[#6BCB77] hover:bg-green-500 text-[#1E1E1E] font-bold px-3 py-1 border border-[#1E1E1E] text-xs uppercase cursor-pointer">
                    ${t.buyBtn}
                </button>
            </div>
        </div>
    `);
}

function buyWhoisScanner() {
    const t = i18n[currentLang];
    if (userXP >= 200) {
        userXP -= 200;
        document.getElementById("user-score").innerText = `${userXP} XP`;
        saveProgress();
        const caseData = cases[currentCaseIndex];
        const riskText = t[caseData.whoisData ? caseData.whoisData.riskKey : 'riskSafe'] || "SAFE";
        showModal(t.shopItemTitle, `<p class="font-mono text-xs"><strong>WHOIS Hint:</strong> ${riskText}</p>`);
    } else {
        showModal(t.shopTitle, `<p class="text-red-600 font-bold text-xs">${t.noXpText}</p>`);
    }
}

function addNewCase(event) {
    if (event) event.preventDefault();
    const t = i18n[currentLang];

    const title = document.getElementById("new-title")?.value || "Жаңа кейс";
    const url = document.getElementById("new-url")?.value || "https://custom-link.kz";
    const category = document.getElementById("new-category")?.value || "Фейк";
    const isFake = document.getElementById("new-isfake")?.value === "true";
    const desc = document.getElementById("new-desc")?.value || "Сипаттамасы енгізілмеді.";

    const customCase = {
        id: cases.length + 1,
        url: url,
        mediaIcon: isFake ? "fa-triangle-exclamation" : "fa-circle-check",
        mediaType: "official",
        mediaPreview: { source: "User Submission" },
        isFake: isFake,
        content: {
            ru: { category: category, title: title, description: desc, explanation: "Пользовательский кейс.", lesson: "" },
            kz: { category: category, title: title, description: desc, explanation: "Пайдаланушы кейсі.", lesson: "" },
            en: { category: category, title: title, description: desc, explanation: "User submitted case.", lesson: "" }
        },
        whoisData: { domain: url.replace("https://", "").replace("http://", "").split("/")[0], createdDays: 1, riskKey: isFake ? "riskHigh" : "riskSafe" },
        sslData: { issuer: "Custom SSL Authority", statusKey: isFake ? "sslInvalid" : "sslValid" }
    };

    cases.push(customCase);
    saveCustomCases();
    
    document.getElementById("add-case-form").reset();
    showModal(t.caseAddedTitle, `<p class="text-xs font-mono">${t.caseAddedText}</p>`);
}

function saveCustomCases() {
    const customOnly = cases.slice(defaultCases.length);
    localStorage.setItem("mediaSimulator_CustomCases", JSON.stringify(customOnly));
}

function loadCustomCases() {
    const savedCustom = localStorage.getItem("mediaSimulator_CustomCases");
    if (savedCustom) {
        try {
            const parsed = JSON.parse(savedCustom);
            cases = [...defaultCases, ...parsed];
        } catch (e) {
            console.error("Failed to load custom cases", e);
        }
    }
}

function saveProgress() {
    localStorage.setItem("mediaSimulator_XP", userXP);
    localStorage.setItem("mediaSimulator_Correct", correctAnswers);
    localStorage.setItem("mediaSimulator_Wrong", wrongAnswers);
}

function loadProgress() {
    const savedXP = localStorage.getItem("mediaSimulator_XP");
    const savedCorrect = localStorage.getItem("mediaSimulator_Correct");
    const savedWrong = localStorage.getItem("mediaSimulator_Wrong");

    if (savedXP !== null) userXP = parseInt(savedXP, 10);
    if (savedCorrect !== null) correctAnswers = parseInt(savedCorrect, 10);
    if (savedWrong !== null) wrongAnswers = parseInt(savedWrong, 10);

    const scoreEl = document.getElementById("user-score");
    if (scoreEl) scoreEl.innerText = `${userXP} XP`;
}

document.addEventListener("DOMContentLoaded", () => {
    loadCustomCases();
    loadProgress();
    initCharts();
    changeLanguage("kz");
});
