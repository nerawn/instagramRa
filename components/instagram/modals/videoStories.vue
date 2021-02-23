<template>
<div class="wrapper">
    <modal name="stories" width="40%" height="90%" class="container" @opened="exit = true" @closed="exit = false" styles="background-color: transparent; box-shadow:0px 0px 0px; border-radius:10px;">
        <div class="left">
            <i class="fas fa-angle-left" @click="slide--"></i>
        </div>

        <div class="main">
            <video autoplay class="video">
                <source style="border-radius:20px;" src="https://instagram.fist6-2.fna.fbcdn.net/v/t50.2886-16/88690564_447020163405396_6923272113120833353_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjUxNi5zdG9yeS5kZWZhdWx0IiwicWVfZ3JvdXBzIjoiW1wiaWdfd2ViX2RlbGl2ZXJ5X3Z0c19vdGZcIl0ifQ&_nc_ht=instagram.fist6-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=xf2AVCGqpVQAX8Ev9jy&vs=17909520670647449_3430722316&_nc_vs=HBksFQAYJEdJUlBTUVZVRmd6X2o1WUJBRWx2NzBsT1p4UmdidXFIQUFBQRUAAsgBABUAGCRHRzdZRHduaUlsZGZySUFCQUVpc2pnWHE1OWNUYnBrd0FBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACay%2FLu5pqfQPxUCKAJDMywXQCEAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMl92MREAdegHAA%3D%3D&_nc_rid=2554144b7c&oe=60350819&oh=a91baff88588433d37860540d2a0bb5e">
            </video>
        </div>
        <svg class="pointer" fill="#ffffff" viewBox="0 0 48 48" width="24" v-if="exit" @click="closeModal">
            <path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path>
        </svg>
        <div class="right">
            <i class="fas fa-angle-right" @click="slide++"></i>
        </div>

    </modal>

</div>
</template>

<script>
export default {
    name: "stories",
    data() {
        return {
            exit: false,
            slide: 0,
            videos: [
                "https://instagram.fist6-1.fna.fbcdn.net/v/t51.2885-15/e35/150878382_333647071329775_8712687706046563344_n.jpg?_nc_ht=instagram.fist6-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=WAr9ZT0EBFoAX9vbZcu&tp=1&oh=2d7790c880c5aa5662df27eada0bda9f&oe=60320A5C&ig_cache_key=MjUxMTk1Nzk2MTg2MzQ3OTE5OQ%3D%3D.2",
                "https://picsum.photos/id/686/600/400",
                "https://picsum.photos/id/685/600/400",
                "https://picsum.photos/id/687/600/400"
            ]
        }
    },

    watch: {
        slide(value) {
            this.activeImage = this.videos[value]
            if (value >= this.videos.length) {
                this.slide = 0
            }

            if (value < 0)
                this.slide = 0
        }
    },

    methods: {
        closeModal() {
            this.$modal.hide("stories");
        },
        show() {
            this.$modal.show('stories');
        },

    },
    mount() {
        this.show()
    }

}
</script>

<style lang="scss" scoped>
.container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
}

i {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: rgb(121, 121, 121)
    }

}

.left {
    position: absolute;
    left: 0px;
    top: 45%;

}

.main {
    width: 80%;
    margin: 0 auto;

    .video {
        width:100%;
        border-radius:5px;
    }
}

.right {
    position: absolute;
    top: 45%;
    right: 0%;

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
