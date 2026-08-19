/* ============ DS24 DATA CORE (categories + UI text) ============ */
const CATEGORIES = {
  "politique": {
    "ar": "سياسة",
    "fr": "Politique",
    "en": "Politics"
  },
  "economie": {
    "ar": "اقتصاد",
    "fr": "Économie",
    "en": "Economy"
  },
  "societe": {
    "ar": "مجتمع",
    "fr": "Société",
    "en": "Society"
  },
  "sport": {
    "ar": "رياضة",
    "fr": "Sport",
    "en": "Sport"
  },
  "regions": {
    "ar": "جهات",
    "fr": "Régions",
    "en": "Regions"
  },
  "culture": {
    "ar": "فن وثقافة",
    "fr": "Culture",
    "en": "Culture"
  },
  "sante": {
    "ar": "صحة",
    "fr": "Santé",
    "en": "Health"
  },
  "tech": {
    "ar": "تكنولوجيا",
    "fr": "Technologie",
    "en": "Technology"
  }
};

const CATEGORY_ORDER = ["politique","economie","societe","sport","regions","culture","sante","tech"];

const TEXT = {
  "brand_tag": {
    "ar": "إخبارية",
    "fr": "Actualités",
    "en": "News"
  },
  "home": {
    "ar": "الرئيسية",
    "fr": "Accueil",
    "en": "Home"
  },
  "recent": {
    "ar": "الأحدث",
    "fr": "Récemment ajoutés",
    "en": "Recently Added"
  },
  "search_ph": {
    "ar": "ابحث في DS24...",
    "fr": "Rechercher sur DS24...",
    "en": "Search DS24..."
  },
  "breaking": {
    "ar": "عاجل",
    "fr": "En direct",
    "en": "Breaking"
  },
  "ticker": {
    "ar": "متابعة حية لأبرز مستجدات اليوم في المغرب • تحديثات مستمرة على مدار الساعة • تابعوا آخر الأخبار عبر منصة DS24",
    "fr": "Suivi en direct de l'actualité au Maroc • Mises à jour continues 24h/24 • Suivez les dernières infos sur DS24",
    "en": "Live coverage of today's top stories in Morocco • Updated around the clock • Follow the latest news on DS24"
  },
  "latest_news": {
    "ar": "آخر الأخبار",
    "fr": "Dernières actualités",
    "en": "Latest News"
  },
  "photos_videos": {
    "ar": "صور وفيديو",
    "fr": "Photos et vidéos",
    "en": "Photos & Videos"
  },
  "most_read": {
    "ar": "الأكثر قراءة",
    "fr": "Les plus lus",
    "en": "Most Read"
  },
  "popular_tags": {
    "ar": "وسوم شائعة",
    "fr": "Tags populaires",
    "en": "Popular Tags"
  },
  "latest_in": {
    "ar": "أحدث مقالات",
    "fr": "Derniers articles :",
    "en": "Latest in"
  },
  "articles_count": {
    "ar": "مقالات",
    "fr": "articles",
    "en": "articles"
  },
  "next": {
    "ar": "التالي ‹",
    "fr": "Suivant ›",
    "en": "Next ›"
  },
  "read_more": {
    "ar": "اقرأ المزيد",
    "fr": "Lire la suite",
    "en": "Read more"
  },
  "related": {
    "ar": "مقالات ذات صلة",
    "fr": "Articles similaires",
    "en": "Related articles"
  },
  "back_home": {
    "ar": "العودة إلى الرئيسية",
    "fr": "Retour à l'accueil",
    "en": "Back to home"
  },
  "about": {
    "ar": "من نحن",
    "fr": "À propos",
    "en": "About us"
  },
  "contact": {
    "ar": "اتصل بنا",
    "fr": "Contact",
    "en": "Contact"
  },
  "editorial": {
    "ar": "فريق التحرير",
    "fr": "Rédaction",
    "en": "Editorial team"
  },
  "sections": {
    "ar": "أقسام",
    "fr": "Rubriques",
    "en": "Sections"
  },
  "services": {
    "ar": "خدمات",
    "fr": "Services",
    "en": "Services"
  },
  "newsletter": {
    "ar": "النشرة الإخبارية",
    "fr": "Newsletter",
    "en": "Newsletter"
  },
  "mobile_app": {
    "ar": "تطبيق الجوال",
    "fr": "Application mobile",
    "en": "Mobile app"
  },
  "ads": {
    "ar": "الإعلانات",
    "fr": "Publicité",
    "en": "Advertising"
  },
  "follow_us": {
    "ar": "تابعونا",
    "fr": "Suivez-nous",
    "en": "Follow us"
  },
  "rights": {
    "ar": "© 2026 DS24 — جميع الحقوق محفوظة",
    "fr": "© 2026 DS24 — Tous droits réservés",
    "en": "© 2026 DS24 — All rights reserved"
  },
  "source_title": {
    "ar": "مصدر مطلع",
    "fr": "Source proche du dossier",
    "en": "Inside Source"
  },
  "source_text": {
    "ar": "معطيات جديدة حول ملف تتبعه DS24 منذ أسابيع وتفاصيل لم تكشف بعد حول الجهات المعنية بالموضوع...",
    "fr": "Nouveaux éléments sur un dossier suivi par DS24 depuis des semaines, avec des détails encore non révélés...",
    "en": "New details on a story DS24 has been tracking for weeks, with information not yet made public..."
  },
  "no_results": {
    "ar": "لا توجد نتائج مطابقة",
    "fr": "Aucun résultat trouvé",
    "en": "No matching results"
  },
  "source_label": {
    "ar": "المصدر",
    "fr": "Source",
    "en": "Source"
  },
  "read_full": {
    "ar": "قراءة الخبر كاملا لدى المصدر",
    "fr": "Lire l'article complet chez la source",
    "en": "Read the full story at the source"
  },
  "about_title": {
    "ar": "من نحن",
    "fr": "À propos de nous",
    "en": "About Us"
  },
  "about_body": {
    "ar": "DS24 منصة إخبارية رقمية تهتم بتغطية آخر مستجدات المغرب في مختلف المجالات: السياسة، الاقتصاد، المجتمع، الرياضة، الجهات، الثقافة، الصحة والتكنولوجيا. نعمل على تقديم ملخصات موثوقة ومحينة لأبرز الأخبار، مع الإشارة دائما إلى المصدر الأصلي لكل معلومة، لنمنح القارئ صورة شاملة وسريعة عما يجري في المملكة.",
    "fr": "DS24 est une plateforme d'actualités numérique dédiée à la couverture des dernières informations au Maroc dans tous les domaines : politique, économie, société, sport, régions, culture, santé et technologie. Nous proposons des résumés fiables et actualisés des principales actualités, en indiquant systématiquement la source originale de chaque information.",
    "en": "DS24 is a digital news platform covering the latest developments in Morocco across all fields: politics, economy, society, sport, regions, culture, health, and technology. We provide reliable, up-to-date summaries of top stories, always crediting the original source for every piece of information."
  },
  "about_mission": {
    "ar": "مهمتنا",
    "fr": "Notre mission",
    "en": "Our Mission"
  },
  "about_mission_body": {
    "ar": "تسهيل الوصول إلى المعلومة الموثوقة بلغة واضحة وبثلاث لغات (العربية، الفرنسية، الإنجليزية)، مع احترام كامل لحقوق الملكية الفكرية لمصادر الأخبار الأصلية.",
    "fr": "Faciliter l'accès à une information fiable dans un langage clair et en trois langues (arabe, français, anglais), dans le respect total des droits de propriété intellectuelle des sources originales.",
    "en": "Making reliable information accessible in clear language and three languages (Arabic, French, English), while fully respecting the intellectual property rights of original news sources."
  },
  "contact_title": {
    "ar": "اتصل بنا",
    "fr": "Contactez-nous",
    "en": "Contact Us"
  },
  "contact_body": {
    "ar": "يسعدنا تواصلكم معنا لأي استفسار، اقتراح أو ملاحظة حول محتوى الموقع.",
    "fr": "N'hésitez pas à nous contacter pour toute question, suggestion ou remarque concernant le contenu du site.",
    "en": "Feel free to reach out with any question, suggestion, or feedback about the site's content."
  },
  "contact_email_label": {
    "ar": "البريد الإلكتروني",
    "fr": "E-mail",
    "en": "Email"
  },
  "team_title": {
    "ar": "فريق التحرير",
    "fr": "L'équipe éditoriale",
    "en": "Editorial Team"
  },
  "team_body": {
    "ar": "يتولى فريق DS24 عملية رصد وتلخيص الأخبار المتداولة في وسائل الإعلام المغربية، والتحقق من صحة المعلومة قبل نشرها، مع الحرص على الإشارة إلى المصدر الأصلي لكل خبر. يعمل الفريق على تحديث المحتوى بشكل دوري لضمان مواكبة آخر المستجدات.",
    "fr": "L'équipe de DS24 assure la veille et la synthèse des actualités relayées par les médias marocains, vérifie l'information avant publication, et veille à toujours citer la source originale. L'équipe met régulièrement à jour le contenu pour suivre l'actualité.",
    "en": "The DS24 team monitors and summarizes news covered by Moroccan media, verifies information before publishing, and always credits the original source. The team updates content regularly to keep pace with current events."
  }
};

// Populated by data-articles-1.js, data-articles-2.js, data-articles-3.js (loaded after this file)
const ARTICLES = [];
