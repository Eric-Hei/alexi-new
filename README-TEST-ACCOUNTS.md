# Guide d'utilisation des comptes de test ALEXI

Ce document explique comment configurer et utiliser les comptes de test pour la plateforme ALEXI.

## Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

## Installation des dépendances

```bash
# Avec npm
npm install

# Avec yarn
yarn install
```

## Configuration de la base de données

1. Assurez-vous que le fichier `.env` contient la bonne configuration pour la base de données SQLite :
   ```
   DATABASE_URL="file:./prisma/dev.db"
   ```

2. Générez le client Prisma :
   ```bash
   # Avec npm
   npm run prisma:generate

   # Avec yarn
   yarn prisma:generate
   ```

3. Créez la base de données et appliquez les migrations :
   ```bash
   # Avec npm
   npm run prisma:migrate

   # Avec yarn
   yarn prisma:migrate
   ```

## Initialisation des comptes de test

Pour créer tous les comptes de test définis dans le fichier `test-accounts.md`, exécutez la commande suivante :

```bash
# Avec npm
npm run prisma:seed

# Avec yarn
yarn prisma:seed
```

Cette commande va créer les comptes suivants dans la base de données :
- 5 comptes locataires
- 5 comptes bailleurs
- 5 comptes commissaires de justice
- 5 comptes médiateurs
- 5 comptes travailleurs sociaux
- 5 comptes préfecture
- 5 comptes CCAPEX
- 1 compte administrateur

## Utilisation des comptes de test

Vous pouvez vous connecter à l'application avec n'importe lequel des comptes listés dans le fichier `test-accounts.md`. Voici quelques exemples :

### Compte locataire
- Email : jean.dupont@test.com
- Mot de passe : Locataire123!

### Compte bailleur
- Email : sci.leslilas@test.com
- Mot de passe : Bailleur123!

### Compte commissaire de justice
- Email : me.dubois@test.com
- Mot de passe : Justice123!

### Compte médiateur
- Email : emilie.dubois@test.com
- Mot de passe : Mediateur123!

### Compte travailleur social
- Email : travailleur.social1@test.com
- Mot de passe : Social123!

### Compte préfecture
- Email : prefecture.paris1@test.com
- Mot de passe : Prefecture123!

### Compte CCAPEX
- Email : ccapex.paris1@test.com
- Mot de passe : Ccapex123!

### Compte administrateur
- Email : admin@alexi.gouv.fr
- Mot de passe : Admin123!

## Associations entre comptes

Pour faciliter les tests de bout en bout, des associations ont été créées entre les différents comptes. Par exemple, le dossier 1 implique :
- Locataire : Jean Dupont
- Bailleur : SCI Les Lilas
- Commissaire de justice : Me Dubois
- Travailleur social : Marie Dubois
- Médiateur : Émilie Dubois

Consultez le fichier `test-accounts.md` pour voir toutes les associations.

## Réinitialisation des données

Si vous souhaitez réinitialiser la base de données et recréer tous les comptes de test, vous pouvez exécuter les commandes suivantes :

```bash
# Supprimer la base de données
rm -f prisma/dev.db

# Recréer la base de données et appliquer les migrations
npm run prisma:migrate

# Recréer les comptes de test
npm run prisma:seed
```

## Notes importantes

1. Ces comptes sont uniquement destinés à des fins de test et de démonstration.
2. En environnement de production, ces comptes devront être désactivés ou supprimés.
3. Pour des raisons de sécurité, il est recommandé de changer régulièrement les mots de passe de ces comptes de test.
