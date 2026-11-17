# Svelte template for Swiss defibrillator

## NOTES

Lambda functions are in AWS, in Europe (Stockholm)

## Build status

## Google ads

- For debugging go to tagmanager.google.com/, and then to tag assistant, this allows you see gtag events in real time.

## Tools

- Back-end is used with AWS functions (with onsen account)
- Payment with stripe

## Stripe checkout

The product basket posts product IDs and quantities to the site’s own backend.
The backend reads prices and weights from the same catalog as the basket and
calculates amounts in rappen. VAT is rounded per product unit and once for
shipping so the basket total matches the Stripe Checkout Session.

Configure `STRIPE_CHECKOUT_SECRET_KEY` for Netlify Functions. Use a Stripe
sandbox key in deploy previews and in local development. Keep the production
key in the Netlify production environment only. The maintenance Stripe Payment
Links use their existing Stripe configuration.

Before switching production, complete a sandbox checkout from a deploy preview
and confirm the CHF total, Swiss shipping restriction, and localized success and
cancel pages. Configure the production key before publishing the checkout
change. After confirming the production storefront uses the new checkout
route, retire the old AWS checkout endpoints after checking for any other
callers. The Lambda files in `aws-stripe/` describe the legacy integration.

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

## Done

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


