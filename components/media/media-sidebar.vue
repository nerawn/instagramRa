<template>
  <div class="right">
    <div class="top">
      <div class="row">
        <img class="pp pointer" :src="user.profile_pic_url" />
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
        <li class="comment" v-if="caption">
          <div class="image">
            <img class="pp pointer" :src="user.profile_pic_url" />
          </div>
          <div class="texts">
             <div class="fw-600">
              <h3 class="inline pointer">{{ user.username }}</h3>
              <span class="fw-400" >
                {{ caption.text }}
              </span>
               <div class="date fw-500">
              <span>
                <Timeago :datetime="caption.created_at * 1000" locale="tr" />
              </span>
               </div>
            </div>
          </div>
        </li>
        <li class="comment" v-for="comment in comments" :key="comment.pk">
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
          </div>
        </li>
      </ul>

      <div class="likes fw-500 pointer">{{ likeCount }} beğenme</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: []
    }
  },
  props: {
    id: String,
    user: Object,
    caption: Object,
    location: Object,
    height: Number,
    likeCount:Number,
  },
  computed: {
    getHeight() {
      return this.height - 65 + 'px'
    }
  },
  async created() {
    const username = this.$route.params.username;
    const { comments } = await this.$axios.$get(
      `${username}/${this.id}/comments`
    );
    this.comments = comments;
  },
  methods: {
    likers() {
      this.$modal.show("miniModal", {
        username: "erdemefe07",
        name: "Erdem",
        title: "Beğeniler",
      });
    },

    timeago(_date) {
      const date = new Date(_date);
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

      // &::-webkit-scrollbar {
      //   width: 0px;
      // }

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
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
                sans-serif;
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
      position: absolute;
      bottom: 0;
      z-index: 99;
      background-color: white;
    }
  }
}

.pp {
  width: 32px;
  height: 32px;
  border-radius: 60px;
}
</style>
