<template>
  <div>
    <modal
      name="profilePhoto"
      :width="width"
      :height="height"
      class="container"
      styles="border-radius:5px;"
      @opened="exit = true"
      @closed="exit = false"
    >
      <img :src="src" />
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
    </modal>
  </div>
</template>

<script>
export default {
  name: "profilePhoto",
  data() {
    return {
      exit: false,
    };
  },
  props: {
    src: String,
    width: Number,
    height: Number,
  },
  methods: {
    closeModal() {
      this.$modal.hide("profilePhoto");
    },
    show() {
      this.$modal.show("profilePhoto");
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
  color: #262626;
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
