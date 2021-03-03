<template>
  <div
    :style="{
      backgroundColor: $store.state.colorMode.background,
      color: $store.state.colorMode.color,
    }"
  >
    <div id="app">
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
  computed: {
    logged() {
      return;
    },
  },
};
</script>

<style lang="scss">
.vm--modal {
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
}

.loadMore {
  cursor: pointer;
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  line-height: 1.5;
  margin: 20px;
}

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

.vm--overlay {
  background: rgba(0, 0, 0, 0.5) !important;
}

.dropdown {
  background-color: #3caea3;
  width: 90%;
  min-height: 48px;
  margin: 0 auto;
  font-size: 16px;
  color: white;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;

  .title {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    h3::selection {
      display: none;
    }
  }

  .dropdownContent {
    padding: 10px 0px;
    transition: all 500ms;
  }
}

.slide-fade-enter-active {
  transition: all 0.5ms ease;
}

.slide-fade-leave-active {
  transition: all 0.5ms cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
.nuxt-progress {
  background: linear-gradient(
    90deg,
    #405de6 5%,
    #5851db 25%,
    #833ab4 45%,
    #c13584,
    60%,
    #e1306c 75%,
    #f56040 90%,
    #fcaf45 100%
  );
  border-radius: 10px;
}
</style>    
