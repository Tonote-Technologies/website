export default {
  name: 'HeroBanner',
  props: {
    heading: {
      type: String,
      required: true
    },
    subHeading: {
      type: String,
      required: true
    },
    headerClass: {
      type: String,
      default: ''
    },
    bodyClass: {
      type: String,
      default: ''
    },
    heroLeftClass: {
      type: String,
      default: ''
    },
    illustration: {
      type: String,
      default: 'signature.gif'
    },
    bannerAlert: {
      type: Boolean,
      default: true
    }
  }
}
