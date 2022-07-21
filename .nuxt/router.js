import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c637c8f = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _3493fc12 = () => interopDefault(import('../pages/careers/index.vue' /* webpackChunkName: "pages/careers/index" */))
const _6d08dca1 = () => interopDefault(import('../pages/contact-sales/index.vue' /* webpackChunkName: "pages/contact-sales/index" */))
const _6151595e = () => interopDefault(import('../pages/cookies/index.vue' /* webpackChunkName: "pages/cookies/index" */))
const _f173aad0 = () => interopDefault(import('../pages/faq/index.vue' /* webpackChunkName: "pages/faq/index" */))
const _7406ffb6 = () => interopDefault(import('../pages/notaries-public/index.vue' /* webpackChunkName: "pages/notaries-public/index" */))
const _a5be5070 = () => interopDefault(import('../pages/pricing/index.vue' /* webpackChunkName: "pages/pricing/index" */))
const _3bf3d72b = () => interopDefault(import('../pages/privacy-policy/index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _18b2435c = () => interopDefault(import('../pages/solutions/index.vue' /* webpackChunkName: "pages/solutions/index" */))
const _dca2b1f8 = () => interopDefault(import('../pages/terms_conditions/index.vue' /* webpackChunkName: "pages/terms_conditions/index" */))
const _706bde4c = () => interopDefault(import('../pages/careers/data.js' /* webpackChunkName: "pages/careers/data" */))
const _7063f0b4 = () => interopDefault(import('../pages/cookies/data.js' /* webpackChunkName: "pages/cookies/data" */))
const _4244248a = () => interopDefault(import('../pages/faq/data.js' /* webpackChunkName: "pages/faq/data" */))
const _1a564288 = () => interopDefault(import('../pages/notaries-public/data.js' /* webpackChunkName: "pages/notaries-public/data" */))
const _74e226eb = () => interopDefault(import('../pages/pricing/data.js' /* webpackChunkName: "pages/pricing/data" */))
const _4e23a30e = () => interopDefault(import('../pages/privacy-policy/data.js' /* webpackChunkName: "pages/privacy-policy/data" */))
const _097d3102 = () => interopDefault(import('../pages/solutions/data.js' /* webpackChunkName: "pages/solutions/data" */))
const _53d29527 = () => interopDefault(import('../pages/terms_conditions/data.js' /* webpackChunkName: "pages/terms_conditions/data" */))
const _7fdf8801 = () => interopDefault(import('../pages/terms_conditions/DataProtection.vue' /* webpackChunkName: "pages/terms_conditions/DataProtection" */))
const _14111e31 = () => interopDefault(import('../pages/terms_conditions/Definition.vue' /* webpackChunkName: "pages/terms_conditions/Definition" */))
const _1a13089a = () => interopDefault(import('../pages/terms_conditions/FeesTable.vue' /* webpackChunkName: "pages/terms_conditions/FeesTable" */))
const _2ddb2f3a = () => interopDefault(import('../pages/terms_conditions/format.js' /* webpackChunkName: "pages/terms_conditions/format" */))
const _fd6bf906 = () => interopDefault(import('../pages/terms_conditions/InPropRights.vue' /* webpackChunkName: "pages/terms_conditions/InPropRights" */))
const _1f268bb6 = () => interopDefault(import('../pages/terms_conditions/LimitationLiability.vue' /* webpackChunkName: "pages/terms_conditions/LimitationLiability" */))
const _20be1a46 = () => interopDefault(import('../pages/terms_conditions/ObNotary.vue' /* webpackChunkName: "pages/terms_conditions/ObNotary" */))
const _7a210c1f = () => interopDefault(import('../pages/terms_conditions/ProbUses.vue' /* webpackChunkName: "pages/terms_conditions/ProbUses" */))
const _6c20d752 = () => interopDefault(import('../pages/terms_conditions/TAbout.vue' /* webpackChunkName: "pages/terms_conditions/TAbout" */))
const _5c27f35a = () => interopDefault(import('../pages/terms_conditions/TermsContents.vue' /* webpackChunkName: "pages/terms_conditions/TermsContents" */))
const _08703e74 = () => interopDefault(import('../pages/terms_conditions/UserAccount.vue' /* webpackChunkName: "pages/terms_conditions/UserAccount" */))
const _6a1349d1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3c637c8f,
    name: "about"
  }, {
    path: "/careers",
    component: _3493fc12,
    name: "careers"
  }, {
    path: "/contact-sales",
    component: _6d08dca1,
    name: "contact-sales"
  }, {
    path: "/cookies",
    component: _6151595e,
    name: "cookies"
  }, {
    path: "/faq",
    component: _f173aad0,
    name: "faq"
  }, {
    path: "/notaries-public",
    component: _7406ffb6,
    name: "notaries-public"
  }, {
    path: "/pricing",
    component: _a5be5070,
    name: "pricing"
  }, {
    path: "/privacy-policy",
    component: _3bf3d72b,
    name: "privacy-policy"
  }, {
    path: "/solutions",
    component: _18b2435c,
    name: "solutions"
  }, {
    path: "/terms_conditions",
    component: _dca2b1f8,
    name: "terms_conditions"
  }, {
    path: "/careers/data",
    component: _706bde4c,
    name: "careers-data"
  }, {
    path: "/cookies/data",
    component: _7063f0b4,
    name: "cookies-data"
  }, {
    path: "/faq/data",
    component: _4244248a,
    name: "faq-data"
  }, {
    path: "/notaries-public/data",
    component: _1a564288,
    name: "notaries-public-data"
  }, {
    path: "/pricing/data",
    component: _74e226eb,
    name: "pricing-data"
  }, {
    path: "/privacy-policy/data",
    component: _4e23a30e,
    name: "privacy-policy-data"
  }, {
    path: "/solutions/data",
    component: _097d3102,
    name: "solutions-data"
  }, {
    path: "/terms_conditions/data",
    component: _53d29527,
    name: "terms_conditions-data"
  }, {
    path: "/terms_conditions/DataProtection",
    component: _7fdf8801,
    name: "terms_conditions-DataProtection"
  }, {
    path: "/terms_conditions/Definition",
    component: _14111e31,
    name: "terms_conditions-Definition"
  }, {
    path: "/terms_conditions/FeesTable",
    component: _1a13089a,
    name: "terms_conditions-FeesTable"
  }, {
    path: "/terms_conditions/format",
    component: _2ddb2f3a,
    name: "terms_conditions-format"
  }, {
    path: "/terms_conditions/InPropRights",
    component: _fd6bf906,
    name: "terms_conditions-InPropRights"
  }, {
    path: "/terms_conditions/LimitationLiability",
    component: _1f268bb6,
    name: "terms_conditions-LimitationLiability"
  }, {
    path: "/terms_conditions/ObNotary",
    component: _20be1a46,
    name: "terms_conditions-ObNotary"
  }, {
    path: "/terms_conditions/ProbUses",
    component: _7a210c1f,
    name: "terms_conditions-ProbUses"
  }, {
    path: "/terms_conditions/TAbout",
    component: _6c20d752,
    name: "terms_conditions-TAbout"
  }, {
    path: "/terms_conditions/TermsContents",
    component: _5c27f35a,
    name: "terms_conditions-TermsContents"
  }, {
    path: "/terms_conditions/UserAccount",
    component: _08703e74,
    name: "terms_conditions-UserAccount"
  }, {
    path: "/",
    component: _6a1349d1,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
