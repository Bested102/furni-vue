<template>
  <div class="contact-box">
    <div class="icon">
      <font-awesome-icon :icon="['fas', icon]" />
    </div>
    <p>{{ info }}</p>
  </div>
</template>

<script>
export default {
  props: ['icon', 'info']
}
</script>

<style scoped>
@import "../../assets/base.css";

.contact-box{
  flex: 1 1 0;
  display: flex;
  align-items: center;
  gap: 20px;
  color: var(--TextGray);
}

.icon{
  margin-bottom: 24px;
  background-color: var(--MainColor);
  flex: 0 0 50px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  color:white;
  border-radius: 10px;
  font-size: 16px;
}

p{
  font-size: 14px;
  margin-bottom: 20px;
}

@media screen and (max-width:991px) {
  .contact-box{
    gap: 15px;
  }
}

@media screen and (max-width:575px) {
  p{
    margin-bottom: 0;
  }
  .icon{
    margin-bottom: 0;
  }
  .contact-box{
    text-align: center;
    flex-direction: column;
    min-width: 140px;
  }
}
</style>