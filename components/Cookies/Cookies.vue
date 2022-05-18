<template>
  <div class="bg-primary-color fixed bottom-0 left-0 right-0 z-20">
    <div class="wrapper">
      <div class="c-cookiesSection lg:items-center">
        <p class="companyLogo">
          <img
            class="max-w-none"
            src="../../assets/icons/tonote_logo_white.svg"
            alt="company logo"
            svg-inline
          >
        </p>
        <div class="info">
          <p class="text-white text-left my-3 lg:my-0">
            This website uses cookies to improve user experience, you can read more
            about it on our
            <nuxt-link
              class="cookies-link"
              to="/cookies"
            >
              cookies policy
            </nuxt-link>
            documentation
          </p>
        </div>
        <div>
          <TButton theme="secondary">
            Accept
          </TButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookiesAlert'
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/main.scss";

.c-cookiesSection {
  display: flex;
  justify-content: space-between;
  background-color: #003bb3;
  flex-flow: column;
  padding: 21px 0;
  @media (min-width: 1024px) {
    flex-flow: row;
    justify-content: space-between;
  }

  .info {
    font-weight: normal;
    font-size: 13px;
    line-height: 202.9%;
  }
}
.cookies-link {
  text-decoration: underline;
}
.companyLogo {
  height: 23px;
  width: 99.76px;
}
</style>
