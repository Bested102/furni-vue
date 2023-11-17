<template>
  <div class="blog-view">
    <MainLanding heading="Blog" />
    <div class="blogs">
      <div class="container">
        <template v-for="n in 3" :key="n">
          <BlogItem v-for="(b,i) in Blogs" :key="i" :blog="b" />
        </template>
      </div>
    </div>
    <TestimonialsComponent />
  </div>
</template>

<script>
import BlogsData from "../assets/data/blogs.json"
import MainLanding from "../components/MainLanding.vue";
import TestimonialsComponent from "../components/Testimonials/TestimonialsComponent.vue";
import BlogItem from "../components/BlogItem.vue";

export default {
  components: { MainLanding, TestimonialsComponent, BlogItem },
  data() {
    return {
      Blogs: []
    }
  },
  mounted() {
    this.Blogs = BlogsData
  }
}
</script>

<style scoped>
.blogs .container {
  display: grid;
  gap: 48px 24px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
}
</style>