<template>
  <div class="services-view">
    <MainLanding heading="Services" />
  <div class="services">
    <div class="container">
      <template v-for="n in 2" :key="n">
        <ServiceBox 
          v-for="(s, i) in services" 
          :heading="s.title" 
          :imgSrc="s.img" 
          :key="i"
        />
    </template>
    </div>
  </div>
  <SamplesCrafted />
  <TestimonialsComponent />
  </div>
</template>

<script>
import ServicesData from "../assets/data/services.json"
import MainLanding from "../components/MainLanding.vue";
import TestimonialsComponent from "../components/Testimonials/TestimonialsComponent.vue";
import SamplesCrafted from "../components/SamplesCrafted.vue";
import ServiceBox from "../components/ServiceBox.vue";

export default {
  components: { MainLanding, TestimonialsComponent, SamplesCrafted, ServiceBox },
  data() {
    return {
      services: []
    }
  },
  mounted() {
    this.services = ServicesData
  }
}
</script>

<style scoped>
  .services .container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 40px 25px;
  }
</style>