// ============================================================
// À COMPLÉTER : collez ici la config de votre app web Firebase
// (Console Firebase → Paramètres du projet → Vos applications → Web)
// Ces valeurs ne sont PAS secrètes : elles sont faites pour être publiques.
// La vraie sécurité vient des règles Firestore, pas de ce fichier.
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyA5MT2c-BK02oXjAA21A-0AUeut7ikOEM4",
  authDomain: "michelastechrepa.firebaseapp.com",
  projectId: "michelastechrepa",
  storageBucket: "michelastechrepa.firebasestorage.app",
  messagingSenderId: "586996255894",
  appId: "1:586996255894:web:a9a653de852801c93e86b7",
  measurementId: "G-4K4DV4MGWF"
};


// L'email qui doit avoir les droits administrateur.
const ADMIN_EMAIL = "michelastech@gmail.com";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
