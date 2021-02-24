<template>
<div class="media-container">
    <!-- <ul class="photos fw-400 pointer" >
        <li class="media-reels " :style="{ backgroundImage: 'url(' + url + ')' }">
            <div class="bottom">
                <div class="left">
                    <svg aria-label="Oynatma Sayısı Simgesi" class="_8-yf5 " fill="#ffffff" height="16" viewBox="0 0 48 48" width="16">
                        <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"></path>
                    </svg>
                </div>
                <div class="right fw-600">
                    <span>{{reyting}}</span>
                </div>
            </div>
            <div class="cover">
                <div class="like">
                    <img src="/comment.svg">
                    <span>{{like}}</span>
                </div>
                <div class="comment">
                    <img src="/comment.svg">
                    <span>{{comment}}</span>
                </div>
            </div>
        </li>
    </ul> -->
    <svg class="_8-yf5" fill="#ffffff" viewBox="0 0 48 48" width="24" @click="closeModal" v-if="exit">
        <path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path>
    </svg>
    <span class="media-icon" v-if="media.media_type == 2">
        <span class="background hidden">a</span>
    </span>
    <modal :name="media.pk.toString()" :width="getWidth + 335" :height="getHeight" class="modal" style="z-index: 1" v-if="exit">
        <div class="modal-container">
            <div class="left" style="background-color: black">
                <video :width="getWidth" :height="getHeight" controls class="noutline">
                    <source v-for="video in media.video_versions" :key="video.type" :src="video.url" />
                </video>
            </div>
            <!-- <media-sidebar :id="media.pk" :caption="media.caption" :user="media.user" :location="media.location" :height="getHeight" :likeCount="media.like_count" /> -->
        </div>
    </modal>
</div>
</template>

<script>
export default {
    props: {
        media: Object,
        url: String,
        reyting: String,
        like: String,
        comment: String
    },
    data() {
        return {
            exit: false,
        };
    },
    methods: {
        showModal() {
            this.exit = true;
            this.$nextTick(() => {
                this.$modal.show(this.media.pk.toString());
            });
        },

        closeModal() {
            this.$modal.hide(this.media.pk.toString());
        },
    },
    mounted(){
        this.showModal()
    },
    computed: {
        getWidth() {
            const width = this.media.image_versions2.candidates[0].width;
            if (width < 600) return 600;
            if (width > 1200) return 1200;
            return width;
        },

        getHeight() {
            const height = this.media.image_versions2.candidates[0].height;
            if (height < 600) return 600;
            if (height > 800) return 800;
            return height;
        },
    },
};
</script>

<style lang="scss" scoped>
.media-container {
    position: relative;

    .media-icon {
        position: absolute;
        right: 5px;
        top: 0;
        padding: 5px;
        color: white;
        width: 32px;
        height: 32px;
        background-image: url('/mediaTypes.png');
        background-repeat: no-repeat;
        background-position: 0px -34px;
    }
}

.mainPhoto {
    width: 293px;
    height: 293px;
}

.modal {
    color: #707070;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

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

.vm--modal {
    border-radius: 40px !important;
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

.pp {
    width: 32px;
    height: 32px;
    border-radius: 60px;
}
</style>
