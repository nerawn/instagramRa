<template>
  <div class="right">
    <div class="top">
      <div class="row">
        <!-- <img class="pp pointer" :src="user.profile_pic_url" /> -->
        <div class="texts">
          <div class="username fw-500 pointer">
            {{ user.username }}
          </div>
          <div class="map" v-if="location">
            {{ location.short_name }}
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <ul class="commentsContainer" :style="{ height: getHeight }">
        <media-comments-caption :caption="caption" />

        <media-comments-comment
          v-for="comment in comments"
          :key="comment.pk"
          :comment="comment.node"
          :mediaId="id"
        />

        <li></li>
        <div class="getmore">
          <center>
            <button
              class="fas fa-plus radius mb-5 pointer noutline"
              v-if="hasMore"
              @click="fetchComments"
            ></button>
          </center>
        </div>
      </ul>

      <div class="likes fw-500 pointer" @click="showDynoModal">
        {{ likeCount }} beğenme
      </div>
    </div>
  </div>
</template>

<script>
import ListModal from "../instagram/modals/miniModal";

export default {
  data() {
    return {
      comments: [],
      state: null,
    };
  },
  props: {
    id: String,
    user: Object,
    caption: Object,
    location: Object,
    height: Number,
    likeCount: Number,
    commentCount: Number,
  },
  computed: {
    getHeight() {
      return this.height - 65 + "px";
    },
    hasMore() {
      if (!this.state) return false;
      return JSON.parse(this.state)["moreAvailable"];
    },
  },
  async created() {
    if (this.commentCount > 0) this.fetchComments();
  },
  methods: {
    showDynoModal() {
      this.$modal.show( // TODO burayı yapaq
        ListModal,
        {
          title: "Beğenmeler",
          username: "username",
          name: "name",
          endpoint: `${this.id}/likers`,
          getKeyFromData: "likers",
        },
        { width: 400, height: 400 }
      );
    },

    async fetchComments() {
      const { comments } = await this.$axios.$get(`/${this.id}/igtvVideo/comments`, {
        headers: { state: this.state },
      });
      this.comments.push(...comments.edges);
      this.state = comments.state;
    },
  },
};
</script>

<style lang="scss" scoped>
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
    .commentsContainer {
      padding: 12px 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      overflow-y: auto;
      max-height: 500px;
      position: relative;
      // &::-webkit-scrollbar {
      //   width: 0px;
      // }
    }

    .likes {
      border-top: 1px solid #e6e6e6;
      width: 335px;
      padding: 16px 16px;
      font-size: 14px;
      position: absolute;
      bottom: 0;
      z-index: 99;
      background-color: white;
    }
  }
}

.border {
  border: 1px solid #8e8e8e;
  height: 0.5px;
  width: 2em;
  display: inline-block;
}

.pp {
  width: 32px;
  height: 32px;
  border-radius: 60px;
}

.radius {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid #292929;
}
</style>
