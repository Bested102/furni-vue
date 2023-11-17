<template>
  <div class="team">
    <div class="container">
      <h3 class="section-title">Our Team</h3>
      <div class="main">
        <TeamMember v-for="(m , i) in Members" :key="i" :Member="m"/>
      </div>
    </div>
  </div>
</template>

<script>
import MembersData from "../../assets/data/team.json"
import TeamMember from "./TeamMember.vue"

  export default{
    components:{ TeamMember },
    data(){
      return{
        Members:[]
      }
    },
    mounted(){
      this.Members = MembersData
    }
  }
</script>

<style scoped>
.container {
  margin-top: 140px;
}

h3 {
  text-align: center;
  margin-bottom: 48px;
}

.main{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
  gap: 24px;
}
</style>