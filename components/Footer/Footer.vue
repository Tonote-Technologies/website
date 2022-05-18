<template>
  <div class="c-footer">
    <div class="wrapper">
      <div class="c-footer__header">
        <h1 class="mainText">Getting started is easy</h1>
        <p class="body">
          Contact us to find out more about our notary solutions for your
          personal or business needs.
        </p>
        <nuxt-link
          v-if="$route.name === 'contact-sales'"
          to="/contact-sales#contact-sales"
        >
          <t-button
            theme="secondary"
            icon="right-arrow-black.svg"
            :icon-style="{
              'margin-left': '15.9px',
            }"
          >
            Contact Sales
          </t-button>
        </nuxt-link>
        <nuxt-link v-else to="/contact-sales">
          <t-button
            theme="secondary"
            icon="right-arrow-black.svg"
            :icon-style="{
              'margin-left': '15.9px',
            }"
          >
            Contact Sales
          </t-button>
        </nuxt-link>
      </div>
      <div class="c-footer__contact flex flex-wrap">
        <div class="logo mb-[22px] lg:mb-0">
          <img
            class="logo-img"
            src="../../assets/icons/tonote_logo_white.svg"
            alt="company logo"
            svg-inline
          />
        </div>
        <form
          ref="form"
          class="w-full lg:w-[476px]"
          @submit.prevent="sendEmail"
        >
          <div class="contactGroup flex justify-between w-full lg:w-[476px]">
            <input
              id="email"
              v-model="email"
              class="email-input mr-[10px] flex-grow"
              type="email"
              required
              placeholder="youremail@emaildomain.com"
            />
            <div class="community-btn">
              <button
                class="footer-button flex items-center"
                type="submit"
                :class="{ loaderBtn: loading }"
              >
                <template v-if="!loading">
                  <span class="whitespace-nowrap">
                    {{ buttonText }}
                  </span>
                  <span
                    class="footer-button__icon flex-none"
                    :class="{ hidden: isHidden }"
                  >
                    <img
                      class="shrink-0 w-[3.01px] h-[5.27px] lg:w-[4.43px] lg:h-[7.75px]"
                      src="../../assets/icons/right-arrow-black.svg"
                      alt="company logo"
                      svg-inline
                    />
                  </span>
                </template>
                <Loader v-else color="#003bb3" />
              </button>
            </div>
          </div>
          <div class="community-btn__small_screen">
            <button
              class="footer-button flex items-center"
              type="submit"
              :class="{ loaderBtn: loading }"
            >
              <template v-if="!loading">
                <span class="whitespace-nowrap">
                  {{ buttonText }}
                </span>
                <span
                  class="footer-button__icon flex-none"
                  :class="{ hidden: isHidden }"
                >
                  <img
                    class="shrink-0 w-[3.01px] h-[5.27px] lg:w-[4.43px] lg:h-[7.75px]"
                    src="../../assets/icons/right-arrow-black.svg"
                    alt="company logo"
                    svg-inline
                  />
                </span>
              </template>
              <Loader v-else color="#003bb3" />
            </button>
          </div>
          <p class="mt-[10px] text-[red]">
            {{ errorMsg }}
          </p>
        </form>
      </div>
      <div
        class="c-footer__body flex flex-wrap lg:flex-nowrap justify-between item-center mb-[63px] lg:mb-[84px] pb-[15px] lg:pb-[36px]"
      >
        <div class="text-white col-span-4 lg:mr-[103px]">
          <h1 class="company">Company</h1>
          <p class="info w-full lg:w-[339px]">
            At ToNote, we are making it easy for people to notarise documents
            and get affidavits virtually. Signing up with ToNote makes
            notarising 55% cheaper and 26x faster than traditional means.
          </p>
        </div>

        <div
          class="w-full flex flex-wrap lg:flex-nowrap justify-between lg:space-x-[0]"
        >
          <div class="w-2/5 lg:w-auto">
            <FooterList header="Solutions" :links="solutionLinks" />
          </div>
          <div class="w-2/5 lg:w-auto">
            <FooterList header="Support" :links="supportLinks" />
          </div>
          <div class="w-2/5 lg:w-auto">
            <FooterList header="Legals" :links="legalLinks" />
          </div>
          <div class="w-2/5 lg:w-auto">
            <FooterList header="Socials" :links="socialLinks" />
          </div>
        </div>
      </div>
      <div class="c-footer__copyright text-white">
        <p class="text">
          © {{ new Date().getFullYear() }} ToNote Technologies Limited. All
          rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'

