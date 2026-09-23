// ============================================================
// À COMPLÉTER : collez ici la config de votre app web Firebase
// (Console Firebase → Paramètres du projet → Vos applications → Web)
// Ces valeurs ne sont PAS secrètes : elles sont faites pour être publiques.
// La vraie sécurité vient des règles Firestore, pas de ce fichier.
// ============================================================
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_PROJET.firebaseapp.com",
  projectId: "VOTRE_PROJET",
  storageBucket: "VOTRE_PROJET.appspot.com",
  messagingSenderId: "VOTRE_SENDER_ID",
  appId: "VOTRE_APP_ID"
};

// L'email qui doit avoir les droits administrateur.
const ADMIN_EMAIL = "michelastech@gmail.com";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
