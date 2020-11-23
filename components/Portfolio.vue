<template>
  <section class="page-section bg-black w-screen left-0">
    <header class="p-3">
      <h1 class="font-head text-4xl font-bold leading-tight text-white">
        Portfolio
      </h1>
      <p class="lg:text-base text-sm font-normal text-purple-200">& Work</p>
    </header>
    <section class="showcase mt-16">
      <div v-swiper:portfolio="swiperOption">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide portfolio-slide"
            v-for="portfolio in portfolios"
            :key="portfolio.name"
          >
            <a class="portfolio text-white">
              <img src="" alt="" />
              <header>
                <h2>{{ portfolio.name }}</h2>
              </header>
              <p class="text-xs font-light">
                {{ portfolio.description }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import portfolios from '~/dataStore/portfolio'
export default {
  name: 'PortfolioPage',
  data() {
    return {
      portfolios: JSON.parse(portfolios),
      swiperOption: {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 'auto',
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        scrollbar: {
          draggable: true,
        },
        breakpoints: {
          500: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss">
.portfolio img {
  min-height: 250px;
  border-radius: 8px;
  background: white;
  width: 100%;
  object-fit: contain;
  // min-width: 350px;
}

.showcase {
  padding: 8px;
  // width: calc(100vw - 30px);
  position: relative;
  @media screen and (min-width: 768px) {
    // width: calc(100vw - 100px);
    // left: -60px;
  }
}
.portfolio-slide {
  width: 80%;
}
</style>