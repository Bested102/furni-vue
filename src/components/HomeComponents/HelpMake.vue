<template>
  <div class="help">
    <div class="container">
      <div class="img-container">
        <img src="https://themewagon.github.io/furni/images/img-grid-1.jpg" />
        <img src="https://themewagon.github.io/furni/images/img-grid-2.jpg" />
        <img src="https://themewagon.github.io/furni/images/img-grid-3.jpg" />
      </div>
      <div class="info">
        <h3 class="section-title">We Help You Make Modern Interior Design</h3>
        <p class="section-p">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada
        </p>
        <ul>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
        </ul>
        <span class="black-btn">Explore</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/base.css";

.help .container {
  display: flex;
  gap: 40px;
  margin-block: 160px 80px;
}

.help .img-container {
  position: relative;
  display: grid;
  grid-template-columns: repeat(29, 1fr);
}

.help .img-container::before {
  content: url(https://themewagon.github.io/furni/images/dots-green.svg);
  position: absolute;
  z-index: -1;
  top: -85px;
  left: -103px;
}

.help .img-container img:first-child {
  grid-area: 1/1 / span 29 / span 19;
}

.help .img-container img:nth-child(2) {
  grid-area: 1/21 / span 5 / span 29;
}

.help .img-container img:nth-child(3) {
  grid-area: 7/ 15 / span 29 / span 19;
}

.help .info {
  flex: 0 0 auto;
  width: 39%;
}

.help .img-container img {
  max-width: 100%;
  border-radius: 20px;
}

.help .info ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  line-height: 1.5;
  row-gap: 20px;
  list-style: none;
  margin-bottom: 30px;
}

.help .info h3 {
  margin-bottom: 20px;
}

.help .info li {
  position: relative;
  padding-left: 20px;
  font-weight: 400;
  color: var(--TextGray);
  font-size: 14px;
}

.help .info li::before {
  content: "";
  width: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #3b5d50;
  position: absolute;
  left: 0;
  top: 8px;
}

@media screen and (max-width:991px) {
  .help .container{
    flex-direction: column;
  }
  .help .info{
    width: auto;
  }
}

@media screen and (max-width:767px) {
  .help .info ul{
    gap: 20px;
  }
}

@media screen and (max-width:575px){
  .help .info ul{
    column-gap: 15px;
  }
}

</style>