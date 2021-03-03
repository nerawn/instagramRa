<template>
  <modal
    v-if="$parent.openedModal == name && igtv"
    :name="name"
    :width="getVideoWidth() + 335"
    :height="getVideoHeight()"
    class="modal"
    style="z-index: 1"
    @closed="
      () => {
        $parent.click = false;
      }
    "
  >
    <div class="modal-container">
      <div class="left" style="background-color: black">
        <video
          :width="getVideoWidth()"
          :height="getVideoHeight()"
          controls
          class="noutline"
        >
          <source :src="igtv.video_url" />
        </video>
      </div>
      <media-sidebar-igtv
        :id="igtv.shortcode"
        :caption="getCaption"
        :user="user"
        :location="igtv.location"
        :height="getVideoHeight()"
        :likeCount="igtv.video_view_count"
        :commentCount="igtv.edge_media_to_parent_comment.count"
      />
    </div>
  </modal>
</template>

<script>
export default {
  props: {
    name: String,
    user: Object,
  },
  data() {
    return {
      igtv: null,
    };
  },
  computed: {
    getCaption() {
      return {
        user: this.user,
        text: `${this.igtv.title}\n\n${this.igtv.edge_media_to_caption.edges[0].node.text}`,
        created_at: this.igtv.taken_at_timestamp,
      };
    },
  },
  methods: {
    async fetchVideo(val) {
      const { igtv } = await this.$axios.$get(`${val}/igtvVideo`);
      this.igtv = igtv;
      this.$nextTick(() => {
        this.$modal.show(this.name);
      });
    },

    getVideoWidth() {
      const width = this.igtv.dimensions.width;
      if (width > 600) return 600;
      return width;
    },

    getVideoHeight() {
      const height = this.igtv.dimensions.height;
      if (height > 600) return 600;
      return height;
    },
  },

  watch: {
    "$parent.openedModal": function (val) {
      if (!val) return;

      if (this.name == val) this.fetchVideo(val);
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>