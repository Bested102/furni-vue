<template>
  <div class="filter">
    <div class="container">
      <div class="filter-wrapper-master">
        <transition name="fade">
          <span class="clear-all" @click="clearAll" v-if="!isMobile && isChanged">Clear All</span>
        </transition>
        <div class="filter-wrapper" ref="pcFilter">
          <input
            type="text"
            name="search"
            autocomplete="new-password"
            placeholder="Search for.."
            class="search"
            v-model="filter.keyWord"
          />
          <div class="color-filter" v-show="!isMobile || mobileFilter" ref="colorFilter">
            <label>
              <input type="checkbox" v-model="filter.color" name="color" value="white" />
              <span>White</span>
            </label>
            <label>
              <input type="checkbox" v-model="filter.color" name="color" value="gray" />
              <span>Gray</span>
            </label>
            <label>
              <input type="checkbox" v-model="filter.color" name="color" value="green" />
              <span>Green</span>
            </label>
          </div>
          <div class="price-filter" v-show="!isMobile || mobileFilter" ref="priceFilter">
            <div class="input">
              <input
                type="number"
                placeholder="Min"
                @paste.prevent
                @drop.prevent
                name="minValue"
                min="0"
                :max="highest - 1"
                v-model="filter.minValue"
                onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
              />
            </div>
            <div class="input">
              <input
                type="number"
                placeholder="Max"
                @paste.prevent
                @drop.prevent
                name="minValue"
                min="1"
                :max="highest"
                v-model="filter.maxValue"
                onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
              />
            </div>
          </div>
          <div class="filter-button" v-show="isMobile" @click="showFilter">
            <span>Filter</span>
          </div>
        </div>
      </div>
    </div>
    <transition name="show-filter">
      <div class="mobile-filter" ref="mobileFilter" v-show="mobileFilter">
        <div class="tools">
          <span class="clear-all" @click="clearAll">Clear All</span>
          <font-awesome-icon :icon="['fas', 'xmark']" @click="hideFilter" class="close-btn" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: {
        keyWord: "",
        color: [],
        minValue: "",
        maxValue: "",
      },
      highest: 9999,
      timer: null,
      isMobile: false,
      mobileFilter: false
    }
  },
  computed: {
    isChanged() {
      let condition = this.filter.minValue === "" && this.filter.maxValue === ""
      console.log(condition)
      return this.filter.color.length || !condition
    }
  },
  mounted() {
    setTimeout(() => {
      this.$emit('filterUpdate', this.filter)
    }, 400);
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  updated() {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.$emit('filterUpdate', this.filter)
    }, 400);
  },
  methods: {
    showFilter() {
      this.mobileFilter = true
      document.body.classList.add("overlay")
      let priceFilter = this.$refs.priceFilter
      let colorFilter = this.$refs.colorFilter
      let mobileFilter = this.$refs.mobileFilter
      mobileFilter.append(colorFilter, priceFilter)
    },
    hideFilter() {
      this.mobileFilter = false
      document.body.classList.remove("overlay")
      let priceFilter = this.$refs.priceFilter
      let colorFilter = this.$refs.colorFilter
      let pcFilter = this.$refs.pcFilter
      pcFilter.append(colorFilter, priceFilter)
    },
    clearAll() {
      this.filter.minValue = ""
      this.filter.maxValue = ""
      this.filter.color = []
      this.hideFilter()
    },
    checkScreen() {
      this.window = window.innerWidth;
      if (this.window <= 767) {
        this.isMobile = true
        return;
      }
      this.isMobile = false
      this.hideFilter()
    }
  }
  ,
  watch: {
    'filter.minValue': function (n, o) {
      if (n > 9998) {
        this.filter.minValue = o
      }
    },
    'filter.maxValue': function (n, o) {
      if (n > 9999) {
        this.filter.maxValue = o
      }
    }
  }
}
</script>

<style scoped>
@import "../assets/base.css";

.container {
  margin-top: 120px;
}

.filter {
  user-select: none;
}

.filter-wrapper-master {
  position: relative;
  background-color: white;
  max-width: 860px;
  border-radius: 400px;
  margin-inline: auto;
}

.filter-wrapper {
  border: 1px solid #ced4da;
  border-radius: 400px;
  display: flex;
  overflow: hidden;
  padding-inline: 20px;
}

.filter-wrapper > * {
  flex: 1 1 0;
}

.filter-wrapper-master .clear-all {
  position: absolute;
  right: 25px;
  top: -20px;
  font-size: 14px;
  font-weight: 600;
  color: hsla(0, 0%, 18%, 0.8);
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.25s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.search {
  border: none;
  outline: none;
  padding-block: 24px;
  font-size: 16px;
  color: var(--TextGray);
  font-weight: 500;
  min-width: 80px;
}

.color-filter {
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-inline: 1px solid #ced4da;
  gap: 20px;
  position: relative;
}

.color-filter label {
  cursor: pointer;
}

.color-filter label input {
  appearance: none;
  width: 12px;
  aspect-ratio: 1;
  border: 1px solid var(--TextGray);
  border-radius: 50%;
  cursor: pointer;
  margin-right: 5px;
  transition: 0.2s ease;
}

.color-filter label input:checked {
  border-color: var(--MainColor);
  background-color: var(--MainColor);
}

.price-filter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.price-filter input {
  -moz-appearance: textfield;
  outline: none;
  border: none;
  max-width: 100%;
  font-size: 14px;
}

.price-filter .input {
  width: 60px;
  height: 33px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #505050ce;
  padding: 5px;
  padding-left: 20px;
  position: relative;
  font-size: 15px;
  box-shadow: 1px 1px 2px #50505042, 0px 1px 2px #50505042 inset;
  color: var(--TextBlack);
  font-weight: 500;
}

.price-filter .input::before {
  content: "$";
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-55%);
  font-weight: 700;
  color: var(--MainColor);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.filter-button {
  flex: unset;
  align-self: center;
  background-color: var(--MainColor);
  color: white;
  font-weight: 500;
  text-align: center;
  padding: 5px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
}

.mobile-filter {
  width: 100%;
  height: clamp(200px, 55%, 500px);
  background-color: white;
  position: fixed;
  z-index: 999;
  left: 0;
  bottom: -50px;
  border-radius: 20px;
  padding: 20px;
}

.mobile-filter .tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ced4da;
}

.mobile-filter .tools .clear-all {
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
}

.mobile-filter .close-btn {
  color: var(--TextBlack);
  font-size: 24px;
  cursor: pointer;
}

.mobile-filter .color-filter {
  padding: 0;
  border: none;
  justify-content: flex-start;
  font-size: 18px;
}

.mobile-filter .price-filter {
  padding: 0;
  margin-top: 20px;
  justify-content: flex-start;
}

.mobile-filter .price-filter .input {
  width: clamp(60px, 160px, 45%);
}

.show-filter-enter-active,
.show-filter-leave-active {
  transition: 0.45s ease;
}

.show-filter-enter-from,
.show-filter-leave-to {
  transform: translateY(100%);
}

@media screen and (max-width: 991px) {
  .color-filter {
    padding-inline: 15px;
    gap: 15px;
  }
  .price-filter {
    padding-inline: 15px 0;
  }
  .filter-wrapper {
    padding-inline: 25px;
  }
}

@media screen and (max-width: 767px) {
  .filter-wrapper {
    padding-inline: 20px;
  }
  .search {
    padding-block: 20px;
  }
}

@media screen and (max-width: 575px) {
  .mobile-filter .price-filter,
  .mobile-filter .color-filter {
    justify-content: center;
  }
}
</style>