<template>
  <div class="product">
    <img :src="product.img" class="product-img" />
    <span>{{ product.name }}</span>
    <h4>${{ product.price }}.00</h4>
    <div class="add">
      <img src="https://themewagon.github.io/furni/images/cross.svg" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-bottom: 40px;
}

.product-img {
  max-width: 100%;
  margin-bottom: 30px;
  transition: 0.3s;
}

span {
  font-weight: 600;
}

h4 {
  margin-top: 10px;
  font-weight: 800;
  font-size: 18px;
}

.add {
  background-color: var(--TextBlack);
  color: white;
  border-radius: 50%;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  width: 35px;
  position: absolute;
  opacity: 0;
  bottom: 0;
  transition: 0.3s ease;
}

.product::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #dce5e4;
  width: 100%;
  height: 0;
  z-index: -1;
  border-radius: 10px;
  transition: 0.3s ease;
}

.product:hover::before {
  height: 70%;
}

.product:hover .product-img {
  transform: translateY(-30px);
}

.product:hover .add {
  opacity: 1;
  transform: translateY(50%);
}

@media screen and (max-width:767px) {
  .product{
    max-width: 350px;
    margin: auto;
    padding-inline: 15px;
  }
}
</style>