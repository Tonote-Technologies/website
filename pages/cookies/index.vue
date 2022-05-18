<template>
  <div>
    <main class="mb-[49px] cookiesT">
      <section class="wrapper">
        <header class="space-y-[28px] mt-10 flex flex-col items-center w-full lg:w-[829px] mx-auto mb-[69px]">
          <h1 class="text-header-color text-[28.9808px] text-center lg:text-[52.3502px] leading-[98%] tracking-[-0.015em] font-bold font-NeueHelvetica">
            Cookies Policy
          </h1>
          <app-control-input v-model="search" placeholder="search" control-type="input" input-style="w-[331px] lg:w-[539px]" />
        </header>
        <!-- Main content -->
        <terms-structure>
          <template #aside>
            <h5 class="mb-[49px]">
              On this page
            </h5>
            <span
              v-for="({id, label, desc}, index) in filterCookies"
              :key="index"
              class="tab block mb-5 text-[15px] leading-[141.3%] cursor-pointer"
              :class="{active: id === activeId}"
              @click="activeId = id"
            >
              <a
                v-if="desc"
                :href="'#'+id"
                class="text-[15px]"
              >{{ label }}</a>
              <span v-else class="text-[15px]">
                {{ label }}
              </span>
            </span>
          </template>
          <template #main>
            <div v-for="({id, desc, label, lists}, index) in filterCookies" :id="id" :key="index" class="mb-[35px] lg:mb-[69px] w-full lg:w-[759px]">
              <div v-if="desc">
                <h3 class="text-header-colorb text-[15px] leading-[141.3%] lg:text-[24px] lg:leading-[79.3%] mb-[9px] lg:mb-[21px] font-bold">
                  {{ label }}
                </h3>
                <p class="text-[#16110D] text-[14px] leading-[202.9%]">
                  <span v-html="desc" />
                </p>
                <div v-if="lists" class="mt-3">
                  <ul v-if="lists.type === 0" class="list-disc list-inside">
                    <li v-for="(list, i) in lists.data" :key="i" class="mt-3">
                      {{ list }}
                    </li>
                  </ul>
                  <ol v-if="lists.type === 1" class="list-decimal list-inside">
                    <li v-for="(list, i) in lists.data" :key="i" class="mt-3">
                      {{ list }}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </template>
        </terms-structure>
      </section>
    </main>
  </div>
</template>

<script>
import cookiesMixins from './data.js'
// import { cookies } from './data.js'

export default {
  name: 'TermsAndConditions',
  mixins: [cookiesMixins],
  data () {
    return {
      search: '',
      activeId: 'general'
    }
  },
  computed: {
    filterCookies () {
      return this.cookies.filter(res => res.label.match(new RegExp(this.search, 'i')) || res.desc.match(new RegExp(this.search, 'i')))
    }
  }
}
</script>

<style scoped>
.cookiesT,
.cookiesT *:not(header > h1)
 {
  font-family: 'Karla', sans-serif;
}
i, em {
  font-family: 'Karla', sans-serif;
}
.cookiesT .tab.active {
  color: #003BB3;
}
</style>
