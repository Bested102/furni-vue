<template>
  <div class="contacts">
      <ContactBox
        v-for="(c , i) in contacts" 
        :key="i"
        :icon="c.icon"
        :info="c.info"
      />
  </div>
</template>

<script>
import ContactBox from "./ContactBox.vue"
export default{
  components:{ ContactBox },
  data(){
    return{
      contacts:[
        {
          info:"43 Raymouth Balt, London 3910",
          icon:"location-dot"
        },
        {
          info:"info@domain.com",
          icon:"envelope"
        },
        {
          info:"+1 294 3925 3939",
          icon:"phone"
        }
      ]
    }
  },
}
</script>

<style scoped>

.contacts{
  display: flex;
  justify-content: space-between;
  margin-bottom: 42px;
  gap: 36px;
}

@media screen and (max-width:575px) {
  .contacts{
    flex-wrap: wrap;
    gap: 36px;
    margin-bottom: 28px;
  }
}
</style>