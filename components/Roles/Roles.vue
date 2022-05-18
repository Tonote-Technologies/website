<template>
  <div>
    <div class="c-roleCard block lg:flex lg:justify-between">
      <p class="c-roleCard__jobTitle">
        {{ jobTitle }}
      </p>
      <p class="c-roleCard__location text-left">
        {{ location }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RolesComponent',
  props: {
    jobTitle: {
      type: String,
      default: ''
    },
    location: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main.scss';

.c-roleCard {
  background: #ffffff;
  box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 26px 32px;
  margin-bottom: 32px;

  &__jobTitle {
    font-weight: 600;
    font-size: 18px;
    line-height: 193.5%;
    color: #16110d;
    font-style: normal;
  }
  &__location {
    font-weight: normal;
    font-size: 18px;
    line-height: 193.5%;
    color: #626262;
  }
}
</style>
