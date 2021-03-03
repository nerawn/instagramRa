<template>
  <ul class="photos fw-400 pointer">
    <li
      class="media-reels"
      v-for="reel in reels"
      :key="reel.media.pk"
      @click="$modal.show(reel.media.pk.toString())"
      :style="{
        backgroundImage:
          'url(' + reel.media.image_versions2.candidates[0].url + ')',
      }"
    >
      <div class="center"></div>
      <div class="bottom">
        <div class="left">
          <svg
            aria-label="Oynatma Sayısı Simgesi"
            fill="#ffffff"
            height="16"
            viewBox="0 0 48 48"
            width="16"
          >
            <path
              d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"
            ></path>
          </svg>
        </div>
        <div class="right fw-600">
          <span>{{ reel.media.play_count }}</span>
        </div>
      </div>
      <div class="cover">
        <div class="like">
          <img src="/comment.svg" />
          <span>{{ reel.media.like_count }}</span>
        </div>
        <div class="comment">
          <img src="/comment.svg" />
          <span>{{ reel.media.comment_count }}</span>
        </div>
      </div>

      <modal
        :name="reel.media.pk.toString()"
        :width="getVideoWidth(reel) + 335"
        :height="getVideoHeight(reel)"
        class="modal"
        style="z-index: 1"
      >
        <div class="modal-container">
          <div class="left" style="background-color: black">
            <video
              :width="getVideoWidth(reel)"
              :height="getVideoHeight(reel)"
              controls
              class="noutline"
            >
              <source
                v-for="video in reel.media.video_versions"
                :key="video.type"
                :src="video.url"
              />
            </video>
          </div>
          <media-sidebar
            :id="reel.media.pk"
            :caption="reel.media.caption"
            :user="reel.media.user"
            :location="reel.media.location"
            :height="getVideoHeight(reel)"
            :likeCount="reel.media.like_count"
            :commentCount="reel.media.comment_count"
          />
        </div>
      </modal>
    </li>

    <center v-if="moreMedias" style="width: 100%; grid-column: 1 / -1">
      <button @click="fetchReels" class="loadMore">Daha fazla yükle</button>
    </center>
  </ul>
</template>

<script>
/**
 * TODO State fetchten sonra obje dönüyor diğerleri gibi stringify biçimde dönmüyor
 * TODO o yüzden fetch ederken tekrar stringify ı el ile yapılıyor
 */

export default {
  data() {
    return {
      reels: [],
      state: null,
    };
  },
  props: {
    user: Object,
  },
  created() {
    this.fetchReels();
  },
  methods: {
    async fetchReels() {
      const { reels } = await this.$axios.$get(`${this.user.pk}/reels`, {
        headers: {
          state: this.state,
        },
      });
      this.reels.push(...reels.items);
      this.state = reels.state;
    },

    getVideoWidth(reel) {
      const width = reel.media.video_versions[0].width;
      if (width > 600) return 600;
      return width;
    },

    getVideoHeight(reel) {
      const height = reel.media.video_versions[0].height;
      if (height > 600) return 600;
      return height;
    },
  },
  computed: {
    moreMedias() {
      return this.state ? JSON.parse(this.state)["more_available"] : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.media-container {
  position: relative;

  .media-icon {
    position: absolute;
    right: 5px;
    top: 0;
    padding: 5px;
    color: white;
    width: 32px;
    height: 32px;
    background-image: url("/mediaTypes.png");
    background-repeat: no-repeat;
    background-position: 0px -34px;
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

._8-yf5 {
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

.container {
  display: flex;
  flex-wrap: wrap;
  width: 935px;
  margin: 0 auto;

  .photos {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 30px 30px;
    width: 100%;
    padding-bottom: 10%;
  }

  .cover {
    position: absolute;
    height: 330px;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: none;

    div {
      display: flex;
      color: white;
      font-weight: 600;

      span {
        display: flex;
        align-items: center;
      }
    }
  }

  .media-reels {
    width: 100%;
    height: 330px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;

    .bottom {
      position: absolute;
      bottom: 20px;
      left: 20px;
      display: flex;
      color: white;
      font-size: 1em;

      .left {
        margin-right: 0.5rem;
      }
    }

    &:hover {
      .cover {
        display: flex;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
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
