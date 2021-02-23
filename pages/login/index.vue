<template>
  <div class="container">
    <div class="login">
      <h1>Ra</h1>
      <div class="inputs">
        <input type="text" placeholder="Kullanıcı Adı" v-model="username" @keyup.enter="login" />
        <input type="password" placeholder="Şifre" v-model="password" @keyup.enter="login" />
      </div>
      <center>
        <button class="btn primary" @click="login">Giriş Yap</button>
      </center>
      <center class="mt-5">
        <small
          >Giriş yaparak kullanıcı şartlarımızı ve gizlilik politikamızı kabul
          etmiş olursunuz</small
        >
      </center>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    async login() {
      await this.$axios.$post("/login", {
        username: this.username,
        password: this.password,
      });
      const self = await this.$axios.$get("/");
      this.$store.commit("login", self);
      this.$router.push("/profile/" + this.username);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .login {
    width: 380px;
    height: 480px;
    box-shadow: 0px 0px 6px #2699fb;
    border-radius: 5px;

    h1 {
      text-align: center;
      color: #2699fb;
      font-size: 75px;
      font-weight: bold;
      margin-top: 20px;
    }

    .inputs {
      margin-top: 3em;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;

      input {
        border: 2px solid #bce0fd;
        width: 80%;
        height: 45px;
        border-radius: 60px;
        outline: 0;
        padding: 0px 20px;
        color: #2699fb;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600;
        transition: border 500ms ease-in-out;

        &:focus {
          border-color: #2699fb;
        }

        &::placeholder {
          color: #bce0fd;
          opacity: 1;
        }
      }
    }

    .primary {
      border-radius: 60px;
      width: 80%;
      height: 45px;
      margin-top: 20%;
      font-size: 18px;
    }

    small {
      width: 80%;
      color: #2699fb;
      line-height: 1.3;

      &::selection {
        color: crimson;
      }
    }
  }
}
</style>
