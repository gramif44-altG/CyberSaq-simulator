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
        seriesFinishedTitle: "🎉 СЕРИЯ ЗАВЕРШЕНА",
        seriesFinishedText: "Все досье изучены! Включается ИИ-генерация бесконечных кейсов.",
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
        seriesFinishedTitle: "🎉 СЕРИЯ АЯҚТАЛДЫ",
        seriesFinishedText: "Барлық досье зерттелді! Шексіз ЖИ-генерация іске қосылады.",
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
        seriesFinishedTitle: "🎉 SERIES COMPLETED",
        seriesFinishedText: "All initial dossiers examined! Infinite AI Case Generation enabled.",
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

        chartCategories: ['Phishing', 'Deepfakes', 'Fakes', 'Official'],
        chartAccuracy: ['Correct', 'Errors'],
        chartAccuracyLabel: 'Your Answers'
    }
};

let currentLang = "kz";

const defaultCases = [
    {
        id: 1,
        url: "https://secure-kaspi-bank-bonus.check-verify.com/login",
        mediaIcon: "fa-shield-cat",
        mediaType: "sms",
        mediaPreview: {
            sender: "Kaspi-Bonus",
            text: "Сізге 25 000 ₸ мерекелік бонусы есептелді! Бонусты картаға алу үшін сілтеме бойынша өтіңіз: check-verify.com/login"
        },
        isFake: true,
        content: {
            ru: {
                category: "Фишинг",
                title: "Подтвердите аккаунт для получения праздничного бонуса 25 000 ₸",
                description: "Вам пришло сообщение: 'В честь праздника вам начислен бонус. Чтобы зачислить средства на карту, войдите через форму и подтвердите свой пароль'.",
                explanation: "Это классический фишинг! Обратите внимание на URL-адрес: подлинный сайт Kaspi — kaspi.kz, а не check-verify.com.",
                lesson: "<strong>💡 Урок:</strong> Настоящие банки и госорганы РК никогда не используют сторонние домены вроде `.com` или `.site` для выдачи бонусов."
            },
            kz: {
                category: "Фишинг",
                title: "25 000 ₸ мерекелік бонусын алу үшін аккаунтты растаңыз",
                description: "Сізге хабарлама келді: 'Мерекеге орай сізге бонус есептелді. Қаражатты картаға түсіру үшін пішін арқылы кіріп, құпия сөзіңізді растаңыз'.",
                explanation: "Бұл классикалық фишинг! URL-мекенжайға назар аударыңыз: Kaspi-нің түпнұсқа сайты — kaspi.kz, check-verify.com емес.",
                lesson: "<strong>💡 Сабақ:</strong> ҚР банктері мен мемлекеттік органдары бонустар беру үшін ешқашан `.com` немесе `.site` сияқты бөгде домендерді пайдаланбайды."
            },
            en: {
                category: "Phishing",
                title: "Confirm account to receive a holiday bonus of 25,000 ₸",
                description: "You received a message: 'You have been awarded a bonus. To deposit funds to your card, log in and confirm your password'.",
                explanation: "This is classic phishing! Pay attention to the URL: the genuine Kaspi website is kaspi.kz, not check-verify.com.",
                lesson: "<strong>💡 Lesson:</strong> Real banks in RK never use third-party domains like `.com` or `.site` for bonus distributions."
            }
        },
        whoisData: { domain: "check-verify.com", created: "2 дня назад", riskScore: "HIGH RISK (98%)" },
        sslData: { issuer: "Free Let's Encrypt Authority", status: "❌ Invalid Issuer" }
    },
    {
        id: 2,
        url: "https://taldykorgan-news.kz/article/9402",
        mediaIcon: "fa-robot",
        mediaType: "deepfake",
        mediaPreview: {
            title: "📹 AI Video Analysis",
            artifacts: ["⚠️ Размытый задний фон", "⚠️ Неестественные пальцы", "⚠️ Синхронизация губ нарушена"]
        },
        isFake: true,
        content: {
            ru: {
                category: "Дипфейк",
                title: "В Талдыкоргане запустили роботов-дворников с искусственным интеллектом",
                description: "В соцсетях распространяется видео с высокотехнологичными роботами, очищающими улицы города.",
                explanation: "Это фейк, созданный нейросетью! Углы зданий на фоне размыты, а детали движения робота неестественны.",
                lesson: "<strong>💡 Урок:</strong> Чтобы распознать ИИ-дипфейк, присмотритесь к деталям: артефакты на пальцах рук и размытые задние фоны."
            },
            kz: {
                category: "Дипфейк",
                title: "Талдықорғанда жасанды интеллекті бар робот-көше сыпырушылар іске қосылды",
                description: "Әлеуметтік желілерде қала көшелерін тазалап жүрген жоғары технологиялық роботтардың видеосы тарауда.",
                explanation: "Бұл нейрожелі жасаған фейк! Фондағы ғимараттардың бұрыштары бұлыңғыр, ал роботтың қозғалысы табиғи емес.",
                lesson: "<strong>💡 Сабақ:</strong> АИ-дипфейкті тану үшін бөлшектерге мұқият қараңыз: саусақтардағы артефакттар және бұлыңғыр фондар."
            },
            en: {
                category: "Deepfake",
                title: "AI-powered street sweeper robots launched in Taldykorgan",
                description: "A video of high-tech robots cleaning city streets is circulating on social media.",
                explanation: "This is a neural network fake! Building edges in the background are blurred, and movements are unnatural.",
                lesson: "<strong>💡 Lesson:</strong> To spot AI deepfakes, look closely at details: finger artifacts and blurred background elements."
            }
        },
        whoisData: { domain: "taldykorgan-news.kz", created: "1 год назад", riskScore: "MEDIUM (45%)" },
        sslData: { issuer: "Sectigo RSA", status: "✅ Valid SSL" }
    },
    {
        id: 3,
        url: "https://inform.kz/ru/kazahstanskie-shkolniki-zavoyovali-zoloto",
        mediaIcon: "fa-trophy",
        mediaType: "official",
        mediaPreview: {
            source: "Inform.kz",
            status: "VERIFIED OFFICIAL NEWS AGENCY"
        },
        isFake: false,
        content: {
            ru: {
                category: "Официально",
                title: "Казахстанские школьники завоевали золотые медали на международной олимпиаде",
                description: "Команда учащихся NIS одержала победу на международном турнире по научным проектам.",
                explanation: "Это правда! Новость опубликована на официальном информационном агентстве Inform.kz.",
                lesson: "<strong>💡 Урок:</strong> Официальные новости всегда подтверждаются в крупных зарегистрированных СМИ."
            },
            kz: {
                category: "Ресми",
                title: "Қазақстандық оқушылар халықаралық олимпиадада алтын медаль жеңіп алды",
                description: "НИШ оқушылар командасы ғылыми жобалар бойынша халықаралық турнирде жеңіске жетті.",
                explanation: "Бұл шындық! Жаңалық ресми Inform.kz ақпараттық агенттігінде жарияланған.",
                lesson: "<strong>💡 Сабақ:</strong> Ресми жаңалықтар әрдайым ірі тіркелген БАҚ өкілдерінде расталады."
            },
            en: {
                category: "Official",
                title: "Kazakhstani students win gold medals at international olympiad",
                description: "A team of NIS students won the international scientific project competition.",
                explanation: "This is true! The news was published on the official news agency Inform.kz.",
                lesson: "<strong>💡 Lesson:</strong> Official news is always confirmed across major registered media outlets."
            }
        },
        whoisData: { domain: "inform.kz", created: "18 лет назад", riskScore: "SAFE (0%)" },
        sslData: { issuer: "DigiCert Global Root CA", status: "✅ Government Validated" }
    }
];

