<template>
<div>
    <img src="https://picsum.photos/id/684/350/350" class="mainPhoto pointer" v-for="asd in 5" :key="asd" @click="showModal">
    <svg class="_8-yf5 " fill="#ffffff" viewBox="0 0 48 48" width="24" @click="closeModal">
        <path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path>
    </svg>
    <modal name="image" :width="width" :height="height" class="modal" style="z-index:1;">
        <div class="modal-container">
            <div class="left">
                <img src="https://picsum.photos/480/600">
            </div>
            <div class="right">
                <div class="top">
                    <div class="row">
                        <img class="pp pointer" src="https://picsum.photos/300/300">
                        <div class="texts">
                            <div class="username fw-500 pointer">
                                {{publisherUsername}}
                            </div>
                            <div class="map">
                                {{maps}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <ul class="commentsContainer">
                        <li class="comment">
                            <div class="image">
                                <img class="pp pointer" src="https://picsum.photos/300/300">
                            </div>
                            <div class="texts">
                                <div class=" fw-600">
                                    <h3 class="inline pointer">{{commentsUsername}}</h3>
                                    <span class="fw-400">
                                        {{comment}}
                                    </span>
                                </div>
                                <div class="date fw-500">
                                    <span>{{date}}</span>
                                    <button class="nbtn  fw-500 ml-5" @click="likers">{{commentLikers}} beğenme</button>
                                </div>
                            </div>

                        </li>
                    </ul>

                    <div class="likes fw-500 pointer">
                        {{photoLikers}} beğenme
                    </div>
                </div>
            </div>
        </div>
        <mini-modal />

    </modal>
</div>
</template>

<script>
import miniModalVue from './modals/miniModal.vue'
export default {
    data() {
        return {
            photoLikers: 899,
            commentLikers: 30,
            comment: "bu cümle beş kelimeden oluşuyor",
            publisherUsername: "tugcanuslu",
            maps: "KADIKÖY İSTANBUL",
            commentsUsername: "asdasdasds",
            date: "67h",

            images: [{
                    width: 350,
                    height: 350
                },
                {
                    width: 480,
                    height: 600
                }
            ]
        }
    },
    computed: {
        width() {
            return this.images[1].width + 335 + 'px'
        },
        height() {
            return this.images[1].height + 'px'
        }
    },
    methods: {
        showModal() {
            this.$modal.show("image");
        },
        likers() {
            this.$modal.show("imageLikers");
        },
        closeModal() {
            this.$modal.hide("image");
        }
    },

}
</script>

<style lang="scss" scoped>
.mainPhoto {
    width: 293px;
    height: 293px;
    display: inline;
    margin-right: 10px;
    margin-bottom: 20px;
}

.modal {
    color: #707070;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

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
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
                                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
