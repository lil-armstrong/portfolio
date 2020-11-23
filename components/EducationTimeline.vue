<template>
  <section class="page-section bg-blue-200">
    <header class="p-3">
      <h1 class="font-head text-4xl font-bold leading-tight text-blue-600">
        Education
      </h1>
      <p class="text-base font-light">& Achievements</p>
    </header>

    <section class="mt-6 w-full">
      <div>
        <!-- <section class="timelines">
          <section
            v-for="entry of education"
            :key="entry.name"
            class="timeline my-6"
          >
            <h2 class="uppercase font-head">{{ entry.name }}</h2>
            <p class="text-sm font-light">{{ entry.location }}</p>
            <p class="text-sm font-light">{{ entry.award }}</p>
            <small class="font-light">{{ entry.timeline }}</small>
          </section>
        </section> -->
        <section class="timelines">
          <div v-for="entry of education" :key="entry.name" class="timeline">
            <div class="timeline-content">
              <h2 class="uppercase font-head">{{ entry.name }}</h2>
              <p class="text-sm font-light">{{ entry.location }}</p>
              <p class="text-sm font-light">{{ entry.award }}</p>
              <small class="font-light">{{ entry.timeline }}</small>
            </div>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
import education from '~/dataStore/education'
export default {
  name: 'EducationPage',
  data() {
    return {
      education: JSON.parse(education),
      swiperOption: {
        // loop: true,
        // Swiper 5 use modern CSS Scroll Snap API.
        // cssMode: true,
        slidesPerView: 2,
        spaceBetween: 18,
        mousewheel: true,
        direction: 'vertical',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<style lang="scss">
.timelines {
  position: relative;
  top: 0;
  // max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  // background-color: pink;
  padding-left: 50px;
  // overflow-x: hidden;
  // overflow-y: auto;
  &::before {
    content: '';
    position: absolute;
    width: 4px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    margin-left: 26px;
    border-radius: 4px;
  }

  .timeline {
    padding: 8px;
    .timeline-content {
      padding: 12px 24px;
      position: relative;
      background-color: white;
      // width: 50%;
      border-radius: 8px;
      box-sizing: border-box;
      margin-bottom: 16px;
      background: #fff;
      display: inline-block;
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        margin-left: -50px;
        background-color: white;
        border: 4px solid orange;
        border-radius: 8px;
        z-index: 10;

        /* graphics */

        width: 40px;
        height: 40px;
        left: 0px;

        /* white */
        background: #ffffff;
        /* tailwindui/blue/600 */
        border: 1px solid #1c64f2;
        box-sizing: border-box;
        /* shadow-lg */
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1),
          0px 4px 6px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
      }
    }
  }
}
</style>