export default {
  name: 'FooterComponent',
  components: {
    Loader
  },
  data () {
    return {
      email: '',
      loading: false,
      solutionLinks: [
        {
          name: 'About Us',
          to: '/about'
        },
        {
          name: 'For Teams',
          to: '/solutions#teams'
        },
        {
          name: 'For Businesses',
          to: '/solutions#business'
        },
        {
          name: 'For Individuals',
          to: '/solutions#individual'
        }
      ],
      supportLinks: [
        {
          name: 'Blog',
          url: 'https://gettonote.medium.com/'
        },
        {
          name: 'FAQs',
          to: '/faq'
        },
        {
          name: 'Careers',
          to: '/careers'
        },
        {
          name: 'Contact Us',
          to: '/contact-sales'
        }
      ],
      legalLinks: [
        {
          name: 'Privacy Policy',
          to: '/privacy-policy'
        },
        {
          name: 'Terms of Use',
          to: '/terms_conditions'
        },
        {
          name: 'Cookies Policy',
          to: '/cookies'
        }
      ],
      socialLinks: [
        {
          name: 'Facebook',
          url: 'https://web.facebook.com/GetToNote'
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/GetToNote'
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/mytonote/'
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/tonote/'
        }
      ],
      buttonText: 'Join Our Community',
      isHidden: false,
      errorMsg: ''
    }
  },
  methods: {
    async sendEmail () {
      this.errorMsg = ''
      const self = this
      this.loading = true
      try {
        const { status, code } = await this.$axios.$post('api/v1/user/profile/join-community', { email: this.email })
        if (status === 'success' && code === 200) {
          this.email = ''
          this.buttonText = 'Message Sent'
          this.isHidden = true
        }
      } catch (error) {
        this.errorMsg = 'Unable to process request.'
        return error
      } finally {
        this.loading = false
        setTimeout(() => {
          self.buttonText = 'Join Our Community'
          this.isHidden = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main.scss';

.c-footer {
  background-color: #03060b;
  padding: 80px 0 39px 0;

  &__header {
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
      align-items: center;
    }

    .mainText {
      font-family: 'NeueHelvetica';
      font-style: normal;
      font-weight: normal;
      font-size: 32.6235px;
      line-height: 98%;
      letter-spacing: -0.015em;
      color: #ffffff;

      @media (min-width: 1024px) {
        font-weight: bold;
        font-size: 43.1351px;
      }
    }
    .body {
      font-weight: normal;
      font-size: 16px;
      line-height: 162.5%;
      color: #ffffff;
      margin-top: 23px;
      margin-bottom: 25px;
    }
  }

  &__contact {
    align-items: center;
    justify-content: space-between;
    margin-bottom: 87px;
    margin-top: 95px;

    .contactGroup {
      border: 1px solid #ffffff;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 5px 6px 6px 24px;

      @media screen and (max-width: 768px) {
        padding: 3.4px 4.08px 4.08px 16.34px;
      }
      @media (max-width: 375px) {
        height: 38.43px;
      }

      .email-input {
        border: none;
        background: transparent;
        background-color: transparent;
        color: #ffffff;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;

        @media screen and (max-width: 768px) {
          font-weight: bold;
          font-size: 9.52941px;
          line-height: 14px;
        }

        &::placeholder {
          color: #ffffff;
        }
        &:focus,
        &:focus-within {
          outline: none;
          background: transparent;
        }
      }
    }
  }

  &__body {
    margin-bottom: 35px;
    border-bottom: 1px solid #ffffff;
    .company {
      font-weight: bold;
      font-size: 16px;
      line-height: 162.5%;
      margin-bottom: 25px;
    }
    .info {
      font-weight: normal;
      font-size: 14px;
      line-height: 194.5%;

      @media screen and (max-width: 768px) {
        margin-bottom: 64px;
      }
    }
  }

  &__copyright {
    .text {
      font-weight: normal;
      font-size: 12px;
      line-height: 194.5%;
    }
  }
}
.footer-button {
  background: #ffffff;
  border-radius: 4px;
  padding: 11px;
  font-weight: normal;
  font-size: 11.9167px;
  line-height: 162.5%;
  color: #03060b;

  @media screen and (max-width: 768px) {
    padding: 8px 7.4px;
    font-weight: bold;
    font-size: 8px;
  }

  &__icon {
    margin-left: 17.83px;

    @media screen and (max-width: 768px) {
      margin-left: 8.73px;
    }
  }
}
.hidden {
  display: none;
}
.loaderBtn {
  display: flex;
  justify-content: center;
  width: 167.16px;
  height: 41.3px;
}

.community-btn {
  display: inline-block;
  @media (max-width: 330px) {
    display: none;

    .contactGroup {
      height: 38.43px;
    }
  }
}
.community-btn__small_screen {
  display: none;

  @media (max-width: 330px) {
    display: block;
    margin-top: 10px;

    .footer-button {
      padding: 11px 14.4px;
      font-weight: bold;
      font-size: 10px;
    }
  }
}
</style>
