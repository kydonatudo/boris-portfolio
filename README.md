# Boris 3D Artist Portfolio

Premium portfolio site for Boris Lebedev, built for Vercel:

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion
- GSAP ScrollTrigger
- Lenis smooth scroll
- React Three Fiber / Three.js
- Next Image optimization with AVIF/WebP on Vercel
- SEO metadata, Open Graph, robots and sitemap
- long-lived cache headers for local portfolio assets

## Local Run

```bash
npm install
npm run dev
```

## Vercel Deploy

1. Create a GitHub repository, for example `boris-portfolio`.
2. Push this folder to the repository.
3. In Vercel, choose `Add New Project`.
4. Import the GitHub repository.
5. Vercel should detect Next.js automatically.
6. Deploy.
7. In Vercel project settings, add `boris3d.online`.
8. Copy the DNS records Vercel shows and add them in OnlyDomains DNS settings.

The domain should use the Vercel records for permanent hosting with SSL. The current OnlyDomains web redirect is only a temporary preview setup.
