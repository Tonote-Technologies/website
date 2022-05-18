<template>
  <nav class="nav">
    <a href="/" class="logo_anime nav__logo">
      <img
        class="max-w-none"
        src="../../assets/icons/tonote_logo.svg"
        alt="company logo"
        svg-inline
      >
    </a>
    <ul class="nav__menu flex items-center">
      <li class="nav__menu__item">
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li class="nav__menu__item">
        <nuxt-link to="/notaries-public">
          For Notaries
        </nuxt-link>
      </li>
      <li class="nav__menu__item">
        <nuxt-link to="/pricing">
          Pricing
        </nuxt-link>
      </li>
      <li class="nav__menu__item">
        <nuxt-link to="/solutions">
          Solutions
        </nuxt-link>
      </li>
      <li class="nav__menu__item">
        <nuxt-link to="/faq">
          FAQs
        </nuxt-link>
      </li>
    </ul>
    <ul class="nav__menu__buttons flex items-center">
      <li class="mr-6">
        <t-button theme="plain" size="sm" @click="signIn()">
          Sign In
        </t-button>
      </li>
      <li>
        <t-button
          theme="primary"
          size="sm"
          icon="right-arrow-white.svg"
          :icon-style="{
            'margin-left': '41.78px',
          }"
          @click="signUp()"
        >
          Start Free
        </t-button>
      </li>
    </ul>
    <div class="menu-icon">
      <button @click="active = !active">
        <img v-if="!active" src="../../assets/icons/menu.svg" alt="menu icon">
        <img v-else src="../../assets/icons/close.svg" alt="menu icon">
      </button>
    </div>
    <div
      class="mobile_menu lg:hidden absolute z-50 top-[50px] bg-white h-screen right-[-300px] pl-[26px] flex flex-col justify-start"
      :class="{ active: active }"
    >
      <div class="mt-[80px]">
        <ul class="flex flex-col items-start">
          <li class="mb-4" @click="active = false">
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li class="mb-4" @click="active = false">
            <nuxt-link to="/notaries-public">
              For Notaries
            </nuxt-link>
          </li>
          <li class="mb-4" @click="active = false">
            <nuxt-link to="/pricing">
              Pricing
            </nuxt-link>
          </li>
          <li class="mb-4" @click="active = false">
            <nuxt-link to="/solutions">
              Solutions
            </nuxt-link>
          </li>
          <li class="mb-4" @click="active = false">
            <nuxt-link to="/faq">
              FAQs
            </nuxt-link>
          </li>
          <li class="mb-4">
            <t-button
              theme="plain"
              size="sm"
              padding="0"
              @click=";[(active = false), signIn()]"
            >
              Sign In
            </t-button>
          </li>
          <li>
            <t-button
              theme="primary"
              size="sm"
              icon="right-arrow-white.svg"
              :icon-style="{
                'margin-left': '41.78px',
              }"
              @click=";[(active = false), signUp()]"
            >
              Start Free
            </t-button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import mainMixin from '@/mixins/index'
export default {
  name: 'HeaderComponent',
  mixins: [mainMixin],
  data () {
    return {
      active: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main.scss';

a.nuxt-link-exact-active {
  color: $primary-color;
}

.c-header,
.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 20px 0;

  &__logo {
    height: 23px;
    width: 99.76px;
    cursor: pointer;
  }
}

.mobile_menu {
  position: absolute;
  right: -1000px;
  left: 100%;
  transition: all 0.5s ease-in-out;
  &.active {
    left: 0;
    right: 0;
  }
}
// .nav__menu-wrapper,
// .nav__menu,
// .nav__menu__buttons {
//   display: flex;
//   align-items: center;
//   // justify-content: space-between;
// }
.nav__menu__item {
  padding: 0 25px;
  font-weight: normal;
  font-size: 14px;
  line-height: 162.5%;
  color: #03060b;
  transition: color 0.3s ease-in-out;
}
.nav__menu__item:hover {
  color: #003bb3;
}

.menu-icon {
  display: none;

  @media screen and (max-width: 817px) {
    display: block;
    cursor: pointer;
  }
}
.nav__menu,
.nav__menu__buttons {
  @media screen and (max-width: 817px) {
    display: none;
  }
}
</style>
