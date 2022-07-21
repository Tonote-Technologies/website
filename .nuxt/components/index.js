export { default as Loader } from '../../components/Loader.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as Accordion } from '../../components/Accordion/Accordion.vue'
export { default as AppControlInput } from '../../components/AppControlInput/AppControlInput.vue'
export { default as BannerAlert } from '../../components/BannerAlert/BannerAlert.vue'
export { default as ContactUs } from '../../components/ContactUs/ContactUs.vue'
export { default as Cookies } from '../../components/Cookies/Cookies.vue'
export { default as Footer } from '../../components/Footer/Footer.vue'
export { default as FooterList } from '../../components/FooterLIst/FooterList.vue'
export { default as FooterLIst } from '../../components/FooterLIst/index.js'
export { default as Gap } from '../../components/Gap/Gap.vue'
export { default as Header } from '../../components/Header/Header.vue'
export { default as HeroBanner } from '../../components/HeroBanner/HeroBanner.vue'
export { default as Hero } from '../../components/HeroBanner/hero.js'
export { default as ListItem } from '../../components/ListItem/ListItem.vue'
export { default as ProfileCard } from '../../components/ProfileCard/ProfileCard.vue'
export { default as PreHeader } from '../../components/PreHeader/PreHeader.vue'
export { default as Roles } from '../../components/Roles/Roles.vue'
export { default as SignupCard } from '../../components/SignupCard/SignupCard.vue'
export { default as TButton } from '../../components/TButton/TButton.vue'
export { default as TButtonButton } from '../../components/TButton/button.js'
export { default as TermsStructure } from '../../components/TermsStructure/TermsStructure.vue'
export { default as TextCard } from '../../components/TextCard/TextCard.vue'
export { default as TabToggle } from '../../components/TabToggle/TabToggle.vue'
export { default as Tag } from '../../components/Tag/Tag.vue'

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
