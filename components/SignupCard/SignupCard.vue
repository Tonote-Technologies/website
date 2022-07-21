<template>
  <div class="c-signupCard">
    <div class="flex flex-col lg:flex-row justify-between">
      <div class="flex flex-col items-center">
        <h3 class="c-signupCard__price">N8000</h3>
        <p class="c-signupCard__service">Per Notary Session</p>
      </div>

      <div class="flex flex-col items-center">
        <h3 class="c-signupCard__price">N4000</h3>
        <p class="c-signupCard__service">Per Affidavit</p>
      </div>
    </div>

    <t-button
      theme="secondary"
      text-color="#003BB3"
      size="full"
      @click="signUp()"
    >
      Sign Up
    </t-button>
  </div>
</template>

<script>
import mainMixin from '@/mixins/index'

export default {
  name: 'SignupCard',
  mixins: [mainMixin],
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main.scss';

.c-signupCard {
  background: #003bb3;
  border-radius: 14px;
  padding: 19px 24px;
  width: 374px;

  @media (max-width: 768px) {
    width: auto;
  }

  &__price {
    font-weight: bold;
    font-size: 43.4691px;
    line-height: 121.5%;
    letter-spacing: -0.015em;
    color: #ffffff;
  }
  &__service {
    font-size: 16px;
    line-height: 193.5%;
    color: #ffffff;
    margin-bottom: 14px;
  }
}
</style>
