<template>
  <div class="about-view">
    <MainLanding heading="About Us" />
    <ChooseUs />
    <TeamMembers />
    <TestimonialsComponent />
  </div>
</template>

<script>
import MainLanding from "../components/MainLanding.vue";
import ChooseUs from "../components/ChooseUs.vue";
import TestimonialsComponent from "../components/Testimonials/TestimonialsComponent.vue";
import TeamMembers from "../components/Team/OurTeam.vue";

export default {
  components: { MainLanding, ChooseUs, TestimonialsComponent, TeamMembers }
}
</script>