# Svelte template for Swiss defibrillator

## dev stuff

- Back-end is used with AWS functions
- Payment with stripe

## Deployment link

- [Dev deployment link](https://swissdef-dev.netlify.app/)
- [Kai deployment link](https://poetic-genie-db4436.netlify.app)

## TODO

## NEED HELP

      https://we.tl/t-LRuCFya3HO

NEW WEBSITE LINK UPLOADED

https://we.tl/t-LRuCFya3HO

- [ ] bug- for producs if you click it the buy window also resizes <img width="1137" alt="image" src="https://github.com/Nacho114/swissdef-template/assets/7343904/5491fafb-482f-41d0-891a-d25a0ed704f0">

### Feedback from ur mom

- [x] change first aid sticker to a new one
- [x] make wall mounted aed lighter (it won't get lighter or it will break, too much noise in the original pic but I think it is fine)
- [x] remove purple and make it black or white (made it green instead
- [x] checklist should be green and red not purple
- [x] make addy accurate and add the 5 to it
- [x] order button red/green
- [x] change basic to advanced plan (instead of lite/basic)
- [x] fix favicon

### Kai

- [x] Redo the contact page, either revert what was before, or better do a better version :p
- [x] Go over text with my Mom so she can change (just english) - she got sleepy while doing it and said she trust that i do it well lol tmr she wanted to do frx text tho
- [x] Ask my mom to get a WAP first aid kit pic, with white background - under: static/assets/products/wap/wap_first_aid_kit.png
- [x] Add bullet features for training
- [x] Make statistics chart responsive for mobile (Either remove or resize) (isnt it responsive already ?)
- [x] Advanced SEO
- [x] Add bullet features for maintenance
- [x] Prettify contact page
- [x] Do statistics diagram (Figma)
- [x] SEO

### Ignacio

- [ ] Unify font size to 3-4 vars
- [x] add two more packages for training and remove one for maintanance so there is only one
- [x] add about section for the website
- [x] Make landing services responsive
- [x] change the text and for defibrilator make it LONG and with MD
- [x] for the main units she wants a long text with all the sections
- [x] Review Privacy policy and such - i fixed it 4u xoxo gossip gurl
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
