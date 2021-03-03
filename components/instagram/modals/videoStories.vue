<template>
  <div class="wrapper" style="height: 100%" v-if="active">
    <div
      class="container"
      @opened="exit = true"
      @closed="exit = false"
      :key="active.id"
      styles="background-color: transparent; box-shadow:0px 0px 0px; border-radius:10px;"
    >
      <div class="left">
        <i class="fas fa-angle-left" @click="slide !== 1 ? slide-- : null"></i>
      </div>

      <div class="main" v-if="active.media_type == 2">
        <video autoplay controls muted class="video">
          <source
            style="border-radius: 20px"
            :src="active.video_versions[0].url"
          />
        </video>
      </div>

      <div class="main" v-if="active.media_type == 1">
        <img
          :src="active.image_versions2.candidates[0].url"
          style="object-fit: contain; width: 100%"
        />
      </div>

      <svg
        class="pointer"
        fill="#ffffff"
        viewBox="0 0 48 48"
        width="24"
        v-if="exit"
        @click="closeModal"
      >
        <path
          clip-rule="evenodd"
          d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
          fill-rule="evenodd"
        ></path>
      </svg>
      <div class="right">
        <i
          class="fas fa-angle-right"
          @click="slide !== story.length - 1 ? slide++ : null"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      exit: false,
      slide: null,
    };
  },
  props: {
    story: Array,
  },
  async created() {
    this.slide = 1;
  },
  watch: {
    slide(value) {
      this.active = this.story[value];
    },
  },
  methods: {
    closeModal() {
      this.$modal.hide("stories");
    },
    show() {
      this.$modal.show("stories");
    },
  },
  mount() {
    this.show();
  },
};
</script>

<style lang="scss" scoped>
.container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
}

i {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: rgb(121, 121, 121);
  }
}

.left {
  position: absolute;
  left: 0px;
  top: 45%;
}

.main {
  width: 80%;
  margin: 0 auto;

  .video {
    width: 100%;
    border-radius: 5px;
  }
}

.right {
  position: absolute;
  top: 45%;
  right: 0%;
}

svg {
  width: 24px;
  height: 24px;
  position: fixed;
  right: 20px;
  top: 20px;
  color: white;
  z-index: 99;
  cursor: pointer;
}
</style>
