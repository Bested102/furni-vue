<template>
  <div class="member">
    <img :src="Member.img" />
    <div class="info">
      <h4>{{ Member.name }}</h4>
      <p>{{ Member.role }}</p>
    </div>
    <p class="description">{{ Member.about }}</p>
    <span>Learn More</span>
  </div>
</template>

<script>
export default {
  props: ['Member']
}
</script>

<style scoped>
@import "../../assets/base.css";

img {
  max-width: 100%;
  margin-bottom: 48px;
}

h4 {
  font-size: 28px;
  text-decoration: underline;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  margin-bottom: 10px;
}

h4:hover {
  text-decoration: none;
}

.info {
  margin-bottom: 24px;
}

.info p {
  color: var(--TextGray);
  font-size: 14px;
}

.description {
  line-height: 26px;
  color: var(--TextGray);
  font-size: 14px;
  margin-bottom: 16px;
}

span{
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
}

span:hover{
  text-decoration: none;
}

@media screen and (max-width:767px) {
  h4{
    font-size: calc(1.48rem + .8vw - 3px);;
  }

  img {
  max-width: 100%;
  margin-bottom: 24px;
}
.info{
  margin-bottom: 16px;
}
}
</style>