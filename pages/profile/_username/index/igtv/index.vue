<template>
  <ul class="photos fw-400 pointer">
    <li
      class="media-reels"
      v-for="igtv in igtvs"
      :key="igtv.node.id"
      @click="openedModal = igtv.node.shortcode"
      :style="{
        backgroundImage: 'url(' + igtv.node.thumbnail_src + ')',
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
          <span>{{ igtv.node.title }}</span>
        </div>
      </div>
      <div class="cover">
        <div class="like">
          <img src="/play.svg" />
          <span>{{ igtv.node.video_view_count }}</span>
        </div>
        <div class="comment">
          <img src="/comment.svg" />
          <span>{{ igtv.node.edge_media_to_comment.count }}</span>
        </div>
      </div>

      <media-igtv-modal :name="igtv.node.shortcode" :user="user" />
    </li>

    <center v-if="moreMedias" style="width: 100%; grid-column: 1 / -1">
      <button @click="fetchIgtvs" class="loadMore">Daha fazla yükle</button>
    </center>
  </ul>
</template>

<script>
export default {
  name: "Pages-Username-Igtv",
  data() {
    return {
      igtvs: [],
      state: null,
      openedModal: null
    };
  },
  props: {
    user: Object,
  },
  created() {
    this.fetchIgtvs();
  },
  methods: {
    async fetchIgtvs() {
      const { igtvs } = await this.$axios.$get(`${this.user.pk}/igtvs`, {
        headers: {
          state: this.state,
        },
      });
      this.igtvs.push(...igtvs.edges);
      this.state = {
        after: igtvs.page_info.end_cursor,
        moreAvailable: igtvs.page_info.has_next_page,
      };
    },
  },
  computed: {
    moreMedias() {
      return this.state ? this.state["moreAvailable"] : false; // TODO JSON.parse gereksiz çünkü fetchde obje döndürüyoz
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
