import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _969e4fa2 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _ffca14d2 = () => interopDefault(import('../pages/careers/index.vue' /* webpackChunkName: "pages/careers/index" */))
const _46909841 = () => interopDefault(import('../pages/contact-sales/index.vue' /* webpackChunkName: "pages/contact-sales/index" */))
const _69bc46f1 = () => interopDefault(import('../pages/cookies/index.vue' /* webpackChunkName: "pages/cookies/index" */))
const _e7142390 = () => interopDefault(import('../pages/faq/index.vue' /* webpackChunkName: "pages/faq/index" */))
const _5c83d3c5 = () => interopDefault(import('../pages/notaries-public/index.vue' /* webpackChunkName: "pages/notaries-public/index" */))
const _4785cb68 = () => interopDefault(import('../pages/pricing/index.vue' /* webpackChunkName: "pages/pricing/index" */))
const _d938e0ea = () => interopDefault(import('../pages/privacy-policy/index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _a4ae6208 = () => interopDefault(import('../pages/solutions/index.vue' /* webpackChunkName: "pages/solutions/index" */))
const _67dc7138 = () => interopDefault(import('../pages/terms_conditions/index.vue' /* webpackChunkName: "pages/terms_conditions/index" */))
const _40176c7a = () => interopDefault(import('../pages/careers/data.js' /* webpackChunkName: "pages/careers/data" */))
const _2e9d6758 = () => interopDefault(import('../pages/cookies/data.js' /* webpackChunkName: "pages/cookies/data" */))
const _d32bcd4a = () => interopDefault(import('../pages/faq/data.js' /* webpackChunkName: "pages/faq/data" */))
const _184403b0 = () => interopDefault(import('../pages/notaries-public/data.js' /* webpackChunkName: "pages/notaries-public/data" */))
const _25a0faea = () => interopDefault(import('../pages/pricing/data.js' /* webpackChunkName: "pages/pricing/data" */))
const _4ce5f36e = () => interopDefault(import('../pages/privacy-policy/data.js' /* webpackChunkName: "pages/privacy-policy/data" */))
const _d4b349c2 = () => interopDefault(import('../pages/solutions/data.js' /* webpackChunkName: "pages/solutions/data" */))
const _a97b64f2 = () => interopDefault(import('../pages/terms_conditions/data.js' /* webpackChunkName: "pages/terms_conditions/data" */))
const _0e8ad3a1 = () => interopDefault(import('../pages/terms_conditions/DataProtection.vue' /* webpackChunkName: "pages/terms_conditions/DataProtection" */))
const _1e7339d1 = () => interopDefault(import('../pages/terms_conditions/Definition.vue' /* webpackChunkName: "pages/terms_conditions/Definition" */))
const _0c126c13 = () => interopDefault(import('../pages/terms_conditions/FeesTable.vue' /* webpackChunkName: "pages/terms_conditions/FeesTable" */))
const _683e4f9a = () => interopDefault(import('../pages/terms_conditions/format.js' /* webpackChunkName: "pages/terms_conditions/format" */))
const _7b93b71d = () => interopDefault(import('../pages/terms_conditions/InPropRights.vue' /* webpackChunkName: "pages/terms_conditions/InPropRights" */))
const _3dc09af6 = () => interopDefault(import('../pages/terms_conditions/LimitationLiability.vue' /* webpackChunkName: "pages/terms_conditions/LimitationLiability" */))
const _939ac434 = () => interopDefault(import('../pages/terms_conditions/ObNotary.vue' /* webpackChunkName: "pages/terms_conditions/ObNotary" */))
const _0f958fbf = () => interopDefault(import('../pages/terms_conditions/ProbUses.vue' /* webpackChunkName: "pages/terms_conditions/ProbUses" */))
const _481f0012 = () => interopDefault(import('../pages/terms_conditions/TAbout.vue' /* webpackChunkName: "pages/terms_conditions/TAbout" */))
const _20d8c6b3 = () => interopDefault(import('../pages/terms_conditions/TermsContents.vue' /* webpackChunkName: "pages/terms_conditions/TermsContents" */))
const _4a5196d4 = () => interopDefault(import('../pages/terms_conditions/UserAccount.vue' /* webpackChunkName: "pages/terms_conditions/UserAccount" */))
const _0ff5dd71 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _969e4fa2,
    name: "about"
  }, {
    path: "/careers",
    component: _ffca14d2,
    name: "careers"
  }, {
    path: "/contact-sales",
    component: _46909841,
    name: "contact-sales"
  }, {
    path: "/cookies",
    component: _69bc46f1,
    name: "cookies"
  }, {
    path: "/faq",
    component: _e7142390,
    name: "faq"
  }, {
    path: "/notaries-public",
    component: _5c83d3c5,
    name: "notaries-public"
  }, {
    path: "/pricing",
    component: _4785cb68,
    name: "pricing"
  }, {
    path: "/privacy-policy",
    component: _d938e0ea,
    name: "privacy-policy"
  }, {
    path: "/solutions",
    component: _a4ae6208,
    name: "solutions"
  }, {
    path: "/terms_conditions",
    component: _67dc7138,
    name: "terms_conditions"
  }, {
    path: "/careers/data",
    component: _40176c7a,
    name: "careers-data"
  }, {
    path: "/cookies/data",
    component: _2e9d6758,
    name: "cookies-data"
  }, {
    path: "/faq/data",
    component: _d32bcd4a,
    name: "faq-data"
  }, {
    path: "/notaries-public/data",
    component: _184403b0,
    name: "notaries-public-data"
  }, {
    path: "/pricing/data",
    component: _25a0faea,
    name: "pricing-data"
  }, {
    path: "/privacy-policy/data",
    component: _4ce5f36e,
    name: "privacy-policy-data"
  }, {
    path: "/solutions/data",
    component: _d4b349c2,
    name: "solutions-data"
  }, {
    path: "/terms_conditions/data",
    component: _a97b64f2,
    name: "terms_conditions-data"
  }, {
    path: "/terms_conditions/DataProtection",
    component: _0e8ad3a1,
    name: "terms_conditions-DataProtection"
  }, {
    path: "/terms_conditions/Definition",
    component: _1e7339d1,
    name: "terms_conditions-Definition"
  }, {
    path: "/terms_conditions/FeesTable",
    component: _0c126c13,
    name: "terms_conditions-FeesTable"
  }, {
    path: "/terms_conditions/format",
    component: _683e4f9a,
    name: "terms_conditions-format"
  }, {
    path: "/terms_conditions/InPropRights",
    component: _7b93b71d,
    name: "terms_conditions-InPropRights"
  }, {
    path: "/terms_conditions/LimitationLiability",
    component: _3dc09af6,
    name: "terms_conditions-LimitationLiability"
  }, {
    path: "/terms_conditions/ObNotary",
    component: _939ac434,
    name: "terms_conditions-ObNotary"
  }, {
    path: "/terms_conditions/ProbUses",
    component: _0f958fbf,
    name: "terms_conditions-ProbUses"
  }, {
    path: "/terms_conditions/TAbout",
    component: _481f0012,
    name: "terms_conditions-TAbout"
  }, {
    path: "/terms_conditions/TermsContents",
    component: _20d8c6b3,
    name: "terms_conditions-TermsContents"
  }, {
    path: "/terms_conditions/UserAccount",
    component: _4a5196d4,
    name: "terms_conditions-UserAccount"
  }, {
    path: "/",
    component: _0ff5dd71,
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
