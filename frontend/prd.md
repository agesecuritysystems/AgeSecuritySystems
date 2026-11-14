# 1.  project structure for the assets
```
frontend/
├── public/
│   ├── images/
│   │   ├── hero-poster.webp
│   │   ├── products/
│   │   └── banners/
│   │
│   ├── videos/
│   │   ├── security-hero.mp4
│   │   └── security-hero-mobile.mp4
│   │
│   └── documents/
│       └── company-profile.pdf
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── logos/
│   │   └── fonts/
│   │
│   ├── components/
│   ├── sections/
│   ├── pages/
│   ├── hooks/
│   ├── layouts/
│   ├── lib/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
└── vite.config.ts
```

- public/: Best for large static files that you want to reference by a predictable URL, such as videos.
- src/assets/: Best for assets managed by your React components and imported into your application.

