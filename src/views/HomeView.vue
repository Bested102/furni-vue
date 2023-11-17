<template>
  <div class="home-view">
    <MainLanding heading="Modern Interior Design Studio" />
    <SamplesCrafted />
    <ChooseUs />
    <HelpMake />
    <ChairsInfo />
    <TestimonialsComponent />
    <RecentBlogs />
  </div>
</template>

<script>
import MainLanding from "../components/MainLanding.vue";
import ChooseUs from "../components/ChooseUs.vue";
import SamplesCrafted from "../components/SamplesCrafted.vue";
import HelpMake from "../components/HomeComponents/HelpMake.vue";
import ChairsInfo from "../components/HomeComponents/ChairsInfo.vue";
import TestimonialsComponent from "../components/Testimonials/TestimonialsComponent.vue";
import RecentBlogs from "../components/HomeComponents/RecentBlogs.vue";

export default {
  components: { MainLanding, ChooseUs, SamplesCrafted, HelpMake, ChairsInfo, TestimonialsComponent, RecentBlogs }
}
</script>
