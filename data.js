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
  read_full:      { ar: "قراءة الخبر كاملا لدى المصدر", fr: "Lire l'article complet chez la source", en: "Read the full story at the source" },

  about_title:    { ar: "من نحن", fr: "À propos de nous", en: "About Us" },
  about_body:     { ar: "DS24 منصة إخبارية رقمية تهتم بتغطية آخر مستجدات المغرب في مختلف المجالات: السياسة، الاقتصاد، المجتمع، الرياضة، الجهات، الثقافة، الصحة والتكنولوجيا. نعمل على تقديم ملخصات موثوقة ومحينة لأبرز الأخبار، مع الإشارة دائما إلى المصدر الأصلي لكل معلومة، لنمنح القارئ صورة شاملة وسريعة عما يجري في المملكة.",
                    fr: "DS24 est une plateforme d'actualités numérique dédiée à la couverture des dernières informations au Maroc dans tous les domaines : politique, économie, société, sport, régions, culture, santé et technologie. Nous proposons des résumés fiables et actualisés des principales actualités, en indiquant systématiquement la source originale de chaque information.",
                    en: "DS24 is a digital news platform covering the latest developments in Morocco across all fields: politics, economy, society, sport, regions, culture, health, and technology. We provide reliable, up-to-date summaries of top stories, always crediting the original source for every piece of information." },
  about_mission:  { ar: "مهمتنا", fr: "Notre mission", en: "Our Mission" },
  about_mission_body: { ar: "تسهيل الوصول إلى المعلومة الموثوقة بلغة واضحة وبثلاث لغات (العربية، الفرنسية، الإنجليزية)، مع احترام كامل لحقوق الملكية الفكرية لمصادر الأخبار الأصلية.",
                    fr: "Faciliter l'accès à une information fiable dans un langage clair et en trois langues (arabe, français, anglais), dans le respect total des droits de propriété intellectuelle des sources originales.",
                    en: "Making reliable information accessible in clear language and three languages (Arabic, French, English), while fully respecting the intellectual property rights of original news sources." },

  contact_title:  { ar: "اتصل بنا", fr: "Contactez-nous", en: "Contact Us" },
  contact_body:   { ar: "يسعدنا تواصلكم معنا لأي استفسار، اقتراح أو ملاحظة حول محتوى الموقع.", fr: "N'hésitez pas à nous contacter pour toute question, suggestion ou remarque concernant le contenu du site.", en: "Feel free to reach out with any question, suggestion, or feedback about the site's content." },
  contact_email_label: { ar: "البريد الإلكتروني", fr: "E-mail", en: "Email" },

  team_title:     { ar: "فريق التحرير", fr: "L'équipe éditoriale", en: "Editorial Team" },
  team_body:      { ar: "يتولى فريق DS24 عملية رصد وتلخيص الأخبار المتداولة في وسائل الإعلام المغربية، والتحقق من صحة المعلومة قبل نشرها، مع الحرص على الإشارة إلى المصدر الأصلي لكل خبر. يعمل الفريق على تحديث المحتوى بشكل دوري لضمان مواكبة آخر المستجدات.",
                    fr: "L'équipe de DS24 assure la veille et la synthèse des actualités relayées par les médias marocains, vérifie l'information avant publication, et veille à toujours citer la source originale. L'équipe met régulièrement à jour le contenu pour suivre l'actualité.",
                    en: "The DS24 team monitors and summarizes news covered by Moroccan media, verifies information before publishing, and always credits the original source. The team updates content regularly to keep pace with current events." },
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
  },

  // ==================== EXTRA BATCH ====================

  // ---------------- POLITIQUE (6 more) ----------------
  { id: 17, category: "politique", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    source_name: "Hespress", source_url: "https://www.hespress.com/politique",
    time: { ar: "قبل أسبوعين", fr: "il y a deux semaines", en: "two weeks ago" },
    ar: { title: "أحكام قضية 'إسكوبار الصحراء': 10 سنوات سجنا للناصري و12 سنة لبعيوي", excerpt: "قرار قضائي في ملف تهريب دولي أثار اهتماما واسعا لدى الرأي العام.",
      body: ["أصدرت محكمة مغربية أحكاما بالسجن في حق المتهمين الرئيسيين بملف 'إسكوبار الصحراء'، بمعدل 10 سنوات للناصري و12 سنة لبعيوي.", "وتابع الرأي العام تفاصيل هذه القضية التي شغلت الساحة الإعلامية لأشهر بسبب حجم الشبكة المتورطة."] },
    fr: { title: "Affaire 'Escobar du Sahara' : 10 ans de prison pour Nasseri, 12 ans pour Bouiya", excerpt: "Une décision de justice dans un dossier de trafic international très suivi par l'opinion publique.",
      body: ["Un tribunal marocain a prononcé des peines de prison contre les principaux accusés de l'affaire 'Escobar du Sahara', 10 ans pour Nasseri et 12 ans pour Bouiya.", "L'opinion publique a suivi de près les développements de ce dossier qui a occupé l'actualité pendant des mois en raison de l'ampleur du réseau impliqué."] },
    en: { title: "'Sahara Escobar' case: 10-year sentence for Nasseri, 12 years for Bouiya", excerpt: "A court ruling in a closely watched international trafficking case.",
      body: ["A Moroccan court sentenced the main defendants in the 'Sahara Escobar' case to prison, 10 years for Nasseri and 12 years for Bouiya.", "The public closely followed the case, which dominated headlines for months given the scale of the network involved."] } },

  { id: 18, category: "politique", img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
    source_name: "Hespress", source_url: "https://www.hespress.com/politique",
    time: { ar: "قبل 10 أيام", fr: "il y a 10 jours", en: "10 days ago" },
    ar: { title: "بايتاس: قرار العودة إلى الساعة القانونية نهائي وهذا موعد التنفيذ", excerpt: "الناطق باسم الحكومة يؤكد عدم الرجوع في قرار إلغاء التوقيت الصيفي.",
      body: ["أكد الناطق الرسمي باسم الحكومة مصطفى بايتاس أن قرار العودة إلى التوقيت القانوني بات نهائيا ولن يتم التراجع عنه.", "وحدد بايتاس موعدا واضحا لدخول القرار حيز التنفيذ، منهيا بذلك الجدل حول تاريخ التطبيق."] },
    fr: { title: "Baitas : le retour à l'heure légale est définitif, voici la date d'entrée en vigueur", excerpt: "Le porte-parole du gouvernement confirme qu'il n'y aura pas de marche arrière.",
      body: ["Le porte-parole du gouvernement, Mustapha Baitas, a confirmé que la décision de revenir à l'heure légale est désormais définitive et ne sera pas annulée.", "Baitas a fixé une date précise pour l'entrée en vigueur de la décision, mettant fin aux incertitudes sur le calendrier."] },
    en: { title: "Baitas: return to standard time is final, here's the date", excerpt: "The government spokesperson confirms there will be no reversal of the decision.",
      body: ["Government spokesperson Mustapha Baitas confirmed that the decision to return to standard time is now final and will not be reversed.", "Baitas set a clear date for the decision to take effect, ending uncertainty over the timeline."] } },

  { id: 19, category: "politique", img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    source_name: "Hespress", source_url: "https://www.hespress.com/politique",
    time: { ar: "قبل أسبوعين", fr: "il y a deux semaines", en: "two weeks ago" },
    ar: { title: "تصريحات 'العيناوي الأب' تثير جدلا سياسيا.. ودعوات لعدم التهويل", excerpt: "محللون يدعون إلى التعامل بهدوء مع التصريحات المثيرة للجدل.",
      body: ["أثارت تصريحات منسوبة لوالد أحد اللاعبين الوطنيين جدلا واسعا على مواقع التواصل الاجتماعي والأوساط السياسية.", "ودعا عدد من المحللين إلى عدم التهويل من الموضوع والتعامل معه بعيدا عن التشويش الإعلامي."] },
    fr: { title: "Des propos attribués au père d'Al Aynaoui suscitent la polémique", excerpt: "Des analystes appellent à ne pas dramatiser la situation.",
      body: ["Des déclarations attribuées au père d'un joueur de l'équipe nationale ont suscité une vive polémique sur les réseaux sociaux et dans les milieux politiques.", "Plusieurs analystes ont appelé à ne pas dramatiser l'affaire et à l'aborder sans confusion médiatique."] },
    en: { title: "Comments attributed to Al Aynaoui's father spark controversy", excerpt: "Analysts call for calm rather than dramatizing the remarks.",
      body: ["Remarks attributed to the father of a national team player triggered widespread controversy on social media and in political circles.", "Several analysts called for a measured response rather than sensationalizing the issue."] } },

  { id: 20, category: "politique", img: "https://images.unsplash.com/photo-1591189863430-ab87e120f312?w=800&q=80",
    source_name: "Yabiladi", source_url: "https://ar.yabiladi.com/articles/categorie/21/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9.html",
    time: { ar: "قبل شهر", fr: "il y a un mois", en: "a month ago" },
    ar: { title: "التعديلات الانتخابية لسنة 2026: قراءة في أبرز المستجدات القانونية", excerpt: "تحليل للتغييرات التي عرفها الإطار القانوني المنظم للانتخابات المقبلة.",
      body: ["تناول محللون التعديلات القانونية المدخلة على الإطار المنظم للانتخابات التشريعية المقبلة لسنة 2026.", "وركزت القراءات على أثر هذه التعديلات على التوازنات الحزبية وعلى مسار العملية الانتخابية برمتها."] },
    fr: { title: "Amendements électoraux 2026 : lecture des principales nouveautés juridiques", excerpt: "Analyse des changements apportés au cadre juridique régissant les prochaines élections.",
      body: ["Des analystes ont examiné les amendements juridiques apportés au cadre régissant les élections législatives de 2026.", "Ces lectures se sont concentrées sur l'impact de ces changements sur les équilibres partisans et le processus électoral."] },
    en: { title: "2026 electoral amendments: a look at the key legal changes", excerpt: "Analysis of changes to the legal framework governing upcoming elections.",
      body: ["Analysts examined the legal amendments made to the framework governing the 2026 legislative elections.", "The analyses focused on how these changes could affect party balances and the overall electoral process."] } },

  { id: 21, category: "politique", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    source_name: "Akhbarona", source_url: "https://www.akhbarona.com/",
    time: { ar: "قبل 3 أسابيع", fr: "il y a 3 semaines", en: "3 weeks ago" },
    ar: { title: "الحكومة تصادق على مشروع قانون يهم القطاع العقاري", excerpt: "خطوة تشريعية جديدة ضمن ورش إصلاح الإطار القانوني للعقار بالمغرب.",
      body: ["صادق مجلس الحكومة على مشروع قانون يتعلق بتنظيم القطاع العقاري، في إطار مواصلة أوراش الإصلاح القانوني.", "ويرتقب أن يعرض المشروع على البرلمان لاستكمال المسطرة التشريعية قبل دخوله حيز التنفيذ."] },
    fr: { title: "Le gouvernement adopte un projet de loi sur le secteur immobilier", excerpt: "Une nouvelle étape législative dans la réforme du cadre juridique de l'immobilier.",
      body: ["Le Conseil de gouvernement a adopté un projet de loi relatif à la régulation du secteur immobilier, dans le cadre des chantiers de réforme juridique en cours.", "Le texte devrait être soumis au Parlement pour achever la procédure législative avant son entrée en vigueur."] },
    en: { title: "Government adopts bill on the real estate sector", excerpt: "A new legislative step in reforming the legal framework for real estate.",
      body: ["The Council of Government adopted a bill regulating the real estate sector, part of ongoing legal reform efforts.", "The bill is expected to go before parliament to complete the legislative process before taking effect."] } },

  { id: 22, category: "politique", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    source_name: "Hespress", source_url: "https://www.hespress.com/politique",
    time: { ar: "قبل شهر", fr: "il y a un mois", en: "a month ago" },
    ar: { title: "لجنة 'الفراقشية' البرلمانية تشعل مواجهة بين الأغلبية والمعارضة", excerpt: "اتهامات متبادلة بالمماطلة والاستغلال السياسي داخل قبة البرلمان.",
      body: ["شهدت أشغال لجنة برلمانية معنية بملف تهريب المحروقات مواجهة حادة بين فرق الأغلبية والمعارضة.", "وتبادل الطرفان اتهامات بالمماطلة في تدبير الملف واستغلاله لأغراض سياسية قبيل الاستحقاقات الانتخابية."] },
    fr: { title: "La commission parlementaire sur la contrebande de carburant attise les tensions", excerpt: "Accusations croisées de blocage et d'instrumentalisation politique au Parlement.",
      body: ["Les travaux d'une commission parlementaire chargée du dossier de la contrebande de carburant ont donné lieu à un vif affrontement entre majorité et opposition.", "Les deux camps se sont mutuellement accusés de ralentir le dossier et de l'instrumentaliser à l'approche des échéances électorales."] },
    en: { title: "Parliamentary fuel-smuggling committee sparks clash between majority and opposition", excerpt: "Mutual accusations of stalling and political point-scoring in parliament.",
      body: ["A parliamentary committee investigating fuel smuggling saw a sharp clash between majority and opposition lawmakers.", "Both sides accused each other of stalling the case and exploiting it for political gain ahead of upcoming elections."] } },

  // ---------------- ECONOMIE (8 more) ----------------
  { id: 23, category: "economie", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    source_name: "Assahifa", source_url: "https://www.assahifa.com/category/economie/",
    time: { ar: "قبل أسبوع", fr: "il y a une semaine", en: "a week ago" },
    ar: { title: "الدرهم يرتفع 1.4% مقابل الدولار ويستقر أمام الأورو", excerpt: "بنك المغرب يكشف عن تطور سعر صرف العملة الوطنية خلال الأسابيع الأخيرة.",
      body: ["أفاد بنك المغرب بأن سعر الدرهم ارتفع بنسبة 1.4 بالمائة مقابل الدولار الأمريكي، فيما ظل شبه مستقر أمام الأورو.", "ويأتي هذا التطور في سياق تقلبات عرفتها أسواق الصرف الدولية خلال الفترة الأخيرة."] },
    fr: { title: "Le dirham progresse de 1,4% face au dollar et reste stable face à l'euro", excerpt: "Bank Al-Maghrib publie l'évolution du taux de change de la monnaie nationale.",
      body: ["Bank Al-Maghrib a indiqué que le dirham a progressé de 1,4% face au dollar américain, tout en restant quasiment stable face à l'euro.", "Cette évolution intervient dans un contexte de fluctuations sur les marchés des changes internationaux."] },
    en: { title: "Dirham rises 1.4% against the dollar, stable against the euro", excerpt: "Bank Al-Maghrib reports on the national currency's recent exchange rate movements.",
      body: ["Bank Al-Maghrib said the dirham rose 1.4% against the US dollar while remaining largely stable against the euro.", "The move comes amid recent volatility in international currency markets."] } },

  { id: 24, category: "economie", img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80",
    source_name: "Assahifa", source_url: "https://www.assahifa.com/category/economie/",
    time: { ar: "قبل أسبوعين", fr: "il y a deux semaines", en: "two weeks ago" },
    ar: { title: "تراجع أسعار النفط عالميا بعد قرار مفاجئ لأوبك+ برفع الإنتاج", excerpt: "الخطوة فاجأت الأسواق ودفعت الأسعار إلى التراجع.",
      body: ["تراجعت أسعار النفط عالميا بعد أن فاجأت مجموعة أوبك+ الأسواق بقرار رفع الإنتاج أكثر من المتوقع.", "ويترقب مستهلكون مغاربة انعكاس هذا التراجع على أسعار المحروقات المحلية في التحيينات القادمة."] },
    fr: { title: "Les prix du pétrole reculent après une décision surprise de l'OPEP+", excerpt: "La décision a surpris les marchés et fait baisser les cours.",
      body: ["Les prix du pétrole ont reculé sur les marchés mondiaux après que l'OPEP+ a surpris en annonçant une hausse de production supérieure aux attentes.", "Les consommateurs marocains espèrent que cette baisse se répercutera sur les prix des carburants lors des prochaines actualisations."] },
    en: { title: "Oil prices fall after OPEC+ surprise output hike", excerpt: "The move caught markets off guard and pushed prices lower.",
      body: ["Global oil prices fell after OPEC+ surprised markets with a bigger-than-expected production increase.", "Moroccan consumers are hoping the drop will feed through to local fuel prices at the next update."] } },

  { id: 25, category: "economie", img: "https://images.unsplash.com/photo-1558959357-3b0e5aac6c2e?w=800&q=80",
    source_name: "Assahifa", source_url: "https://www.assahifa.com/category/economie/",
    time: { ar: "قبل 3 أسابيع", fr: "il y a 3 semaines", en: "3 weeks ago" },
    ar: { title: "رجل أعمال مصري يستعد لدخول السوق المغربية عبر شركة تحويل الدراجات الكهربائية", excerpt: "استثمار جديد يستهدف قطاع التنقل الكهربائي الناشئ بالمغرب.",
      body: ["يستعد رجل الأعمال نجيب ساويرس، عبر شركته المتخصصة في تحويل الدراجات النارية للعمل بالكهرباء، لدخول السوق المغربية.", "ويأتي هذا الاستثمار في سياق نمو متزايد لقطاع التنقل الكهربائي في المنطقة."] },
    fr: { title: "Un homme d'affaires égyptien prépare son entrée sur le marché marocain de la mobilité électrique", excerpt: "Un nouvel investissement cible le secteur naissant des deux-roues électriques.",
      body: ["L'homme d'affaires Naguib Sawiris, à travers sa société spécialisée dans la conversion de motos à l'électrique, prépare son entrée sur le marché marocain.", "Cet investissement s'inscrit dans la croissance du secteur de la mobilité électrique dans la région."] },
    en: { title: "Egyptian businessman prepares entry into Morocco's electric mobility market", excerpt: "A new investment targets the emerging electric two-wheeler sector.",
      body: ["Businessman Naguib Sawiris, through his company specializing in converting motorcycles to electric power, is preparing to enter the Moroccan market.", "The investment comes amid growing regional interest in electric mobility."] } },

  { id: 26, category: "economie", img: "https://images.unsplash.com/photo-1591033594798-33227a05780d?w=800&q=80",
    source_name: "Assahifa", source_url: "https://www.assahifa.com/category/economie/",
    time: { ar: "قبل شهر", fr: "il y a un mois", en: "a month ago" },
    ar: { title: "المغرب يستعد لإنهاء 7 سنوات من التوقف عن إصدار الصكوك", excerpt: "عودة متوقعة لإصدار الصكوك عبر البنوك التشاركية.",
      body: ["يستعد المغرب لإنهاء توقف دام 7 سنوات عن إصدار الصكوك، من خلال العودة إلى هذه التجربة عبر البنوك التشاركية.", "وتأتي هذه الخطوة ضمن مساع لتنويع أدوات التمويل المتاحة للدولة والفاعلين الاقتصاديين."] },
    fr: { title: "Le Maroc s'apprête à mettre fin à 7 ans d'absence d'émissions de sukuk", excerpt: "Un retour attendu via les banques participatives.",
      body: ["Le Maroc se prépare à mettre fin à une interruption de 7 ans dans l'émission de sukuk, en y revenant via les banques participatives.", "Cette démarche s'inscrit dans une volonté de diversifier les instruments de financement disponibles."] },
    en: { title: "Morocco set to end 7-year pause in sukuk issuance", excerpt: "An expected return via participative banks.",
      body: ["Morocco is preparing to end a seven-year pause in sukuk issuance by returning to the practice through participative banks.", "The move is part of efforts to diversify available financing instruments for the state and economic actors."] } },

  { id: 27, category: "economie", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    source_name: "Assahifa", source_url: "https://www.assahifa.com/category/economie/",
    time: { ar: "قبل شهر", fr: "il y a un mois", en: "a month ago" },
    ar: { title: "مجلة فرنسية: المغرب من أكثر الوجهات الاستثمارية جاذبية في إفريقيا", excerpt: "تقرير دولي يبرز مكانة المملكة ضمن الوجهات المفضلة للمستثمرين.",
      body: ["اعتبرت مجلة 'أوليس' الفرنسية المتخصصة أن المغرب يواصل ترسيخ مكانته كواحدة من أكثر الوجهات الاستثمارية جذبا في القارة الإفريقية.", "ويستند هذا التصنيف إلى معطيات حول استقرار المناخ الاستثماري وجودة البنية التحتية بالمملكة."] },
    fr: { title: "Un magazine français : le Maroc parmi les destinations d'investissement les plus attractives d'Afrique", excerpt: "Un rapport international souligne la position du Royaume auprès des investisseurs.",
      body: ["Le magazine spécialisé français 'Oléüs' a estimé que le Maroc continue de consolider sa position comme l'une des destinations d'investissement les plus attractives d'Afrique.", "Ce classement s'appuie sur la stabilité du climat d'investissement et la qualité des infrastructures du Royaume."] },
    en: { title: "French magazine: Morocco among Africa's most attractive investment destinations", excerpt: "An international report highlights the Kingdom's standing with investors.",
      body: ["French trade magazine 'Oléüs' said Morocco continues to cement its position as one of Africa's most attractive investment destinations.", "The ranking cites investment climate stability and infrastructure quality in the Kingdom."] } },

  { id: 28, category: "economie", img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80",
    source_name: "Assahifa", source_url: "https://www.assahifa.com/category/economie/",
    time: { ar: "قبل شهر", fr: "il y a un mois", en: "a month ago" },
    ar: { title: "مداخيل الوكالة الوطنية للمحافظة العقارية تتجاوز 9.3 مليار درهم", excerpt: "نمو قوي في رقم معاملات المحافظة العقارية والمسح العقاري خلال 2024.",
      body: ["حققت الوكالة الوطنية للمحافظة العقارية والمسح العقاري والخرائطية نموا قويا في مداخيلها لسنة 2024، بلغ 9.33 مليار درهم.", "ويعكس هذا الرقم دينامية السوق العقارية المغربية رغم التحديات التي يعرفها القطاع."] },
    fr: { title: "Les recettes de l'Agence de la conservation foncière dépassent 9,3 milliards de dirhams", excerpt: "Une forte croissance du chiffre d'affaires en 2024.",
      body: ["L'Agence nationale de la conservation foncière, du cadastre et de la cartographie a enregistré une forte croissance de ses recettes en 2024, atteignant 9,33 milliards de dirhams.", "Ce chiffre reflète le dynamisme du marché immobilier marocain malgré les défis du secteur."] },
    en: { title: "Land registry agency revenue tops 9.3 billion dirhams", excerpt: "Strong revenue growth recorded in 2024.",
      body: ["Morocco's national land registry and mapping agency posted strong revenue growth in 2024, reaching 9.33 billion dirhams.", "The figure reflects the dynamism of Morocco's real estate market despite sector challenges."] } },

  { id: 29, category: "economie", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    source_name: "Le360", source_url: "https://ar.le360.ma/economie/7OPA3T533ZDJZD565TBIQSKO6E/",
    time: { ar: "قبل شهرين", fr: "il y a deux mois", en: "two months ago" },
    ar: { title: "مطار محمد الخامس يستعد لاحتضان أكبر مشروع في تاريخه", excerpt: "محطة جديدة بطاقة استيعابية تصل إلى 30 مليون مسافر سنويا.",
      body: ["يستعد مطار محمد الخامس بالدار البيضاء لاحتضان أكبر مشروع بناء في تاريخه، باستثمار يقدر بـ10 مليارات درهم.", "وستقام المحطة الجديدة على مساحة 600 ألف متر مربع، بطاقة أولية تبلغ 20 مليون مسافر سنويا قابلة للتوسيع إلى 30 مليونا."] },
    fr: { title: "L'aéroport Mohammed V se prépare à son plus grand projet", excerpt: "Un nouveau terminal d'une capacité pouvant atteindre 30 millions de passagers par an.",
      body: ["L'aéroport Mohammed V de Casablanca se prépare à accueillir le plus grand projet de construction de son histoire, pour un investissement estimé à 10 milliards de dirhams.", "Le nouveau terminal s'étendra sur 600 000 m², avec une capacité initiale de 20 millions de passagers par an, extensible à 30 millions."] },
    en: { title: "Mohammed V Airport prepares for its biggest project yet", excerpt: "A new terminal with capacity for up to 30 million passengers a year.",
      body: ["Casablanca's Mohammed V Airport is preparing for the largest construction project in its history, with an estimated investment of 10 billion dirhams.", "The new terminal will span 600,000 square meters, with an initial capacity of 20 million passengers a year, expandable to 30 million."] } },

  { id: 30, category: "economie", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    source_name: "Assahifa", source_url: "https://www.assahifa.com/category/economie/",
    time: { ar: "قبل شهرين", fr: "il y a deux mois", en: "two months ago" },
    ar: { title: "المغرب يسرع الخطى نحو تأسيس صناعة محلية للألعاب الإلكترونية", excerpt: "قطاع واعد يراهن عليه المغرب في ظل النمو العالمي المتسارع لصناعة الألعاب.",
      body: ["قرر المغرب الانطلاق بسرعة نحو تأسيس صناعة محلية للألعاب الإلكترونية، مواكبة للنمو الصاروخي الذي يعرفه هذا المجال عالميا.", "وتراهن الجهات المعنية على استقطاب مطورين ومقاولات ناشئة في هذا القطاع الواعد."] },
    fr: { title: "Le Maroc accélère vers une industrie locale du jeu vidéo", excerpt: "Un secteur prometteur sur lequel le Maroc mise face à la croissance mondiale du gaming.",
      body: ["Le Maroc a décidé d'accélérer la mise en place d'une industrie locale du jeu vidéo, en phase avec la croissance fulgurante de ce secteur à l'échelle mondiale.", "Les autorités concernées misent sur l'attraction de développeurs et de start-up dans ce secteur prometteur."] },
    en: { title: "Morocco accelerates toward building a local video game industry", excerpt: "A promising sector Morocco is betting on amid rapid global gaming growth.",
      body: ["Morocco has decided to move quickly to build a local video game industry, in step with the sector's rapid global growth.", "Relevant authorities are counting on attracting developers and startups to this promising field."] } },

  // ---------------- SOCIETE (6 more) ----------------
  { id: 31, category: "societe", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    source_name: "Akhbarona", source_url: "https://www.akhbarona.com/",
    time: { ar: "قبل أسبوعين", fr: "il y a deux semaines", en: "two weeks ago" },
    ar: { title: "أساتذة التعليم الخصوصي يطالبون بأداء أجور أشهر العطلة الصيفية", excerpt: "مطلب يقارن وضعية القطاع الخاص بنظيره العمومي خلال العطلة.",
      body: ["طالب أساتذة يشتغلون بمؤسسات التعليم الخصوصي بأداء أجورهم عن أشهر العطلة الصيفية أسوة بزملائهم في القطاع العمومي.", "ويأتي هذا المطلب في سياق نقاش متكرر حول أوضاع الشغل في قطاع التعليم الخصوصي."] },
    fr: { title: "Les enseignants du privé réclament le paiement des mois d'été", excerpt: "Une revendication qui compare leur situation à celle du secteur public.",
      body: ["Des enseignants du secteur de l'enseignement privé réclament le versement de leurs salaires pour les mois de vacances d'été, à l'image de leurs collègues du public.", "Cette revendication s'inscrit dans un débat récurrent sur les conditions de travail dans l'enseignement privé."] },
    en: { title: "Private school teachers demand summer holiday pay", excerpt: "A demand that compares their situation with that of public sector teachers.",
      body: ["Teachers at private schools are demanding payment of their salaries for the summer holiday months, as their public-sector counterparts receive.", "The demand is part of a recurring debate over working conditions in private education."] } },

  { id: 32, category: "societe", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    source_name: "Akhbarona", source_url: "https://www.akhbarona.com/",
    time: { ar: "قبل أسبوعين", fr: "il y a deux semaines", en: "two weeks ago" },
    ar: { title: "خطة استباقية من وزارة التربية الوطنية لإنجاح الدخول المدرسي المقبل", excerpt: "إجراءات مبكرة تستهدف الأسر والأطر التربوية قبل الموسم الدراسي الجديد.",
      body: ["كشفت وزارة التربية الوطنية عن خطة استباقية تستهدف تأمين الشروط الملائمة لإنجاح الدخول المدرسي المقبل.", "وتشمل الخطة إجراءات موجهة للأسر والأطر التربوية على حد سواء."] },
    fr: { title: "Un plan proactif du ministère de l'Éducation pour la prochaine rentrée scolaire", excerpt: "Des mesures anticipées visant les familles et le personnel enseignant.",
      body: ["Le ministère de l'Éducation nationale a dévoilé un plan proactif visant à réunir les conditions d'une rentrée scolaire réussie.", "Le plan comprend des mesures destinées à la fois aux familles et au personnel enseignant."] },
    en: { title: "Education Ministry unveils proactive plan for the next school year", excerpt: "Early measures targeting families and teaching staff ahead of the new term.",
      body: ["Morocco's Education Ministry unveiled a proactive plan aimed at ensuring favorable conditions for a successful start to the next school year.", "The plan includes measures directed at both families and teaching staff."] } },

  { id: 33, category: "societe", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    source_name: "Hespress", source_url: "https://www.hespress.com/",
    time: { ar: "قبل أسبوع", fr: "il y a une semaine", en: "a week ago" },
    ar: { title: "حادثة سير مروعة قرب طاطا تودي بحياة 5 أشخاص بينهم طفل", excerpt: "الحادث وقع على طريق جهوية مؤدية إلى تكموت.",
      body: ["لقي 5 أشخاص، من بينهم طفل صغير، مصرعهم إثر حادثة سير خطيرة وقعت بالمدخل الشمالي لمدينة طاطا.", "وأسفر الحادث أيضا عن إصابة عدد من الأشخاص بجروح متفاوتة الخطورة."] },
    fr: { title: "Un grave accident près de Tata fait 5 morts dont un enfant", excerpt: "L'accident s'est produit sur une route régionale menant à Takmout.",
      body: ["Cinq personnes, dont un jeune enfant, ont trouvé la mort dans un grave accident de la route survenu à l'entrée nord de la ville de Tata.", "L'accident a également fait plusieurs blessés, dont la gravité varie."] },
    en: { title: "Serious accident near Tata kills 5, including a child", excerpt: "The crash occurred on a regional road leading to Takmout.",
      body: ["Five people, including a young child, were killed in a serious traffic accident at the northern entrance to the city of Tata.", "The accident also left several people injured, with varying degrees of severity."] } },

  { id: 34, category: "societe", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    source_name: "The Voice", source_url: "https://thevoice.ma/",
    time: { ar: "قبل أسبوع", fr: "il y a une semaine", en: "a week ago" },
    ar: { title: "جمعية 'تحدي الإعاقة' بتيزنيت.. الرئيس ينفي الاتهامات ويرفض إعادة الجمع العام", excerpt: "خلاف داخلي حول تدبير الجمعية يثير تساؤلات لدى المنخرطين.",
      body: ["تشهد جمعية 'تحدي الإعاقة' بتيزنيت خلافا داخليا بين رئيسها وبعض المنخرطين حول تدبير شؤونها.", "ونفى الرئيس الاتهامات الموجهة إليه، فيما يطالب بعض الأعضاء بإعادة عقد الجمع العام."] },
    fr: { title: "L'association 'Défi Handicap' de Tiznit secouée par un conflit interne", excerpt: "Le président nie les accusations et refuse un nouveau vote de l'assemblée générale.",
      body: ["L'association 'Défi Handicap' de Tiznit traverse un conflit interne entre son président et certains adhérents concernant sa gestion.", "Le président a nié les accusations portées contre lui, tandis que certains membres réclament la tenue d'une nouvelle assemblée générale."] },
    en: { title: "Tiznit disability association rocked by internal dispute", excerpt: "The president denies accusations and rejects calls for a new general assembly.",
      body: ["Tiznit's 'Disability Challenge' association is experiencing an internal dispute between its president and some members over its management.", "The president denied accusations against him, while some members are calling for a new general assembly."] } },

  { id: 35, category: "societe", img: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=800&q=80",
    source_name: "Hespress", source_url: "https://www.hespress.com/",
    time: { ar: "قبل شهر", fr: "il y a un mois", en: "a month ago" },
    ar: { title: "وهبي: النقاش حول عقوبة الإعدام بالمغرب يجري بروح المسؤولية والانفتاح", excerpt: "وزير العدل يعلق على النقاش المجتمعي المتجدد حول الموضوع.",
      body: ["أكد وزير العدل عبد اللطيف وهبي أن النقاش الدائر حول عقوبة الإعدام بالمغرب يتم بروح من المسؤولية والانفتاح على مختلف الآراء.", "ويأتي هذا التصريح في سياق نقاش مجتمعي متجدد حول الموضوع بين مؤيد ومعارض."] },
    fr: { title: "Ouahbi : le débat sur la peine de mort au Maroc se déroule avec responsabilité", excerpt: "Le ministre de la Justice commente le débat sociétal renouvelé sur le sujet.",
      body: ["Le ministre de la Justice, Abdellatif Ouahbi, a affirmé que le débat sur la peine de mort au Maroc se déroule dans un esprit de responsabilité et d'ouverture.", "Cette déclaration intervient dans le cadre d'un débat sociétal renouvelé, entre partisans et opposants."] },
    en: { title: "Ouahbi: death penalty debate in Morocco proceeding responsibly", excerpt: "The Justice Minister comments on the renewed societal debate over the issue.",
      body: ["Justice Minister Abdellatif Ouahbi said the debate over the death penalty in Morocco is taking place with a spirit of responsibility and openness to different views.", "The comment comes amid a renewed societal debate on the issue, between supporters and opponents."] } },

  { id: 36, category: "societe", img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    source_name: "Hespress", source_url: "https://www.hespress.com/",
    time: { ar: "قبل 3 أسابيع", fr: "il y a 3 semaines", en: "3 weeks ago" },
    ar: { title: "احتجاجات في مرزوكة تطالب بوقف استغلال رمال المنطقة", excerpt: "ساكنة محلية تعبر عن رفضها لاستمرار عمليات استخراج الرمال.",
      body: ["نظمت ساكنة مرزوكة وقفة احتجاجية للمطالبة بوقف عمليات استغلال رمال المنطقة، معبرة عن مخاوف بيئية ومعيشية.", "وطالب المحتجون بفتح حوار مع السلطات المحلية لإيجاد حل يراعي مصالح الساكنة."] },
    fr: { title: "Des habitants de Merzouga manifestent contre l'exploitation du sable", excerpt: "La population locale exprime son opposition à la poursuite de l'extraction.",
      body: ["Des habitants de Merzouga ont organisé un sit-in pour réclamer l'arrêt de l'exploitation du sable de la région, exprimant des inquiétudes environnementales.", "Les manifestants ont demandé l'ouverture d'un dialogue avec les autorités locales pour trouver une solution."] },
    en: { title: "Merzouga residents protest against local sand extraction", excerpt: "Local residents voice opposition to continued sand mining in the area.",
      body: ["Merzouga residents held a sit-in demanding an end to sand extraction in the area, citing environmental and livelihood concerns.", "Protesters called for dialogue with local authorities to find a solution that takes residents' interests into account."] } },

  // ---------------- SPORT (6 more) ----------------
  { id: 37, category: "sport", img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80",
    source_name: "Akhbarona", source_url: "https://www.akhbarona.com/",
    time: { ar: "قبل يوم", fr: "il y a un jour", en: "1 day ago" },
    ar: { title: "إسماعيل الصيباري ينتقل رسميا إلى بايرن ميونيخ الألماني", excerpt: "صفقة جديدة تعزز حضور اللاعبين المغاربة في الدوريات الأوروبية الكبرى.",
      body: ["أعلن نادي بايرن ميونيخ الألماني رسميا عن التعاقد مع اللاعب الدولي المغربي إسماعيل الصيباري.", "وتأتي الصفقة بعد الأداء اللافت للاعب مع المنتخب الوطني في كأس العالم 2026."] },
    fr: { title: "Ismael Saibari rejoint officiellement le Bayern Munich", excerpt: "Un nouveau transfert qui renforce la présence marocaine dans les grands championnats européens.",
      body: ["Le Bayern Munich a officiellement annoncé le recrutement de l'international marocain Ismael Saibari.", "Ce transfert intervient après les performances remarquées du joueur avec la sélection nationale lors de la Coupe du monde 2026."] },
    en: { title: "Ismael Saibari officially joins Bayern Munich", excerpt: "A new transfer strengthens Moroccan representation in Europe's top leagues.",
      body: ["Bayern Munich officially announced the signing of Moroccan international Ismael Saibari.", "The transfer follows the player's standout performances with the national team at the 2026 World Cup."] } },

  { id: 38, category: "sport", img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
    source_name: "Hespress", source_url: "https://www.hespress.com/",
    time: { ar: "قبل يومين", fr: "il y a 2 jours", en: "2 days ago" },
    ar: { title: "إساءات عنصرية تستهدف لاعبي هولندا بعد إقصائهم أمام المغرب", excerpt: "موجة تعليقات مسيئة عبر الإنترنت تثير استنكارا واسعا.",
      body: ["تعرض عدد من لاعبي المنتخب الهولندي لإساءات عنصرية عبر الإنترنت عقب إقصائهم من كأس العالم على يد المغرب.", "وأثارت هذه التصرفات استنكارا واسعا من جماهير الطرفين ومن الاتحادين الكرويين."] },
    fr: { title: "Des joueurs néerlandais victimes d'insultes racistes après leur élimination face au Maroc", excerpt: "Une vague de commentaires haineux en ligne suscite une large condamnation.",
      body: ["Plusieurs joueurs de l'équipe des Pays-Bas ont été la cible d'insultes racistes en ligne après leur élimination de la Coupe du monde par le Maroc.", "Ces agissements ont suscité une large condamnation des supporters des deux camps et des fédérations concernées."] },
    en: { title: "Dutch players targeted by racist abuse after Morocco elimination", excerpt: "A wave of hateful online comments draws widespread condemnation.",
      body: ["Several Netherlands players were subjected to racist abuse online after their World Cup elimination at the hands of Morocco.", "The behavior drew widespread condemnation from fans on both sides and from the football federations involved."] } },

  { id: 39, category: "sport", img: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80",
    source_name: "Barlamane", source_url: "https://www.barlamane.com/",
    time: { ar: "قبل 3 أيام", fr: "il y a 3 jours", en: "3 days ago" },
    ar: { title: "تقرير فرنسي: 'أسود الأطلس' أصبحوا رقما صعبا في المعادلة الكروية الدولية", excerpt: "الصحافة الفرنسية تشيد بالتطور اللافت للمنتخب المغربي.",
      body: ["أشاد تقرير لصحيفة فرنسية بالتطور الذي عرفه المنتخب المغربي، معتبرا أنه بات رقما صعبا في المنافسات الدولية الكبرى.", "ويستند التقرير إلى الأداء المتصاعد لـ'أسود الأطلس' منذ نسخة قطر 2022."] },
    fr: { title: "Un journal français : les 'Lions de l'Atlas' sont devenus un adversaire redoutable", excerpt: "La presse française salue la progression remarquable de l'équipe marocaine.",
      body: ["Un journal français a salué la progression du Maroc, estimant que l'équipe est devenue un adversaire redoutable dans les grandes compétitions internationales.", "L'article s'appuie sur la montée en puissance des 'Lions de l'Atlas' depuis l'édition 2022 au Qatar."] },
    en: { title: "French outlet: Atlas Lions have become a tough opponent on the world stage", excerpt: "French press praises Morocco's remarkable progress.",
      body: ["A French newspaper praised Morocco's development, saying the team has become a tough opponent in major international competitions.", "The report cites the Atlas Lions' rising performances since the 2022 Qatar World Cup."] } },

  { id: 40, category: "sport", img: "https://images.unsplash.com/photo-1522778034537-20a2486be803?w=800&q=80",
    source_name: "Akhbarona", source_url: "https://www.akhbarona.com/",
    time: { ar: "قبل 4 أيام", fr: "il y a 4 jours", en: "4 days ago" },
    ar: { title: "وليد الركراكي مرشح لتدريب منتخب عربي بعد خروجه من كأس العالم", excerpt: "اسم المدرب المغربي السابق يتردد لتولي مهمة فنية جديدة.",
      body: ["تتردد أنباء عن اهتمام أحد المنتخبات العربية التي ودعت كأس العالم مبكرا بالتعاقد مع المدرب المغربي وليد الركراكي.", "ولم يصدر أي تأكيد رسمي بعد بشأن هذه الصفقة المحتملة."] },
    fr: { title: "Walid Regragui pressenti pour entraîner une sélection arabe", excerpt: "Le nom de l'ancien sélectionneur marocain circule pour un nouveau poste.",
      body: ["Des rumeurs évoquent l'intérêt d'une sélection arabe, éliminée précocement de la Coupe du monde, pour recruter l'entraîneur marocain Walid Regragui.", "Aucune confirmation officielle n'a pour l'instant été apportée concernant ce possible transfert."] },
    en: { title: "Walid Regragui linked with coaching an Arab national team", excerpt: "The former Morocco coach's name is circulating for a new role.",
      body: ["Reports suggest an Arab national team that exited the World Cup early is interested in hiring Moroccan coach Walid Regragui.", "No official confirmation has been made yet regarding the possible move."] } },

  { id: 41, category: "sport", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
    source_name: "Hespress (عبر X)", source_url: "https://x.com/hespress",
    time: { ar: "قبل 3 أيام", fr: "il y a 3 jours", en: "3 days ago" },
    ar: { title: "801 تمريرة ناجحة.. المغرب ثاني منتخب في تاريخ المونديال ينجز هذا الرقم", excerpt: "إحصائية لافتة تعكس السيطرة المغربية في مباراة هولندا.",
      body: ["أصبح المنتخب المغربي ثاني منتخب فقط، بعد إسبانيا، ينجح في إكمال أكثر من 800 تمريرة ناجحة في مباراة واحدة بكأس العالم.", "وتعكس هذه الإحصائية مستوى السيطرة على الكرة الذي أبداه 'أسود الأطلس' أمام هولندا."] },
    fr: { title: "801 passes réussies : le Maroc, deuxième sélection de l'histoire du Mondial à ce niveau", excerpt: "Une statistique impressionnante reflétant la maîtrise marocaine face aux Pays-Bas.",
      body: ["Le Maroc est devenu la deuxième sélection seulement, après l'Espagne, à réussir plus de 800 passes lors d'un même match de Coupe du monde.", "Cette statistique illustre le niveau de contrôle du ballon affiché par les Lions de l'Atlas face aux Pays-Bas."] },
    en: { title: "801 completed passes: Morocco becomes only the second team in World Cup history to hit this mark", excerpt: "A striking stat reflecting Morocco's control in the Netherlands match.",
      body: ["Morocco became only the second team ever, after Spain, to complete more than 800 passes in a single World Cup match.", "The statistic reflects the level of ball control the Atlas Lions showed against the Netherlands."] } },

  { id: 42, category: "sport", img: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=800&q=80",
    source_name: "Vetogate", source_url: "https://www.vetogate.com/5684417",
    time: { ar: "قبل 3 أيام", fr: "il y a 3 jours", en: "3 days ago" },
    ar: { title: "المغرب يتفوق تاريخيا على كندا قبل موقعة ثمن نهائي المونديال", excerpt: "سجل إيجابي في المواجهات الرسمية والودية السابقة بين الفريقين.",
      body: ["يملك المنتخب المغربي سجلا إيجابيا في مواجهاته الثلاث السابقة أمام نظيره الكندي، بفوزين وتعادل واحد دون أي خسارة.", "ويستحضر هذا اللقاء مواجهة سابقة جمعت الفريقين في مونديال قطر 2022 انتهت بفوز مغربي."] },
    fr: { title: "Le Maroc historiquement dominant face au Canada avant les 8es de finale", excerpt: "Un bilan favorable sur les précédentes confrontations entre les deux équipes.",
      body: ["Le Maroc affiche un bilan positif sur ses trois précédentes rencontres face au Canada, avec deux victoires et un nul, sans aucune défaite.", "Ce match rappelle une précédente confrontation lors du Mondial 2022 au Qatar, remportée par le Maroc."] },
    en: { title: "Morocco historically dominant over Canada ahead of round-of-16 clash", excerpt: "A favorable record across previous meetings between the two teams.",
      body: ["Morocco holds a positive record in its three previous meetings with Canada, with two wins and a draw, and no defeats.", "The match recalls a previous meeting between the two sides at the 2022 Qatar World Cup, which Morocco won."] } },

  // ---------------- REGIONS (6 more) ----------------
  { id: 43, category: "regions", img: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?w=800&q=80",
    source_name: "Detafour", source_url: "https://detafour.com/",
    time: { ar: "قبل شهر", fr: "il y a un mois", en: "a month ago" },
    ar: { title: "جهة الدار البيضاء-سطات توافق على تمويل 16 مليار درهم لخط القطار فائق السرعة", excerpt: "شراكة موسعة بين وزارات وبنوك لتمويل خط مراكش-القنيطرة.",
      body: ["صادق مجلس جهة الدار البيضاء-سطات على بروتوكول تمويل بقيمة 16 مليار درهم لدعم خط القطار فائق السرعة الرابط بين مراكش والقنيطرة.", "وتشمل الشراكة عدة وزارات ومؤسسات بنكية كبرى، إلى جانب جهات الرباط-سلا-القنيطرة ومراكش-آسفي."] },
    fr: { title: "Casablanca-Settat approuve un financement de 16 milliards de dirhams pour la LGV", excerpt: "Un partenariat élargi entre ministères et banques pour financer la ligne Marrakech-Kénitra.",
      body: ["Le conseil de la région Casablanca-Settat a approuvé un protocole de financement de 16 milliards de dirhams pour soutenir la ligne à grande vitesse Marrakech-Kénitra.", "Le partenariat implique plusieurs ministères et grandes institutions bancaires, ainsi que les régions Rabat-Salé-Kénitra et Marrakech-Safi."] },
    en: { title: "Casablanca-Settat approves 16 billion dirham financing for high-speed rail", excerpt: "A broad partnership between ministries and banks to fund the Marrakech-Kenitra line.",
      body: ["The Casablanca-Settat regional council approved a 16 billion dirham financing protocol to support the Marrakech-Kenitra high-speed rail line.", "The partnership involves several ministries and major banking institutions, alongside the Rabat-Salé-Kénitra and Marrakech-Safi regions."] } },

  { id: 44, category: "regions", img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
    source_name: "Kech24", source_url: "https://kech24.com/",
    time: { ar: "قبل أسبوع", fr: "il y a une semaine", en: "a week ago" },
    ar: { title: "أوراش جديدة كبرى لتأهيل المحاور الحضرية بمراكش", excerpt: "برنامج يشمل بناء مرآب باب دكالة بكلفة 200 مليون درهم.",
      body: ["تنطلق بمراكش أوراش جديدة كبرى لتأهيل المحاور الحضرية، تشمل إنجاز مشروع مرآب باب دكالة بكلفة تناهز 200 مليون درهم.", "ويهدف المشروع إلى تعزيز الطاقة الاستيعابية لمواقف السيارات والتخفيف من الضغط على المناطق الحيوية بالمدينة."] },
    fr: { title: "De nouveaux grands chantiers pour réhabiliter les axes urbains de Marrakech", excerpt: "Un programme incluant la construction d'un parking à Bab Doukkala pour 200 millions de dirhams.",
      body: ["Marrakech lance de nouveaux grands chantiers pour réhabiliter ses axes urbains, dont un projet de parking à Bab Doukkala d'un coût avoisinant 200 millions de dirhams.", "Le projet vise à renforcer la capacité de stationnement et à désengorger les zones stratégiques de la ville."] },
    en: { title: "Major new works launched to upgrade Marrakech's urban roads", excerpt: "The program includes a Bab Doukkala parking garage costing 200 million dirhams.",
      body: ["Marrakech is launching major new works to upgrade its urban thoroughfares, including a Bab Doukkala parking garage project costing around 200 million dirhams.", "The project aims to boost parking capacity and ease congestion in key areas of the city."] } },

  { id: 45, category: "regions", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    source_name: "Kech24", source_url: "https://kech24.com/",
    time: { ar: "قبل أسبوع", fr: "il y a une semaine", en: "a week ago" },
    ar: { title: "إير فرانس تعزز رحلاتها بين المغرب ومطار شارل ديغول خلال الصيف", excerpt: "زيادة في وتيرة الرحلات نحو الدار البيضاء ومراكش والرباط.",
      body: ["تعتزم شركة 'إير فرانس' تعزيز برنامج رحلاتها بين المغرب ومطار باريس شارل ديغول خلال موسم الصيف.", "وستشهد مراكش والرباط ارتفاعا ملحوظا في عدد الرحلات اليومية مقارنة بالمواسم السابقة."] },
    fr: { title: "Air France renforce ses vols entre le Maroc et Paris-CDG cet été", excerpt: "Une hausse de la fréquence des vols vers Casablanca, Marrakech et Rabat.",
      body: ["Air France prévoit de renforcer son programme de vols entre le Maroc et l'aéroport Paris-Charles de Gaulle durant la saison estivale.", "Marrakech et Rabat connaîtront une hausse notable du nombre de vols quotidiens par rapport aux saisons précédentes."] },
    en: { title: "Air France boosts flights between Morocco and Paris-CDG this summer", excerpt: "An increase in flight frequency to Casablanca, Marrakech, and Rabat.",
      body: ["Air France plans to boost its flight schedule between Morocco and Paris Charles de Gaulle Airport during the summer season.", "Marrakech and Rabat will see a notable rise in daily flights compared to previous seasons."] } },

  { id: 46, category: "regions", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    source_name: "Maroc.ma", source_url: "https://www.maroc.ma/ar",
    time: { ar: "قبل شهرين", fr: "il y a deux mois", en: "two months ago" },
    ar: { title: "الملك يطلق مخططا لتنمية جهة الدار البيضاء الكبرى", excerpt: "برنامج تنموي متكامل يشمل تحسين ظروف عيش الساكنة والبنيات التحتية.",
      body: ["أطلق الملك محمد السادس مخططا للتنمية المندمجة بجهة الدار البيضاء الكبرى، بعد مدن أخرى استفادت من برامج مماثلة.", "ويتمحور المخطط حول عدة محاور استراتيجية، من بينها تحسين ظروف عيش الفئات الاجتماعية الهشة."] },
    fr: { title: "Le Roi lance un plan de développement pour le Grand Casablanca", excerpt: "Un programme intégré incluant l'amélioration du cadre de vie et des infrastructures.",
      body: ["Le Roi Mohammed VI a lancé un plan de développement intégré pour la région du Grand Casablanca, après d'autres villes ayant bénéficié de programmes similaires.", "Le plan s'articule autour de plusieurs axes stratégiques, dont l'amélioration des conditions de vie des populations vulnérables."] },
    en: { title: "King launches development plan for Greater Casablanca", excerpt: "An integrated program covering living conditions and infrastructure.",
      body: ["King Mohammed VI launched an integrated development plan for the Greater Casablanca region, following similar programs in other cities.", "The plan is built around several strategic pillars, including improving living conditions for vulnerable groups."] } },

  { id: 47, category: "regions", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    source_name: "Le360", source_url: "https://ar.le360.ma/",
    time: { ar: "قبل شهرين", fr: "il y a deux mois", en: "two months ago" },
    ar: { title: "أشغال ميناء الداخلة الأطلسي الجديد تتواصل بكلفة 13 مليار درهم", excerpt: "مشروع استراتيجي يروم تعزيز موقع المغرب اللوجستي على الواجهة الأطلسية.",
      body: ["تتواصل أشغال بناء ميناء الداخلة الأطلسي الجديد، بكلفة إجمالية تناهز 13 مليار درهم.", "ويندرج المشروع ضمن استراتيجية أوسع لتعزيز موقع المغرب كمنصة لوجستية إقليمية على الواجهة الأطلسية."] },
    fr: { title: "Les travaux du nouveau port atlantique de Dakhla se poursuivent", excerpt: "Un projet stratégique pour renforcer la position logistique du Maroc sur la façade atlantique.",
      body: ["Les travaux de construction du nouveau port atlantique de Dakhla se poursuivent, pour un coût total avoisinant 13 milliards de dirhams.", "Le projet s'inscrit dans une stratégie plus large visant à renforcer la position du Maroc comme plateforme logistique régionale."] },
    en: { title: "New Dakhla Atlantic port construction continues, costing 13 billion dirhams", excerpt: "A strategic project to strengthen Morocco's logistics position on the Atlantic coast.",
      body: ["Construction of the new Dakhla Atlantic port continues, with a total cost of around 13 billion dirhams.", "The project is part of a broader strategy to strengthen Morocco's position as a regional logistics hub on the Atlantic coast."] } },

  { id: 48, category: "regions", img: "https://images.unsplash.com/photo-1503007163792-a627a41cb6c0?w=800&q=80",
    source_name: "Le360", source_url: "https://ar.le360.ma/",
    time: { ar: "قبل شهرين", fr: "il y a deux mois", en: "two months ago" },
    ar: { title: "بناء محطة جوية جديدة بمطار طنجة ضمن برنامج تحديث المطارات", excerpt: "استثمارات واسعة تشمل عدة مطارات مغربية في أفق 2026.",
      body: ["يشمل برنامج تحديث المطارات المغربية بناء محطة جوية جديدة بمطار طنجة، إلى جانب تحديث محطات مراكش وأكادير وفاس.", "وتندرج هذه المشاريع ضمن استعدادات المملكة لاستضافة تظاهرات رياضية ودولية كبرى."] },
    fr: { title: "Construction d'un nouveau terminal à l'aéroport de Tanger", excerpt: "De vastes investissements concernent plusieurs aéroports marocains à l'horizon 2026.",
      body: ["Le programme de modernisation des aéroports marocains prévoit la construction d'un nouveau terminal à l'aéroport de Tanger, ainsi que la modernisation des terminaux de Marrakech, Agadir et Fès.", "Ces projets s'inscrivent dans les préparatifs du Royaume pour accueillir de grands événements sportifs internationaux."] },
    en: { title: "New terminal planned for Tangier Airport under modernization program", excerpt: "Broad investments cover several Moroccan airports heading into 2026.",
      body: ["Morocco's airport modernization program includes building a new terminal at Tangier Airport, alongside upgrades to the Marrakech, Agadir, and Fez terminals.", "The projects are part of the Kingdom's preparations to host major international sporting events."] } },

  // ---------------- CULTURE (6 more) ----------------
  { id: 49, category: "culture", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    source_name: "Hespress", source_url: "https://www.hespress.com/art-et-culture",
    time: { ar: "قبل شهرين", fr: "il y a deux mois", en: "two months ago" },
    ar: { title: "فرنسا ضيف شرف الدورة 31 لمعرض النشر والكتاب بالرباط", excerpt: "دورة تحتفي بالحوار الأدبي بين الساحتين الفرنسية والمغربية.",
      body: ["استضافت الرباط الدورة الحادية والثلاثين للمعرض الدولي للنشر والكتاب، بحضور فرنسا كضيف شرف.", "وتضمنت الدورة برنامجا موازيا خارج أسوار المعرض، شمل عروضا سينمائية وموسيقية مفتوحة للجمهور."] },
    fr: { title: "La France invitée d'honneur de la 31e édition du Salon du livre de Rabat", excerpt: "Une édition célébrant le dialogue littéraire entre la France et le Maroc.",
      body: ["Rabat a accueilli la 31e édition du Salon international de l'édition et du livre, avec la France comme invitée d'honneur.", "L'édition a inclus un programme parallèle 'hors les murs', avec des projections et concerts ouverts au public."] },
    en: { title: "France named guest of honor at Rabat's 31st book fair", excerpt: "An edition celebrating literary dialogue between France and Morocco.",
      body: ["Rabat hosted the 31st International Publishing and Book Fair, with France as guest of honor.", "The edition included an 'outside the walls' program featuring film screenings and concerts open to the public."] } },

  { id: 50, category: "culture", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80",
    source_name: "Maspero", source_url: "https://www.maspero.eg/art-and-culture/",
    time: { ar: "قبل شهرين", fr: "il y a deux mois", en: "two months ago" },
    ar: { title: "الرباط تحمل لقب عاصمة عالمية للكتاب لسنة 2026", excerpt: "تتويج من اليونسكو يعكس الموروث الثقافي الغني للعاصمة المغربية.",
      body: ["اختارت منظمة اليونسكو مدينة الرباط عاصمة عالمية للكتاب للفترة الممتدة من أبريل 2026 إلى أبريل 2027.", "ويأتي هذا التتويج تزامنا مع الدورة الحادية والثلاثين لمعرض النشر والكتاب بالمدينة."] },
    fr: { title: "Rabat, Capitale mondiale du livre 2026", excerpt: "Une distinction de l'UNESCO qui reflète le riche patrimoine culturel de la capitale.",
      body: ["L'UNESCO a désigné Rabat Capitale mondiale du livre pour la période allant d'avril 2026 à avril 2027.", "Cette distinction coïncide avec la 31e édition du Salon international de l'édition et du livre dans la ville."] },
    en: { title: "Rabat named World Book Capital for 2026", excerpt: "A UNESCO honor reflecting the Moroccan capital's rich cultural heritage.",
      body: ["UNESCO designated Rabat as World Book Capital for the period from April 2026 to April 2027.", "The honor coincides with the city's 31st International Publishing and Book Fair."] } },

  { id: 51, category: "culture", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    source_name: "Maspero", source_url: "https://www.maspero.eg/art-and-culture/",
    time: { ar: "قبل شهرين", fr: "il y a deux mois", en: "two months ago" },
    ar: { title: "ولي العهد الأمير الحسن يفتتح معرض النشر والكتاب بالرباط", excerpt: "افتتاح رسمي تحت الرعاية السامية لصاحب الجلالة الملك محمد السادس.",
      body: ["ترأس ولي العهد الأمير مولاي الحسن حفل افتتاح الدورة الحادية والثلاثين للمعرض الدولي للنشر والكتاب بالرباط.", "وتنظم فعاليات المعرض تحت الرعاية السامية للملك محمد السادس على مدى عشرة أيام."] },
    fr: { title: "Le Prince héritier Moulay El Hassan inaugure le Salon du livre de Rabat", excerpt: "Une ouverture officielle sous la haute présidence du Roi Mohammed VI.",
      body: ["Le Prince héritier Moulay El Hassan a présidé la cérémonie d'ouverture de la 31e édition du Salon international de l'édition et du livre à Rabat.", "L'événement se déroule sous la haute présidence du Roi Mohammed VI, sur une durée de dix jours."] },
    en: { title: "Crown Prince Moulay El Hassan opens Rabat book fair", excerpt: "An official opening under the high patronage of King Mohammed VI.",
      body: ["Crown Prince Moulay El Hassan presided over the opening ceremony of the 31st International Publishing and Book Fair in Rabat.", "The event runs under the high patronage of King Mohammed VI over ten days."] } },

  { id: 52, category: "culture", img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    source_name: "Hespress", source_url: "https://www.hespress.com/art-et-culture",
    time: { ar: "قبل أسبوع", fr: "il y a une semaine", en: "a week ago" },
    ar: { title: "نقاد: المهرجانات الصيفية رافعة ثقافية تحتاج توزيعا أكثر توازنا بين الجهات", excerpt: "دعوات لتحقيق العدالة المجالية في برمجة التظاهرات الفنية.",
      body: ["اعتبر نقاد فنيون أن فصل الصيف يمثل فرصة حقيقية لتنشيط المشهد الفني عبر المهرجانات الثقافية والموسيقية.", "وشددوا في المقابل على ضرورة توزيع هذه التظاهرات بشكل أكثر توازنا بين مختلف جهات المملكة."] },
    fr: { title: "Des critiques appellent à une répartition plus équilibrée des festivals d'été", excerpt: "Des appels à davantage d'équité territoriale dans la programmation culturelle.",
      body: ["Des critiques culturels estiment que l'été offre une réelle opportunité de dynamiser la scène artistique à travers les festivals.", "Ils insistent néanmoins sur la nécessité d'une répartition plus équilibrée de ces événements entre les régions du Royaume."] },
    en: { title: "Critics call for more balanced distribution of summer festivals", excerpt: "Calls for greater regional equity in cultural event programming.",
      body: ["Cultural critics say summer offers a real opportunity to energize the arts scene through festivals.", "They stressed, however, the need for a more balanced distribution of these events across the Kingdom's regions."] } },

  { id: 53, category: "culture", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    source_name: "Hespress", source_url: "https://www.hespress.com/art-et-culture",
    time: { ar: "قبل أسبوعين", fr: "il y a deux semaines", en: "two weeks ago" },
    ar: { title: "الدوزي والشاب خالد يشعلان منصة موازين", excerpt: "سهرتان فنيتان كبيرتان ضمن فعاليات الدورة الحالية من المهرجان.",
      body: ["أحيا الفنانان عبد الحفيظ الدوزي والشاب خالد سهرتين فنيتين على منصة الأمير مولاي عبد الله بالرباط ضمن مهرجان موازين.", "وعرف الحفلان إقبالا جماهيريا كبيرا وسط أجواء احتفالية مميزة."] },
    fr: { title: "Doozy et Cheb Khaled enflamment la scène de Mawazine", excerpt: "Deux grandes soirées artistiques dans le cadre de l'édition actuelle du festival.",
      body: ["Les artistes Abdelhafid Doozy et Cheb Khaled ont animé deux soirées sur la scène du Prince Moulay Abdellah à Rabat, dans le cadre du festival Mawazine.", "Les deux concerts ont connu une grande affluence dans une ambiance festive."] },
    en: { title: "Doozy and Cheb Khaled light up the Mawazine stage", excerpt: "Two major concerts as part of this year's festival.",
      body: ["Artists Abdelhafid Doozy and Cheb Khaled performed two shows at the Prince Moulay Abdellah stage in Rabat as part of the Mawazine festival.", "Both concerts drew large crowds in a festive atmosphere."] } },

  { id: 54, category: "culture", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    source_name: "Ahdath Info", source_url: "https://www.ahdath.info/",
    time: { ar: "قبل 3 أسابيع", fr: "il y a 3 semaines", en: "3 weeks ago" },
    ar: { title: "سهرة أمازيغية مميزة تجمع الجمهور على منصة سلا بموازين", excerpt: "فرقة 'ريف إكسبيريانس' تتألق بألحان الريف وسط تفاعل جماهيري لافت.",
      body: ["احتضنت منصة سلا سهرة أمازيغية مميزة ضمن مهرجان موازين، جمعت بين التراث الأمازيغي وروح التجديد الموسيقي.", "وتألقت فرقة 'ريف إكسبيريانس' القادمة من الحسيمة، وسط حضور جماهيري قوي."] },
    fr: { title: "Une soirée amazighe marquante réunit le public sur la scène de Salé", excerpt: "Le groupe 'Rif Experience' brille avec un accueil populaire remarqué.",
      body: ["La scène de Salé a accueilli une soirée amazighe marquante dans le cadre du festival Mawazine, mêlant patrimoine amazigh et renouveau musical.", "Le groupe 'Rif Experience', venu d'Al Hoceïma, a brillé devant un public nombreux."] },
    en: { title: "Memorable Amazigh night draws crowds at Mawazine's Salé stage", excerpt: "The band 'Rif Experience' shines to a strong audience response.",
      body: ["The Salé stage hosted a memorable Amazigh night as part of the Mawazine festival, blending Amazigh heritage with musical renewal.", "The band 'Rif Experience', from Al Hoceima, shone in front of a large crowd."] } },

  // ---------------- SANTE (3 more) ----------------
  { id: 55, category: "sante", img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
    source_name: "Hespress", source_url: "https://www.hespress.com/%D9%88%D8%B2%D9%8A%D8%B1-%D8%A7%D9%84%D8%B5%D8%AD%D8%A9-%D9%84%D8%A7-%D9%8A%D9%88%D8%AC%D8%AF-%D8%AD%D9%84-%D8%B3%D8%AD%D8%B1%D9%8A-%D9%84%D8%B3%D8%AF-%D8%AE%D8%B5%D8%A7%D8%B5-%D8%A7%D9%84%D9%85-1633208.html",
    time: { ar: "منذ أشهر", fr: "il y a plusieurs mois", en: "several months ago" },
    ar: { title: "وزير الصحة: لا حل سحري لسد خصاص الموارد البشرية بالقطاع", excerpt: "اقتراح بإحداث نظام إلكتروني موحد لتتبع الخدمات الصحية في الوقت الفعلي.",
      body: ["أقر وزير الصحة بأن معالجة خصاص الموارد البشرية في القطاع الصحي لا يوجد لها حل سحري وسريع.", "واقترح الوزير إحداث نظام إلكتروني موحد لتسجيل ومراقبة الخدمات الصحية، من مواعيد المرضى إلى مخزون الأدوية."] },
    fr: { title: "Le ministre de la Santé : pas de solution miracle à la pénurie de personnel", excerpt: "Proposition d'un système électronique unifié pour le suivi des services de santé en temps réel.",
      body: ["Le ministre de la Santé a reconnu qu'il n'existe pas de solution miracle et rapide à la pénurie de ressources humaines dans le secteur.", "Il a proposé la mise en place d'un système électronique unifié pour enregistrer et suivre les services de santé, des rendez-vous aux stocks de médicaments."] },
    en: { title: "Health minister: no magic fix for healthcare staffing shortage", excerpt: "A proposal for a unified electronic system to track health services in real time.",
      body: ["Morocco's health minister acknowledged there is no quick, magic solution to the shortage of healthcare workers.", "He proposed setting up a unified electronic system to log and monitor health services, from patient appointments to medicine stock."] } },

  { id: 56, category: "sante", img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=800&q=80",
    source_name: "Hespress", source_url: "https://www.hespress.com/",
    time: { ar: "قبل 4 أيام", fr: "il y a 4 jours", en: "4 days ago" },
    ar: { title: "أطباء يوصون باستعمال الكريمات الواقية وتجنب التعرض المباشر للشمس", excerpt: "نصائح إضافية لمواجهة موجة الحر التي تعرفها المملكة.",
      body: ["أوصى مختصون في الصحة باستعمال الكريمات الواقية من أشعة الشمس وتجديدها كل ساعتين خلال فترات الذروة الحرارية.", "وشددوا على أهمية الحفاظ على الترطيب الجيد وتجنب المجهود البدني في أوقات الظهيرة."] },
    fr: { title: "Les médecins recommandent l'usage de crème solaire et d'éviter l'exposition directe", excerpt: "Des conseils supplémentaires face à la vague de chaleur qui touche le Royaume.",
      body: ["Des spécialistes de la santé ont recommandé l'utilisation de crème solaire, à renouveler toutes les deux heures pendant les pics de chaleur.", "Ils ont insisté sur l'importance de bien s'hydrater et d'éviter les efforts physiques en milieu de journée."] },
    en: { title: "Doctors recommend sunscreen and avoiding direct sun exposure", excerpt: "Additional advice as the Kingdom faces a heat wave.",
      body: ["Health specialists recommended using sunscreen, reapplied every two hours during peak heat, to prevent sunburn.", "They stressed the importance of staying well hydrated and avoiding physical exertion at midday."] } },

  { id: 57, category: "sante", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    source_name: "Sahha.ma", source_url: "https://sahha.ma/en/articles/calendrier-vaccinal-enfant-maroc-2026",
    time: { ar: "منذ أشهر", fr: "il y a plusieurs mois", en: "several months ago" },
    ar: { title: "دليل جدول التلقيح الإجباري للأطفال بالمغرب لسنة 2026", excerpt: "البرنامج الوطني للتمنيع يغطي مجانا 12 مرضا قابلا للوقاية.",
      body: ["يقدم البرنامج الوطني للتمنيع بالمغرب جدولا شاملا للقاحات الإجبارية المجانية الموجهة للأطفال حسب الفئة العمرية.", "ويهدف البرنامج إلى الوقاية من 12 مرضا معديا عبر ضمان استمرارية توفر اللقاحات على المستوى الوطني."] },
    fr: { title: "Guide du calendrier vaccinal obligatoire pour enfants au Maroc en 2026", excerpt: "Le programme national d'immunisation couvre gratuitement 12 maladies évitables.",
      body: ["Le programme national d'immunisation au Maroc propose un calendrier complet des vaccins obligatoires gratuits selon l'âge de l'enfant.", "Le programme vise à prévenir 12 maladies infectieuses en garantissant la disponibilité continue des vaccins à l'échelle nationale."] },
    en: { title: "Guide to Morocco's mandatory child vaccination schedule for 2026", excerpt: "The national immunization program covers 12 preventable diseases for free.",
      body: ["Morocco's national immunization program offers a complete schedule of free mandatory vaccines by age group.", "The program aims to prevent 12 infectious diseases by ensuring vaccines remain consistently available nationwide."] } },

  // ---------------- TECH (4 more) ----------------
  { id: 58, category: "tech", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    source_name: "Wikipedia (استراتيجية المغرب الرقمي)", source_url: "https://ar.wikipedia.org/wiki/%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8_%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A",
    time: { ar: "منذ أشهر", fr: "il y a plusieurs mois", en: "several months ago" },
    ar: { title: "شركات ناشئة مغربية تجمع تمويلات جديدة لتطوير حلولها الرقمية", excerpt: "Chari وDone من بين الأسماء التي استفادت من جولات تمويل حديثة.",
      body: ["أعلنت شركات ناشئة مغربية، من بينها 'شاري' و'دَن'، عن جمع تمويلات جديدة لتطوير حلولها الرقمية.", "وتأتي هذه التمويلات في إطار دينامية متصاعدة يعرفها قطاع الشركات الناشئة بالمغرب."] },
    fr: { title: "Des start-up marocaines lèvent de nouveaux fonds pour leurs solutions numériques", excerpt: "Chari et Done parmi les entreprises ayant bénéficié de récents tours de financement.",
      body: ["Des start-up marocaines, dont Chari et Done, ont annoncé avoir levé de nouveaux fonds pour développer leurs solutions numériques.", "Ces levées de fonds s'inscrivent dans une dynamique croissante de l'écosystème des start-up au Maroc."] },
    en: { title: "Moroccan startups raise fresh funding to develop digital solutions", excerpt: "Chari and Done are among the companies to benefit from recent funding rounds.",
      body: ["Moroccan startups, including Chari and Done, announced raising fresh funding to develop their digital solutions.", "The funding rounds reflect the growing momentum of Morocco's startup ecosystem."] } },

  { id: 59, category: "tech", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    source_name: "Wikipedia (استراتيجية المغرب الرقمي)", source_url: "https://ar.wikipedia.org/wiki/%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8_%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A",
    time: { ar: "منذ أشهر", fr: "il y a plusieurs mois", en: "several months ago" },
    ar: { title: "تكنوباركات جديدة تفتح أبوابها بأكادير والصويرة", excerpt: "توسع في البنية التحتية الداعمة للمقاولات الناشئة في مجال التكنولوجيا.",
      body: ["افتتحت تكنوباركات جديدة أبوابها في مدينتي أكادير والصويرة، لتنضم إلى نظيراتها بالدار البيضاء والرباط وطنجة.", "وتهدف هذه الفضاءات إلى توفير بنية تحتية مناسبة لاحتضان المقاولات الناشئة في المجال الرقمي."] },
    fr: { title: "De nouveaux technoparcs ouvrent à Agadir et Essaouira", excerpt: "Une extension des infrastructures dédiées aux start-up technologiques.",
      body: ["De nouveaux technoparcs ont ouvert à Agadir et à Essaouira, rejoignant ceux déjà existants à Casablanca, Rabat et Tanger.", "Ces espaces visent à offrir une infrastructure adaptée à l'accueil des start-up du secteur numérique."] },
    en: { title: "New technoparks open in Agadir and Essaouira", excerpt: "An expansion of infrastructure supporting tech startups.",
      body: ["New technoparks have opened in Agadir and Essaouira, joining existing ones in Casablanca, Rabat, and Tangier.", "The spaces aim to provide suitable infrastructure for hosting digital-sector startups."] } },

  { id: 60, category: "tech", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    source_name: "Wikipedia (استراتيجية المغرب الرقمي)", source_url: "https://ar.wikipedia.org/wiki/%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8_%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A",
    time: { ar: "منذ أشهر", fr: "il y a plusieurs mois", en: "several months ago" },
    ar: { title: "استراتيجية المغرب الرقمي 2030 تستهدف 3000 شركة ناشئة", excerpt: "طموح لرفع عدد الشركات الناشئة من 380 إلى 3000 بحلول 2030.",
      body: ["تسعى استراتيجية 'المغرب الرقمي 2030' إلى رفع عدد الشركات الناشئة من 380 شركة سنة 2022 إلى 3000 شركة في أفق 2030.", "كما تهدف إلى رفع حجم الاستثمارات في القطاع من 260 مليون درهم إلى 7 مليارات درهم."] },
    fr: { title: "La stratégie Maroc Digital 2030 vise 3000 start-up", excerpt: "L'ambition de faire passer le nombre de start-up de 380 à 3000 d'ici 2030.",
      body: ["La stratégie 'Maroc Digital 2030' vise à porter le nombre de start-up de 380 en 2022 à 3000 à l'horizon 2030.", "Elle ambitionne aussi de faire passer le volume des investissements du secteur de 260 millions à 7 milliards de dirhams."] },
    en: { title: "Digital Morocco 2030 strategy targets 3,000 startups", excerpt: "An ambition to raise the startup count from 380 to 3,000 by 2030.",
      body: ["The 'Digital Morocco 2030' strategy aims to raise the number of startups from 380 in 2022 to 3,000 by 2030.", "It also aims to grow sector investment from 260 million to 7 billion dirhams."] } },

  { id: 61, category: "tech", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    source_name: "Wikipedia (استراتيجية المغرب الرقمي)", source_url: "https://ar.wikipedia.org/wiki/%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8_%D8%A7%D9%84%D8%B1%D9%82%D9%85%D9%8A",
    time: { ar: "منذ أشهر", fr: "il y a plusieurs mois", en: "several months ago" },
    ar: { title: "برنامج وطني لربط 1800 منطقة قروية بالإنترنت عالي الصبيب", excerpt: "خطوة ضمن المخطط الوطني لتطوير النطاق العريض جدا استعدادا لشبكة الجيل الخامس.",
      body: ["أطلق المغرب برنامجا وطنيا يهدف إلى ربط 1800 منطقة قروية بشبكات الإنترنت عالي الصبيب في أفق 2026.", "وأنشأت شركتا اتصالات المغرب وإنوي كيانين مشتركين لتقاسم البنيات التحتية استعدادا لإطلاق شبكة الجيل الخامس."] },
    fr: { title: "Un programme national pour connecter 1800 zones rurales au haut débit", excerpt: "Une étape du plan national très haut débit en vue de la 5G.",
      body: ["Le Maroc a lancé un programme national visant à connecter 1800 zones rurales à l'internet haut débit à l'horizon 2026.", "Maroc Telecom et Inwi ont créé deux coentreprises pour mutualiser les infrastructures en vue du lancement de la 5G."] },
    en: { title: "National program to connect 1,800 rural areas to high-speed internet", excerpt: "A step in the national broadband plan ahead of 5G rollout.",
      body: ["Morocco launched a national program aiming to connect 1,800 rural areas to high-speed internet by 2026.", "Maroc Telecom and Inwi set up two joint ventures to share infrastructure in preparation for 5G rollout."] } }
];
