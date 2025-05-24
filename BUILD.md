# LifeCraft Build Configuration

## Build Output Directory: `dist`

This project is configured to build to the `dist` directory for optimal deployment on Cloudflare Pages.

## Build Scripts

- `npm run build` - Standard production build
- `npm run build:prod` - Explicit production build  
- `npm run build:dev` - Development build
- `npm run build:clean` - Clean dist folder and rebuild

## Build Optimizations

### Code Splitting
The build is optimized with manual chunks for better loading performance:

- **vendor** - React core libraries
- **router** - React Router DOM
- **ui** - UI component libraries (Radix UI, CVA, etc.)
- **icons** - Lucide React icons
- **motion** - Framer Motion animations

### Build Output Structure
```
dist/
├── index.html          # Main HTML file
├── _redirects          # SPA routing for Cloudflare Pages
├── favicon.ico         # Site favicon
├── robots.txt          # SEO robots file
├── placeholder.svg     # Placeholder image
├── assets/             # Chunked JS and CSS files
│   ├── index-[hash].css
│   ├── vendor-[hash].js
│   ├── router-[hash].js
│   ├── ui-[hash].js
│   ├── icons-[hash].js
│   ├── motion-[hash].js
│   └── index-[hash].js
└── images/             # Static images
```

## Cloudflare Pages Configuration

### Required Settings:
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: `18.18.0`

### Environment Variables:
- `NODE_VERSION = 18.18.0`
- `NODE_ENV = production`

## Deployment

### Automatic Deployment
Any push to the `main` branch will automatically trigger a new deployment on Cloudflare Pages.

### Manual Deployment
```bash
# Via CLI (requires authentication)
npm run deploy

# Via Dashboard
Go to Cloudflare Pages → Your Project → Deployments → Create deployment
```

## File Sizes (Optimized)
- Total CSS: ~109KB (17KB gzipped)
- Vendor chunk: ~141KB (45KB gzipped)
- Main app: ~342KB (75KB gzipped)
- Router: ~20KB (8KB gzipped)
- Icons: ~22KB (5KB gzipped)
- UI components: ~23KB (8KB gzipped)
- Motion: ~112KB (37KB gzipped)

## Features
- ✅ SPA routing with `_redirects`
- ✅ Optimized chunk splitting
- ✅ Gzip compression
- ✅ Asset fingerprinting
- ✅ Clean build process
- ✅ Cross-platform compatibility 