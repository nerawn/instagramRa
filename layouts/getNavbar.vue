<template>
  <div
    :style="{
      backgroundColor: $store.state.colorMode.background,
      color: $store.state.colorMode.color,
    }"
  >
    <div id="app">
      <main-navbar />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$route.path == "/login") return null;
    const auth = this.$store.getters.authenticated;
    if (!auth) return this.$router.push("/login?path=" + this.$route.path);
  },
};
</script>

<style lang="scss" >
#app {
  max-width: 935px;
  margin: 0 auto;
  font-family: roboto;
  min-height: 100vh;
  color: #262626;
}

.hesaplariGoruntule {
  background-color: #2980b9;
}

.banaKimBakti {
  background-color: #16a085;
}

.gtBotu {
  background-color: #8e44ad;
}

.magaza {
  background-color: #e74c3c;
}

.ayarlar {
  background-color: #ff9f43;
}
</style>
