<template>
  <div class="c-header hidden lg:flex fixed top-0 left-0 right-0 z-30">
    <p class="info-text">
      Introducing Notary for Business: Build hyper-personalized campaigns on
      every channel.
    </p>
    <nuxt-link to="/solutions">
      <t-button
        theme="link"
        icon="right-arrow-white.svg"
        :icon-style="{
          'margin-left': '8.9px',
        }"
        text-color="#FFFFFF"
        height="23px"
      >
        <span class="text-[14px]">Learn More</span>
      </t-button>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main.scss';
.c-header {
  padding-top: 17px;
  padding-bottom: 18px;
  background: #03060b;
  align-items: center;
  justify-content: center;
}

.info-text {
  font-weight: normal;
  font-size: 14px;
  line-height: 162.5%;
  color: #ffffff;
}
</style>
