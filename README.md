# todo-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
"# todo-app" 



---

## Tailwind

1. Install Tailwind CSS

Install `tailwindcss` via npm, and create your `tailwind.config.js` file.

```sh
npm install -D tailwindcss
npx tailwindcss init
```

2. Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

3. Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your main CSS file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

4. Start the Tailwind CLI build process

Run the CLI tool to scan your template files for classes and build your CSS.

```sh
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

```


