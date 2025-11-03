// تعريف النصوص لكل لغة
const translations = {
  ar: {
    home: "الصفحة الرئيسية",
    students: "الطلاب",
    teachers: "الأساتذة",
    reports: "التقارير",
    contact: "اتصل بنا",
    welcome: "مرحباً بك في نظام أوما",
    introTitle: "إدارة المصروفات والدروس بسهولة",
    introText: "نظام شامل لإدارة الدروس، الحسابات، والطلاب والمعلمين في المعهد.",
    startNow: "ابدأ الآن"
  },
  ku: {
    home: "پەیجی سەرەکی",
    students: "خوێندکاران",
    teachers: "مامۆستایان",
    reports: "ڕاپۆرتەکان",
    contact: "پەیوەندیمان پێوە بکە",
    welcome: "بەخێربێیت بۆ سیستەمی OMA",
    introTitle: "بە ئاسانی بەڕێوەبردنی وانە و خەرجیەکان",
    introText: "سیستەمێکی تەواو بۆ بەڕێوەبردنی وانە، ژمێریارەکان و مامۆستایان.",
    startNow: "دەستپێبکە"
  },
  en: {
    home: "Home",
    students: "Students",
    teachers: "Teachers",
    reports: "Reports",
    contact: "Contact Us",
    welcome: "Welcome to OMA System",
    introTitle: "Easily Manage Courses and Expenses",
    introText: "A complete system for managing lessons, accounts, students, and teachers.",
    startNow: "Start Now"
  }
};

// دالة لتغيير اللغة
function changeLanguage(lang) {
  document.querySelector("[data-home]").textContent = translations[lang].home;
  document.querySelector("[data-students]").textContent = translations[lang].students;
  document.querySelector("[data-teachers]").textContent = translations[lang].teachers;
  document.querySelector("[data-reports]").textContent = translations[lang].reports;
  document.querySelector("[data-contact]").textContent = translations[lang].contact;
  document.querySelector("[data-welcome]").textContent = translations[lang].welcome;
  document.querySelector("[data-intro-title]").textContent = translations[lang].introTitle;
  document.querySelector("[data-intro-text]").textContent = translations[lang].introText;
  document.querySelector("[data-start]").textContent = translations[lang].startNow;
}
