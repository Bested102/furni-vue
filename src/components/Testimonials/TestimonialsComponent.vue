<template>
  <div class="testimonials">
    <div class="container">
      <h3 class="section-title">Testimonials</h3>
      <div class="main">
        <div class="left arrow" @click="currant--">
          <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 320 512">
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </div>
        <div class="wrapper" :style="{ height: testiHeight + 'px' }">
          <TestimonialComponent
            v-for="(t , i) in testimonials"
            :key="i"
            :testimonial="t"
            :currant="currant === i"
            :direction="direction"
            @mounted="setTestiHeight"
          />
        </div>
        <div class="right arrow" @click="currant++">
          <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 320 512">
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </div>
      </div>
      <div class="bullets">
        <span
          v-for="(e, i) in testimonials.length"
          :key="i"
          class="bullet"
          :class="{ active: i == currant }"
          @click="currant = i"
        >
          <span></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Testimonials from "../../assets/data/testimonials.json"
import TestimonialComponent from "./TestimonialComponent.vue";

export default {
  components: { TestimonialComponent },
  data() {
    return {
      testimonials: [],
      currant: 0,
      direction: "",
      testiHeight: 1000
    }
  },
  mounted() {
    this.testimonials = Testimonials
    window.addEventListener('resize', this.setTestiHeight);
    window.addEventListener('load', this.setTestiHeight);
    setTimeout(this.setTestiHeight, 150);
    this.setTestiHeight
  },
  watch: {
    currant(n, o) {
      if (o !== this.testimonials.length && o !== -1) {
        n > o ? this.direction = "right" : this.direction = "left"
        if (n === this.testimonials.length) {
          this.currant = 0
        } else if (n === -1) {
          this.currant = this.testimonials.length - 1
        }
      }
    }
  },
  methods: {
    setTestiHeight() {
      let el = document.querySelector(".testimonials .testimonial")
      this.testiHeight = el.offsetHeight
    }
  }
}
</script>

<style scoped>
@import "../../assets/base.css";

.container {
  margin-top: 140px;
}

h3 {
  text-align: center;
  margin-bottom: 38px;
}

.main {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  overflow: hidden;
}

.arrow {
  flex: 0 0 58px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: rgba(59, 93, 80, 0.1);
  transition: 0.25s all ease;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.arrow svg {
  transition: 0.3s all ease;
  fill: var(--TextBlack);
}

.arrow:hover {
  background-color: var(--MainColor);
}

.arrow:hover svg {
  fill: white;
}

.wrapper {
  width: 70%;
  position: relative;
}

.testimonial {
  width: 100%;
}

.bullets {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.bullets .bullet {
  padding: 3px 6px 3px 2px;
}

.bullets .bullet span {
  display: block;
  width: 7px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #d6d6d6;
  transition: 0.2s;
  cursor: pointer;
}

.bullets .bullet.active span,
.bullets .bullet:hover span {
  background-color: var(--MainColor);
}

@media screen and (max-width: 991px) {
  .wrapper {
    width: 85%;
  }
}

@media screen and (max-width: 767px) {
  .arrow {
    display: none;
  }

  .wrapper {
    flex-grow: 1;
  }

  .bullets {
    margin-top: 40px;
  }
}

@media screen and (max-width:575px) {
  h3{
    margin-bottom: 22px;
  }

  .bullets {
    margin-top: 36px;
  }
}
</style>