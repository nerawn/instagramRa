<template>
  <li class="comment">
    <div class="first">
      <div class="image">
        <img class="pp pointer" :src="comment.user.profile_pic_url" />
      </div>
      <div class="texts">
        <div class="fw-600">
          <h3 class="inline pointer">{{ comment.user.username }}</h3>
          <span class="fw-400">
            {{ comment.text }}
          </span>
        </div>
        <div class="date fw-500">
          <span>
            <Timeago :datetime="comment.created_at * 1000" locale="tr" />
          </span>
          <button
            class="nbtn fw-500 ml-5"
            @click="likers"
            v-if="comment.comment_like_count"
          >
            {{ comment.comment_like_count }} beğenme
          </button>
        </div>

        <media-comments-inline-comment
          v-if="comment.child_comment_count"
          :comment="comment"
          :mediaId="mediaId"
        />
      </div>
    </div>
  </li>
</template>

<script>
import ListModal from "../../instagram/modals/miniModal";
export default {
  props: {
    comment: Object,
    mediaId: String,
  },
  created(){
    console.log(this)
  },
  methods: {
    likers() {
      this.$modal.show(
        ListModal,
        {
          title: "Beğenmeler",
          username: "username",
          name: "name",
          endpoint: `${this.comment.pk}/commentLikers`,
          getKeyFromData: "likers",
        },
        { width: 400, height: 400 }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  min-height: 47px;
  padding-top: 12px;
  margin-bottom: 1em;

  .first {
    display: flex;

    .pp {
      width: 32px;
      height: 32px;
      border-radius: 60px;
    }
  }

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
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        margin-left: 10px;
        padding: 0px;
      }
    }

    .map {
      font-size: 12px;
    }
  }
}
</style>