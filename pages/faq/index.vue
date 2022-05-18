<template>
  <div class="faq">
    <main class="mb-[49px]">
      <section class="wrapper">
        <header
          class="space-y-[17px] lg:space-y-[28px] mt-10 flex flex-col items-center w-full lg:w-[829px] mx-auto mb-[40px] lg:mb-[69px]"
        >
          <h1
            class="text-header-color text-[34.9px] text-center lg:text-[52.3502px] leading-[98%] tracking-[-0.015em] font-bold font-NeueHelvetica"
          >
            Frequently Asked Questions
          </h1>
          <app-control-input
            v-model="search"
            placeholder="search"
            control-type="input"
            input-style="w-[331px] lg:w-[539px]"
          />
        </header>
        <!-- Main content -->
        <terms-structure>
          <template #aside>
            <h5 class="mb-[49px]">On this page</h5>
            <div>
              <span>
                <div
                  v-for="(faq, index) in filterFAQs"
                  :key="index"
                  class="faq-tabs tab block mb-5 text-[15px] leading-[141.3%] cursor-pointer"
                  :class="{ active: faq.id === activeId }"
                  @click="activeId = faq.id"
                >
                  <a :href="'#' + faq.id">{{ faq.question }}</a>
                </div>
              </span>
            </div>
          </template>
          <template #main>
            <div
              v-for="(
                { id, question, answer, list, footer }, index
              ) in filterFAQs"
              :id="id"
              :key="index"
              class="w-full"
            >
              <Accordion :title="question">
                <p v-html="answer" />
                <div v-if="id === 9">
                  <fees-table />
                </div>
                <ol v-if="list && list.type === 'ordered'">
                  <li
                    v-for="(item, i) in list.content"
                    :key="i"
                    class="list-decimal list-inside"
                  >
                    {{ item }}
                  </li>
                </ol>
                <ul v-if="list && list.type === 'unordered'">
                  <li
                    v-for="(item, i) in list.content"
                    :key="i"
                    class="list-disc list-inside"
                  >
                    {{ item }}
                  </li>
                </ul>
                <p v-html="footer" />
              </Accordion>
            </div>
          </template>
        </terms-structure>
      </section>
    </main>
  </div>
</template>

<script>
import FeesTable from '../terms_conditions/FeesTable.vue'
import { FAQs } from './data.js'
export default {
  name: 'FaqPage',
  components: {
    FeesTable
  },
  data () {
    return {
      FAQs,
      activeId: 1,
      search: '',
      selectedTab: 'What is ToNote?'
    }
  },
  computed: {
    filterFAQs () {
      return this.FAQs.filter(res => res.question.match(new RegExp(this.search, 'i')) || res.answer.match(new RegExp(this.search, 'i')))
    }
  }
}
</script>

<style lang="scss" scoped>
.faq,
.faq *:not(header > h1) {
  font-family: 'Karla', sans-serif;
}
.faq .faq-tabs.active {
  color: #003bb3;
}
</style>
