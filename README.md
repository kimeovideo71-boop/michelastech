# MichelasTech — Site + Espace client (v2, charte graphique du logo)

## Ce qui a changé dans cette version
- **Couleurs de marque appliquées partout** : noir profond `#0B0F14`, bleu tech `#0096FF`, bleu clair `#5CC8FF`, gris clair `#F2F2F2` — repris directement de votre logo.
- **Logo intégré** : favicon, icône de navigation, image du header (`logo-icon.webp`, `logo-full.webp`, `favicon.ico`, `icon-*.png`).
- **Un seul CTA** : "Demander un diagnostic gratuit" est maintenant la seule action mise en avant (nav, hero, formulaire) ; le téléphone reste visible en coordonnée mais n'est plus un bouton concurrent.
- **Pages légales** : `rgpd.html` (politique de confidentialité) et `cgu.html` (conditions générales d'utilisation), liées en pied de page partout.
- **Bannière de cookies** (`cookie-consent.js`) sur toutes les pages publiques — mémorisée après acceptation, ne revient pas à chaque visite.
- **SEO** : balises meta title/description par page, `robots.txt`, `sitemap.xml`, données structurées (schema.org LocalBusiness), URL canonique.
- **Page 404 personnalisée** (`404.html`), automatiquement servie par Vercel pour toute URL inconnue.
- **Anti-spam** : un champ "piège" invisible (honeypot) a été ajouté au formulaire de contact et au formulaire de connexion/inscription — les robots le remplissent, pas les humains, donc on ignore silencieusement leur envoi. Firebase Authentication bloque aussi automatiquement les tentatives de connexion trop répétées.
- **Tableau de bord admin enrichi** : compteurs en temps réel (total, par statut), messages de succès/erreur visibles sur chaque changement de statut, et un **bloc de diagnostic automatique** qui s'affiche si la configuration Firebase n'est pas encore complète ou si les règles de sécurité bloquent une lecture — pour repérer immédiatement la cause d'un problème.
- **Performance** : image du logo compressée en WebP (quelques Ko au lieu de plusieurs centaines), polices avec `display=swap`, mise en cache longue durée des images/icônes sur Vercel (`vercel.json`), feuille de style unique partagée par toutes les pages (moins de code dupliqué, chargement plus rapide).
- **Contraste** : le bleu de marque est utilisé en texte/icônes sur fond sombre (contraste ≈ 6:1) et, sur les boutons pleins, le texte est en noir profond sur fond bleu clair (contraste ≈ 6:1) plutôt qu'en blanc — pour rester lisible tout en respectant votre charte.
- **Responsive** : toutes les pages (site, connexion, admin, client, pages légales, 404) s'adaptent au mobile, avec menu burger sur le site principal.

## Pourquoi le changement de statut ne fonctionnait pas
La cause la plus probable : la configuration Firebase (`firebase-config.js`) n'avait pas encore été complétée avec vos vraies valeurs, ou les règles de sécurité (`firestore.rules`) n'avaient pas encore été publiées dans la console Firebase — dans les deux cas, Firestore refuse silencieusement l'écriture.

**La page admin vous le dira désormais elle-même** : si la config est incomplète ou qu'une règle bloque la lecture/écriture, un bandeau rouge apparaît en haut du tableau de bord avec le message d'erreur exact. Si le bandeau apparaît, suivez l'étape qu'il indique.

Si vous avez déjà tout configuré et que le problème persiste, vérifiez :
1. Que vous êtes connecté avec exactement `michelastech@gmail.com` (espaces, majuscules et fautes de frappe comptent).
2. Que les règles collées dans Firebase → Firestore Database → Règles sont bien celles du fichier `firestore.rules` fourni ici, et qu'elles ont été **publiées**.
3. Que `firebase-config.js` contient vos vraies valeurs (plus aucun `VOTRE_...`).

## Installation Firebase — rappel des 7 étapes
Voir les instructions détaillées précédentes : créer le projet, activer Authentication (email/mot de passe), créer Firestore, coller les règles, créer le compte admin **directement dans la console** (pas dans le code), récupérer la config web, la coller dans `firebase-config.js`.

## Déployer sur Vercel
Glissez-déposez le dossier complet sur https://vercel.com/new, ou utilisez la CLI :
```bash
npm i -g vercel
cd michelastech-site
vercel --prod
```

## À compléter avant mise en ligne définitive
Cherchez `[numéro]` dans `index.html`, `rgpd.html`, `cgu.html`, `robots.txt` et `sitemap.xml` : remplacez par votre SIRET et votre nom de domaine final (actuellement `michelastech.fr` à titre d'exemple).

## Limite à connaître
Ce site est prévu pour être **déployé sur Vercel** (ou tout hébergeur statique) : les pages utilisent plusieurs fichiers liés entre eux (`styles.css`, images, Firebase). Un aperçu "tel quel" dans un simple navigateur local fonctionne aussi, tant que tous les fichiers du dossier restent ensemble.
