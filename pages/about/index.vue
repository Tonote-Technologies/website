<template>
  <div>
    <main class="mb-[137px]">
      <hero-banner
        heading="At ToNote, we are making it easy for businesses and individuals to
              sign documents, swear affidavits or certify essential documents,
              virtually."
        header-class="lg:w-[768px]"
        body-class="lg:w-[743px] lg:pr-2"
        sub-heading="Our vision is to make trust easy for 456 million transacting
              Africans. One of the key figureheads in fostering trust between
              parties is a Notary Public. Our market place feature connects
              customers with nationally certified notaries public, who can
              notarise essential documents, 100% online and in real-time."
        :banner-alert="false"
        hero-left-class="lg:translate-y-[20px] 2xl:ml-[0px]"
      >
      </hero-banner>

      <section class="wrapper">
        <!-- Image -->
        <div class="about_image mt-[46px] lg:mt-[54px]">
          <img
            src="~/assets/images/about.jpeg"
            class="w-full h-full max-w-none"
            alt=""
          />
        </div>

        <!-- Team -->
        <div class="teams mt-[44px] lg:mt-[77px] text-center lg:text-left">
          <text-card
            header="Our Team"
            :main-style="{
              'font-size': '18px',
              margin: '18.49px 0',
              'line-height': '193.5%',
            }"
            :header-style="{
              'font-size': '23.5135px',
              'letter-spacing': '-0.015em',
              'line-height': '98%',
            }"
          >
            <p class="textcard_body text-[11.6603px] lg:text-[18px]">
              The passionate bunch obsessed with making notarising documents
              simpler.
            </p>
          </text-card>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-0"
          >
            <profile-card
              v-for="(res, index) in teams"
              :key="index"
              :name="res.name"
              :pref-name="res.prefname"
              :role="res.role"
              :image="res.image"
              :linkedinurl="res.linkedin"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      teams: [
        {
          name: 'Fikayo Durosinmi-Etti',
          prefname: 'Fikayo',
          role: 'CEO and Co-Founder',
          image: 'Fikayo.jpeg',
          linkedin: 'https://www.linkedin.com/in/fikayo-durosinmi-etti-7aa232101/'
        },
        {
          name: 'Daniel Etim Inyang',
          prefname: 'Daniel',
          role: 'Head of Revenue & Growth',
          image: 'Daniel.jpeg',
          linkedin: 'https://www.linkedin.com/in/danielinyang'
        },
        {
          name: 'Akin Shafi',
          prefname: 'Shafi',
          role: 'Full-Stack Developer',
          image: 'Shafi.jpeg',
          linkedin: 'https://www.linkedin.com/in/akin-shafi-90b3b4a4/'
        },
        {
          name: 'Laide Misola Enabulele',
          prefname: 'Laide',
          role: 'Lead, Community & Compliance',
          image: 'Laide.jpeg',
          linkedin: 'https://www.linkedin.com/in/laide-misola-e-4a181994/'
        }
      ]
    }
  }
}
</script>

<style></style>
