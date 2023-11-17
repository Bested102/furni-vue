<template>
  <footer>
    <div class="container">
      <div class="head">
        <div class="sub">
          <h3>
            <img src="https://themewagon.github.io/furni/images/envelope-outline.svg" />
            Subscribe to Newsletter
          </h3>
          <div class="form">
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your email" />
            <div class="send">
              <font-awesome-icon icon="fa-solid fa-paper-plane" />
            </div>
          </div>
        </div>
        <img src="https://themewagon.github.io/furni/images/sofa.png" class="img" />
      </div>
      <div class="main">
        <div class="credits">
          <h3>Furni.</h3>
          <p>
            Donec facilisis quam ut purus rutrum lobortis.
            Donec vitae odio quis nisl dapibus malesuada.
            Nullam ac aliquet velit. Aliquam vulputate velit
            imperdiet dolor tempor tristique. Pellentesque habitant
          </p>
          <div class="media">
            <span>
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </span>
            <span>
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </span>
            <span>
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </span>
            <span>
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </span>
          </div>
        </div>
        <div class="lists">
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Support</li>
            <li>Knowledge base</li>
            <li>Live chat</li>
          </ul>
          <ul>
            <li>Jobs</li>
            <li>Our team</li>
            <li>Leadership</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li>Nordic Chair</li>
            <li>Kruzo Aero</li>
            <li>Ergonomic Chair</li>
          </ul>
        </div>
      </div>
      <div class="copyrights">
        <div class="copyright">
          Copyright ©{{ year }}. All Rights Reserved. — Designed with love by
          <a
            href="https://untree.co/"
            target="_blank"
          >Untree.co</a>
          <p>
            This is a site copy by
            <a href="https://bested102.github.io/" target="_blank">Omar.Dev</a> —
            <a href="https://themewagon.github.io/furni/" target="_blank">Original Template</a>
          </p>
        </div>
        <p class="terms">
            <a>Terms & Conditions</a>
            <a>Privacy Policy</a>
          </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
@import "../assets/base.css";

footer {
  background-color: white;
  margin-top: 180px;
}

.container {
  position: relative;
  padding-bottom: 80px;
}

.head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  transform: translateY(-130px);
}

.sub {
  padding-bottom: 30px;
}

h3 {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--MainColor);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
}

.form {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

input {
  padding: 6px 12px;
  border: 1px solid #ced4da;
  border-radius: 10px;
  height: 50px;
  aspect-ratio: 5.45;
  transition: 0.25s ease;
}

input:focus {
  outline: none;
  border-color: var(--MainColor);
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
}

.send {
  background-color: var(--MainColor);
  display: grid;
  place-items: center;
  color: white;
  padding: 12px 30px;
  height: 50px;
  transition: 0.2s;
  cursor: pointer;
  border-radius: 10px;
}

.send:hover {
  background-color: #314d43;
}

.img {
  max-width: 380px;
}

.credits {
  width: 33%;
  padding-right: 45px;
}

.credits h3 {
  font-size: 32px;
  font-weight: 500;
  color: var(--MainColor);
  margin-bottom: 22px;
}

.credits p {
  font-weight: 400;
  line-height: 28px;
  color: var(--TextGray);
  font-size: 14px;
  margin-bottom: 24px;
}

.main {
  align-items: center;
  display: flex;
  margin-top: -50px;
  margin-bottom: 40px;
}

.lists {
  flex-grow: 1;
  justify-content: space-between;
  display: flex;
  gap: 50px;
}

.lists ul {
  list-style: none;
}

.lists li {
  height: 28px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  line-height: 28px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s ease;
}

.lists li:hover,
.copyrights a:hover {
  color: rgba(47, 47, 47, 0.5);
}

.media span {
  display: inline-grid;
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  place-items: center;
  background: #dce5e4;
  color: var(--MainColor);
  transition: 0.3s all ease;
  font-size: 15px;
  margin-right: 8px;
  cursor: pointer;
}

.media span:hover {
  color: white;
  background: var(--MainColor);
}

.copyrights {
  font-size: 14px;
  color: var(--TextGray);
  padding-top: 24px;
  border-top: 1px solid #dce5e4;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.copyrights .copyright p{
  margin-top: 8px;
}

.copyrights a {
  transition: 0.3s ease;
  color: var(--TextBlack);
  cursor: pointer;
}

.copyrights .terms {
  display: flex;
  align-items: center;
  gap: 20px;
}

@media screen and (max-width: 1199px) {
  .img {
    max-width: 350px;
  }
  .sub {
    padding-bottom: 0;
  }
  .head {
    transform: translateY(-100px);
  }
}

@media screen and (max-width: 991px) {
  .head {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
  .img {
    max-width: 380px;
    margin-left: auto;
    margin-bottom: -20px;
  }
  .main {
    flex-direction: column;
    gap: 60px;
  }
  .credits {
    padding: 0;
    width: auto;
  }
  .lists {
    width: 100%;
    padding-right: 20px;
  }
  .copyrights{
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media screen and (max-width:767px) {
  .lists{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}
</style>