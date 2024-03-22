# Svelte template for Swiss defibrillator

## Deployment link

- [Dev deployment link](https://swissdef-dev.netlify.app/)
- [Kai deployment link](https://poetic-genie-db4436.netlify.app)

## TODO

### Kai

- [ ] Add bullet features for maintenance and training.
- [x] Prettify contact page
- [x] Do statistics diagram (Figma)
  - [ ] in French and German (where is the folder? , I'cant find em!)
- [ ] Go over text with my Mom so she can change (just english)
- [x] SEO
- [ ] Ask my mom to get a WAP first aid kit pic, with white background

### Ignacio

- [ ] Finish links
- [ ] Move text to i18n
- [ ] Hide extra course (maybe for future online course)
- [ ] Unify font size to 3-4 vars

## Icons

Icons can be found [here](http://icon-sets.iconify.design).

## Images

More images can be found [here](https://mega.nz/folder/tKdHVJ5D#g1wS8E-bZsXK3kLAW8-uBQ)

## Features

- [x] Multi language support via i18n
- [x] Dynamic page creation based on product list
- [x] Routing example
- [x] Image loading example
- [x] Main css file
- [x] Icon [library](https://iconify.design/docs/usage/svg/unplugin/)

## Developing

### nvim - coc

If running nvim coc install the [syntax highlighting](https://github.com/coc-extensions/coc-svelte)

```
:CocInstall coc-svelte
```

### Install

Install dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Setup pre-commit hooks

`pnpm husky install`

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
