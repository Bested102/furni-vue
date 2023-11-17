<template>
  <div class="contact-form">
    <div class="form">
      <div class="name-inputs">
        <div class="name">
          <label for="firstName">First Name</label>
          <input type="text" name="firstName" />
        </div>
        <div class="name">
          <label for="lastName">Last Name</label>
          <input type="text" name="lastName" />
        </div>
      </div>
      <div class="email">
        <label for="emailAddress">Email Address</label>
        <input type="email" name="emailAddress" />
      </div>
      <div class="message">
        <label for="messageInput">Message</label>
        <textarea name="messageInput"></textarea>
      </div>
    </div>
    <div class="black-btn">Send Message</div>
  </div>
</template>

<style scoped>
@import "../../assets/base.css";

.form {
  margin-bottom: 40px;
}

input,
textarea {
  padding: 6px 12px;
  margin-bottom: 5px;
  border: 1px solid #ced4da;
  border-radius: 10px;
  height: 50px;
  transition: 0.25s ease;
  caret-color: var(--MainColor);
  width: 100%;
  font-size: 16px;
  display: block;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--MainColor);
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 20%);
}

label {
  font-size: 14px;
  line-height: 28px;
}

.name-inputs {
  gap: 24px;
  display: flex;
}

.name-inputs .name {
  flex-grow: 1;
}

.message textarea {
  resize: none;
  height: 130px;
  padding-block: 10px;
}

@media screen and (max-width:575px) {
  .name-inputs{
    display: block;
  }
  .form{
    margin-bottom: 25px;
  }
}
</style>
