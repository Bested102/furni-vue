<template>
  <Transition :name="transitionEffect" mode="out-in">
    <div class="testimonial" v-if="currant">
      <p class="comment">{{ testimonial.comment }}</p>
      <div class="user">
        <img :src="testimonial.user.img" alt />
        <div class="name">{{ testimonial.user.name }}</div>
        <p class="info">{{ testimonial.user.info }}</p>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: ['testimonial', 'currant', 'direction'],
  computed: {
    transitionEffect() {
      if (this.direction == "right") {
        return "slide-out"
      } else {
        return "slide-in"
      }
    }
  },
  mounted() {
    this.$emit("mounted")
  }
}
</script>

<style scoped>
@import "../../assets/base.css";

.comment {
  line-height: 32px;
  font-size: 18px;
  margin: 0 auto 30px;
  color: var(--TextGray);
  user-select: auto;
}

.user img {
  max-width: 80px;
  margin-bottom: 20px;
  border-radius: 50%;
  user-select: none;
}

.user .name {
  font-size: 14px;
  font-weight: 700;
}

.user .info {
  margin-top: 5px;
  font-size: 14px;
  color: var(--TextGray);
}

.slide-out-enter-active,
.slide-out-leave-active,
.slide-in-enter-active,
.slide-in-leave-active {
  position: absolute;
  transition: 1s ease;
}

.slide-out-enter-from,
.slide-in-leave-to {
  transform: translateX(150%);
}

.slide-out-leave-to,
.slide-in-enter-from {
  transform: translateX(-150%);
}

@media screen and (max-width: 767px) {
  .comment {
    font-size: 16px;
    line-height: 30px;
  }
}

@media screen and (max-width: 575px) {
  .comment {
    font-size: 15px;
    line-height: 26px;
  }
  
  .slide-out-enter-active,
  .slide-out-leave-active,
  .slide-in-enter-active,
  .slide-in-leave-active {
    transition: 0.75s ease;
  }
}
</style>