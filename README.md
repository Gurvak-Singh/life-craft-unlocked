# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/8a9a4a0b-e389-423b-85d1-1ffc260e2a9e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/8a9a4a0b-e389-423b-85d1-1ffc260e2a9e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Lovable (Recommended for quick deployment)
Simply open [Lovable](https://lovable.dev/projects/8a9a4a0b-e389-423b-85d1-1ffc260e2a9e) and click on Share -> Publish.

### Option 2: Cloudflare Pages (Recommended for production)

This project is configured for deployment on Cloudflare Pages. Follow these steps:

#### Prerequisites
1. A Cloudflare account (free tier available)
2. Your code pushed to a GitHub repository

#### Deployment Steps

**Method 1: Through Cloudflare Dashboard (Recommended)**
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to "Pages" in the sidebar
3. Click "Create a project"
4. Connect your GitHub account and select this repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)
6. Click "Save and Deploy"

**Method 2: Using Wrangler CLI**
1. Install Wrangler globally: `npm install -g wrangler`
2. Login to Cloudflare: `npm run cf:login`
3. Deploy: `npm run deploy`

#### Available Scripts for Cloudflare Pages
- `npm run deploy` - Build and deploy to production
- `npm run deploy:preview` - Build and deploy to preview environment
- `npm run cf:login` - Login to Cloudflare
- `npm run cf:dev` - Run local development with Cloudflare Pages

#### Build Configuration
The project includes:
- `wrangler.toml` - Cloudflare Pages configuration
- `public/_redirects` - SPA routing configuration
- `functions/_middleware.ts` - Security headers and middleware

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
