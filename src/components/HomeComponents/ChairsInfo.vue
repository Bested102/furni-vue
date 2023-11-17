<template>
  <div class="chairInfo">
    <div class="container">
      <ChairBox v-for="e in Products.slice(0, 3)" :key="e.id" :p="e" />
    </div>
  </div>
</template>

<script>
import ProductsData from "../../assets/data/products.json"
import ChairBox from "./ChairBox.vue"

export default {
  data() {
    return {
      Products: []
    };
  },
  mounted() {
    this.Products = ProductsData;
  },
  components: { ChairBox }
}
</script>

<style scoped> 
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  gap: 25px;
  flex-wrap: wrap;
}
</style>