<template>
  <div
    class="container"
    :style="{
      backgroundColor: $store.state.colorMode.background,
      color: $store.state.colorMode.color,
    }"
  >
    <header class="profile">
      <div class="image">
        <div class="story" :class="{ colorful: story }">
          <img
            :src="user.hd_profile_pic_url_info.url"
            @click="getProfilePhoto"
          />
        </div>
        <instagram-modals-profile-photo
          :src="user.hd_profile_pic_url_info.url"
          :width="user.hd_profile_pic_url_info.width"
          :height="user.hd_profile_pic_url_info.height"
        />
        <v-dialog />
      </div>
      <div class="main">
        <h2 class="top">{{ user.username }}</h2>
        <ul class="center">
          <li>
            <span>{{ user.media_count }}</span> gönderi
          </li>
          <li class="pointer" @click="getFollowers">
            <span>{{ user.follower_count }}</span> takipçi
          </li>
          <li class="pointer" @click="getFollowing">
            <span>{{ user.following_count }}</span> takip
          </li>
        </ul>
        <div class="bottom">
          <h1>{{ user.full_name }}</h1>
          <br />
          <span>{{ user.biography }}</span>
        </div>
      </div>
    </header>
    <div class="highlights" v-if="!mainUser">
      <div class="bosluk"></div>
      <ul>
        <li v-for="highlight in highlights.tray" :key="highlight.id">
          <div class="image">
            <img
              :src="highlight.cover_media.cropped_image_version.url"
              @click="getHighlightDetails(highlight.id)"
            />
            <div class="imageDescription">{{ highlight.title }}</div>
            <!-- <instagram-modals-video-stories :story="story" /> -->
            <!-- <stories/>  abi burda kafa gitti anlamadım o yüzden video storiesi image stories yapmadım  -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import storyModal from "../instagram/modals/videoStories";

export default {
  name: "Profil",
  props: {
    user: Object,
    mainUser: Boolean,
    highlights: Object,
    story: Array,
  },
  methods: {
    getProfilePhoto() {
      if (this.story.length >= 1) {
        this.$modal.show("dialog", {
          title: "Bilgi",
          text: "Kullanıcının Hikayesi Bulunmakta",
          buttons: [
            {
              title: "Kapat",
              handler: () => {
                this.$modal.hide("dialog");
              },
            },
            {
              title: "Hikayeler",
              handler: () => {
                this.$modal.hide("dialog");
                this.openStories();
              },
            },
            {
              title: "Profil Fotoğrafı",
              color: "white",
              handler: () => {
                this.$modal.hide("dialog");
                this.$modal.show("profilePhoto");
              },
            },
          ],
        });
      } else {
        this.$modal.hide("dialog");
        this.$modal.show("profilePhoto");
      }
    },
    openStories(stories) {
      this.$modal.show(
        storyModal,
        { story: stories ? stories : this.story },
        {
          width: "50%",
          height: window.innerHeight,
          adaptive: true,
        }
      );
    },
    async getHighlightDetails(id) {
      const { media } = await this.$axios.$get(`/${id}/highlight`);
      this.openStories(media);
    },
    getFollowers() {
      this.$modal.show("miniModal");
    },

    getFollowing() {
      this.$modal.show("miniModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 935px;
  padding: 30px 20px 20px 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #262626;

  .profile {
    display: flex;
    width: 935px;
    margin-bottom: 44px;

    .image {
      width: 31%;
      text-align: center;
      margin-right: 30px;
      display: flex;
      justify-content: center;

      .story {
        width: 168px;
        height: 168px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        text-align: center;
      }

      img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        cursor: pointer;
        border: 5px solid #ffffff;
      }
    }

    .top {
      font-size: 28px;
      height: 40px;
      margin-bottom: 20px;
      font-weight: 300;
    }

    .main {
      width: 66%;
      font-weight: 400;

      ul {
        display: flex;
        margin-bottom: 20px;

        li {
          margin-right: 40px;
          word-spacing: 2px;

          span {
            font-weight: 600;
          }
        }
      }

      .bottom {
        font-size: 16px;

        h1 {
          font-weight: 600;
          word-wrap: break-word;
        }

        br {
          display: block;
          content: "";

          margin-top: 10px;
        }
      }
    }
  }

  .highlights {
    width: 100%;
    height: 130px;
    display: flex;
    margin-bottom: 44px;

    .bosluk {
      width: 48px;
      height: 130px;
      visibility: hidden;
    }

    ul {
      display: flex;

      li {
        width: 125px;
        height: 130px;
        text-align: center;

        .image {
          padding: 10px 15px;

          img {
            width: 85px;
            height: 85px;
            border-radius: 100%;
            border: 3px solid #ffffff;
            box-shadow: 0px 0px 2px rgba(0, 0, 0);
            cursor: pointer;
          }
        }

        .imageDescription {
          padding-top: 15px;
          width: 85px;
          font-size: 14px;
          font-weight: 600;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
}

.colorful {
  background: linear-gradient(45deg, #f5eb6d, #ed8554, #e1306c, #fd1d1d);
}
</style>
