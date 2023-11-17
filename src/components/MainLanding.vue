<template>
  <div class="landing">
    <div class="container">
      <div class="info">
        <h1>{{ heading }}</h1>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <div class="buttons">
          <span class="shop">
            <router-link :to="{ name: 'Shop' }">
              Shop Now
            </router-link>
          </span>
          <span class="explore">Explore</span>
        </div>
      </div>
      <div class="img">
        <img src="https://themewagon.github.io/furni/images/couch.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['heading']
}
</script>

<style scoped>
@import "../assets/base.css";

.landing {
  position: relative;
  background-color: var(--MainColor);
  color: white;
  margin-bottom: 150px;
}

.container {
  padding-block: 100px;
}

.landing .info {
  max-width: 450px;
}

.landing h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
}

.landing p {
  opacity: 0.5;
  margin-bottom: 24px;
  line-height: 28px;
  font-size: 14px;
}

.landing .img {
  position: absolute;
  width: clamp(240px, 780px, 100vw);
  right: -50px;
  bottom: -140px;
}

.landing .img::after {
  content: url(https://themewagon.github.io/furni/images/dots-light.svg);
  position: absolute;
  right: 60px;
  width: 255px;
  height: 217px;
  top: 40px;
  z-index: 0;
}

.landing .img img {
  z-index: 1;
  position: relative;
  width: clamp(240px, 780px, 100%);
}

.landing .buttons * {
  height: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  display: inline-grid;
  place-items: center;
  border-radius: 30px;
  padding-inline: 32px;
}

.landing .shop {
  background-color: var(--Secondary);
  color: var(--TextBlack);
  margin-right: 10px;
  opacity: 0.94;
  transition: 0.2s;
}

.landing .shop:hover {
  opacity: 1;
}

.landing .explore {
  border: 2px solid rgb(255, 255, 255, 0.3);
  transition: 0.2s;
}

.landing .explore:hover {
  border-color: white;
}

@media (max-width: 1199px) {
  .landing .img {
    width: clamp(240px, 660px, 100vw);
    right: -65px;
    bottom: -90px;
  }
}

@media (max-width: 991px) {
  .landing .info {
    max-width: initial;
  }

  .container {
    padding-block: 50px;
  }
  .landing h1 {
    margin-bottom: 20px;
  }

  .landing .img {
    inset: 0;
    position: relative;
    width: 100%;
  }

  .landing .img img {
    width: 780px;
    transform: translateX(-100px);
  }

  .landing .img::after {
    right: -60px;
  }
}

@media screen and (max-width:767px) {
  .landing{
    overflow: hidden;
  }
  .container{
    padding-block: 30px;
  }
  .landing h1{
    font-size: 32px;
  }
}

@media screen and (max-width:575px){
  .landing .img img{
    width: 660px;
  }
  .container{
    padding-block: 20px;
  }

  .landing h1{
    font-size: 28px;
  }

  .landing .buttons *{
    padding-inline: 26px;
    font-size: 16px;
    height: 45px;
  }
}
</style>