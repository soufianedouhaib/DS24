/* ============ DS24 DATA LAYER ============ */

// Category slugs -> translated labels
const CATEGORIES = {
  politique: { ar: "سياسة", fr: "Politique", en: "Politics" },
  economie:  { ar: "اقتصاد", fr: "Économie", en: "Economy" },
  societe:   { ar: "مجتمع", fr: "Société", en: "Society" },
  sport:     { ar: "رياضة", fr: "Sport", en: "Sport" },
  regions:   { ar: "جهات", fr: "Régions", en: "Regions" },
  culture:   { ar: "فن وثقافة", fr: "Culture", en: "Culture" },
  sante:     { ar: "صحة", fr: "Santé", en: "Health" },
  tech:      { ar: "تكنولوجيا", fr: "Technologie", en: "Technology" }
};

const CATEGORY_ORDER = ["politique","economie","societe","sport","regions","culture","sante","tech"];

// UI strings used across all pages
const TEXT = {
  brand_tag:      { ar: "إخبارية", fr: "Actualités", en: "News" },
  home:           { ar: "الرئيسية", fr: "Accueil", en: "Home" },
  search_ph:      { ar: "ابحث في DS24...", fr: "Rechercher sur DS24...", en: "Search DS24..." },
  breaking:       { ar: "عاجل", fr: "En direct", en: "Breaking" },
  ticker:         { ar: "متابعة حية لأبرز مستجدات اليوم في المغرب • تحديثات مستمرة على مدار الساعة • تابعوا آخر الأخبار عبر منصة DS24",
                    fr: "Suivi en direct de l'actualité au Maroc • Mises à jour continues 24h/24 • Suivez les dernières infos sur DS24",
                    en: "Live coverage of today's top stories in Morocco • Updated around the clock • Follow the latest news on DS24" },
  latest_news:    { ar: "آخر الأخبار", fr: "Dernières actualités", en: "Latest News" },
  photos_videos:  { ar: "صور وفيديو", fr: "Photos et vidéos", en: "Photos & Videos" },
  most_read:      { ar: "الأكثر قراءة", fr: "Les plus lus", en: "Most Read" },
  popular_tags:   { ar: "وسوم شائعة", fr: "Tags populaires", en: "Popular Tags" },
  latest_in:      { ar: "أحدث مقالات", fr: "Derniers articles :", en: "Latest in" },
  articles_count: { ar: "مقالات", fr: "articles", en: "articles" },
  next:           { ar: "التالي ‹", fr: "Suivant ›", en: "Next ›" },
  read_more:      { ar: "اقرأ المزيد", fr: "Lire la suite", en: "Read more" },
  related:        { ar: "مقالات ذات صلة", fr: "Articles similaires", en: "Related articles" },
  back_home:      { ar: "العودة إلى الرئيسية", fr: "Retour à l'accueil", en: "Back to home" },
  about:          { ar: "من نحن", fr: "À propos", en: "About us" },
  contact:        { ar: "اتصل بنا", fr: "Contact", en: "Contact" },
  editorial:      { ar: "فريق التحرير", fr: "Rédaction", en: "Editorial team" },
  sections:       { ar: "أقسام", fr: "Rubriques", en: "Sections" },
  services:       { ar: "خدمات", fr: "Services", en: "Services" },
  newsletter:     { ar: "النشرة الإخبارية", fr: "Newsletter", en: "Newsletter" },
  mobile_app:     { ar: "تطبيق الجوال", fr: "Application mobile", en: "Mobile app" },
  ads:            { ar: "الإعلانات", fr: "Publicité", en: "Advertising" },
  follow_us:      { ar: "تابعونا", fr: "Suivez-nous", en: "Follow us" },
  rights:         { ar: "© 2026 DS24 — جميع الحقوق محفوظة", fr: "© 2026 DS24 — Tous droits réservés", en: "© 2026 DS24 — All rights reserved" },
  source_title:   { ar: "مصدر مطلع", fr: "Source proche du dossier", en: "Inside Source" },
  source_text:    { ar: "معطيات جديدة حول ملف تتبعه DS24 منذ أسابيع وتفاصيل لم تكشف بعد حول الجهات المعنية بالموضوع...",
                    fr: "Nouveaux éléments sur un dossier suivi par DS24 depuis des semaines, avec des détails encore non révélés...",
                    en: "New details on a story DS24 has been tracking for weeks, with information not yet made public..." },
  no_results:     { ar: "لا توجد نتائج مطابقة", fr: "Aucun résultat trouvé", en: "No matching results" },
  source_label:   { ar: "المصدر", fr: "Source", en: "Source" },
  read_full:      { ar: "قراءة الخبر كاملا لدى المصدر", fr: "Lire l'article complet chez la source", en: "Read the full story at the source" }
};

