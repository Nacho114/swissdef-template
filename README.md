# Svelte template for Swiss defibrillator

## Deployment link

- [Dev deployment link](https://swissdef-dev.netlify.app/)
- [Kai deployment link](https://poetic-genie-db4436.netlify.app)

## TODO

### Feedback from ur mom
- [x] change first aid sticker to a new one
- [x] make wall mounted aed lighter (it won't get lighter or it will break, too much noise in the original pic but I think it is fine)
- [ ] remove purple and make it black or white
- [ ] checklist should be green and red not purple
- [ ] make addy accurate and add the 5 to it
- [ ] order button green, the add button red
- [ ] add about section
- [ ] change basic to advanced plan (instead of lite/basic)


### Kai

- [ ] Go over text with my Mom so she can change (just english)
- [x] Ask my mom to get a WAP first aid kit pic, with white background - under:  static/assets/products/wap/wap_first_aid_kit.png
- [ ] Add bullet features for training
- [ ] Make statistics chart responsive for mobile (Either remove or resize) (isnt it already ?)
- [ ] Help Monica get setup with Calendly + put her link on the site
- [ ] Advanced SEO
- [x] Add bullet features for maintenance
- [x] Prettify contact page
- [x] Do statistics diagram (Figma)
- [x] SEO

### Ignacio

- [ ] Make landing services responsive
- [ ] Unify font size to 3-4 vars
- [ ] Review Privacy policy and such
- [x] Finish links
- [x] Move text to i18n
- [x] Hide extra course (maybe for future online course)

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
