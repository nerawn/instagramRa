<template>
  <div class="reply" @click="getInlineComments">
    <!--  Yanıt -->
    <div class="replyTop">
      <div class="border">
        <!--  yanıtları gösterin yanındaki çizgi -->
        <h1 class="hidden">s</h1>
      </div>
      <button class="nbtn">
        {{ reply }} ({{ comment.child_comment_count - inlineComments.length }})
      </button>
    </div>
    <!-- // TODO created_at, comment_like_count, -->
    <div>
      <media-comments-comment
        class="first"
        v-for="inlineComment in inlineComments"
        :key="inlineComment.pk"
        :comment="inlineComment"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getReply: false,
      reply: "Yanıtları Gör",
      inlineComments: [],
      state: null,
    };
  },
  methods: {
    async getInlineComments() {
      if (this.state) {
        const state = JSON.parse(this.state);
        if (!state.moreAvailable) return;
      }

      const { comments } = await this.$axios.$get(
        `${this.mediaId}/${this.comment.pk}/childComments`,
        {
          headers: {
            state: this.state,
          },
        }
      );
      this.inlineComments.unshift(...comments.request.child_comments);
      this.state = comments.state;
    },
  },
  props: {
    comment: Object,
    mediaId: String,
  },
  watch: {
    getReply(val) {
      if (val) this.reply = "Yanıtları Gizle";
      else this.reply = "Yanıtları Gör";
    },
  },
};
</script>

<style lang="scss" scoped>
.reply {
  color: #262626;
  margin-top: 5px;

  .replyTop {
    display: flex;
    align-items: center;
    color: #8e8e8e;

    .replyText {
      width: 100%;
      word-wrap: break-word;
      padding-bottom: 0.5em;
    }
  }

  .nbtn {
    font-size: 12px;
    color: #8e8e8e;
  }
}
</style>