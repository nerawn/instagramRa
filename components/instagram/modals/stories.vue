<template>
<div class="wrapper">
    <modal name="stories" width="40%" height="90%" class="container" @opened="exit = true" @closed="exit = false" styles="background-color: transparent; box-shadow:0px 0px 0px;">
        <div class="left">
            <i class="fas fa-angle-left" @click="slide--"></i>
        </div>

        <div class="main">
            <img :src="activeImage">
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
            activeImage: "https://picsum.photos/id/684/600/400",
            slide: 0,
            images: [
                "https://instagram.fist6-1.fna.fbcdn.net/v/t51.2885-15/e35/150878382_333647071329775_8712687706046563344_n.jpg?_nc_ht=instagram.fist6-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=WAr9ZT0EBFoAX9vbZcu&tp=1&oh=2d7790c880c5aa5662df27eada0bda9f&oe=60320A5C&ig_cache_key=MjUxMTk1Nzk2MTg2MzQ3OTE5OQ%3D%3D.2",
                "https://picsum.photos/id/686/600/400",
                "https://picsum.photos/id/685/600/400",
                "https://picsum.photos/id/687/600/400"
            ]
        }
    },

    watch: {
        slide(value) {
            this.activeImage = this.images[value]
            if (value >= this.images.length) {
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
    width: 90%;
    margin: 0 auto;

    img {
        width: 75%;
        height: 90vh;
        border-radius: 10px;
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
