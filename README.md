# MichelasTech — Site vitrine + espace client

Site statique (aucun build) avec un espace client relié à Firebase :
- `index.html` — le site public
- `login.html` — connexion / création de compte
- `admin.html` — tableau de bord administrateur (réservé à michelastech@gmail.com)
- `client.html` — suivi des interventions pour un client connecté
- `firebase-config.js` — à compléter avec votre config Firebase (voir ci-dessous)
- `firestore.rules` — règles de sécurité à coller dans la console Firebase

## 1. Créer le projet Firebase (gratuit)
1. Allez sur https://console.firebase.google.com → "Ajouter un projet" → suivez les étapes (le plan gratuit "Spark" suffit largement).

## 2. Activer l'authentification par email/mot de passe
1. Dans le menu de gauche : **Authentication** → **Sign-in method**.
2. Activez le fournisseur **Adresse e-mail/Mot de passe**.

## 3. Créer la base de données Firestore
1. Menu de gauche : **Firestore Database** → **Créer une base de données**.
2. Choisissez **Mode production**, puis une région proche (ex. `eur3 (europe-west)`).

## 4. Coller les règles de sécurité
1. Dans Firestore Database → onglet **Règles**.
2. Remplacez le contenu par celui du fichier `firestore.rules` fourni ici.
3. Cliquez sur **Publier**.

Ces règles sont appliquées côté serveur Firebase : même en lisant le code du site, personne ne peut contourner ces droits.

## 5. Créer votre compte administrateur
1. Menu de gauche : **Authentication** → onglet **Users** → **Add user**.
2. Email : `michelastech@gmail.com`
3. Mot de passe : choisissez-en un nouveau (à définir directement ici, jamais dans le code).

Ce compte sera automatiquement reconnu comme administrateur car son email correspond à `ADMIN_EMAIL` dans `firebase-config.js`.

## 6. Récupérer la configuration de l'app web
1. Icône ⚙️ (Paramètres du projet) → onglet **Général** → section **Vos applications**.
2. Cliquez sur l'icône **Web** (`</>`) pour enregistrer une nouvelle app (nom libre, ex. "MichelasTech Web").
3. Copiez l'objet `firebaseConfig` affiché.
4. Collez ses valeurs dans `firebase-config.js` (remplacez les `"VOTRE_..."`).

Ces valeurs ne sont pas secrètes : elles sont prévues pour être publiques dans le code d'un site.

## 7. Déployer sur Vercel
Glissez-déposez ce dossier sur https://vercel.com/new (ou utilisez la CLI `vercel`, voir le premier README fourni précédemment).

## Comment ça marche pour vos clients
1. Un client va sur "Espace client" → crée son compte (email + mot de passe de son choix).
2. Vous (admin), une fois connecté, créez un dossier dans **admin.html** en renseignant l'email exact de ce client.
3. Le client voit alors son dossier apparaître automatiquement dans son espace, avec le statut mis à jour en temps réel.

## Sécurité
- Le mot de passe administrateur n'est écrit nulle part dans le code : il est défini uniquement dans la console Firebase.
- Un client ne peut jamais voir les dossiers d'un autre client (vérifié côté serveur par les règles Firestore).
- Pensez à changer le mot de passe admin si celui utilisé a déjà été partagé ailleurs (ex. dans une conversation).
