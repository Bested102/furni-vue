<template>
  <div class="samples">
    <div class="container">
      <div class="explore">
        <h3 class="section-title">Crafted with excellent material.</h3>
        <p class="section-p">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <span class="black-btn">Explore</span>
      </div>
      <div class="products">
        <ProductItem
          v-for="p in Products.slice(0, 3)"
          :key="p.id"
          :product="p"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductData from '../assets/data/products.json'
import ProductItem from "./ProductItem.vue";

export default {
  data() {
    return {
      Products: []
    }
  },
  mounted() {
    this.Products = ProductData
  },
  components: { ProductItem }
}
</script>

<style scoped>
.samples .container {
  margin-top: 120px;
  display: flex;
  gap: 15px;
}

.samples .explore {
  flex-basis: 25%;
  flex-grow: 0;
  flex-shrink: 0;
}

.samples h3 {
  margin-bottom: 22px;
}

.samples .products {
  gap: 24px;
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@media screen and (max-width:991px) {
  .samples .container{
    flex-direction: column;
    gap: 50px;
  }
}

@media screen and (max-width:767px) {
  .samples .products{
    grid-template-columns: 1fr;
  }

  .samples h3{
    margin-bottom: 14px;
  } 

  .samples p{
    margin-bottom: 18px;
  }
}

@media screen and (max-width:575px){
  .explore{
    text-align: center;
  }
  .black-btn{
    margin-inline: auto;
  }
}
</style>