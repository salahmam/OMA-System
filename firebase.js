// تهيئة Firebase لموقع OMA
// تم التعديل لتناسب GitHub Pages

// تحميل مكتبات Firebase من الإنترنت
// (يتم استدعاؤها في صفحات الموقع عبر <script> )

const firebaseConfig = {
  apiKey: "AIzaSyAEMoMQDiLffCCJWybFJFQ-b9iHajimme0",
  authDomain: "oma-system-30813.firebaseapp.com",
  projectId: "oma-system-30813",
  storageBucket: "oma-system-30813.firebasestorage.app",
  messagingSenderId: "905224657062",
  appId: "1:905224657062:web:584b3e72e4cc2c58ea3c67",
  measurementId: "G-645066LLLP"
};

// تفعيل التطبيق
firebase.initializeApp(firebaseConfig);

// إنشاء المراجع للخدمات التي سنستخدمها
const auth = firebase.auth();
const db = firebase.firestore();