<template>
  <div class="overflow-hidden">
    <main class="mb-[49px] terms">
      <section class="wrapper">
        <header
          class="space-y-[28px] mt-10 flex flex-col items-center w-full lg:w-[829px] mx-auto mb-[69px]"
        >
          <h1
            class="text-header-color text-[28.9808px] text-center lg:text-[52.3502px] leading-[98%] tracking-[-0.015em] font-bold font-NeueHelvetica"
          >
            Terms and Conditions
          </h1>
        </header>
        <!-- Main content -->
        <terms-structure>
          <template #aside>
            <h5 class="mb-[49px]">
              On this page
            </h5>
            <div>
              <span
                v-for="({ id, label }, index) in terms"
                :key="index"
                class="tab block mb-5 text-[15px] leading-[141.3%] cursor-pointer"
                :class="{ active: id === activeId }"
                @click="activeId = id"
              >
                <a v-if="id" :href="'#' + id" class="text-[15px]">{{
                  label
                }}</a>
                <span v-else class="text-[15px]">
                  {{ label }}
                </span>
              </span>
            </div>
          </template>
          <template #main>
            <terms-contents />
          </template>
        </terms-structure>
      </section>
    </main>
  </div>
</template>

<script>
import { terms } from './data.js'
import TermsContents from './TermsContents.vue'

export default {
  name: 'TermsAndConditions',
  components: {
    TermsContents
  },
  data () {
    return {
      terms,
      activeId: 'general'
    }
  }
}
</script>

<style scoped>
.terms,
.terms *:not(header > h1) {
  font-family: 'Karla', sans-serif;
}
.terms .tab.active,
.desc > span a:link {
  color: #003bb3;
}
</style>
