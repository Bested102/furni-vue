<template>
  <div class="service">
    <div class="img">
      <img :src="imgSrc">
    </div>
    <h4>
        {{heading}}
      </h4>
      <p>
        Donec vitae odio quis nisl dapibus malesuada.
        Nullam ac aliquet velit. Aliquam vulputate.
      </p>
  </div>
</template>

<script>
export default{
  props:['heading', 'imgSrc']
}
</script>

<style scoped>
  @import '../assets/base.css';

  p{
    font-size: 14px;
    line-height: 22px;
    color: var(--TextGray);
  }

  h4{
    font-size: 14px;
    font-weight: 500;
    margin-block: 12px 8px;
  }

  .img{
    position: relative;
    width: fit-content;
  }

  .img::after{
    content: "";
    position: absolute;
    background-color: rgba(59, 93, 80, 0.2);
    width: 33px;
    aspect-ratio: 1;
    border-radius: 50%;
    right: -8px;
    bottom: 4px;
  }

  @media screen and (max-width:575px) {
    .img{
      margin: auto;
    }
    .service{
      text-align: center  ;
    }
  }
</style>