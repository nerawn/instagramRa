<template>
  <div class="fw-400">
    <div class="photos">
      <div v-for="media in _media.items" class="photo" :key="media.id">
        <media-photo v-if="media.media_type == 1" :media="media" class="even" />
        <media-video v-if="media.media_type == 2" :media="media" class="even" />
        <instagram-photos
          photo
          v-if="media.media_type == 8"
          :media="media"
          class="even"
        />
        <!-- <slider v-if="photo.media_type == 8" :photo="photo" /> -->
      </div>
    </div>
    
    <center v-if="moreMedias" style="width: 100%">
      <button @click="loadMoreMedia" class="loadMore">Daha fazla yükle</button>
    </center>
  </div>
</template>

<script>
export default {
  props: {
    _media: Object,
    user: Object
  },
  methods: {
    async loadMoreMedia() {
      const { media } = await this.$axios.$get(`${this.user.pk}/media`, {
        headers: {
          state: this._media.state,
        },
      });

      this._media.items.push(...media.items);
      this._media.state = media.state;
    },
  },
  computed: {
    moreMedias() {
      return JSON.parse(this._media.state)["moreAvailable"];
    },
  },
};
</script>

<style lang="scss" scoped>
.photos {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 30px 30px;
  width: 100%;

  .photo {
    width: 100%;

    .even {
      max-width: 293px;
    }
  }
}
</style>