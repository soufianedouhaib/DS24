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
                    en: "New details on a story DS24 has been tracking for weeks, with information not yet made public..." }
};

/*
  Each article has:
  id, category (slug), img,
  time: {ar,fr,en}  -> relative time label
  ar/fr/en: { title, excerpt, body }  (body = array of paragraphs)
*/
const ARTICLES = [
  // ---------------- POLITIQUE ----------------
  {
    id: 1, category: "politique",
    img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
    time: { ar: "قبل 30 دقيقة", fr: "il y a 30 minutes", en: "30 minutes ago" },
    ar: { title: "اجتماع لمناقشة مشروع قانون جديد يتعلق بالإصلاح الإداري",
      excerpt: "نقاش موسع بين الفرق البرلمانية حول بنود المشروع قبل التصويت عليه.",
      body: [
        "عقدت اللجان المعنية اجتماعا موسعا لمناقشة تفاصيل مشروع القانون الذي يهدف إلى تبسيط المساطر الإدارية وتقريب الخدمات من المواطنين.",
        "وشدد المتدخلون على ضرورة إشراك مختلف الفاعلين في صياغة النص النهائي، بما يضمن انسجامه مع الأهداف التنموية المعلنة.",
        "ومن المرتقب أن يُعرض المشروع على التصويت خلال الجلسة العامة المقبلة بعد استكمال المشاورات مع الهيئات المهنية المعنية."
      ]},
    fr: { title: "Réunion sur un nouveau projet de loi relatif à la réforme administrative",
      excerpt: "Large débat entre les groupes parlementaires sur les dispositions du texte avant son vote.",
      body: [
        "Les commissions concernées ont tenu une réunion élargie pour examiner les détails du projet de loi visant à simplifier les procédures administratives.",
        "Les intervenants ont souligné la nécessité d'associer les différents acteurs à la rédaction du texte final.",
        "Le projet devrait être soumis au vote lors de la prochaine séance plénière après finalisation des concertations avec les instances professionnelles."
      ]},
    en: { title: "Meeting held on new bill related to administrative reform",
      excerpt: "Broad debate among parliamentary groups on the bill's provisions ahead of the vote.",
      body: [
        "Relevant committees held an expanded meeting to discuss the details of a bill aimed at simplifying administrative procedures for citizens.",
        "Participants stressed the need to involve various stakeholders in drafting the final text to align it with development goals.",
        "The bill is expected to go to a vote in the next plenary session once consultations with professional bodies are complete."
      ]}
  },
  {
    id: 2, category: "politique",
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    time: { ar: "قبل ساعة", fr: "il y a 1 heure", en: "1 hour ago" },
    ar: { title: "تصريحات رسمية حول محاور المرحلة المقبلة في السياسة الخارجية",
      excerpt: "توضيحات بخصوص أولويات التعاون الدولي خلال الأشهر القادمة.",
      body: [
        "أكدت مصادر رسمية أن المرحلة المقبلة ستشهد تعزيزا للشراكات الاقتصادية والدبلوماسية مع عدد من الدول الشريكة.",
        "وأوضحت المصادر ذاتها أن الأولوية ستُمنح لملفات التعاون الاقتصادي والأمني، إلى جانب مواصلة الانخراط في المبادرات الإقليمية والدولية."
      ]},
    fr: { title: "Déclarations officielles sur les priorités de la politique étrangère",
      excerpt: "Précisions sur les priorités de la coopération internationale pour les prochains mois.",
      body: [
        "Des sources officielles ont affirmé que la période à venir verra un renforcement des partenariats économiques et diplomatiques avec plusieurs pays partenaires.",
        "Les mêmes sources ont précisé que la priorité sera accordée aux dossiers de coopération économique et sécuritaire, en plus de la poursuite de l'engagement dans les initiatives régionales."
      ]},
    en: { title: "Official statements on upcoming foreign policy priorities",
      excerpt: "Clarifications on international cooperation priorities for the coming months.",
      body: [
        "Official sources confirmed that the coming period will see strengthened economic and diplomatic partnerships with several partner countries.",
        "The same sources noted that priority will go to economic and security cooperation files, alongside continued engagement in regional and international initiatives."
      ]}
  },
  {
    id: 3, category: "politique",
    img: "https://images.unsplash.com/photo-1591189863430-ab87e120f312?w=800&q=80",
    time: { ar: "قبل ساعتين", fr: "il y a 2 heures", en: "2 hours ago" },
    ar: { title: "لقاء تنسيقي بين ممثلي الأحزاب حول قضايا التنمية المحلية",
      excerpt: "بحث سبل تعزيز التنسيق بين مختلف الفاعلين السياسيين على المستوى المحلي.",
      body: [
        "جمع لقاء تنسيقي ممثلين عن عدة أحزاب سياسية لمناقشة أوراش التنمية المحلية وسبل تسريع تنفيذها.",
        "وتم التأكيد خلال اللقاء على أهمية العمل التشاركي بين مختلف الفاعلين لضمان استفادة الساكنة من البرامج المبرمجة."
      ]},
    fr: { title: "Réunion de coordination entre représentants des partis sur le développement local",
      excerpt: "Recherche de moyens pour renforcer la coordination entre acteurs politiques locaux.",
      body: [
        "Une réunion de coordination a rassemblé des représentants de plusieurs partis politiques pour discuter des chantiers de développement local.",
        "Les participants ont souligné l'importance du travail participatif entre les différents acteurs pour garantir les bénéfices des programmes engagés."
      ]},
    en: { title: "Coordination meeting between party representatives on local development",
      excerpt: "Exploring ways to strengthen coordination among local political actors.",
      body: [
        "A coordination meeting brought together representatives from several political parties to discuss local development projects and how to accelerate them.",
        "Participants emphasized the importance of collaborative work among stakeholders to ensure residents benefit from planned programs."
      ]}
  },

  // ---------------- ECONOMIE ----------------
  {
    id: 4, category: "economie",
    img: "https://images.unsplash.com/photo-1543165796-5426273eaab3?w=800&q=80",
    time: { ar: "قبل 45 دقيقة", fr: "il y a 45 minutes", en: "45 minutes ago" },
    ar: { title: "افتتاح معرض صناعي بمشاركة عشرات الشركات الناشئة",
      excerpt: "فعالية تجمع فاعلين اقتصاديين لعرض مشاريع ومنتجات محلية أمام مستثمرين محتملين.",
      body: [
        "احتضنت العاصمة الاقتصادية فعالية صناعية جمعت عشرات الشركات الناشئة لعرض منتجاتها وحلولها التقنية أمام مستثمرين ومهنيين.",
        "وأتاح المعرض فرصة للتواصل المباشر بين حاملي المشاريع والجهات الممولة، في أفق تسريع وتيرة تمويل المقاولات الصغرى والمتوسطة.",
        "ونظمت على هامش الفعالية ورشات تكوينية حول ريادة الأعمال والتحول الرقمي."
      ]},
    fr: { title: "Ouverture d'un salon industriel avec la participation de dizaines de start-up",
      excerpt: "Un événement réunissant des acteurs économiques pour présenter des projets locaux à des investisseurs.",
      body: [
        "La capitale économique a accueilli un événement industriel réunissant des dizaines de start-up venues présenter leurs produits et solutions technologiques.",
        "Le salon a permis des échanges directs entre porteurs de projets et bailleurs de fonds, dans la perspective d'accélérer le financement des PME.",
        "Des ateliers de formation sur l'entrepreneuriat et la transformation numérique ont été organisés en marge de l'événement."
      ]},
    en: { title: "Industrial fair opens with dozens of startups participating",
      excerpt: "An event bringing together economic actors to showcase local projects to potential investors.",
      body: [
        "The economic capital hosted an industrial event bringing together dozens of startups to showcase their products and tech solutions to investors and professionals.",
        "The fair enabled direct exchanges between project holders and funding bodies, aiming to speed up financing for small and medium enterprises.",
        "Training workshops on entrepreneurship and digital transformation were held alongside the event."
      ]}
  },
  {
    id: 5, category: "economie",
    img: "https://images.unsplash.com/photo-1554774853-b415df9eeb92?w=800&q=80",
    time: { ar: "قبل ساعة", fr: "il y a 1 heure", en: "1 hour ago" },
    ar: { title: "نمو ملحوظ في عدد من القطاعات الإنتاجية خلال الفصل الأخير",
      excerpt: "بيانات حديثة تشير إلى تحسن مؤشرات الإنتاج مقارنة بالفترة نفسها من العام الماضي.",
      body: [
        "أظهرت بيانات اقتصادية حديثة تسجيل نمو ملحوظ في عدد من القطاعات الإنتاجية خلال الفصل الأخير مقارنة بالفترة نفسها من العام الماضي.",
        "ويعزو محللون هذا التحسن إلى انتعاش الطلب الداخلي وتحسن ظروف التصدير نحو عدد من الأسواق الشريكة."
      ]},
    fr: { title: "Croissance notable dans plusieurs secteurs productifs au dernier trimestre",
      excerpt: "De nouvelles données montrent une amélioration des indicateurs de production sur un an.",
      body: [
        "De récentes données économiques font état d'une croissance notable dans plusieurs secteurs productifs au cours du dernier trimestre.",
        "Des analystes attribuent cette amélioration à la reprise de la demande intérieure et à de meilleures conditions d'exportation vers plusieurs marchés partenaires."
      ]},
    en: { title: "Notable growth in several production sectors last quarter",
      excerpt: "New data shows improved production indicators compared to the same period last year.",
      body: [
        "Recent economic data shows notable growth in several production sectors during the last quarter compared to the same period last year.",
        "Analysts attribute the improvement to a recovery in domestic demand and better export conditions to several partner markets."
      ]}
  },
  {
    id: 6, category: "economie",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    time: { ar: "قبل 3 ساعات", fr: "il y a 3 heures", en: "3 hours ago" },
    ar: { title: "توقيع اتفاقيات شراكة لدعم المقاولات الصغرى والمتوسطة",
      excerpt: "برامج تمويل ومواكبة جديدة موجهة للمقاولين الشباب في عدد من الجهات.",
      body: [
        "تم توقيع اتفاقيات شراكة جديدة تهدف إلى تعزيز آليات تمويل ومواكبة المقاولات الصغرى والمتوسطة في عدد من الجهات.",
        "وتتضمن الاتفاقيات برامج تكوين وتأطير موجهة للمقاولين الشباب، إلى جانب تسهيلات في الولوج إلى القروض البنكية."
      ]},
    fr: { title: "Signature d'accords de partenariat pour soutenir les PME",
      excerpt: "Nouveaux programmes de financement et d'accompagnement pour les jeunes entrepreneurs.",
      body: [
        "De nouveaux accords de partenariat ont été signés pour renforcer les mécanismes de financement et d'accompagnement des PME dans plusieurs régions.",
        "Ces accords incluent des programmes de formation destinés aux jeunes entrepreneurs, ainsi que des facilités d'accès aux crédits bancaires."
      ]},
    en: { title: "Partnership agreements signed to support small and medium businesses",
      excerpt: "New funding and mentoring programs targeting young entrepreneurs across several regions.",
      body: [
        "New partnership agreements have been signed to strengthen funding and support mechanisms for small and medium enterprises in several regions.",
        "The agreements include training programs for young entrepreneurs, along with easier access to bank loans."
      ]}
  },

  // ---------------- SOCIETE ----------------
  {
    id: 7, category: "societe",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
    time: { ar: "قبل 20 دقيقة", fr: "il y a 20 minutes", en: "20 minutes ago" },
    ar: { title: "مبادرة جديدة لدعم الفئات ذات الاحتياجات الخاصة",
      excerpt: "برنامج يهدف إلى تسهيل الولوج إلى الخدمات الأساسية لفائدة الفئات المعنية.",
      body: [
        "أطلقت جمعيات محلية مبادرة جديدة تهدف إلى تسهيل ولوج الأشخاص ذوي الاحتياجات الخاصة إلى الخدمات الأساسية.",
        "ويشمل البرنامج تجهيز فضاءات عمومية وتقديم دعم لوجستي ونفسي للأسر المعنية."
      ]},
    fr: { title: "Nouvelle initiative pour soutenir les personnes à besoins spécifiques",
      excerpt: "Un programme visant à faciliter l'accès aux services essentiels.",
      body: [
        "Des associations locales ont lancé une nouvelle initiative visant à faciliter l'accès des personnes à besoins spécifiques aux services essentiels.",
        "Le programme comprend l'aménagement d'espaces publics et un accompagnement logistique et psychologique pour les familles concernées."
      ]},
    en: { title: "New initiative to support people with special needs",
      excerpt: "A program aimed at easing access to essential services for those affected.",
      body: [
        "Local associations have launched a new initiative to ease access to essential services for people with special needs.",
        "The program includes adapting public spaces and providing logistical and psychological support to affected families."
      ]}
  },
  {
    id: 8, category: "societe",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    time: { ar: "قبل ساعة", fr: "il y a 1 heure", en: "1 hour ago" },
    ar: { title: "حملة توعوية حول أهمية الفحص الطبي المبكر",
      excerpt: "مختصون يشددون على دور الفحوصات الدورية في الوقاية من الأمراض المزمنة.",
      body: [
        "انطلقت حملة توعوية بمشاركة أطباء ومختصين للتحسيس بأهمية الفحص الطبي المبكر في الوقاية من الأمراض المزمنة.",
        "وتشمل الحملة قوافل طبية مجانية في عدد من الأحياء الشعبية، إلى جانب لقاءات تحسيسية موجهة للتلاميذ."
      ]},
    fr: { title: "Campagne de sensibilisation sur l'importance du dépistage précoce",
      excerpt: "Des experts insistent sur le rôle des examens réguliers dans la prévention des maladies chroniques.",
      body: [
        "Une campagne de sensibilisation a été lancée avec la participation de médecins pour souligner l'importance du dépistage précoce.",
        "La campagne comprend des caravanes médicales gratuites dans plusieurs quartiers, ainsi que des rencontres de sensibilisation destinées aux élèves."
      ]},
    en: { title: "Awareness campaign on the importance of early medical screening",
      excerpt: "Experts stress the role of regular check-ups in preventing chronic illness.",
      body: [
        "An awareness campaign has been launched with doctors and specialists to highlight the importance of early screening in preventing chronic diseases.",
        "The campaign includes free medical caravans in several neighborhoods, along with awareness sessions for students."
      ]}
  },
  {
    id: 9, category: "societe",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    time: { ar: "قبل ساعتين", fr: "il y a 2 heures", en: "2 hours ago" },
    ar: { title: "لقاء تنسيقي بين فاعلين محليين لتطوير الخدمات الاجتماعية",
      excerpt: "بحث آليات تحسين جودة الخدمات المقدمة للمواطنين في عدد من الأحياء.",
      body: [
        "نظم لقاء تنسيقي بين فاعلين جمعويين ومسؤولين محليين لبحث سبل تطوير الخدمات الاجتماعية الموجهة للساكنة.",
        "وتم الاتفاق على وضع خارطة طريق مشتركة لتحسين جودة الخدمات في عدد من الأحياء ذات الأولوية."
      ]},
    fr: { title: "Réunion de coordination pour développer les services sociaux",
      excerpt: "Recherche de moyens pour améliorer la qualité des services rendus aux citoyens.",
      body: [
        "Une réunion de coordination a réuni des associations et des responsables locaux pour discuter du développement des services sociaux.",
        "Les participants ont convenu d'une feuille de route commune pour améliorer la qualité des services dans plusieurs quartiers prioritaires."
      ]},
    en: { title: "Coordination meeting held to develop social services",
      excerpt: "Exploring ways to improve the quality of services provided to residents.",
      body: [
        "A coordination meeting brought together associations and local officials to discuss developing social services for residents.",
        "Participants agreed on a shared roadmap to improve service quality in several priority neighborhoods."
      ]}
  },

  // ---------------- SPORT ----------------
  {
    id: 10, category: "sport",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
    time: { ar: "قبل ساعة", fr: "il y a 1 heure", en: "1 hour ago" },
    ar: { title: "منتخب المغرب يواصل تحضيراته استعدادا للمواجهات القادمة",
      excerpt: "حصة تدريبية مكثفة ضمن برنامج الإعداد الذي يشرف عليه الطاقم الفني.",
      body: [
        "واصل المنتخب الوطني حصصه التدريبية استعدادا للمواجهات المقبلة، وسط أجواء تنافسية بين اللاعبين المستدعين.",
        "وركز الطاقم الفني خلال الحصة الأخيرة على الجوانب التكتيكية واللياقة البدنية العالية."
      ]},
    fr: { title: "L'équipe nationale poursuit sa préparation avant les prochaines échéances",
      excerpt: "Séance d'entraînement intensive dans le cadre du programme de préparation.",
      body: [
        "La sélection nationale a poursuivi ses séances d'entraînement en vue des prochaines échéances, dans une ambiance compétitive entre les joueurs convoqués.",
        "Le staff technique s'est concentré lors de la dernière séance sur les aspects tactiques et la condition physique."
      ]},
    en: { title: "National team continues preparations ahead of upcoming matches",
      excerpt: "Intensive training session as part of the coaching staff's preparation program.",
      body: [
        "The national team continued its training sessions ahead of upcoming matches, in a competitive atmosphere among called-up players.",
        "The coaching staff focused the last session on tactical aspects and high-level physical fitness."
      ]}
  },
  {
    id: 11, category: "sport",
    img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
    time: { ar: "قبل ساعتين", fr: "il y a 2 heures", en: "2 hours ago" },
    ar: { title: "نتائج مباريات اليوم في البطولة الاحترافية",
      excerpt: "ملخص لأبرز النتائج والأحداث التي ميزت الجولة الأخيرة من البطولة.",
      body: [
        "عرفت الجولة الأخيرة من البطولة الاحترافية عدة مباريات مثيرة انتهت بنتائج متقاربة بين الفرق المتنافسة.",
        "وشهدت اللقاءات حضورا جماهيريا لافتا في مختلف الملاعب."
      ]},
    fr: { title: "Résultats des matches du jour en championnat professionnel",
      excerpt: "Résumé des principaux résultats de la dernière journée du championnat.",
      body: [
        "La dernière journée du championnat professionnel a connu plusieurs matches disputés, avec des résultats serrés entre les équipes.",
        "Les rencontres ont enregistré une affluence notable dans les différents stades."
      ]},
    en: { title: "Today's match results in the professional league",
      excerpt: "A summary of the top results and events from the latest matchday.",
      body: [
        "The latest matchday in the professional league featured several exciting games that ended with close results between competing teams.",
        "The matches saw a notable turnout of fans across various stadiums."
      ]}
  },
  {
    id: 12, category: "sport",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    time: { ar: "قبل 4 ساعات", fr: "il y a 4 heures", en: "4 hours ago" },
    ar: { title: "استعدادات مكثفة للأندية الوطنية قبل انطلاق المنافسات القارية",
      excerpt: "برامج تدريبية خاصة تستهدف رفع الجاهزية البدنية والفنية للاعبين.",
      body: [
        "تكثف الأندية الوطنية استعداداتها قبيل انطلاق المنافسات القارية، عبر برامج تدريبية خاصة ومباريات ودية تحضيرية.",
        "وتراهن الإدارات الفنية على تعزيز الصفوف بعناصر جديدة لرفع مستوى المنافسة."
      ]},
    fr: { title: "Préparation intensive des clubs nationaux avant les compétitions continentales",
      excerpt: "Programmes d'entraînement spéciaux pour améliorer la forme physique et technique des joueurs.",
      body: [
        "Les clubs nationaux intensifient leur préparation avant le début des compétitions continentales, via des programmes spéciaux et des matches amicaux.",
        "Les staffs techniques misent sur le renforcement de l'effectif avec de nouveaux éléments pour élever le niveau de compétitivité."
      ]},
    en: { title: "National clubs step up preparations ahead of continental competitions",
      excerpt: "Special training programs aim to boost players' physical and technical readiness.",
      body: [
        "National clubs are intensifying preparations ahead of continental competitions through special training programs and friendly matches.",
        "Technical staff are counting on new signings to strengthen the squad and raise the level of competitiveness."
      ]}
  },

  // ---------------- REGIONS ----------------
  {
    id: 13, category: "regions",
    img: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=800&q=80",
    time: { ar: "قبل ساعتين", fr: "il y a 2 heures", en: "2 hours ago" },
    ar: { title: "تقرير: ارتفاع ملحوظ في عدد الوافدين السياحيين خلال الموسم الحالي",
      excerpt: "أرقام إيجابية تعكس جاذبية عدد من الوجهات السياحية داخل المملكة.",
      body: [
        "أفاد تقرير حديث بتسجيل ارتفاع ملحوظ في عدد الوافدين السياحيين خلال الموسم الحالي مقارنة بالموسم الماضي.",
        "ويعزو مهنيو القطاع هذا التحسن إلى تنوع العروض السياحية وتحسن جودة الخدمات المقدمة للزوار."
      ]},
    fr: { title: "Rapport : hausse notable du nombre de touristes cette saison",
      excerpt: "Des chiffres positifs qui reflètent l'attractivité de plusieurs destinations du Royaume.",
      body: [
        "Un rapport récent fait état d'une hausse notable du nombre de touristes durant la saison actuelle par rapport à la saison précédente.",
        "Les professionnels du secteur attribuent cette amélioration à la diversité de l'offre touristique et à la meilleure qualité des services proposés."
      ]},
    en: { title: "Report: notable rise in tourist arrivals this season",
      excerpt: "Positive figures reflecting the appeal of several destinations across the Kingdom.",
      body: [
        "A recent report shows a notable rise in tourist arrivals this season compared to last season.",
        "Industry professionals attribute the improvement to a diversified tourism offering and better quality of services for visitors."
      ]}
  },
  {
    id: 14, category: "regions",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    time: { ar: "قبل 3 ساعات", fr: "il y a 3 heures", en: "3 hours ago" },
    ar: { title: "مشاريع تنموية جديدة تعزز البنية التحتية في عدد من الجهات",
      excerpt: "استثمارات موجهة لتحسين شبكات الطرق والتجهيزات العمومية.",
      body: [
        "تم الإعلان عن إطلاق مشاريع تنموية جديدة تروم تعزيز البنية التحتية في عدد من الجهات.",
        "وتشمل المشاريع توسيع شبكات الطرق وتجهيز فضاءات عمومية جديدة لفائدة الساكنة المحلية."
      ]},
    fr: { title: "Nouveaux projets de développement pour renforcer les infrastructures régionales",
      excerpt: "Des investissements destinés à améliorer les réseaux routiers et les équipements publics.",
      body: [
        "De nouveaux projets de développement visant à renforcer les infrastructures dans plusieurs régions ont été annoncés.",
        "Ces projets incluent l'extension des réseaux routiers et l'aménagement de nouveaux espaces publics pour la population locale."
      ]},
    en: { title: "New development projects to boost regional infrastructure",
      excerpt: "Investments aimed at improving road networks and public facilities.",
      body: [
        "New development projects aimed at strengthening infrastructure in several regions have been announced.",
        "The projects include expanding road networks and building new public facilities for local residents."
      ]}
  },
  {
    id: 15, category: "regions",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
    time: { ar: "قبل 5 ساعات", fr: "il y a 5 heures", en: "5 hours ago" },
    ar: { title: "جولة ميدانية في أحد الأسواق التقليدية بأحد الجهات",
      excerpt: "لمحة عن النشاط التجاري المحلي وأهم المنتجات المعروضة.",
      body: [
        "نظمت جولة ميدانية في أحد الأسواق التقليدية للوقوف على واقع النشاط التجاري المحلي والمنتجات الحرفية المعروضة.",
        "وأبرزت الجولة أهمية هذه الأسواق في الحفاظ على التراث المحلي ودعم اقتصاد الأسر."
      ]},
    fr: { title: "Visite de terrain dans un marché traditionnel régional",
      excerpt: "Aperçu de l'activité commerciale locale et des principaux produits proposés.",
      body: [
        "Une visite de terrain a été organisée dans un marché traditionnel pour observer l'activité commerciale locale et les produits artisanaux.",
        "La visite a mis en lumière l'importance de ces marchés pour préserver le patrimoine local et soutenir l'économie des familles."
      ]},
    en: { title: "Field visit to a traditional regional market",
      excerpt: "A look at local commercial activity and the main goods on offer.",
      body: [
        "A field visit was organized to a traditional market to observe local commercial activity and handcrafted products on display.",
        "The visit highlighted the importance of these markets in preserving local heritage and supporting household economies."
      ]}
  },

  // ---------------- CULTURE ----------------
  {
    id: 16, category: "culture",
    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    time: { ar: "قبل ساعة", fr: "il y a 1 heure", en: "1 hour ago" },
    ar: { title: "فعالية ثقافية تجمع فنانين من مختلف الجهات",
      excerpt: "برنامج فني متنوع يتضمن عروضا موسيقية ومعارض تشكيلية.",
      body: [
        "احتضنت إحدى القاعات فعالية ثقافية جمعت فنانين من مختلف الجهات في برنامج فني متنوع.",
        "وتضمنت الفعالية عروضا موسيقية حية ومعرضا للفنون التشكيلية استقطب عددا من الزوار."
      ]},
    fr: { title: "Événement culturel réunissant des artistes de différentes régions",
      excerpt: "Un programme artistique varié incluant concerts et expositions.",
      body: [
        "Une salle a accueilli un événement culturel réunissant des artistes de différentes régions dans un programme varié.",
        "L'événement a inclus des concerts en direct et une exposition d'arts plastiques qui a attiré de nombreux visiteurs."
      ]},
    en: { title: "Cultural event brings together artists from different regions",
      excerpt: "A varied artistic program featuring live music and visual art exhibitions.",
      body: [
        "A venue hosted a cultural event bringing together artists from different regions in a varied artistic program.",
        "The event included live music performances and a visual arts exhibition that attracted many visitors."
      ]}
  },
  {
    id: 17, category: "culture",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    time: { ar: "قبل 3 ساعات", fr: "il y a 3 heures", en: "3 hours ago" },
    ar: { title: "إصدار جديد لكاتب مغربي يثير اهتمام القراء",
      excerpt: "عمل أدبي جديد يتناول قضايا اجتماعية معاصرة بأسلوب سردي مميز.",
      body: [
        "صدر مؤخرا عمل أدبي جديد لكاتب مغربي يتناول قضايا اجتماعية معاصرة بأسلوب سردي لافت.",
        "ولقي الإصدار إقبالا من القراء منذ أيام صدوره الأولى في المعارض المتخصصة."
      ]},
    fr: { title: "Nouvelle publication d'un écrivain marocain suscite l'intérêt des lecteurs",
      excerpt: "Une œuvre littéraire abordant des questions sociales contemporaines avec un style narratif distinctif.",
      body: [
        "Une nouvelle œuvre littéraire d'un écrivain marocain vient de paraître, abordant des questions sociales contemporaines avec un style narratif remarquable.",
        "La publication a suscité l'intérêt des lecteurs dès ses premiers jours dans les salons spécialisés."
      ]},
    en: { title: "New release by a Moroccan author draws readers' interest",
      excerpt: "A new literary work exploring contemporary social issues with a distinctive narrative style.",
      body: [
        "A new literary work by a Moroccan author has just been released, exploring contemporary social issues with a striking narrative style.",
        "The release has drawn strong reader interest since its debut at specialized book fairs."
      ]}
  },
  {
    id: 18, category: "culture",
    img: "https://images.unsplash.com/photo-1489599162946-4c8e0cf7e0e5?w=800&q=80",
    time: { ar: "قبل 6 ساعات", fr: "il y a 6 heures", en: "6 hours ago" },
    ar: { title: "مهرجان سينمائي يستعد لاستقبال أعمال من دول عدة",
      excerpt: "دورة جديدة تتضمن عروضا تنافسية وأخرى موازية لعشاق السينما.",
      body: [
        "تستعد دورة جديدة من المهرجان السينمائي لاستقبال أعمال من عدة دول ضمن برنامجها التنافسي والموازي.",
        "وتشمل الدورة ورشات نقاش مع مخرجين وممثلين، إلى جانب عروض خاصة مفتوحة للجمهور."
      ]},
    fr: { title: "Un festival de cinéma se prépare à accueillir des œuvres de plusieurs pays",
      excerpt: "Une nouvelle édition avec sélection compétitive et section parallèle pour les cinéphiles.",
      body: [
        "Une nouvelle édition du festival de cinéma se prépare à accueillir des œuvres de plusieurs pays dans ses sections compétitive et parallèle.",
        "L'édition comprendra des rencontres avec des réalisateurs et acteurs, ainsi que des projections spéciales ouvertes au public."
      ]},
    en: { title: "Film festival prepares to welcome entries from several countries",
      excerpt: "A new edition featuring a competitive lineup and a parallel section for film lovers.",
      body: [
        "A new edition of the film festival is preparing to welcome entries from several countries in its competitive and parallel sections.",
        "The edition will include talks with directors and actors, along with special screenings open to the public."
      ]}
  },

  // ---------------- SANTE ----------------
  {
    id: 19, category: "sante",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    time: { ar: "قبل ساعة", fr: "il y a 1 heure", en: "1 hour ago" },
    ar: { title: "حملة توعوية حول أهمية الفحص الطبي المبكر",
      excerpt: "مختصون يوصون بإجراء فحوصات دورية للوقاية من الأمراض المزمنة.",
      body: [
        "أطلق مختصون في الصحة العمومية حملة توعوية للتحسيس بأهمية إجراء الفحوصات الطبية الدورية.",
        "وأكدت الحملة أن الكشف المبكر يساهم في تقليص المضاعفات المرتبطة بالأمراض المزمنة."
      ]},
    fr: { title: "Campagne de sensibilisation sur l'importance du dépistage précoce",
      excerpt: "Des spécialistes recommandent des examens réguliers pour prévenir les maladies chroniques.",
      body: [
        "Des spécialistes de la santé publique ont lancé une campagne pour sensibiliser à l'importance des examens médicaux réguliers.",
        "La campagne souligne que le dépistage précoce contribue à réduire les complications liées aux maladies chroniques."
      ]},
    en: { title: "Awareness campaign on the importance of early screening",
      excerpt: "Specialists recommend regular check-ups to prevent chronic diseases.",
      body: [
        "Public health specialists have launched a campaign to raise awareness about the importance of regular medical check-ups.",
        "The campaign notes that early detection helps reduce complications linked to chronic diseases."
      ]}
  },
  {
    id: 20, category: "sante",
    img: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=800&q=80",
    time: { ar: "قبل ساعتين", fr: "il y a 2 heures", en: "2 hours ago" },
    ar: { title: "توصيات صحية مع اقتراب فصل الشتاء",
      excerpt: "نصائح للوقاية من نزلات البرد الموسمية والحفاظ على المناعة.",
      body: [
        "أصدر مختصون توصيات صحية مع اقتراب فصل الشتاء للوقاية من نزلات البرد الموسمية.",
        "وشملت التوصيات ضرورة التغذية المتوازنة وممارسة النشاط البدني للحفاظ على مناعة الجسم."
      ]},
    fr: { title: "Recommandations de santé à l'approche de l'hiver",
      excerpt: "Conseils pour prévenir les rhumes saisonniers et renforcer l'immunité.",
      body: [
        "Des spécialistes ont émis des recommandations de santé à l'approche de l'hiver pour prévenir les rhumes saisonniers.",
        "Les recommandations incluent une alimentation équilibrée et une activité physique régulière pour renforcer l'immunité."
      ]},
    en: { title: "Health recommendations as winter approaches",
      excerpt: "Tips to prevent seasonal colds and maintain immunity.",
      body: [
        "Specialists have issued health recommendations as winter approaches to help prevent seasonal colds.",
        "The recommendations include balanced nutrition and regular physical activity to maintain immunity."
      ]}
  },
  {
    id: 21, category: "sante",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    time: { ar: "قبل 4 ساعات", fr: "il y a 4 heures", en: "4 hours ago" },
    ar: { title: "افتتاح وحدة طبية جديدة لتعزيز العرض الصحي المحلي",
      excerpt: "تجهيزات حديثة تهدف إلى تحسين جودة الخدمات المقدمة للمرضى.",
      body: [
        "تم افتتاح وحدة طبية جديدة مجهزة بأحدث التقنيات لتعزيز العرض الصحي على المستوى المحلي.",
        "وتهدف الوحدة إلى تقريب الخدمات الطبية المتخصصة من الساكنة وتقليص آجال المواعيد."
      ]},
    fr: { title: "Ouverture d'une nouvelle unité médicale pour renforcer l'offre de soins locale",
      excerpt: "Des équipements modernes visant à améliorer la qualité des services pour les patients.",
      body: [
        "Une nouvelle unité médicale équipée des technologies les plus récentes a été inaugurée pour renforcer l'offre de soins locale.",
        "L'unité vise à rapprocher les services médicaux spécialisés de la population et à réduire les délais de rendez-vous."
      ]},
    en: { title: "New medical unit opens to boost local healthcare provision",
      excerpt: "Modern equipment aimed at improving the quality of patient services.",
      body: [
        "A new medical unit equipped with the latest technology has opened to strengthen local healthcare provision.",
        "The unit aims to bring specialized medical services closer to residents and reduce appointment wait times."
      ]}
  },

  // ---------------- TECH ----------------
  {
    id: 22, category: "tech",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    time: { ar: "قبل 3 ساعات", fr: "il y a 3 heures", en: "3 hours ago" },
    ar: { title: "ورشة عمل حول التحول الرقمي في القطاعات الخدماتية",
      excerpt: "نقاش حول سبل تسريع رقمنة الخدمات الموجهة للمواطنين والمقاولات.",
      body: [
        "نظمت ورشة عمل خصصت لمناقشة سبل تسريع التحول الرقمي في القطاعات الخدماتية.",
        "وتطرق المشاركون إلى أهمية تبسيط المساطر الرقمية وتوسيع نطاق الخدمات الإلكترونية الموجهة للمواطنين والمقاولات."
      ]},
    fr: { title: "Atelier sur la transformation numérique des secteurs de services",
      excerpt: "Discussion sur les moyens d'accélérer la numérisation des services publics et privés.",
      body: [
        "Un atelier a été organisé pour discuter des moyens d'accélérer la transformation numérique dans les secteurs de services.",
        "Les participants ont abordé l'importance de simplifier les procédures numériques et d'élargir les services électroniques destinés aux citoyens et aux entreprises."
      ]},
    en: { title: "Workshop held on digital transformation in service sectors",
      excerpt: "Discussion on ways to accelerate digitization of services for citizens and businesses.",
      body: [
        "A workshop was held to discuss ways to accelerate digital transformation across service sectors.",
        "Participants addressed the importance of simplifying digital procedures and expanding e-services for citizens and businesses."
      ]}
  },
  {
    id: 23, category: "tech",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    time: { ar: "قبل 5 ساعات", fr: "il y a 5 heures", en: "5 hours ago" },
    ar: { title: "إطلاق منصة رقمية جديدة لتسهيل الولوج إلى الخدمات العمومية",
      excerpt: "أداة إلكترونية تروم تبسيط المساطر الإدارية للمستخدمين.",
      body: [
        "تم الإعلان عن إطلاق منصة رقمية جديدة تهدف إلى تسهيل ولوج المواطنين إلى الخدمات العمومية عن بعد.",
        "وتتيح المنصة إنجاز عدد من المساطر الإدارية إلكترونيا دون الحاجة إلى التنقل."
      ]},
    fr: { title: "Lancement d'une nouvelle plateforme numérique pour les services publics",
      excerpt: "Un outil électronique visant à simplifier les démarches administratives.",
      body: [
        "Le lancement d'une nouvelle plateforme numérique visant à faciliter l'accès des citoyens aux services publics à distance a été annoncé.",
        "La plateforme permet d'effectuer plusieurs démarches administratives en ligne sans déplacement."
      ]},
    en: { title: "New digital platform launched for public services",
      excerpt: "An online tool aiming to simplify administrative procedures for users.",
      body: [
        "A new digital platform has been launched to make it easier for citizens to access public services remotely.",
        "The platform allows several administrative procedures to be completed online without the need to travel."
      ]}
  },
  {
    id: 24, category: "tech",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    time: { ar: "أمس", fr: "hier", en: "yesterday" },
    ar: { title: "فعالية تقنية تسلط الضوء على تطبيقات الذكاء الاصطناعي",
      excerpt: "عروض ونقاشات حول استخدامات الذكاء الاصطناعي في قطاعات متعددة.",
      body: [
        "احتضنت فعالية تقنية عروضا ونقاشات حول تطبيقات الذكاء الاصطناعي في قطاعات الصحة والتعليم والصناعة.",
        "وأبرز المتدخلون الفرص التي يتيحها الذكاء الاصطناعي في تحسين الإنتاجية، مع التنبيه إلى ضرورة مواكبة هذا التحول بأطر تنظيمية ملائمة."
      ]},
    fr: { title: "Un événement technologique met en lumière les applications de l'IA",
      excerpt: "Présentations et débats sur les usages de l'intelligence artificielle dans plusieurs secteurs.",
      body: [
        "Un événement technologique a proposé des présentations et débats sur les applications de l'intelligence artificielle dans la santé, l'éducation et l'industrie.",
        "Les intervenants ont souligné les opportunités offertes par l'IA pour améliorer la productivité, tout en appelant à un cadre réglementaire adapté."
      ]},
    en: { title: "Tech event highlights AI applications",
      excerpt: "Talks and discussions on the use of artificial intelligence across multiple sectors.",
      body: [
        "A technology event featured talks and discussions on AI applications in healthcare, education, and industry.",
        "Speakers highlighted the opportunities AI offers for improving productivity, while calling for appropriate regulatory frameworks to accompany this shift."
      ]}
  }
];
