<template>
  <div class="media-container">
    <img
      :src="media.image_versions2.candidates[1].url"
      class="mainPhoto pointer"
      @click="showModal"
    />
    <svg
      class="_8-yf5"
      fill="#ffffff"
      viewBox="0 0 48 48"
      width="24"
      @click="closeModal"
      v-if="exit"
    >
      <path
        clip-rule="evenodd"
        d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
        fill-rule="evenodd"
      ></path>
    </svg>

    <modal
      :name="media.pk.toString()"
      :width="getWidth + 335"
      :height="getHeight"
      class="modal"
      style="z-index: 1"
    >
      <div class="modal-container">
        <div class="left" style="background-color: black;">
          <img :src="media.image_versions2.candidates[0].url" :style="{width: getWidth + 'px', height: getHeight + 'px'}" style="object-fit:contain;"/>
        </div>
        <media-sidebar :id="media.pk" :caption="media.caption" :user="media.user" :location="media.location" :height="getHeight" :likeCount="media.like_count"/>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  props: {
    media: Object,
  },
  data() {
    return {
      exit: true,
    };
  },
  methods: {
    showModal() {
      this.$modal.show(this.media.pk.toString());
    },

    closeModal() {
      this.$modal.hide(this.media.pk.toString());
    },
  },
  computed: {
    getWidth() {
      const width = this.media.image_versions2.candidates[0].width;
      if (width < 600) return 600;
      if (width > 1200) return 1200;
      return width;
    },

    getHeight() {
      const height = this.media.image_versions2.candidates[0].height;
      if (height < 600) return 600;
      if (height > 800) return 800;
      return height;
    },
  },
};
</script>

<style lang="scss" scoped>
.media-container {
  position: relative;

  .media-icon {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
    color: white;
  }
}

.mainPhoto {
  width: 293px;
  height: 293px;
}

.modal {
  color: #707070;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  .modal-container {
    display: flex;
    
    .right {
      width: 335px;

      .top {
        width: 335px;
        padding: 16px;
        border-bottom: 1px solid #e6e6e6;
        margin: 0px !important;

        .row {
          display: flex;
          align-items: center;
          font-size: 14px;
          height: 32px;

          .texts {
            display: flex;
            height: 32px;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 1em;
            color: #262626;

            .map {
              font-size: 12px;
            }
          }
        }
      }

      .bottom {
        width: 302px;

        .commentsContainer {
          padding: 12px 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          height: 374px;
          overflow-y: auto;

          &::-webkit-scrollbar {
            width: 0px;
          }

          .comment {
            display: flex;
            min-height: 47px;
            padding-top: 12px;
            margin-bottom: 1em;

            .texts {
              display: flex;
              margin-left: 1em;
              color: #262626;
              font-size: 14px;
              line-height: 18px;
              flex-direction: column;
              justify-content: space-between;

              .date {
                font-size: 12px;
                color: #8e8e8e;
                margin-top: 16px;
                margin-bottom: 4px;

                .nbtn {
                  font-size: 12px;
                  color: #8e8e8e;
                  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                    "Helvetica Neue", sans-serif;
                  margin-left: 10px;
                  padding: 0px;
                }
              }

              .map {
                font-size: 12px;
              }
            }
          }
        }

        .likes {
          border-top: 1px solid #e6e6e6;
          width: 335px;
          padding: 16px 16px;
          font-size: 14px;
        }
      }
    }
  }
}

.vm--modal {
  border-radius: 40px !important;
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

.pp {
  width: 32px;
  height: 32px;
  border-radius: 60px;
}
</style>
