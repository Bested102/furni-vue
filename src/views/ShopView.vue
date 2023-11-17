<template>
  <div class="shop-view">
    <div class="landing">
    <div class="container">
      <h1>Shop</h1>
    </div>
  </div>
  <ProductFilter @filterUpdate="updateFilter" />
  <div class="shop">
    <transition-group tag="div" class="container" name="products" appear mode="out-in">
      <div class="wrapper" v-for="p in filteredProducts" :key="p.id">
        <ProductItem :product="p" :style="{ width: productWidth + 'px' }"/>
      </div>
    </transition-group>
  </div>
  </div>
</template>

<script>
import ProductData from "../assets/data/products.json"
import ProductItem from "../components/ProductItem.vue";
import ProductFilter from "../components/ProductFilter.vue";

export default {
  components: { ProductItem, ProductFilter },
  data() {
    return {
      Products: [],
      filteredProducts: [],
      filter: {},
      productWidth: 260
    }
  },
  mounted() {
    this.Products = ProductData
    this.filteredProducts = this.Products

    window.addEventListener('resize', this.setProductWidth);
    setTimeout(()=>{
      this.setProductWidth()
    }, 150);
  },
  methods: {
    updateFilter(newFilter) {
      this.filter = newFilter
      this.applyFilter(newFilter)
    },
    applyFilter(filter) {
      let productsOne = this.applySearch(this.Products ,filter.keyWord)
      let productsTwo = this.applyColor(productsOne, filter.color)
      let productsFinal = this.applyPrice(productsTwo, [filter.minValue, filter.maxValue])
      this.filteredProducts = productsFinal
    },
    applySearch(products,keyWord){
      let regex = new RegExp(keyWord.trim(), 'i')
      let newProducts = products.filter((e) => {
        return regex.test(e.name)
      })
      return newProducts
    },
    applyColor(products, color){
      let newProducts = products.filter((e)=>{
        return e.color === color || color === "no-color"
      })
      return newProducts
    },
    applyPrice(products, range){
      let minvalue = range[0] === "" ? 0 : range[0]
      let maxvalue = range[1] === "" ? 9999 : range[1]
      let priceRange = [minvalue, maxvalue]
      let newProducts = products.filter(e =>{
        return e.price >= +priceRange[0] && e.price <= +priceRange[1]
      })
      return newProducts
    },
    setProductWidth() {
      let el = document.querySelector(".shop .wrapper")
      this.productWidth = el.offsetWidth
    }
  }
}
</script>

<style scoped>
@import "../assets/base.css";

.landing {
  background-color: var(--MainColor);
}

.landing .container {
  padding-block: 100px 130px;
}

.landing h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
  color: white;
}

.shop .container {
  padding-block: 100px 0;
  display: grid;
  gap: 50px 26px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.products-enter-from,
.products-leave-to {
  opacity: 0;
}

.products-enter-active,
.products-leave-active {
  transition: opacity 0.3s ease;
}

.products-leave-active{
  position: absolute;
}

.products-move {
  transition: all .3s ,opacity 0s;
}
</style>