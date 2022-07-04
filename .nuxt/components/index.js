export const Loader = () => import('../../components/Loader.vue' /* webpackChunkName: "components/loader" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const Accordion = () => import('../../components/Accordion/Accordion.vue' /* webpackChunkName: "components/accordion" */).then(c => wrapFunctional(c.default || c))
export const AppControlInput = () => import('../../components/AppControlInput/AppControlInput.vue' /* webpackChunkName: "components/app-control-input" */).then(c => wrapFunctional(c.default || c))
export const BannerAlert = () => import('../../components/BannerAlert/BannerAlert.vue' /* webpackChunkName: "components/banner-alert" */).then(c => wrapFunctional(c.default || c))
export const ContactUs = () => import('../../components/ContactUs/ContactUs.vue' /* webpackChunkName: "components/contact-us" */).then(c => wrapFunctional(c.default || c))
export const Cookies = () => import('../../components/Cookies/Cookies.vue' /* webpackChunkName: "components/cookies" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const FooterList = () => import('../../components/FooterLIst/FooterList.vue' /* webpackChunkName: "components/footer-list" */).then(c => wrapFunctional(c.default || c))
export const FooterLIst = () => import('../../components/FooterLIst/index.js' /* webpackChunkName: "components/footer-l-ist" */).then(c => wrapFunctional(c.default || c))
export const Gap = () => import('../../components/Gap/Gap.vue' /* webpackChunkName: "components/gap" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const HeroBanner = () => import('../../components/HeroBanner/HeroBanner.vue' /* webpackChunkName: "components/hero-banner" */).then(c => wrapFunctional(c.default || c))
export const Hero = () => import('../../components/HeroBanner/hero.js' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const ListItem = () => import('../../components/ListItem/ListItem.vue' /* webpackChunkName: "components/list-item" */).then(c => wrapFunctional(c.default || c))
export const PreHeader = () => import('../../components/PreHeader/PreHeader.vue' /* webpackChunkName: "components/pre-header" */).then(c => wrapFunctional(c.default || c))
export const ProfileCard = () => import('../../components/ProfileCard/ProfileCard.vue' /* webpackChunkName: "components/profile-card" */).then(c => wrapFunctional(c.default || c))
export const Roles = () => import('../../components/Roles/Roles.vue' /* webpackChunkName: "components/roles" */).then(c => wrapFunctional(c.default || c))
export const SignupCard = () => import('../../components/SignupCard/SignupCard.vue' /* webpackChunkName: "components/signup-card" */).then(c => wrapFunctional(c.default || c))
export const TButton = () => import('../../components/TButton/TButton.vue' /* webpackChunkName: "components/t-button" */).then(c => wrapFunctional(c.default || c))
export const TButtonButton = () => import('../../components/TButton/button.js' /* webpackChunkName: "components/t-button-button" */).then(c => wrapFunctional(c.default || c))
export const TabToggle = () => import('../../components/TabToggle/TabToggle.vue' /* webpackChunkName: "components/tab-toggle" */).then(c => wrapFunctional(c.default || c))
export const Tag = () => import('../../components/Tag/Tag.vue' /* webpackChunkName: "components/tag" */).then(c => wrapFunctional(c.default || c))
export const TermsStructure = () => import('../../components/TermsStructure/TermsStructure.vue' /* webpackChunkName: "components/terms-structure" */).then(c => wrapFunctional(c.default || c))
export const TextCard = () => import('../../components/TextCard/TextCard.vue' /* webpackChunkName: "components/text-card" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
