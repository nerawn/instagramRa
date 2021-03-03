<template>
  <div
    class="container"
    :style="{
      backgroundColor: $store.state.colorMode.background,
      color: $store.state.colorMode.color,
    }"
  >
    <instagram-profile-navbar />
    <instagram-profile
      :user="getUser"
      :mainUser="mainUser"
      :highlights="user.highlights"
      :story="user.story"
    />
    <instagram-whirl v-if="!mainUser" :info="user.info" />

    <NuxtChild :_media="user.media" :user="user.info" />

    <div class="router flex jc-se align-center" v-if="mainUser">
      <nuxt-link tag="div" to="/search" class="hesaplariGoruntule">
        <div class="icon">
          <i class="fas fa-search"></i>
          <b>Hesapları Görüntüle</b>
        </div>
      </nuxt-link>
      <nuxt-link tag="div" to="/stalkers" class="banaKimBakti">
        <div class="icon">
          <img src="@/assets/navbarSvgFiles/hacker.svg" />
          <b>Bana Kim Baktı?</b>
        </div>
      </nuxt-link>
      <nuxt-link tag="div" to="/gtbot" class="gtBotu">
        <div class="icon">
          <img src="@/assets/navbarSvgFiles/robot.svg" />
          <b>GT Botu</b>
        </div>
      </nuxt-link>
      <nuxt-link tag="div" to="/store" class="magaza">
        <div class="icon">
          <img src="@/assets/navbarSvgFiles/shop.svg" />
          <b>Mağaza</b>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, store, params }) {
    let endpoint = "";
    let mainUser = true;

    // try {
    if (!(store.state.user.info.username == params.username)) {
      endpoint = params.username;
      mainUser = false;
    }
    // } catch (error) {
    //   // redirect("/login");
    // }

    const user = await $axios.$get("/" + endpoint);

    return {
      user,
      mainUser,
    };
  },
  computed: {
    getUser() {
      return this.user.info;
    },
  },
};
</script>

<style lang="scss" scoped>


.container {
  display: flex;
  flex-wrap: wrap;
  width: 935px;
  margin: 0 auto;
  
}

.router {
  width: 100%;
  max-width: 935px;
  background-color: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
  height: 260px;

  div {
    width: 180px;
    height: 220px;
    border-radius: 10px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;

    img,
    i {
      width: 60px;
      height: 60px;
      font-size: 60px;
    }

    b {
      margin-top: 2em;
      font-size: 15px;
      font-weight: 500;
      text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
