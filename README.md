# RecSeekers Website

The RecSeekers website is a Next.js marketing site for recruitment-to-recruitment services in the education sector. The live application is the `frontend/` project. Its page content is currently maintained in React/TypeScript files; the Sanity code in this repository is legacy and is not part of the active website workflow.

## Stack

- Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Framer Motion.
- Contact and sign-up forms use Resend, HubSpot, and client-side Google reCAPTCHA.
- Production images are built by GitHub Actions and published to GitHub Container Registry (GHCR).
- The image is deployed on a VPS using Coolify or equivalent container infrastructure.

## Repository Structure

```txt
RecSeekers-Website/
|- .github/workflows/       # GHCR image build and frontend build checks
|- frontend/                # Active Next.js application and Dockerfile
|- cms/                     # Legacy Sanity Studio; not used by the live frontend
|- Documents/               # Project context and developer handover notes
|- Design.md                # Design notes and references
|- README.md                # This file
```

`Documents/` is important handover material. It contains the website brief, design and business context, contact details, implementation notes, and `DEVS HANDOVER`, which documents the current architecture, environment variables, known issues, and deployment considerations. Read it before making substantial changes or taking over the project.

## Prerequisites

- Node.js `>=22.13.0`
- npm `>=10`
- Docker, if building the production image locally

## Local Development

Install and run the active frontend:

```powershell
cd frontend
npm install
Copy-Item .env.example .env.local
# Fill in the values in .env.local
npm run dev
```

The frontend runs at `http://localhost:3000`.

Useful frontend commands:

- `npm run dev`: Start the Turbopack development server.
- `npm run build`: Create a production build.
- `npm run start`: Run the production server.
- `npm run lint`: Run ESLint.

## Environment Variables

Copy `frontend/.env.example` to `frontend/.env.local` for local development. The active frontend uses:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Public reCAPTCHA site key used by the contact and sign-up forms. Required at image build time and runtime. |
| `RESEND_API_KEY` | Sends contact form email. |
| `SAM_EMAIL` | Recipient for contact notifications. |
| `HUBSPOT_ACCESS_TOKEN` | Optional HubSpot CRM integration. |

The `NEXT_PUBLIC_*` reCAPTCHA value is bundled into the browser code by Next.js. It must therefore be supplied to the Docker build as well as configured in the running container. Do not commit real credentials or `.env.local` files.

## CI/CD and Deployment

The workflow in `.github/workflows/docker.yml` runs on pushes to `main` and `dev`:

1. GitHub Actions builds the image from `frontend/Dockerfile`.
2. The image is pushed to GHCR as `ghcr.io/recseekers/recseekers-website`.
3. The image receives a branch tag (`main` or `dev`) and a commit SHA tag.
4. Coolify, or another VPS container platform, pulls the selected tag and deploys it on port `3000`.

Configure the GitHub Actions secret `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` so the production image has the reCAPTCHA key during `next build`. Configure the same variable, along with `RESEND_API_KEY`, `SAM_EMAIL`, and optionally `HUBSPOT_ACCESS_TOKEN`, in the deployed container environment.

For a manual local image build:

```powershell
cd frontend
docker build --build-arg NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key -t recseekers-website .
docker run --rm -p 3000:3000 `
	-e NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key `
	-e RESEND_API_KEY=your_resend_key `
	-e SAM_EMAIL=your_email `
	recseekers-website
```

## Legacy Sanity Code

`cms/` and `frontend/sanity/` are leftover Sanity Studio/client files. They may contain useful historical context, but Sanity is not required to install, run, build, or deploy the active frontend. Do not treat the CMS README or Sanity configuration as the current content-management or deployment process unless the project is deliberately reconnected to Sanity.

## Further Documentation

- [Developer handover notes](Documents/DEVS%20HANDOVER)
- [Frontend notes](frontend/frontend-README.md)
- [Design notes](Design.md)