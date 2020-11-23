<template>
  <main class="">
    <splash-screen></splash-screen>
    <div v-swiper:pageSwiper="swiperOption" class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <about> </about>
        </div>
        <div class="swiper-slide">
          <portfolio></portfolio>
        </div>
        <div class="swiper-slide">
          <skill-set></skill-set>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </div>
    <education-timeline></education-timeline>
    <contact-me></contact-me>
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