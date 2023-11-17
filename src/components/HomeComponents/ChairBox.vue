<template>
  <div class="box" @focusout="showLess" tabindex="0">
    <div class="img">
      <img :src="p.img" />
    </div>
    <div class="info">
      <h4>{{ p.name }}</h4>
      <p ref="text">
        Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus males.
        Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
      </p>
      <span class="more" @click="show = !show">{{ readText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['p'],
  data() {
    return {
      show: false,
      readText: "Show More"
    }
  },
  watch: {
    show(n) {
      if (n) {
        this.showMore()
      } else {
        this.showLess()
      }
    }
  },
  methods: {
    showMore() {
      this.$refs.text.classList.add("showing")
      this.readText = "Show Less"
    },
    showLess() {
      this.$refs.text.classList.remove("showing")
      this.readText = "Show More"
    }
  }
}
</script>

<style scoped>
@import "../../assets/base.css";

.box {
  display: flex;
  gap: 10px;
  width: clamp(260px, 30%, 100%);
  align-items: flex-start;
}

.info {
  padding-top: 15px;
}

h4 {
  font-size: 14px;
  font-weight: 700;
}

p {
  text-overflow: ellipsis;
  line-height: 2.75ex;
  margin-bottom: 10px;
  font-size: 14px;
  color: var(--TextGray);
  margin-block: 8px 6px;
  transition: max-height 0.25s ease-in;
  overflow: hidden;
  max-height: 300px;
}

p:not(.showing) {
  max-height: 5.4ex;
  transition: max-height 0.25s ease-out;
}

.more {
  padding-block: 5px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s;
}

.more:hover {
  color: rgba(47, 47, 47, 0.5);
}

.img {
  position: relative;
  flex: 0 0 120px;
}

.img::before {
  content: "";
  width: 85%;
  aspect-ratio: 1;
  background-color: var(--TextGray);
  position: absolute;
  z-index: -1;
  background-color: #dce5e4;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

img {
  max-width: 100%;
}

@media screen and (max-width: 991px) {
  .box {
    width: clamp(260px, 45%, 100%);
  }
}

@media screen and (max-width:767px) {
  .box{
    width: 100%;
  }
}
</style>