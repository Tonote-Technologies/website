import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'authURL'
    ])
  },
  methods: {
    signIn () {
      window.open(this.authURL('signin'))
    },
    signUp () {
      window.open(this.authURL('signup'))
    }
  }
}
