<template>
  <header :class="{showMenu:showMenu}">
    <div class="container">
      <h2>
        <router-link :to="{ name: 'Home' }">Furni</router-link>
      </h2>
      <font-awesome-icon class="toggle-nav" :icon="['fas', 'bars']" v-if="isMobile" @click="showMenu = !showMenu"/>
      <div class="nav-wrap" :class="{ navPc: !isMobile }">
        <ul class="nav">
          <li v-for="(r,i) in routes" :key="i">
            <router-link @click="routerClick" :to="{ name: r.name }">{{ r.title }}</router-link>
          </li>
        </ul>
        <div class="buttons">
          <img src="https://themewagon.github.io/furni/images/user.svg" />
          <img src="https://themewagon.github.io/furni/images/cart.svg" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          title: "Home",
          name: "Home"
        },
        {
          title: "Shop",
          name: "Shop"
        },
        {
          title: "About us",
          name: "AboutUs"
        },
        {
          title: "Services",
          name: "Services"
        },
        {
          title: "Blog",
          name: "Blog"
        },
        {
          title: "Contact us",
          name: "ContactUs"
        }
      ],
      isMobile: false,
      showMenu:false,
      window: null,
    }
  },
  methods: {
    checkScreen() {
      this.window = window.innerWidth;
      if (this.window <= 767) {
        this.isMobile = true
        return;
      }
      this.isMobile = false
    },
    routerClick(){
      this.showMenu = false
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  }
}
</script>

<style scoped>
header {
  padding-block: 20px;
  background-color: var(--MainColor);
  color: white;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h2 {
  font-size: 32px;
  font-weight: 600;
}

h2 a::after {
  content: ".";
  opacity: 0.4;
}

.nav-wrap {
  display: flex;
  user-select: none;
}

.nav {
  display: flex;
  margin-inline: auto 60px;
  list-style: none;
  align-items: center;
  gap: 40px;
  font-size: 14px;
  font-weight: 500;
}

.nav li {
  position: relative;
}

.nav li a {
  opacity: 0.5;
  cursor: pointer;
  transition: 0.2s;
  padding: 5px 5px 10px;
}

.nav li::before {
  content: "";
  position: absolute;
  background-color: var(--Secondary);
  width: 0;
  left: 5px;
  height: 5px;
  bottom: -13px;
  transition: 0.2s;
}

.nav li:hover a,
.nav a.router-link-exact-active {
  opacity: 1;
}

.nav li:has(.router-link-exact-active)::before,
.nav li:hover::before {
  width: calc(100% - 10px);
}

.buttons {
  display: flex;
  align-items: center;
  gap: 25px;
}

.buttons img {
  cursor: pointer;
}

@media (max-width: 991px) {
  .nav {
    gap: 20px;
    margin-inline: auto 35px;
  }

  .buttons {
    gap: 20px;
  }
}

.toggle-nav {
  color: rgb(232, 232, 232);
  font-size: 26px;
  opacity: 0.5;
  cursor: pointer;
}

@media (max-width: 767px) {
  header {
    max-height: 60px;
    overflow: hidden;
    transition: max-height .4s ease-in-out;
    padding-block: 10px;
  }
  header.showMenu{
    max-height: 400px;
  }
  .container {
    flex-wrap: wrap;
  }
  .nav-wrap {
    width: 100%;
    margin-top: 10px;
    display: block;
  }
  .nav {
    margin: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 20px;
  }
  .nav li::before {
    display: none;
  }
  .nav li {
    width: 100%;
  }
  .nav li a {
    padding: 10px 0;
    display: block;
  }
}
</style>