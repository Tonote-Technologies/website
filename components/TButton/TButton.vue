<template>
  <button
    :style="style"
    :type="submitType"
    class="flex"
    :class="classes"
    v-on="$listeners"
  >
    <slot />
    <p v-if="icon">
      <img
        :style="iconStyle"
        :src="require('~/assets/icons/' + icon)"
        alt="right icon"
        svg-inline
      />
    </p>
  </button>
</template>

<script src="./button.js"></script>

<style lang="scss" scoped>
@import '../../assets/scss/main.scss';

.btn {
  height: 50px;
  padding: 0 20px;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 162.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  &-primary {
    background: #003bb3;
    color: #fff;
  }
  &-secondary {
    background: #ffffff;
    color: #03060b;
  }
  &-outline {
    background: #ffffff;
    color: #03060b;
    border: 1px solid #03060b;
  }
  &-plain {
    background: transparent;
    color: #03060b;
  }
  &-link {
    color: #003bb3;
    background: transparent;
    text-decoration: underline;
  }
  &[disabled] {
    color: grey;
    border: none;
    cursor: not-allowed;
    background-color: #f5f5f5;
  }
  &-sm {
    padding-right: 13px;
    padding-left: 15.5px;
    height: 38px;
  }
  &-md {
    height: 50px;
    // width: 186px;
  }
  &-lg {
    width: 319px;
    @media (max-width: 650px) {
      width: 100%;
    }
  }
  &-full {
    width: 100%;
    text-align: center;
  }
}
</style>
