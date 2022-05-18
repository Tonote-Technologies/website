<template>
  <div class="text_card flex flex-col">
    <div v-if="icon" :style="iconStyle">
      <img :src="require('~/assets/icons/features/' + icon)">
    </div>
    <p v-if="subheader" class="textcard_subheader" :style="subStyle">
      {{ subheader }}
    </p>
    <h3 v-if="header" class="textcard_header" :class="[{'font-NeueHelvetica': !icon}]" :style="headerStyle">
      {{ header }}
    </h3>
    <div :style="mainStyle">
      <slot />
    </div>

    <footer :class="footerClass">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script src="./textCard.js"></script>

<style></style>