/*
  Each article has:
  id, category (slug), img, source_name, source_url,
  time: {ar,fr,en}  -> relative time label
  ar/fr/en: { title, excerpt, body }  (body = array of paragraphs)

  Content below is DS24's own paraphrased summary of real, publicly reported
  stories about Morocco, each credited and linked to the original outlet.
*/
const ARTICLES = [
  // ---------------- POLITIQUE ----------------
  {
    id: 1, category: "politique",
    img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
    source_name: "Hespress",
    source_url: "https://www.hespress.com/%D8%A7%D9%84%D8%AD%D9%83%D9%88%D9%85%D8%A9-%D8%AA%D8%B9%D9%84%D9%86-%D8%A7%D9%84%D8%B9%D9%88%D8%AF%D8%A9-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%B3%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88-1767388.html",
    time: { ar: "قبل أسبوع", fr: "il y a une semaine", en: "a week ago" },
    ar: { title: "الحكومة تعلن التخلي نهائيا عن التوقيت الصيفي بعد نهاية الصيف",
      excerpt: "قرار حكومي بالعودة إلى التوقيت القانوني بشكل دائم انطلاقا من نهاية الموسم الصيفي الحالي.",
      body: [
        "أعلنت الحكومة عزمها التخلي نهائيا عن نظام التوقيت الصيفي (الساعة الإضافية) والعودة بشكل دائم إلى التوقيت القانوني للمملكة، وذلك ابتداء من نهاية صيف 2026.",
        "وأثار القرار نقاشا واسعا بين مؤيد يرى فيه استجابة لمطلب مجتمعي قديم، ومتحفظين من فاعلين اقتصاديين يخشون تأثيره على التنسيق مع الشركاء الأوروبيين.",
        "ويأتي الإعلان في سياق سياسي متزامن مع الاستعداد للاستحقاقات الانتخابية المقبلة."
      ]},
    fr: { title: "Le gouvernement annonce l'abandon définitif de l'heure d'été",
      excerpt: "Retour permanent à l'heure légale du Royaume dès la fin de la saison estivale en cours.",
      body: [
        "Le gouvernement a annoncé son intention d'abandonner définitivement le système de l'heure d'été et de revenir de façon permanente à l'heure légale du Royaume, à partir de la fin de l'été 2026.",
        "La décision a suscité un large débat entre partisans y voyant une réponse à une demande sociale ancienne, et acteurs économiques inquiets de son impact sur la coordination avec les partenaires européens.",
        "L'annonce intervient dans un contexte politique marqué par la préparation des prochaines échéances électorales."
      ]},
    en: { title: "Government announces permanent end to daylight saving time",
      excerpt: "A permanent return to the Kingdom's standard time starting at the end of the current summer season.",
      body: [
        "The government announced plans to permanently abandon daylight saving time and return to Morocco's standard time for good, starting at the end of summer 2026.",
        "The decision sparked wide debate, with supporters calling it a response to a long-standing public demand, while some business figures worry about its effect on coordination with European partners.",
        "The announcement comes against a political backdrop shaped by preparations for upcoming elections."
      ]}
  },
  {
    id: 2, category: "politique",
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    source_name: "Hespress",
    source_url: "https://www.hespress.com/",
    time: { ar: "قبل 3 أيام", fr: "il y a 3 jours", en: "3 days ago" },
    ar: { title: "استفسارات عاجلة لوزارة الداخلية بشأن تضارب المصالح في جهتين كبريين",
      excerpt: "مراسلات رسمية إلى مسؤولين ترابيين بالدار البيضاء-سطات والرباط-سلا-القنيطرة حول ملفات محلية حساسة.",
      body: [
        "وجّهت المصالح المركزية بوزارة الداخلية استفسارات عاجلة إلى مسؤولين ترابيين في عدد من عمالات وأقاليم المملكة، بدءا بجهتي الدار البيضاء-سطات والرباط-سلا-القنيطرة.",
        "وتتعلق الاستفسارات بأسباب تفاقم حالات تضارب المصالح داخل بعض الجماعات الترابية، واستمرار تأثير شبكات مستشارين خاصين في تدبير الشأن المحلي.",
        "وتندرج الخطوة ضمن مساع أوسع لتعزيز الحكامة الترابية ومحاربة اختلالات التدبير المحلي."
      ]},
    fr: { title: "Le ministère de l'Intérieur exige des explications sur des conflits d'intérêts locaux",
      excerpt: "Des courriers officiels envoyés à des responsables territoriaux de Casablanca-Settat et Rabat-Salé-Kénitra sur des dossiers sensibles.",
      body: [
        "Les services centraux du ministère de l'Intérieur ont adressé des demandes urgentes à des responsables territoriaux dans plusieurs provinces du Royaume, à commencer par les régions de Casablanca-Settat et Rabat-Salé-Kénitra.",
        "Ces demandes portent sur l'aggravation de cas de conflits d'intérêts au sein de certaines collectivités territoriales, et sur l'influence persistante de réseaux de conseillers privés dans la gestion des affaires locales.",
        "Cette démarche s'inscrit dans un effort plus large de renforcement de la gouvernance territoriale."
      ]},
    en: { title: "Interior Ministry demands answers over local conflicts of interest",
      excerpt: "Official letters sent to territorial officials in Casablanca-Settat and Rabat-Salé-Kénitra over sensitive local matters.",
      body: [
        "The Interior Ministry's central departments sent urgent inquiries to territorial officials in several provinces, starting with the Casablanca-Settat and Rabat-Salé-Kénitra regions.",
        "The inquiries concern worsening conflict-of-interest cases within some local councils, and the continued influence of private advisory networks over local governance.",
        "The move is part of a broader push to strengthen territorial governance and address local management shortcomings."
      ]}
  },

  // ---------------- ECONOMIE ----------------
  {
    id: 3, category: "economie",
    img: "https://images.unsplash.com/photo-1544376798-89aa6b82c6dd?w=800&q=80",
    source_name: "Hespress",
    source_url: "https://www.hespress.com/%D9%87%D8%A8%D9%88%D8%B7-%D8%A7%D9%84%D9%86%D9%81%D8%B7-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A-%D9%8A%D9%86%D8%B9%D8%B4-%D8%A2%D9%85%D8%A7%D9%84-%D8%A7%D9%86%D8%AE%D9%81%D8%A7%D8%B6-%D8%A3%D8%B3-1760896.html",
    time: { ar: "قبل 3 أسابيع", fr: "il y a 3 semaines", en: "3 weeks ago" },
    ar: { title: "تقلبات أسعار النفط العالمية تنعش آمال المغاربة في وقود أرخص",
      excerpt: "خبراء اقتصاديون يتوقعون انعكاس تراجع الأسعار العالمية على المحطات المغربية خلال التحيينات القادمة.",
      body: [
        "توقع خبراء اقتصاديون مغاربة أن تنعكس التقلبات الأخيرة في أسعار النفط العالمية على أسعار المحروقات بالمحطات الوطنية، مع كل تحيين نصف شهري للأسعار.",
        "وأوضح الخبير الاقتصادي إدريس الفينة أن أسعار المحروقات مرتبطة بشكل وثيق بما يقع في السوق الدولية، مشيرا إلى تراجع لافت في أسعار خامي برنت وغرب تكساس.",
        "ويترقب المستهلكون المغاربة أثر هذا التراجع على جيوبهم في التحيين المقبل للأسعار."
      ]},
    fr: { title: "Les fluctuations du pétrole mondial nourrissent l'espoir d'un carburant moins cher",
      excerpt: "Des économistes anticipent une répercussion de la baisse des prix mondiaux sur les stations marocaines.",
      body: [
        "Des économistes marocains anticipent que les récentes fluctuations des prix pétroliers mondiaux se répercuteront sur les prix des carburants dans les stations nationales, lors des prochaines actualisations bimensuelles.",
        "L'économiste Idriss Elfina a souligné que les prix des hydrocarbures restent étroitement liés à l'évolution du marché international, notant un recul notable des cours du Brent et du WTI.",
        "Les consommateurs marocains attendent de voir l'effet de cette baisse sur leur budget lors de la prochaine actualisation des prix."
      ]},
    en: { title: "Global oil price swings fuel hopes of cheaper fuel in Morocco",
      excerpt: "Economists expect the drop in world prices to filter through to Moroccan pumps in coming price updates.",
      body: [
        "Moroccan economists expect recent swings in global oil prices to feed through to fuel prices at national pumps at the next bi-monthly price update.",
        "Economist Idriss Elfina noted that fuel prices remain closely tied to international market movements, pointing to a notable drop in Brent and WTI crude prices.",
        "Moroccan consumers are waiting to see how much of that drop reaches their wallets at the next price adjustment."
      ]}
  },
  {
    id: 4, category: "economie",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    source_name: "Maroc Medias (revue de presse)",
    source_url: "https://www.marocmedias.com/162084/%D8%A3%D8%A8%D8%B1%D8%B2-%D8%A7%D9%87%D8%AA%D9%85%D8%A7%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%B5%D8%AD%D9%81-%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9-15-%D9%8A%D9%88%D9%86%D9%8A/",
    time: { ar: "قبل أسبوعين", fr: "il y a deux semaines", en: "two weeks ago" },
    ar: { title: "الحكومة تعلن تسارع النمو الاقتصادي نحو 5.2 بالمائة سنة 2026",
      excerpt: "بايتاس يكشف تحسن مؤشرات النمو والمداخيل الجمركية وسط توقعات متفائلة من خبراء اقتصاديين.",
      body: [
        "أكد الناطق الرسمي باسم الحكومة، مصطفى بايتاس، أن النمو الاقتصادي انتقل من 4.4 بالمائة سنة 2024 إلى 4.9 بالمائة سنة 2025، مع توقعات بأن يناهز 5.2 بالمائة خلال 2026.",
        "ومن جهته، رأى الخبير الاقتصادي محمد جدري أن بلوغ نمو يتراوح بين 5.2 و5.3 بالمائة أصبح واردا، مدفوعا بأداء جيد للقطاعات غير الفلاحية.",
        "كما سجلت المداخيل الجمركية ارتفاعا بنسبة 7.9 بالمائة عند متم شهر ماي مقارنة بالفترة نفسها من السنة الماضية، لتتجاوز 42 مليار درهم."
      ]},
    fr: { title: "Le gouvernement annonce une accélération de la croissance à 5,2% en 2026",
      excerpt: "Baitas annonce l'amélioration des indicateurs de croissance et des recettes douanières, selon des économistes optimistes.",
      body: [
        "Le porte-parole du gouvernement, Mustapha Baitas, a affirmé que la croissance économique est passée de 4,4% en 2024 à 4,9% en 2025, avec des prévisions avoisinant 5,2% pour 2026.",
        "L'économiste Mohamed Jadri estime qu'une croissance de 5,2 à 5,3% est désormais envisageable, portée par de bonnes performances des secteurs non agricoles.",
        "Les recettes douanières ont par ailleurs progressé de 7,9% à fin mai par rapport à la même période l'an dernier, dépassant 42 milliards de dirhams."
      ]},
    en: { title: "Government announces economic growth accelerating to 5.2% in 2026",
      excerpt: "Officials cite improving growth and customs revenue figures, with economists sounding optimistic.",
      body: [
        "Government spokesperson Mustapha Baitas said economic growth rose from 4.4% in 2024 to 4.9% in 2025, with projections of nearly 5.2% for 2026.",
        "Economist Mohamed Jadri said growth of 5.2 to 5.3% now looks achievable, driven by strong performance in non-agricultural sectors.",
        "Customs revenue also rose 7.9% by the end of May compared with the same period last year, topping 42 billion dirhams."
      ]}
  },

  // ---------------- SOCIETE ----------------
  {
    id: 5, category: "societe",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    source_name: "The Voice",
    source_url: "https://thevoice.ma/%D8%AD%D9%88%D8%A7%D8%AF%D8%AB-%D8%A7%D9%84%D8%B3%D9%8A%D8%B1-%D8%AA%D8%AE%D9%84%D9%81-42-%D9%82%D8%AA%D9%8A%D9%84%D8%A7-%D9%882990-%D8%AC%D8%B1%D9%8A%D8%AD%D8%A7-%D8%AE%D9%84%D8%A7%D9%84-%D8%A3%D8%B3/",
    time: { ar: "قبل يومين", fr: "il y a 2 jours", en: "2 days ago" },
    ar: { title: "حوادث السير تخلف 42 قتيلا وقرابة 3000 جريح خلال أسبوع واحد",
      excerpt: "حصيلة ثقيلة داخل المناطق الحضرية تعيد النقاش حول السلامة الطرقية إلى الواجهة.",
      body: [
        "لقي 42 شخصا مصرعهم وأصيب 2990 آخرون بجروح، من بينها 131 إصابة بليغة، في 2184 حادثة سير سجلت داخل المناطق الحضرية خلال أسبوع واحد فقط.",
        "وتعيد هذه الحصيلة الثقيلة النقاش العمومي حول فعالية إجراءات السلامة الطرقية المعتمدة، وسط دعوات متكررة لتشديد الرقابة والعقوبات."
      ]},
    fr: { title: "Les accidents de la route font 42 morts et près de 3000 blessés en une semaine",
      excerpt: "Un bilan lourd en zones urbaines relance le débat sur la sécurité routière.",
      body: [
        "42 personnes ont perdu la vie et 2990 autres ont été blessées, dont 131 grièvement, dans 2184 accidents de la circulation recensés en zones urbaines en une seule semaine.",
        "Ce lourd bilan relance le débat public sur l'efficacité des mesures de sécurité routière, avec des appels récurrents à un renforcement des contrôles et des sanctions."
      ]},
    en: { title: "Traffic accidents kill 42, injure nearly 3,000 in a single week",
      excerpt: "A heavy urban toll reignites public debate over road safety measures.",
      body: [
        "42 people were killed and 2,990 others injured, 131 of them seriously, in 2,184 traffic accidents recorded in urban areas over a single week.",
        "The heavy toll has reignited public debate over the effectiveness of road safety measures, with renewed calls for tighter enforcement and penalties."
      ]}
  },
  {
    id: 6, category: "societe",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    source_name: "Hespress",
    source_url: "https://www.hespress.com/",
    time: { ar: "قبل 5 أيام", fr: "il y a 5 jours", en: "5 days ago" },
    ar: { title: "توصية بإلغاء سقف السن في امتحان ولوج مهنة المحاماة",
      excerpt: "مجلس المنافسة يقترح رفع تحديد سن 45 سنة أسوة بتجارب دولية مقارنة.",
      body: [
        "أوصى مجلس المنافسة بإلغاء تسقيف سن اجتياز امتحان الولوج إلى مهنة المحاماة، المحدد حاليا في 45 سنة، بعد أشهر من النقاش داخل المهنة.",
        "وتستند التوصية إلى عدد من التجارب الدولية المقارنة، من بينها فرنسا وألمانيا وإيطاليا، التي لا تعتمد سقفا زمنيا أقصى لولوج المهنة."
      ]},
    fr: { title: "Recommandation de supprimer la limite d'âge pour l'examen d'avocat",
      excerpt: "Le Conseil de la concurrence propose de lever le plafond de 45 ans, en s'inspirant d'expériences internationales.",
      body: [
        "Le Conseil de la concurrence a recommandé de supprimer le plafond d'âge de 45 ans actuellement imposé pour se présenter à l'examen d'accès à la profession d'avocat, après des mois de débat au sein de la profession.",
        "Cette recommandation s'appuie sur plusieurs expériences internationales comparables, dont la France, l'Allemagne et l'Italie, qui n'imposent pas de limite d'âge maximale pour accéder à la profession."
      ]},
    en: { title: "Recommendation to scrap age cap on bar exam eligibility",
      excerpt: "Competition Council proposes lifting the 45-year age limit, citing comparable international practices.",
      body: [
        "Morocco's Competition Council has recommended scrapping the current 45-year age cap for taking the bar exam, following months of debate within the legal profession.",
        "The recommendation draws on comparable practices in countries such as France, Germany, and Italy, which impose no maximum age limit for entering the legal profession."
      ]}
  },

  // ---------------- SPORT ----------------
  {
    id: 7, category: "sport",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
    source_name: "اللجنة الوطنية الأولمبية المغربية (CNOM)",
    source_url: "https://www.cnom.org.ma/index.php/ar/kas-alalm-fifa-2026-almntkhb-almghrby-ytahl-aly-thmn-alnhayy",
    time: { ar: "قبل يومين", fr: "il y a 2 jours", en: "2 days ago" },
    ar: { title: "المغرب يقصي هولندا بركلات الترجيح ويبلغ ثمن نهائي المونديال",
      excerpt: "أسود الأطلس يتأهلون بفوز مثير 3-2 بعد تعادل 1-1 في الوقتين الأصلي والإضافي.",
      body: [
        "تأهل المنتخب الوطني المغربي إلى ثمن نهائي كأس العالم 2026 عقب فوزه على هولندا بركلات الترجيح 3-2، بعد تعادل الفريقين 1-1 في الوقتين الأصلي والإضافي.",
        "وأدرك المدافع عيسى ديوب هدف التعادل المغربي برأسية في الوقت المحتسب بدل الضائع، قبل أن يحسم إسماعيل الصيباري المباراة لصالح 'أسود الأطلس' في الركلات الترجيحية.",
        "ويحافظ المنتخب المغربي بهذا التأهل على سجله دون هزيمة منذ انطلاق البطولة، بعد إنهاء دور المجموعات في المركز الثاني."
      ]},
    fr: { title: "Le Maroc élimine les Pays-Bas aux tirs au but et file en 8es de finale",
      excerpt: "Les Lions de l'Atlas se qualifient après une victoire 3-2 aux tirs au but, suite à un match nul 1-1.",
      body: [
        "L'équipe nationale marocaine s'est qualifiée pour les huitièmes de finale de la Coupe du monde 2026 en battant les Pays-Bas 3-2 aux tirs au but, après un score de 1-1 à l'issue des prolongations.",
        "Le défenseur Issa Diop avait égalisé de la tête dans le temps additionnel, avant qu'Ismael Saibari ne scelle la qualification marocaine lors de la séance de tirs au but.",
        "Grâce à cette qualification, le Maroc reste invaincu depuis le début du tournoi, après avoir terminé deuxième de son groupe."
      ]},
    en: { title: "Morocco eliminates Netherlands on penalties, reaches World Cup round of 16",
      excerpt: "The Atlas Lions advance after a thrilling 3-2 shootout win following a 1-1 draw.",
      body: [
        "Morocco's national team qualified for the World Cup 2026 round of 16 by beating the Netherlands 3-2 on penalties, after the match finished 1-1 following extra time.",
        "Defender Issa Diop headed in Morocco's equalizer in stoppage time, before Ismael Saibari sealed Morocco's win in the penalty shootout.",
        "The result keeps Morocco unbeaten since the tournament began, after finishing second in their group."
      ]}
  },
  {
    id: 8, category: "sport",
    img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
    source_name: "Hespress",
    source_url: "https://www.hespress.com/%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%A3%D9%85%D8%A7%D9%85-%D9%83%D9%86%D8%AF%D8%A7-%D8%A8%D8%B0%D9%83%D8%B1%D9%8A%D8%A7%D8%AA-%D9%82%D8%B7%D8%B1-%D9%88%D9%87%D8%B0%D9%87-%D8%A3%D9%88%D8%B1%D8%A7%D9%82-%D8%A7%D9%84%D8%B9%D8%A8%D9%88%D8%B1-%D8%A5%D9%84%D9%89-%D8%B1%D8%A8%D8%B9-%D8%A7-1770071.html",
    time: { ar: "قبل يوم", fr: "il y a un jour", en: "1 day ago" },
    ar: { title: "المغرب يواجه كندا السبت في هيوستن.. ولارام تسير جسرا جويا للمشجعين",
      excerpt: "موعد قوي لبلوغ ربع النهائي، مع تنظيم رحلات خاصة لدعم 'أسود الأطلس' في أمريكا.",
      body: [
        "يلتقي المنتخب المغربي نظيره الكندي يوم السبت 4 يوليوز في ملعب هيوستن، ضمن دور ثمن نهائي كأس العالم 2026، سعيا لبلوغ ربع النهائي.",
        "وأعلنت الخطوط الملكية المغربية برمجة رحلات إضافية لتسهيل تنقل المشجعين المغاربة إلى الولايات المتحدة لمؤازرة الفريق الوطني في هذه المواجهة الحاسمة.",
        "ويملك المنتخب المغربي سجلا إيجابيا أمام كندا في المواجهات الرسمية والودية السابقة بين الفريقين."
      ]},
    fr: { title: "Le Maroc affronte le Canada samedi à Houston, avec un pont aérien pour les supporters",
      excerpt: "Un rendez-vous décisif pour les quarts de finale, avec des vols spéciaux organisés pour les supporters.",
      body: [
        "L'équipe nationale marocaine affronte le Canada samedi 4 juillet au stade de Houston, en huitièmes de finale de la Coupe du monde 2026, avec l'ambition d'atteindre les quarts.",
        "La Royal Air Maroc a annoncé la programmation de vols supplémentaires pour faciliter le déplacement des supporters marocains aux États-Unis pour ce match décisif.",
        "Le Maroc affiche un bilan favorable face au Canada lors de leurs précédentes confrontations, officielles comme amicales."
      ]},
    en: { title: "Morocco faces Canada Saturday in Houston, with extra flights laid on for fans",
      excerpt: "A decisive fixture for a quarterfinal berth, with special flights arranged for traveling supporters.",
      body: [
        "Morocco's national team faces Canada on Saturday, July 4, at Houston Stadium in the World Cup 2026 round of 16, aiming to reach the quarterfinals.",
        "Royal Air Maroc announced additional flights to make it easier for Moroccan fans to travel to the United States for this decisive match.",
        "Morocco holds a favorable record against Canada across their previous official and friendly meetings."
      ]}
  },

  // ---------------- REGIONS ----------------
  {
    id: 9, category: "regions",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    source_name: "Hespress",
    source_url: "https://www.hespress.com/%D9%82%D9%85%D8%A9-%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9-%D8%A8%D8%A7%D9%84%D8%B1%D8%A8%D8%A7%D8%B7-%D8%AA%D9%81%D9%83%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%A6%D9%85-%D8%A7%D9%84%D8%B1-1758722.html",
    time: { ar: "قبل 3 أسابيع", fr: "il y a 3 semaines", en: "3 weeks ago" },
    ar: { title: "قمة تقنية عالمية بثلاث مدن مغربية حول 'التوائم الرقمية' للتنمية الترابية",
      excerpt: "الرباط والقنيطرة وسطات تحتضن أشغال قمة دولية حول توظيف التكنولوجيا في التخطيط الترابي.",
      body: [
        "احتضنت الرباط ثم القنيطرة وسطات أشغال قمة عالمية حول تكنولوجيا 'التوائم الرقمية'، بمشاركة مسؤولين حكوميين وخبراء دوليين وشركات تكنولوجية كبرى.",
        "وتهدف القمة إلى بحث سبل توظيف هذه التقنية في نمذجة الأنظمة الترابية الحية، بما يساعد على استباق أزمات من قبيل الإجهاد المائي والتغير المناخي.",
        "وتوزع برنامج القمة على أربعة أيام بمشاركة جامعات مغربية ومنظمات دولية متخصصة."
      ]},
    fr: { title: "Un sommet technologique mondial dans trois villes marocaines sur les 'jumeaux numériques'",
      excerpt: "Rabat, Kénitra et Settat accueillent un sommet international sur la technologie au service du développement territorial.",
      body: [
        "Rabat, puis Kénitra et Settat ont accueilli les travaux d'un sommet mondial consacré à la technologie des 'jumeaux numériques', réunissant responsables gouvernementaux, experts internationaux et grandes entreprises technologiques.",
        "Le sommet vise à explorer l'usage de cette technologie pour modéliser les systèmes territoriaux vivants, afin d'anticiper des crises comme le stress hydrique et le changement climatique.",
        "Le programme s'est étalé sur quatre jours, avec la participation d'universités marocaines et d'organisations internationales spécialisées."
      ]},
    en: { title: "Global tech summit across three Moroccan cities on 'digital twins' for regional development",
      excerpt: "Rabat, Kenitra, and Settat host an international summit on using technology for territorial planning.",
      body: [
        "Rabat, followed by Kenitra and Settat, hosted a global summit on 'digital twin' technology, bringing together government officials, international experts, and major tech companies.",
        "The summit aims to explore using the technology to model living territorial systems, helping to anticipate crises such as water stress and climate change.",
        "The four-day program included the participation of Moroccan universities and specialized international organizations."
      ]}
  },
  {
    id: 10, category: "regions",
    img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
    source_name: "Kech24",
    source_url: "https://kech24.com/%D8%A3%D9%88%D8%B1%D8%A7%D8%B4-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-%D9%83%D8%A8%D8%B1%D9%89-%D9%84%D8%AA%D8%A3%D9%87%D9%8A%D9%84-%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%88%D8%B1-%D8%A7%D9%84%D8%AD%D8%B6%D8%B1%D9%8A%D8%A9-%D8%A8%D9%85%D8%B1%D8%A7%D9%83%D8%B4-%D9%88%D9%83%D8%B4%D9%8024-%D8%AA%D9%83%D8%B4%D9%81-%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84.html",
    time: { ar: "قبل 6 أيام", fr: "il y a 6 jours", en: "6 days ago" },
    ar: { title: "عمدة مراكش تعقد لقاء تنسيقيا حول تنظيم ساحة جامع الفنا",
      excerpt: "اجتماع موسع مع الباعة وممارسي فن 'الحلقة' لمتابعة تنفيذ مخطط تأهيل الفضاء التراثي.",
      body: [
        "عقدت فاطمة الزهراء المنصوري، عمدة مدينة مراكش، اجتماعا تنسيقيا موسعا مع ممثلي مختلف الأنشطة المهنية والفنية بساحة جامع الفنا.",
        "وشارك في اللقاء باعة المأكولات وممارسو فن 'الحلقة'، لمتابعة المراحل الأخيرة من تنفيذ مخطط تنظيم الساحة والحفاظ على طابعها التراثي.",
        "وتندرج هذه الخطوة ضمن برنامج أوسع لتأهيل المحاور الحضرية بمراكش، يشمل أيضا مشاريع لتوسيع مواقف السيارات بالمدينة القديمة."
      ]},
    fr: { title: "La maire de Marrakech tient une réunion sur l'organisation de la place Jemaa el-Fna",
      excerpt: "Rencontre élargie avec les vendeurs et artistes de la 'halqa' pour suivre le plan d'aménagement du site historique.",
      body: [
        "Fatima Zahra Mansouri, maire de Marrakech, a tenu une réunion de coordination élargie avec les représentants des différentes activités professionnelles et artistiques de la place Jemaa el-Fna.",
        "Vendeurs de mets traditionnels et artistes de la 'halqa' ont participé à la rencontre, pour suivre les dernières étapes du plan d'organisation de la place et la préservation de son caractère patrimonial.",
        "Cette démarche s'inscrit dans un programme plus large de réaménagement des axes urbains de Marrakech, incluant aussi des projets d'extension de parkings dans la médina."
      ]},
    en: { title: "Marrakech mayor holds coordination meeting on Jemaa el-Fna square",
      excerpt: "A broad meeting with food vendors and traditional performers to follow up on the heritage site's organization plan.",
      body: [
        "Marrakech mayor Fatima Zahra Mansouri held an expanded coordination meeting with representatives of the various professional and artistic activities on Jemaa el-Fna square.",
        "Food vendors and traditional 'halqa' performers took part in the meeting to follow the final stages of the square's organization plan and the preservation of its heritage character.",
        "The move is part of a wider program to upgrade Marrakech's urban thoroughfares, which also includes projects to expand parking in the old medina."
      ]}
  },

  // ---------------- CULTURE ----------------
  {
    id: 11, category: "culture",
    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    source_name: "Hespress",
    source_url: "https://www.hespress.com/%D8%AA%D9%86%D9%88%D8%B9-%D8%AB%D9%82%D8%A7%D9%81%D9%8A-%D9%8A%D9%81%D8%AA%D8%AA%D8%AD-%D9%85%D9%87%D8%B1%D8%AC%D8%A7%D9%86-%D9%83%D9%86%D8%A7%D9%88%D8%A9-1767916.html",
    time: { ar: "قبل أسبوع", fr: "il y a une semaine", en: "a week ago" },
    ar: { title: "التنوع الثقافي يفتتح مهرجان كناوة بالصويرة",
      excerpt: "دورة جديدة من المهرجان الموسيقي تجمع فنانين من مختلف الآفاق حول تراث كناوة العريق.",
      body: [
        "انطلقت بمدينة الصويرة فعاليات دورة جديدة من مهرجان كناوة وموسيقى العالم، بحلة تحتفي بالتنوع الثقافي وتراث كناوة الروحي.",
        "ويجمع برنامج المهرجان بين فناني كناوة المغاربة وموسيقيين من ثقافات مختلفة، في عروض حية تتوزع على عدة منصات بالمدينة الساحلية.",
        "ويعد هذا المهرجان من أبرز التظاهرات الصيفية التي تستقطب زوارا من داخل المغرب وخارجه."
      ]},
    fr: { title: "La diversité culturelle à l'honneur à l'ouverture du festival Gnaoua à Essaouira",
      excerpt: "Une nouvelle édition du festival musical réunit des artistes d'horizons variés autour du patrimoine gnaoua.",
      body: [
        "Essaouira a accueilli l'ouverture d'une nouvelle édition du Festival Gnaoua et Musiques du Monde, placée sous le signe de la diversité culturelle et du patrimoine spirituel gnaoua.",
        "La programmation réunit des artistes gnaoua marocains et des musiciens d'horizons variés, dans des concerts répartis sur plusieurs scènes de la ville côtière.",
        "Ce festival compte parmi les rendez-vous estivaux majeurs, attirant des visiteurs du Maroc et de l'étranger."
      ]},
    en: { title: "Cultural diversity opens Gnaoua Festival in Essaouira",
      excerpt: "A new edition of the music festival brings together artists from varied backgrounds around Gnaoua heritage.",
      body: [
        "Essaouira hosted the opening of a new edition of the Gnaoua World Music Festival, celebrating cultural diversity and Gnaoua's spiritual heritage.",
        "The lineup brings together Moroccan Gnaoua artists and musicians from varied backgrounds, in live shows spread across several stages in the coastal city.",
        "The festival ranks among the major summer events, drawing visitors from Morocco and abroad."
      ]}
  },
  {
    id: 12, category: "culture",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    source_name: "Hespress",
    source_url: "https://www.hespress.com/%D8%A7%D9%84%D8%B1%D8%A8%D8%A7%D8%B7-%D8%AA%D8%B3%D8%AA%D8%B9%D8%AF-%D9%84%D8%A5%D8%B7%D9%84%D8%A7%D9%82-%D9%85%D9%88%D8%A7%D8%B2%D9%8A%D9%86-2026-1762722.html",
    time: { ar: "قبل أسبوعين", fr: "il y a deux semaines", en: "two weeks ago" },
    ar: { title: "مهرجان موازين يختتم دورته الـ21 بين الرباط وسلا",
      excerpt: "تسعة أيام من العروض المجانية جمعت نجوما عربا وعالميين مع الاحتفاء بالمواهب المغربية.",
      body: [
        "اختتمت العاصمة الرباط، رفقة مدينة سلا، فعاليات الدورة الحادية والعشرين من مهرجان 'موازين.. إيقاعات العالم'، بعد تسعة أيام من العروض الفنية المجانية.",
        "وجمع البرنامج بين كبار نجوم الأغنية العربية وأسماء بارزة في الساحة الموسيقية العالمية، إلى جانب فنانين يمثلون الموسيقى الإفريقية والأمازيغية.",
        "وحرصت إدارة المهرجان على إفساح المجال للمواهب المغربية الصاعدة إلى جانب الأسماء اللامعة."
      ]},
    fr: { title: "Le festival Mawazine clôture sa 21e édition entre Rabat et Salé",
      excerpt: "Neuf jours de concerts gratuits ont réuni des stars arabes et internationales, avec une place pour les talents marocains.",
      body: [
        "Rabat, aux côtés de Salé, a clôturé la 21e édition du festival 'Mawazine, Rythmes du Monde', après neuf jours de concerts gratuits.",
        "La programmation a réuni de grandes stars de la chanson arabe et des noms marquants de la scène musicale mondiale, aux côtés d'artistes représentant les musiques africaines et amazighes.",
        "L'organisation du festival a tenu à faire une place aux jeunes talents marocains aux côtés des grandes têtes d'affiche."
      ]},
    en: { title: "Mawazine Festival wraps 21st edition across Rabat and Salé",
      excerpt: "Nine days of free concerts brought together Arab and international stars, with room for rising Moroccan talent.",
      body: [
        "Rabat, together with Salé, closed out the 21st edition of the Mawazine Rhythms of the World Festival after nine days of free concerts.",
        "The lineup brought together major Arab music stars and prominent names from the global music scene, alongside artists representing African and Amazigh music.",
        "Festival organizers made a point of giving rising Moroccan talent a place alongside the headline acts."
      ]}
  },

  // ---------------- SANTE ----------------
  {
    id: 13, category: "sante",
    img: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&q=80",
    source_name: "Hespress",
    source_url: "https://www.hespress.com/%D9%85%D9%88%D8%AC%D8%A9-%D8%A7%D9%84%D8%AD%D8%B1-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%AA%D8%B3%D8%AA%D9%86%D9%81%D8%B1-%D8%A7%D9%84%D8%A3%D8%B7%D8%A8%D8%A7%D8%A1-%D9%88%D8%AF%D8%B9-1768512.html",
    time: { ar: "قبل 4 أيام", fr: "il y a 4 jours", en: "4 days ago" },
    ar: { title: "موجة حر تستنفر الأطباء ودعوات لحماية الأطفال والمسنين",
      excerpt: "نشرة إنذارية برتقالية تتوقع درجات حرارة بين 38 و45 درجة في عدد من أقاليم المملكة.",
      body: [
        "دعا أطباء إلى الالتزام بإجراءات وقائية صارمة لمواجهة موجة حر عرفتها المملكة، محذرين من مضاعفات صحية خطيرة قد تطال الأطفال والمسنين وذوي الأمراض المزمنة.",
        "وكانت المديرية العامة للأرصاد الجوية قد أصدرت نشرة إنذارية من مستوى يقظة برتقالي، توقعت فيها درجات حرارة تتراوح بين 38 و45 درجة مئوية في عدد من الأقاليم.",
        "ونبه مختصون إلى أهمية استعمال الكريمات الواقية وتجنب التعرض المباشر للشمس، خصوصا بالنسبة للرضع وكبار السن."
      ]},
    fr: { title: "Une vague de chaleur mobilise les médecins, appels à protéger enfants et seniors",
      excerpt: "Un bulletin d'alerte orange prévoit des températures entre 38 et 45°C dans plusieurs provinces.",
      body: [
        "Des médecins ont appelé à respecter des mesures de prévention strictes face à une vague de chaleur touchant le Royaume, mettant en garde contre des complications de santé graves pouvant toucher enfants, seniors et malades chroniques.",
        "La Direction générale de la météorologie avait émis un bulletin d'alerte orange, prévoyant des températures comprises entre 38 et 45°C dans plusieurs provinces.",
        "Les spécialistes ont insisté sur l'importance d'utiliser des crèmes solaires et d'éviter l'exposition directe au soleil, en particulier pour les nourrissons et les personnes âgées."
      ]},
    en: { title: "Heat wave puts doctors on alert, calls to protect children and the elderly",
      excerpt: "An orange weather alert forecasts temperatures between 38 and 45°C in several provinces.",
      body: [
        "Doctors called for strict preventive measures amid a heat wave affecting the Kingdom, warning of serious health complications that could affect children, the elderly, and people with chronic illnesses.",
        "Morocco's national weather service had issued an orange-level alert, forecasting temperatures between 38 and 45°C in several provinces.",
        "Specialists stressed the importance of using sunscreen and avoiding direct sun exposure, particularly for infants and the elderly."
      ]}
  },
  {
    id: 14, category: "sante",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    source_name: "وزارة الصحة والحماية الاجتماعية (عبر ExpressTV)",
    source_url: "https://www.expresstv.ma/en-vedette/125474/",
    time: { ar: "في وقت سابق من هذا العام", fr: "plus tôt cette année", en: "earlier this year" },
    ar: { title: "المغرب يجدد التزامه بحماية صحة الأطفال عبر التلقيح المجاني",
      excerpt: "وزارة الصحة تؤكد استمرار البرنامج الوطني للتمنيع الذي يغطي مجانا اثني عشر مرضا.",
      body: [
        "أكدت وزارة الصحة والحماية الاجتماعية أن التلقيح يشكل ركيزة أساسية للرعاية الصحية الأولية وحقا جوهريا لحماية الأطفال، في إطار الاحتفاء بالأسبوع العالمي للتلقيح.",
        "ويواصل البرنامج الوطني للتمنيع جهوده لتحقيق تغطية تلقيحية مثلى، عبر ضمان مجانية اللقاحات وتوفيرها بانتظام للوقاية من اثني عشر مرضا.",
        "ودعت الوزارة الأسر ومهنيي الصحة إلى مواصلة التعبئة لإنجاح هذا البرنامج الوطني."
      ]},
    fr: { title: "Le Maroc réaffirme son engagement pour la santé infantile via la vaccination gratuite",
      excerpt: "Le ministère de la Santé confirme la poursuite du programme national de vaccination couvrant douze maladies.",
      body: [
        "Le ministère de la Santé et de la Protection sociale a affirmé que la vaccination constitue un pilier essentiel des soins de santé primaires, à l'occasion de la Semaine mondiale de la vaccination.",
        "Le Programme national d'immunisation poursuit ses efforts pour une couverture vaccinale optimale, en garantissant la gratuité et la disponibilité régulière des vaccins contre douze maladies.",
        "Le ministère a appelé les familles et les professionnels de santé à poursuivre leur mobilisation pour la réussite de ce programme national."
      ]},
    en: { title: "Morocco reaffirms commitment to child health through free vaccination",
      excerpt: "The Health Ministry confirms its national immunization program continues to cover twelve diseases at no cost.",
      body: [
        "Morocco's Health and Social Protection Ministry said vaccination remains a core pillar of primary healthcare, marking World Immunization Week.",
        "The National Immunization Program continues working toward optimal vaccine coverage, ensuring vaccines against twelve diseases remain free and consistently available.",
        "The ministry called on families and health professionals to keep up their engagement to ensure the program's success."
      ]}
  },

  // ---------------- TECH ----------------
  {
    id: 15, category: "tech",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    source_name: "Maroc Medias (revue de presse)",
    source_url: "https://www.marocmedias.com/162084/%D8%A3%D8%A8%D8%B1%D8%B2-%D8%A7%D9%87%D8%AA%D9%85%D8%A7%D9%85%D8%A7%D8%AA-%D8%A7%D9%84%D8%B5%D8%AD%D9%81-%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9-15-%D9%8A%D9%88%D9%86%D9%8A/",
    time: { ar: "قبل أسبوعين", fr: "il y a deux semaines", en: "two weeks ago" },
    ar: { title: "مشروع قانون جديد للإدارة الرقمية يتضمن مقتضيات خاصة بالذكاء الاصطناعي",
      excerpt: "الوزيرة المنتدبة للانتقال الرقمي تعلن عن النص وسط دينامية تكنولوجية متسارعة ودعم دولي.",
      body: [
        "أعلنت الوزيرة المنتدبة المكلفة بالانتقال الرقمي، أمل الفلاح السغروشني، عن إعداد مشروع قانون يتعلق بالإدارة الرقمية يتضمن مقتضيات خاصة بالذكاء الاصطناعي.",
        "وتندرج هذه الخطوة ضمن سلسلة مبادرات لتعزيز الابتكار الرقمي، من بينها معهد 'الجزري روت'، وتنظيم هاكاثون وطني للذكاء الاصطناعي، ومبادرة 'RallyIA Future Lab' بمرزوكة.",
        "وفي السياق ذاته، وافق البنك الدولي على برنامجين بقيمة إجمالية 650 مليون دولار لدعم التحول الرقمي وتعزيز الصمود المناخي بالمغرب."
      ]},
    fr: { title: "Un nouveau projet de loi sur l'administration numérique intègre des dispositions sur l'IA",
      excerpt: "La ministre déléguée à la Transition numérique annonce le texte dans une dynamique technologique soutenue par des bailleurs internationaux.",
      body: [
        "La ministre déléguée chargée de la Transition numérique, Amal Elfallah Seghrouchni, a annoncé la préparation d'un projet de loi sur l'administration numérique comportant des dispositions dédiées à l'intelligence artificielle.",
        "Cette initiative s'inscrit dans une série de mesures visant à renforcer l'innovation numérique, dont l'institut 'Jazari Root', un hackathon national dédié à l'IA, et l'initiative 'RallyIA Future Lab' à Merzouga.",
        "Dans le même temps, la Banque mondiale a approuvé deux programmes totalisant 650 millions de dollars pour soutenir la transformation numérique et la résilience climatique du Maroc."
      ]},
    en: { title: "New digital administration bill includes AI-specific provisions",
      excerpt: "Digital transition minister unveils the bill amid fast-moving tech initiatives and international funding support.",
      body: [
        "Morocco's deputy minister for digital transition, Amal Elfallah Seghrouchni, announced a new digital administration bill that includes provisions specific to artificial intelligence.",
        "The move is part of a series of initiatives to boost digital innovation, including the 'Jazari Root' institute, a national AI hackathon, and the 'RallyIA Future Lab' initiative in Merzouga.",
        "Separately, the World Bank approved two programs worth a combined $650 million to support Morocco's digital transformation and climate resilience."
      ]}
  },
  {
    id: 16, category: "tech",
    img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80",
    source_name: "Bawaba Press",
    source_url: "https://bawabapress.com/article/843",
    time: { ar: "منذ مطلع السنة", fr: "depuis le début de l'année", en: "since earlier this year" },
    ar: { title: "المغرب يطلق خارطة طريق 'الذكاء الاصطناعي صنع في المغرب' وشبكة معاهد الجزري",
      excerpt: "إحداث معهد 'جزري روت' كنواة لشبكة وطنية تربط البحث العلمي بالابتكار الصناعي.",
      body: [
        "أطلق المغرب خارطة طريق للذكاء الاصطناعي تحت شعار 'صنع في المغرب'، معلنا في الوقت نفسه عن إحداث معهد 'جزري روت' كنواة مؤسسة لشبكة وطنية من مراكز التميز.",
        "ولا يقتصر المشروع على البحث الأكاديمي، بل يسعى لربط البحث العلمي بالابتكار الصناعي ودعم الشركات الناشئة ورقمنة المقاولات الصغرى والمتوسطة.",
        "ويهدف المخطط أيضا إلى استقطاب الكفاءات المغربية داخل الوطن وخارجه، ضمن رؤية تستهدف تحقيق مداخيل إضافية بفضل الذكاء الاصطناعي بحلول 2030."
      ]},
    fr: { title: "Le Maroc lance sa feuille de route 'IA Made in Morocco' et son réseau d'instituts Jazari",
      excerpt: "Création de l'institut 'Jazari Root', noyau d'un réseau national reliant recherche scientifique et innovation industrielle.",
      body: [
        "Le Maroc a lancé une feuille de route pour l'intelligence artificielle baptisée 'IA Made in Morocco', annonçant simultanément la création de l'institut 'Jazari Root' comme noyau fondateur d'un réseau national de centres d'excellence.",
        "Le projet ne se limite pas à la recherche académique : il vise à relier recherche scientifique et innovation industrielle, à soutenir les start-up et à accompagner la numérisation des PME.",
        "Le plan ambitionne aussi d'attirer les talents marocains, au pays comme à l'étranger, dans une vision misant sur des revenus additionnels grâce à l'IA d'ici 2030."
      ]},
    en: { title: "Morocco launches 'AI Made in Morocco' roadmap and Jazari institute network",
      excerpt: "The 'Jazari Root' institute is created as the founding hub of a national network linking research to industry.",
      body: [
        "Morocco launched an artificial intelligence roadmap branded 'AI Made in Morocco', simultaneously announcing the creation of the 'Jazari Root' institute as the founding hub of a national network of excellence centers.",
        "The project goes beyond academic research, aiming to connect scientific research with industrial innovation, support startups, and back the digitization of small and medium businesses.",
        "The plan also aims to attract Moroccan talent at home and abroad, as part of a vision targeting additional revenue from AI by 2030."
      ]}
  }
];
