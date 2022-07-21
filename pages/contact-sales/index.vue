<template>
  <div id="contact-sale">
    <main class="mb-[56px] lg:mb-[113px]">
      <div class="wrapper">
        <div class="mt-[54px]">
          <h1
            class="font-NeueHelvetica text-center text-[34.98px] lg:text-left lg:text-[52.35px]"
          >
            Contact Sales
          </h1>
          <p
            class="textcard_body lg:w-[377px] lg:mt-[16px] text-[14px] lg:text-[18px] text-center lg:text-left leading-[170.5%] lg:leading-[193.5%]"
          >
            Tell us how we can help and we’ll get in touch shortly.
          </p>
        </div>

        <div class="flex flex-col lg:flex-row items-center lg:justify-between">
          <div class="w-full lg:w-[505px] 2xl:w-[582px] mt-[35px] lg:mt-[41px]">
            <ValidationObserver v-slot="{ invalid, reset }">
              <form
                ref="form"
                action=""
                @submit.prevent="onSubmit"
                @reset.prevent="reset"
              >
                <div>
                  <div class="block lg:flex lg:justify-between">
                    <AppControlInput
                      v-model="form.first_name"
                      name="first name"
                      control-type="input"
                      label="First name"
                      rules="required"
                      input-style="mb-[19px] lg:mb-0 lg:w-[236px] rounded-[4px]"
                    />
                    <AppControlInput
                      v-model="form.last_name"
                      control-type="input"
                      label="Last name"
                      name="last name"
                      rules="required"
                      input-style="mb-[19px] lg:mb-0 lg:w-[236px] rounded-[4px]"
                    />
                  </div>

                  <div
                    class="block lg:flex lg:justify-between lg:mt-[19px] lg:mb-[15px]"
                  >
                    <AppControlInput
                      v-model="form.company_name"
                      control-type="input"
                      label="Company name"
                      name="company name"
                      rules="required"
                      input-style="mb-[19px] lg:mb-0 lg:w-[236px] rounded-[4px]"
                    />
                    <AppControlInput
                      v-model="form.company_email"
                      control-type="input"
                      label="Company email"
                      name="company email"
                      rules="required|email"
                      input-style="mb-[19px] lg:mb-0 lg:w-[236px] rounded-[4px]"
                    />
                  </div>

                  <div class="block lg:flex lg:justify-between lg:flex-nowrap">
                    <AppControlInput
                      v-model="form.phone_number"
                      control-type="input"
                      label="Phone no"
                      name="phone number"
                      type="tel"
                      rules="required|numeric|min:11"
                      input-style="mb-[19px] lg:mb-0 lg:w-[236px] rounded-[4px]"
                    />
                    <AppControlInput
                      v-model="form.country"
                      control-type="select"
                      label="Country"
                      name="country"
                      :options="countries"
                      icon="dropdown-down.svg"
                      rules="required"
                      input-style="lg:mb-0 lg:w-[236px] rounded-[4px]"
                    />
                  </div>

                  <div class="lg:mt-[15px] lg:mb-[25px]">
                    <AppControlInput
                      margin="19px"
                      v-model="form.message_body"
                      control-type="textarea"
                      rules="required"
                      label="Leave us a message"
                      name="message"
                      input-style="mb-[19px] lg:mb-0 lg:w-full rounded-[4px] resize-none"
                    />
                  </div>
                  <t-button
                    size="lg"
                    submit-type="submit"
                    :disabled="buttonText !== 'Submit' || invalid"
                  >
                    <template v-if="!loading">
                      {{ buttonText }}
                    </template>
                    <Loader v-else />
                  </t-button>
                </div>
                <p class="mt-[10px] text-[red]">
                  {{ errorMsg }}
                </p>
                <p
                  class="mt-[32px] mb-[70px] lg:mt-[24px] text-[14px] leading-[162.5%]"
                >
                  By submitting this form, I confirm that I have read and <br />
                  understood Tonote’s
                  <a href="/privacy-policy" class="underline"
                    >Privacy Policy.</a
                  >
                </p>
              </form>
            </ValidationObserver>
          </div>
          <div class="w-auto relative">
            <img
              src="~/assets/images/sales.png"
              class="w-full h-full max-w-none"
              alt="sales image"
            />
          </div>
        </div>
      </div>
    </main>
    <contact-us />
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import countries from './data.json'
import Loader from '@/components/Loader'
export default {
  name: 'ContactSalesPage',
  components: {
    ValidationObserver,
    Loader,
  },
  data() {
    return {
      form: {},
      loading: false,
      buttonText: 'Submit',
      countries,
      errorMsg: '',
    }
  },
  methods: {
    async onSubmit() {
      this.errorMsg = ''
      const self = this
      this.loading = true
      try {
        const { status, code } = await this.$axios.$post(
          'api/v1/user/profile/contact-sales',
          this.form
        )
        if (status === 'success' && code === 200) {
          this.$refs.form.reset()
          this.form = {}
          this.buttonText = 'Message Sent'
        }
      } catch (error) {
        this.errorMsg = 'Unable to process request.'
        return error
      } finally {
        this.loading = false
        setTimeout(() => {
          self.buttonText = 'Submit'
        }, 3000)
      }
    },
  },
}
</script>
