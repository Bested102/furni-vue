<template>
  <div class="recent-blogs">
    <div class="container">
      <div class="header">
        <h3 class="section-title">Recent Blog</h3>
        <router-link :to="{ name: 'Blog' }">View All Posts</router-link>
      </div>
      <div class="main">
        <BlogItem v-for="(b , i) in Blogs" :key="i" :blog="b" />
      </div>
    </div>
  </div>
</template>

<script>
import BlogData from "../../assets/data/blogs.json"
import BlogItem from "../BlogItem.vue"

export default {
  components: { BlogItem },
  data() {
    return {
      Blogs: []
    }
  },
  mounted() {
    this.Blogs = BlogData
  }
}
</script>

<style scoped>
.container {
  margin-top: 120px;
}

.main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 24px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
}

a {
  font-size: 14px;
  text-decoration: underline;
  font-weight: 600;
}

a:hover {
  text-decoration: none;
}
</style>