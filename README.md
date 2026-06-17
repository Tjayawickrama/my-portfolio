# My Portfolio Website - Overview 🚀

This repository contains the open-source version of my personal portfolio website.  
Feel free to explore the code and use it for learning and inspiration.

---

## ⚠️ Usage Notice

This project is shared for learning purposes only.

Please do NOT:
- Clone or replicate the full website or design
- Repost it with minor content changes
- Use this project for commercial/client work
- Create tutorials or content using this exact project

If you use parts of the code, you must provide proper credit linking back to the original repository.

Build your own version — don’t just copy.

— Chanakas Jay

---

## 🛠️ Instructions

I have modified the GSAP Club plugins using trial versions.  
⚠️ Note: Trial plugins cannot be used for production or hosting.

For official GSAP Club plugins, refer here:  
https://gsap.com/docs/v3/Installation/

---

## ⚙️ Tech Stack

React • TypeScript • GSAP • Three.js • WebGL • HTML • CSS • JavaScript

---

## 🎨 Assets Usage

Some 3D assets included in this repository are free to use for learning purposes.

However:

- The original 3D avatar used on my live portfolio is NOT included in this repository
- That avatar is a custom asset created over ~1 month
- It is not open source and not available for reuse

Any usage, extraction, or redistribution of that avatar from my live website is strictly prohibited.

---

![Protfolio-Preview](https://github.com/user-attachments/assets/3c4557e7-6392-4928-b8a9-7b2476ef4edd)

---

## 📄 License

This project is licensed under the Personal Portfolio License (PPL) v1.0.

See the LICENSE file for full details

---

## 🚀 Deployment (Vercel) and CI/CD

You can host this project on Vercel (recommended) or use the provided GitHub Actions workflow to build and deploy.

Two options:

- Recommended: Connect this GitHub repo to Vercel (Dashboard → New Project → Import Git Repository). Vercel will auto-deploy on pushes.
- Alternative: Use the included GitHub Actions workflow `.github/workflows/ci.yml` which builds, runs tests, and deploys using the Vercel Action.

Required GitHub Secrets for workflow deploy (if using Actions):

- `VERCEL_TOKEN` — Personal token from https://vercel.com/account/tokens
- `VERCEL_ORG_ID` — Organization ID (found in Vercel project settings)
- `VERCEL_PROJECT_ID` — Project ID (found in Vercel project settings)

Notes:

- If you connect your repo via Vercel's Git integration you do NOT need to configure these secrets — Vercel will handle deployments automatically.
- The repository includes `vercel.json` to ensure SPA fallback routing to `index.html`.


