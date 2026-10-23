# Ayodele Oluwatobiloba — Portfolio

A responsive portfolio for digital marketing, product design, graphic design, front-end development, and video work.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`.

## Publish with GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages whenever changes are pushed to the `main` branch.

1. Push this project to a GitHub repository on the `main` branch.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish.
4. Open the Pages URL shown in the deployment job. The Vite build uses relative asset paths, so it works both at a project URL such as `https://username.github.io/repository/` and at a user-site URL.

## Update portfolio content

Edit `src/App.jsx` to update the profile, service descriptions, project titles, and external links. Graphic artwork image URLs, Figma embeds, video links, and contact details are configured near the top of that file.
