<template>
  <div class="flex justify-center">
    <aside class="hidden w-[175px] lg:flex flex-col space-y-4">
      <slot name="aside" />
    </aside>
    <div class="hidden lg:block ml-[33px] mr-[57px] w-[0.5px] bg-black" />
    <div class="b-main_content w-full scroll-snap_y">
      <slot name="main" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsStructure'
}
</script>
