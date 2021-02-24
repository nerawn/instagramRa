<template>
<div class="media-container"  :style="{backgroundColor:$store.state.colorMode.background , color:$store.state.colorMode.color}">
    <img :src="media.carousel_media[0].image_versions2.candidates[1].url" class="mainPhoto pointer" @click="showModal" />
    <svg class="_8-yf5" fill="#ffffff" viewBox="0 0 48 48" width="24" @click="closeModal" v-if="exit">
        <path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path>
    </svg>
    <span class="media-icon" v-if="media.media_type == 8">
        <span class="background hidden">a</span>
    </span>
    <instagram-modals-photos-modal :media="media" :width="935" :height="600" :name="media.pk.toString()" :usersData="usersData[0]" />
</div>
</template>

<script>
export default {
    props: {
        media: Object,
    },
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
                activeImage: "https://picsum.photos/600/600",
                date: "67h",
            }, ],
            slide: 0,
            image: [
                "https://picsum.photos/id/686/600/600",
                "https://picsum.photos/id/685/600/600",
                "https://picsum.photos/id/687/600/600",
                "https://picsum.photos/600/600",
            ],
            imageId: String(Date.now()),
            videoId: String(Date.now()),
            images: [{
                    width: 350,
                    height: 350,
                },
                {
                    width: 600,
                    height: 600,
                },
            ],
        };
    },
    computed: {
        width() {
            return this.images[1].width + 335 + "px";
        },
        height() {
            return this.images[1].height + "px";
        },
    },

    methods: {
        showModal() {
            this.$modal.show(this.media.pk.toString());
        },
        likers() {
            this.$modal.show("miniModal", {
                username: "erdemefe07",
                name: "Erdem",
                title: "Beğeniler",
            });
        },
        closeModal() {
            this.$modal.hide(this.imageId);
        },
        asd(event) {
            this.exit = true;
        },
    },
};
</script>

<style lang="scss" scoped>
.media-container {
    position: relative;

    .media-icon {
        position: absolute;
        right: 0;
        top: 0;
        padding: 5px;
        color: white;
        width: 32px;
        height: 32px;
        background-image: url('/mediaTypes.png');
        background-repeat: no-repeat;
        background-position: 0px 0px;
    }
}

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
