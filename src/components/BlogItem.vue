<template>
  <div class="blog">
    <img :src="blog.img" alt />
    <div class="info">
      <h4>{{ blog.title }}</h4>
      <p>
        <span class="small">by</span>
        <span class="big">{{ blog.author }}</span>
        <span class="small">on</span>
        <span class="big">{{ blog.date }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blog']
}
</script>

<style scoped>
@import "../assets/base.css";

img {
  max-width: 100%;
  border-radius: 20px;
  transition: 0.3s all ease;
  cursor: pointer;
}

.info {
  padding: 15px 0 5px 15px;
}

h4 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  cursor: pointer;
}

p {
  font-size: 14px;
}

.big {
  font-weight: 600;
}

.small {
  font-weight: 400;
  color: var(--TextGray);
}

p span:not(:last-child){
  margin-right: 3px;
}

.blog:hover img{
  opacity: .8;
}

@media screen and (max-width:575px) {
  .info {
  padding: 10px 10px 5px;
}
h4{
  font-size: 15px;
}

p {
  font-size: 13px;
}
}
</style>