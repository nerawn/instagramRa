<template>
  <div class="container">
    <instagram-profile-navbar />
    <instagram-profile :user="getUser" />
    <div class="photos fw-400">
      <div v-for="media in user.media" class="photo" :key="media.id">
        <media-photo v-if="media.media_type == 1" :media="media" />
        <media-video v-if="media.media_type == 2" :media="media" />
        <instagram-photos photo v-if="media.media_type == 8" :media="media" />
        <!-- <slider v-if="photo.media_type == 8" :photo="photo" /> -->
      </div>
    </div>
    <instagram-modals-mini-modal />
  </div>
</template>

<script>

export default {
  async asyncData({ $axios, store, params }) {
    const username = params.username;
    const user = await $axios.$get("/" + username);
    return { user };
  },
  computed: {
    getUser() {
      return {
        bio: this.user.info.biography,
        followers: this.user.info.follower_count,
        following: this.user.info.following_count,
        verified: this.user.info.is_verified,
        medias: this.user.info.media_count,
        username: this.user.info.username,
        fullName: this.user.info.full_name,
        profilePhoto: this.user.info.profile_pic_url,
      };
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

  .photos {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 30px 30px;
    width: 100%;
  }

  .photo {
    width: 100%;
  }
}
</style>
