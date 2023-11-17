<template>
  <div class="choose">
    <div class="container">
      <div class="info">
        <h3 class="section-title">Why Choose Us</h3>
        <p class="section-p">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <div class="services">
          <ServiceBox
            imgSrc="https://themewagon.github.io/furni/images/truck.svg"
            heading="Fast & Free Shipping"
          />
          <ServiceBox
            imgSrc="https://themewagon.github.io/furni/images/bag.svg"
            heading="Easy to Shop"
          />
          <ServiceBox
            imgSrc="https://themewagon.github.io/furni/images/support.svg"
            heading="24/7 Support"
          />
          <ServiceBox
            imgSrc="https://themewagon.github.io/furni/images/return.svg"
            heading="Hassle Free Returns"
          />
        </div>
      </div>
      <div class="img-wrap">
        <img src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceBox from "./ServiceBox.vue";

export default {
  components: { ServiceBox }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 160px;
}

.info {
  width: 50%;
}

h3 {
  margin-bottom: 10px;
}

.services {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 16px;
}

.img-wrap {
  position: relative;
  width: 40%;
}

.img-wrap::before {
  content: url(https://themewagon.github.io/furni/images/dots-yellow.svg);
  position: absolute;
  z-index: -1;
  top: -80px;
  left: -102px;
}

.img-wrap img {
  max-width: 100%;
  border-radius: 20px;
}

@media screen and (max-width:991px){
  .container{
    display: block;
  }
  .info{
    width: auto;
    margin-bottom: 75px;
  }
  .img-wrap{
    width: auto;
    margin:auto;
  }
}

@media screen and (max-width:575px) {
  .info{
    text-align: center;
  }
  .services{
    grid-template-columns: 1fr;
  }
  .services .img{
    margin-inline: auto;
  }
}
</style>