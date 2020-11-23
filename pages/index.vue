<template>
  <main class="overflow-hidden">
    <splash-screen></splash-screen>
    <about></about>
    <skill-set></skill-set>
    <portfolio></portfolio>
    <education-timeline></education-timeline>
    <contact-me></contact-me>
    <div class="flex justify-between items-center px-3 py-4 bg-gray-200">
      <div class="container mx-auto">
        <div class="flex space-x-3">
          <p class="inline-flex items-center font-bold mr-auto text-gray-600">
            Ebong, Okposong
          </p>

          <p class="inline-flex items-center text-gray-600 text-sm">
            Made with <span class="text-2xl ml-2 text-red-600">&#10084;</span>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SplashScreen from '~/components/SplashScreen'
import About from '~/components/About'
import Portfolio from '~/components/Portfolio'
import SkillSet from '~/components/SkillSet'
import EducationTimeline from '~/components/EducationTimeline'
import ContactMe from '~/components/ContactMe.vue'

export default {
  name: 'home',
  title: 'Mousewheel control',
  components: {
    SplashScreen,
    About,
    Portfolio,
    SkillSet,
    EducationTimeline,
    ContactMe,
  },
  data() {
    return {
      pages: ['splash-screen', 'about'],
      banners: [],
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        scrollbar: {
          draggable: true,
        },
      },
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    },
  },
}
</script>

<style lang="scss">
.swiper {
  height: 100vh;
  width: 100%;

  .swiper-slide {
    display: flex;
    // justify-content: center;
    // align-items: center;
    // text-align: center;
    font-weight: bold;
    // background-color: orange;
  }
}
</style>