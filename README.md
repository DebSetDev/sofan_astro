# 🔮 Sofan Astro

Petite API GraphQL développée avec NestJS pour déterminer les signes astrologiques à partir d’une date, et obtenir la liste complète des signes du zodiaque.

---

## 🚀 Stack technique

- [NestJS](https://nestjs.com/) (v11)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) (v4)
- [GraphQL](https://graphql.org/)
- TypeScript

---

## 📌 Fonctionnalités

- 🔁 Récupération de tous les signes astrologiques (`zodiacSigns`)
- 🔍 Recherche du signe correspondant à un jour et un mois (`zodiacSignByDate`)

---

## 📂 Installation

1. Clone le repo :
   ```bash
   git clone https://github.com/DebSetDev/sofan_astro.git
   cd sofan_astro
   ```

2. Installe les dépendances :
   ```bash
   yarn
   ```

3. Démarre le serveur en mode développement :
   ```bash
   yarn start:dev
   ```

> Le serveur écoute par défaut sur le port **3000**

---

## 🔎 Exemple de requêtes GraphQL

### ▶️ Liste des signes

```graphql
query {
  zodiacSigns {
    name
    startDay
    endDay
  }
}
```

### ▶️ Trouver son signe astrologique

```graphql
query {
  zodiacSignByDate(day: 26, month: 1) {
    name
    startDay
    endDay
  }
}
```

---

## 📁 Arborescence (simplifiée)

```
src/
├── zodiac/
│   ├── zodiac.module.ts
│   ├── zodiac.resolver.ts
│   ├── zodiac.service.ts
│   ├── zodiac.data.ts
│   └── zodiac.model.ts
├── app.module.ts
└── main.ts
```

---

## ✨ Auteur

Développé par [Deb](https://github.com/DebSetDev) dans le cadre d’un test technique pour SoFan.

---


