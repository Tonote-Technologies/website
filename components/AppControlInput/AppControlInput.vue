<template>
  <validation-provider v-slot="{ errors }" :rules="rules">
    <div class="flex flex-col-reverse relative control_input" :style="style">
      <input
        v-if="controlType === 'input'"
        v-bind="$attrs"
        :value="value"
        :class="inputStyle"
        :type="type"
        autocomplete="new-value"
        autocorrect="false"
        autocapitalize="false"
        @input="$emit('input', $event.target.value)"
      />
      <textarea
        v-if="controlType === 'textarea'"
        rows="10"
        :value="value"
        :class="inputStyle"
        v-bind="$attrs"
        autocomplete="new-value"
        autocorrect="false"
        autocapitalize="false"
        @input="$emit('input', $event.target.value)"
      />
      <select
        v-if="controlType === 'select'"
        v-bind="$attrs"
        :value="value"
        :class="inputStyle"
        @change="$emit('input', $event.target.value)"
      >
        <option value="" selected disabled />
        <option v-for="(opt, index) in options" :key="index" :value="opt.name">
          {{ opt.name }}
        </option>
      </select>
      <label v-if="label" class="block">
        {{ label }}
      </label>
      <i v-if="icon" class="absolute right-[15px] bottom-[16.36px]">
        <img :src="require('~/assets/icons/features/' + icon)" />
      </i>
    </div>
    <span v-for="error in errors" :key="error" class="text-red-500 text-xs">
      {{ error }}
    </span>
  </validation-provider>
</template>

<script src="./appControlInput.js"></script>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.control_input {
  input,
  textarea,
  select {
    background-color: $input-bg;
    padding: 10px 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    &::-ms-expand {
      display: none;
    }
  }
  label {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 162.5%;
    color: $header-text-color;
  }
}
</style>