const aiTemplates = {
    smsBrands: ["Kaspi Bank", "Halyk Bank", "Kazakhpost", "Kcell", "Egov.kz"],
    fakeDomains: ["kaspi-promo.xyz", "halyk-payout.site", "post-kz.online", "egov-verify.net", "bonus-claim.biz"],
    amounts: ["15 000 ₸", "35 000 ₸", "50 000 ₸", "120 000 ₸"],
    deepfakePersons: ["Президент РК", "Белгілі кәсіпкер", "Известный блогер", "Министр финансов"],
    newsSources: ["Inform.kz", "Tengrinews.kz", "Kazinform", "24.kz"]
};

let cases = [...defaultCases];
let currentCaseIndex = 0;
let userXP = 1000;
let correctAnswers = 0;
let wrongAnswers = 0;
let threatsChart, accuracyChart;

function generateRandomAICase() {
    const isFake = Math.random() < 0.65;
    const types = ["sms", "deepfake", "official"];
    const mediaType = types[Math.floor(Math.random() * types.length)];
    
    const brand = aiTemplates.smsBrands[Math.floor(Math.random() * aiTemplates.smsBrands.length)];
    const domain = aiTemplates.fakeDomains[Math.floor(Math.random() * aiTemplates.fakeDomains.length)];
    const amount = aiTemplates.amounts[Math.floor(Math.random() * aiTemplates.amounts.length)];
    const person = aiTemplates.deepfakePersons[Math.floor(Math.random() * aiTemplates.deepfakePersons.length)];
    const source = aiTemplates.newsSources[Math.floor(Math.random() * aiTemplates.newsSources.length)];

    let generatedCase = {
        id: cases.length + 1,
        url: isFake ? `https://${domain}/login` : `https://${brand.toLowerCase().replace(/\s+/g, '')}.kz`,
        mediaIcon: mediaType === "sms" ? "fa-comment-dots" : (mediaType === "deepfake" ? "fa-robot" : "fa-newspaper"),
        mediaType: mediaType,
        isFake: isFake,
        whoisData: { domain: isFake ? domain : `${brand.toLowerCase().replace(/\s+/g, '')}.kz`, created: isFake ? "1 день назад" : "10 лет назад", riskScore: isFake ? "HIGH RISK (99%)" : "SAFE (0%)" },
        sslData: { issuer: isFake ? "Unknown CA" : "DigiCert Global", status: isFake ? "❌ Invalid" : "✅ Valid" }
    };

    if (mediaType === "sms") {
        generatedCase.mediaPreview = {
            sender: isFake ? `SMS-INFO (${brand.toUpperCase()})` : brand,
            text: isFake 
                ? `Сіздің аккаунтыңызға ${amount} компенсация түсті! Белсендіру үшін: http://${domain}/login`
                : `Сіздің шотыңыздан операция сәтті өтті. Анықтама үшін: ${brand.toLowerCase().replace(/\s+/g, '')}.kz`
        };
        generatedCase.content = {
            ru: {
                category: isFake ? "Фишинг" : "Официально",
                title: `Уведомление от имени ${brand}`,
                description: `Вам пришло сообщение о зачислении средств (${amount}). Требуется переход по ссылке.`,
                explanation: isFake ? "Это фишинг! Домен не принадлежит официальному банку." : "Это официальное сообщение.",
                lesson: "<strong>💡 Урок:</strong> Всегда проверяйте доменное имя в ссылках SMS."
            },
            kz: {
                category: isFake ? "Фишинг" : "Ресми",
                title: `${brand} атынан хабарлама`,
                description: `Сізге қаражат түскені туралы хабарлама келді (${amount}). Сілтеме бойынша өту талап етіледі.`,
                explanation: isFake ? "Бұл фишинг! Домен ресми банкке тиесілі емес." : "Бұл ресми хабарлама.",
                lesson: "<strong>💡 Сабақ:</strong> SMS-тегі сілтемелердің домендік атын әрдайым тексеріңіз."
            },
            en: {
                category: isFake ? "Phishing" : "Official",
                title: `Notification from ${brand}`,
                description: `You received a message regarding funds deposit (${amount}). Link transition required.`,
                explanation: isFake ? "This is phishing! The domain does not belong to the bank." : "This is an official message.",
                lesson: "<strong>💡 Lesson:</strong> Always verify domain names in SMS links."
            }
        };
    } else if (mediaType === "deepfake") {
        generatedCase.mediaPreview = {
            title: "📹 AI Video Analysis",
            artifacts: isFake ? ["⚠️ Синхронизация губ нарушена", "⚠️ ИИ-синтез голоса", "⚠️ Артефакты лица"] : ["✅ Реальная мимика", "✅ Высокое качество"]
        };
        generatedCase.content = {
            ru: {
                category: isFake ? "Дипфейк" : "Официально",
                title: `Видеообращение: ${person}`,
                description: isFake ? `В соцсетях распространяется видео, где ${person} предлагает гарантированный доход ${amount}.` : `Официальное интервью на государственном канале.`,
                explanation: isFake ? "Видео сгенерировано нейросетью (дипфейк)." : "Настоящая видеозапись.",
                lesson: "<strong>💡 Урок:</strong> Обращайте внимание на мимику и неестественный голос."
            },
            kz: {
                category: isFake ? "Дипфейк" : "Ресми",
                title: `Бейнежолдау: ${person}`,
                description: isFake ? `Әлеуметтік желіде ${person} ${amount} кепілдендірілген табыс ұсынатын видео таралуда.` : `Мемлекеттік арнадағы ресми сұхбат.`,
                explanation: isFake ? "Бейне нейрожелі арқылы жасалған (дипфейк)." : "Нағыз бейнежазба.",
                lesson: "<strong>💡 Сабақ:</strong> Бет мимикасы мен табиғи емес дауысқа назар аударыңыз."
            },
            en: {
                category: isFake ? "Deepfake" : "Official",
                title: `Video Address: ${person}`,
                description: isFake ? `A video is circulating where ${person} promises guaranteed returns of ${amount}.` : `Official interview on public channel.`,
                explanation: isFake ? "Video generated by AI (deepfake)." : "Authentic video recording.",
                lesson: "<strong>💡 Lesson:</strong> Pay attention to facial movement artifacts and voice synthesis."
            }
        };
    } else {
        generatedCase.mediaPreview = null;
        generatedCase.content = {
            ru: {
                category: isFake ? "Фейк" : "Официально",
                title: `Публикация на портале ${source}`,
                description: isFake ? `Срочная новость о внезапной отмене всех занятий без приказа.` : `Официальное сообщение о новых образовательных стандартах.`,
                explanation: isFake ? "Информация не подтверждена официальными источниками." : "Официальная новость из проверенного СМИ.",
                lesson: "<strong>💡 Урок:</strong> Проверяйте новости на нескольких новостных порталах."
            },
            kz: {
                category: isFake ? "Фейк" : "Ресми",
                title: `${source} порталындағы жарияланым`,
                description: isFake ? `Бұйрықсыз барлық сабақтардың тоқтатылуы туралы шұғыл жаңалық.` : `Жаңа білім беру стандарттары туралы ресми хабарлама.`,
                explanation: isFake ? "Ақпарат ресми дереккөздермен расталмаған." : "Тексерілген БАҚ-тың ресми жаңалығы.",
                lesson: "<strong>💡 Сабақ:</strong> Жаңалықтарды бірнеше ақпараттық порталдан тексеріңіз."
            },
            en: {
                category: isFake ? "Fake" : "Official",
                title: `Publication on ${source}`,
                description: isFake ? `Breaking news about sudden cancellation of all classes without an order.` : `Official statement on new educational standards.`,
                explanation: isFake ? "Information is not confirmed by official sources." : "Official news from verified media.",
                lesson: "<strong>💡 Lesson:</strong> Cross-check news across multiple news portals."
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
    const langContent = caseData.content[currentLang] || caseData.content['ru'];
    const t = i18n[currentLang];

    document.getElementById("case-url").innerText = caseData.url;
    document.getElementById("case-category").innerText = langContent.category;
    document.getElementById("case-number").innerText = `${t.dossierPrefix} #${index + 1}`;
    document.getElementById("case-title").innerText = langContent.title;
    document.getElementById("case-description").innerText = langContent.description;
    document.getElementById("case-icon").className = `fa-solid ${caseData.mediaIcon || 'fa-shield-cat'} text-3xl sm:text-4xl`;

    const mediaContainer = document.getElementById("media-preview");
    if (caseData.mediaType === "sms" && caseData.mediaPreview) {
        mediaContainer.innerHTML = `
            <div class="bg-white p-3 border border-gray-300 shadow-inner">
                <p class="text-[10px] text-gray-500 font-bold uppercase mb-1">💬 SMS SIMULATOR (${caseData.mediaPreview.sender})</p>
                <p class="text-xs bg-emerald-50 p-2 border-l-4 border-emerald-500 font-sans">${caseData.mediaPreview.text}</p>
            </div>
        `;
    } else if (caseData.mediaType === "deepfake" && caseData.mediaPreview) {
        mediaContainer.innerHTML = `
            <div class="bg-black text-green-400 p-3 border border-gray-800 font-mono">
                <p class="text-xs font-bold text-yellow-400 mb-1">${caseData.mediaPreview.title}</p>
                <div class="space-y-1">
                    ${caseData.mediaPreview.artifacts.map(a => `<p class="text-[11px]">${a}</p>`).join('')}
                </div>
            </div>
        `;
    } else {
        mediaContainer.innerHTML = `
            <div class="bg-blue-50 p-2.5 border border-blue-200 text-blue-900 font-mono text-[11px] flex items-center justify-between">
                <span>🏛️ Official Source Verified</span>
                <span class="font-bold">Inform.kz</span>
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

function checkAnswer(userChoice) {
    const currentCase = cases[currentCaseIndex];
    const langContent = currentCase.content[currentLang] || currentCase.content['ru'];
    const t = i18n[currentLang];
    
    const isCorrect = (userChoice === !currentCase.isFake);

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

// --- Исправление вызовов кнопок WHOIS и SSL ---
function inspectDomain() {
    const caseData = cases[currentCaseIndex];
    const data = caseData.whoisData || { domain: "domain.kz", created: "Н/Д", riskScore: "UNKNOWN" };
    showModal("🔍 WHOIS EXAM", `
        <div class="font-mono text-xs space-y-2">
            <p><strong>Domain Name:</strong> ${data.domain}</p>
            <p><strong>Creation Date:</strong> ${data.created}</p>
            <p><strong>Threat Level:</strong> <span class="font-bold text-red-600">${data.riskScore}</span></p>
        </div>
    `);
}

function inspectSSL() {
    const caseData = cases[currentCaseIndex];
    const data = caseData.sslData || { issuer: "Standard CA", status: "✅ Active" };
    showModal("🔒 SSL CERTIFICATE", `
        <div class="font-mono text-xs space-y-2">
            <p><strong>Certificate Authority:</strong> ${data.issuer}</p>
            <p><strong>Status:</strong> ${data.status}</p>
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
            <button onclick="closeModal()" class="w-full bg-[#FFE500] hover:bg-yellow-400 text-[#1E1E1E] font-black py-2 border-2 border-[#1E1E1E] shadow-[3px_3px_0px_0px_#1E1E1E] uppercase tracking-wider text-xs active:translate-x-0.5 active:translate-y-0.5 transition-all">
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
        showModal(t.shopItemTitle, `<p class="font-mono text-xs"><strong>WHOIS Hint:</strong> ${caseData.whoisData ? caseData.whoisData.riskScore : 'Safe'}</p>`);
    } else {
        showModal(t.shopTitle, `<p class="text-red-600 font-bold text-xs">${t.noXpText}</p>`);
    }
}

// --- Исправление привязки полей Конструктора кейсов ---
function addNewCase(event) {
    if (event) event.preventDefault();
    const t = i18n[currentLang];

    const title = document.getElementById("new-title")?.value || "Пользовательский кейс";
    const url = document.getElementById("new-url")?.value || "https://custom-link.kz";
    const category = document.getElementById("new-category")?.value || "Фейк";
    const isFake = document.getElementById("new-isfake")?.value === "true";
    const desc = document.getElementById("new-desc")?.value || "Описание отсутствует.";

    const customCase = {
        id: cases.length + 1,
        url: url,
        mediaIcon: isFake ? "fa-triangle-exclamation" : "fa-circle-check",
        mediaType: "official",
        mediaPreview: null,
        isFake: isFake,
        content: {
            ru: { category: category, title: title, description: desc, explanation: "Пользовательский кейс.", lesson: "" },
            kz: { category: category, title: title, description: desc, explanation: "Пайдаланушы кейсі.", lesson: "" },
            en: { category: category, title: title, description: desc, explanation: "User submitted case.", lesson: "" }
        },
        whoisData: { domain: url.replace("https://", "").replace("http://", "").split("/")[0], created: "Только что", riskScore: isFake ? "HIGH" : "LOW" },
        sslData: { issuer: "Custom SSL", status: "✅ Verified" }
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