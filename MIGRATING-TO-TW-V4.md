# Updated steps

To update we just run like [`Upgrade guide`](https://tailwindcss.com/docs/upgrade-guide#using-the-upgrade-tool):

```sh
npx @tailwindcss/upgrade --force
```

Above is the output:

```log
npx @tailwindcss/upgrade --force
Need to install the following packages:
@tailwindcss/upgrade@4.1.17
Ok to proceed? (y)

≈ tailwindcss v4.1.17
│ ↳ Upgrading from Tailwind CSS `v3.4.18`
│ Searching for CSS files in the current directory and its subdirectories…
│ ↳ Linked `./tailwind.config.js` to `./src/assets/style.css`
│ Migrating JavaScript configuration files…
│ ↳ Migrated configuration file: `./tailwind.config.js`
│ Migrating stylesheets…
│ ↳ Migrated stylesheet: `./src/assets/style.css`
│ Updating dependencies…
│ ↳ Updated package: `tailwindcss`
│ Migrating templates…
│ ↳ Migrated templates for configuration file: `./tailwind.config.js`
│ Migrating PostCSS configuration…
│ ↳ Installed package: `@tailwindcss/postcss`
│ ↳ Removed package: `autoprefixer`
│ ↳ Migrated PostCSS configuration: `./postcss.config.js`
│ Verify the changes and commit them to your repository.
```
After we force the update of packages.

```sh
npm audit fix --force --legacy-peer-deps
```

> _Sorry by `--legacy-peer-deps`. The reason is because the `@vitejs/plugin-vue` package was very out of date at the time of this update (2025-11-14)._
