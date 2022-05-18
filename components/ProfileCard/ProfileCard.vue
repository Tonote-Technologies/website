<template>
  <div class="profile-card relative lg:w-[302px] overflow-hidden">
    <img
      :src="require('~/assets/images/teams/' + image)"
      class="w-full h-full"
      alt=""
    >
    <div
      class="profile-card_info opacity-0 absolute top-0 bottom-0 left-0 right-0 bg-[#16110D] text-white z-20"
    >
      <div class="ml-[20px] mt-[26px] text-[18px]">
        <p class="name">
          {{ name }}
        </p>
        <p class="role mt-3">
          {{ role }}
        </p>
        <a :href="linkedinurl" target="_blank" class="mt-2">
          <img :src="require('~/assets/icons/linkedin.svg')" alt="LinkedIn icon">
        </a>
      </div>
    </div>
    <div
      class="tag absolute left-5 bottom-4 w-[103px] h-[47px] bg-white flex justify-center items-center text-sm"
    >
      {{ prefName }}
    </div>
  </div>
</template>

<script src="./profileCard.js"></script>
<style lang="scss" scoped>
.profile-card {
  &_info{
    transition: all 1s ease-in-out;
  }
  &:hover {
    .profile-card_info {
      opacity: 1;
    }
  }
}
</style>
