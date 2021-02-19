<template>
<div>
    <img src="https://picsum.photos/id/683/350/350" class="mainPhoto pointer" @click="showModal">
    <svg class="_8-yf5" fill="#ffffff" viewBox="0 0 48 48" width="24" @click="closeModal" v-if="exit">
        <path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path>
    </svg>
    <videos-modal :videos="videos" :width="935" :height="600" :name="videoId" :usersData="usersData" />
</div>
</template>

<script>
export default {
    data() {
        return {
            exit: false,
            usersData: [{
                photoLikers: 899,
                commentLikers: 30,
                comment: "bu cümle beş kelimeden oluşuyor",
                publisherUsername: "tugcanuslu",
                maps: "KADIKÖY İSTANBUL",
                commentsUsername: "asdasdasds",
                date: "67h",
            }],
            slide: 0,
            videoId: String(Date.now()),
          videos: [
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "https://instagram.fist4-1.fna.fbcdn.net/v/t50.2886-16/52813605_396036684277910_9110857501210583605_n.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ19wcm9ncmVzc2l2ZV91cmxnZW4ucHJvZHVjdF90eXBlLmZlZWRcIl0ifQ&_nc_ht=instagram.fist4-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=rGVNRR-QiCYAX-k8DEj&oe=6032C821&oh=7f7daf57f9771f02b8a9b62f5e49c198"
            ],
        }
    },
    // computed: {
    //     width() {
    //         return this.images[1].width + 335 + 'px'
    //     },
    //     height() {
    //         return this.images[1].height + 'px'
    //     }
    // },

    methods: {
        showModal() {
            this.$modal.show(this.videoId);
        },
        likers() {
            this.$modal.show("miniModal", {
                username: "erdemefe07",
                "name": "Erdem",
                title: "Beğeniler"
            });
        },
        closeModal() {
            this.$modal.hide(this.videoId);
        },
        asd(event) {
            this.exit = true
        }
    },

}
</script>

<style lang="scss" scoped>
.mainPhoto {
    width: 100%;
    height: 293px;
}

svg {
    width: 24px;
    height: 24px;
    position: fixed;
    right: 20px;
    top: 20px;
    color: white;
    z-index: 99;
    cursor: pointer;
}
</style>
