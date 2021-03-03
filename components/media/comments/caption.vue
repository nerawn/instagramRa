<template>
  <li class="comment" v-if="caption">
    <div class="first">
      <div class="image">
        <img class="pp pointer" :src="caption.user.profile_pic_url" />
      </div>
      <div class="texts">
        <div class="fw-600">
          <h3 class="inline pointer">{{ caption.user.username }}</h3>
          <span class="fw-400">
            {{ caption.text }}
          </span>
          <div class="date fw-500">
            <span>
              <Timeago :datetime="caption.created_at * 1000" locale="tr" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    caption: Object,
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