<template>
<modal :name="name" :width="getWidth + 335" :height="getHeight" class="modal" style="z-index: 1" @opened="$parent.exit = true" @closed="$parent.exit = false">
    <div class="modal-container" v-if="changed">
        <div class="left" style="background-color: black">
            <div class="leftArrow absolute" @click="slide--" v-if="isSlider">
                <img src="/leftArrow.png" />
            </div>
            <img v-if="media.carousel_media[slide].media_type == 1" :src="media.carousel_media[slide].image_versions2.candidates[0].url" :style="{ width: getWidth + 'px', height: getHeight + 'px' }" style="object-fit: contain" />
            <video :width="getWidth" :height="getHeight" controls class="noutline" v-if="media.carousel_media[slide].media_type == 2" @click.stop="()=>{}">
                <source v-for="video in media.carousel_media[slide].video_versions" :key="video.type" :src="video.url" />
            </video>
            <div class="rightArrow absolute" v-if="isSlider">
                <img src="/rightArrow.png" @click="slide++" />
            </div>
        </div>

        <media-sidebar :id="name" :caption="media.caption" :user="media.user" :location="media.location" :height="getHeight" :likeCount="media.like_count" />
    </div>
</modal>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            changed: true,
        };
    },
    props: {
        name: String,
        width: Number,
        height: Number,
        media: Object,
        usersData: {},
    },
    watch: {
        slide(value) {
            this.changed = false;
            this.$nextTick(() => {
                this.changed = true;
            });

            if (value >= this.media.carousel_media_count) {
                this.slide = 0;
            }

            if (value < 0) this.slide = 0;
        },
    },
    computed: {
        isSlider() {
            // return this.photos.length > 1 ? false : true      - Aşağıdaki ile aynısı
            if (this.media.carousel_media_count > 1) return true;
            return false;
        },

        getWidth() {
            const width = this.media.carousel_media[this.slide].image_versions2
                .candidates[0].width;
            if (width > 600) return 600;
            return width;
        },

        getHeight() {
            const height = this.media.carousel_media[this.slide].image_versions2
                .candidates[0].height;
            if (height > 600) return 600;
            return height;
        },
    },
    created() {
        console.log(this.media);
    },
};
</script>

<style lang="scss" scoped>
.modal {
    color: #707070;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    .left {
        display: flex;
        position: relative;


video{
width: 600px;
height: 600px;
}

        .leftArrow,
        .rightArrow {
            position: absolute;

            img {
                width: 1.5em;
                height: 1.5em;
                border-radius: 50%;
                cursor: pointer;
            }
        }

        .leftArrow {
            top: 50%;
            left: 1em;
        }

        .rightArrow {
            top: 50%;
            right: 1em;
        }
    }

    .modal-container {
        display: flex;

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
                width: 302px;

                .commentsContainer {
                    padding: 12px 16px;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
                    height: 374px;
                    overflow-y: auto;

                    &::-webkit-scrollbar {
                        width: 0px;
                    }

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
                                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                                        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
                                        "Helvetica Neue", sans-serif;
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
                }
            }
        }
    }
}

.pp {
    width: 32px;
    height: 32px;
    border-radius: 60px;
}
</style>
