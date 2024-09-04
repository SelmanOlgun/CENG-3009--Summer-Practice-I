<template>
  <first-header></first-header>
  <div class="login-container">
    <div class="login-box">
      <div class="logo">
        <img src="../assets/login-pragmatic-logo.svg" alt="Logo" />
      </div>
      <div class="inputs">
        <input placeholder="Username" class="userName" type="text" />
        <input placeholder="Password" class="password" type="password" />
      </div>
      <div class="remember-forgot">
        <div class="remember">
          <input type="checkbox" id="checkbox1" class="custom-checkbox" />
          <label for="checkbox1">Remember Me</label>
        </div>
        <div class="forgot">
          <a @click="goToAnalyticalPage">Forgot Password?</a>
        </div>
      </div>
      <div class="login-button">
        <button @click="goToAnalyticalPage">LOGIN</button>
      </div>
      <div class="hr-and-or">
        <hr class="hr-line" />
        <p class="or-text">or</p>
      </div>
      <div class="login-google-facebook">
        <button class="btn-google" @click="goToAnalyticalPage">
          Log in with Google
        </button>
        <button class="btn-facebook" @click="goToAnalyticalPage">
          Log in with Facebook
        </button>
      </div>
      <div class="sign-in">
        <p>Don't have an account? <a @click="goToAnalyticalPage">Sign in</a></p>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import FirstHeader from "../components/FirstHeader.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    FirstHeader,
  },
  setup() {
    const router = useRouter();

    const goToAnalyticalPage = () => {
      router.push("/analytical");
    };

    return {
      goToAnalyticalPage,
    };
  },
});
</script>
  
  
  <style scoped>
body {
  background-color: rgb(74, 89, 106);
  margin: 0;
  font-family: Arial, sans-serif;
}

.login-container {
  background-color: rgb(74, 89, 106);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
}

.login-box {
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 280px;
  height: 528.984;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.logo img {
  width: 80px;
  height: 80px;
  margin-bottom: 70px;
}

.inputs {
  margin-bottom: 10px;
  width: 238px;
}

.inputs input {
  width: 100%;
  padding: 10px 20px;
  margin: 5px 0;
  border: 1px solid rgb(74, 89, 106);
  border-radius: 5px;
  margin: 0;
  margin-bottom: 10px;
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.remember {
  display: flex;
  align-items: center;
}
.custom-checkbox {
  margin-right: 5px;
}

.login-button button {
  background-color: rgb(73, 89, 105);
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  margin-top: 30px;
  margin-bottom: 20px;
}

.hr-and-or {
  position: relative;
  margin-bottom: 10px;
}

.hr-line {
  border: 1px solid rgb(221, 221, 221);
  border-width: 50%;
  position: absolute;
  width: 100%;
  transform: translateY(-50%);
}

.or-text {
  position: relative;
  display: inline-block;
  background: #fff;
  padding: 0 10px;
  color: rgb(74, 89, 106);
  margin: 0;
}

.login-google-facebook button {
  width: 100%;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: auto;
  font-size: 13px;
}

.btn-google {
  background-color: rgb(219, 68, 55);
  color: #fff;
  padding: 5px 30px;
  margin-top: 10px;
  margin-bottom: 5px;
}

.btn-facebook {
  background-color: rgb(66, 103, 178);
  color: #fff;
  padding: 5px 22px;
  margin: 5px 0;
  margin-bottom: 20px;
}

.sign-in p {
  margin: 0;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 19.6px;
  text-align: center;
  color: rgb(74, 89, 106);
  color-scheme: light;
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
  cursor: pointer;
}
</style>
  