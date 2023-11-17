<template>
  <div class="contact-view">
    <MainLanding heading="Contact" />
  <div class="container">
    <ContactInfo />
  <ContactForm />
  </div>
  </div>
</template>

<script>
import MainLanding from "../components/MainLanding.vue";
import ContactInfo from "../components/Contacts/ContactInfo.vue";
import ContactForm from "../components/Contacts/ContactForm.vue";

export default {
  components: { MainLanding, ContactInfo, ContactForm }
}
</script>

<style scoped>

.container {
  width: clamp(650px, 75%, 880px);
}

@media screen and (max-width:767px){
  .container{
    width: 100%;
  }
}
</style>