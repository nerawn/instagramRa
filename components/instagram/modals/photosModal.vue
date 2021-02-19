<template>
<modal :name="name" :width="width" :height="height" class="modal" style="z-index:1;" @opened="$parent.exit = true" @closed="$parent.exit = false">
    <div class="modal-container">
        <div class="left">
            <div class="leftArrow absolute" @click="slide--" v-if="isSlider">
                <img src="/leftArrow.png">
            </div>
            <img :src="photos[slide]">
            <div class="rightArrow absolute " v-if="isSlider">
                <img src="/rightArrow.png" @click="slide++">
            </div>
        </div>
        <!-- <div class="right" >
            <div class="top">
                <div class="row">
                    <img class="pp pointer" src="https://picsum.photos/300/300">
                    <div class="texts">
                        <div class="username fw-500 pointer">
                            {{userData.publisherUsername}}
                        </div>
                        <div class="map">
                            {{userData.maps}}
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
                                <h3 class="inline pointer">{{userData.commentsUsername}}</h3>
                                <span class="fw-400">
                                    {{userData.comment}}
                                </span>
                            </div>
                            <div class="date fw-500">
                                <span>{{userData.date}}</span>
                                <button class="nbtn  fw-500 ml-5" @click="likers">{{userData.commentLikers}} beğenme</button>
                            </div>
                        </div>

                    </li>
                </ul>

                <div class="likes fw-500 pointer">
                    {{userData.photoLikers}} beğenme
                </div>
            </div>
        </div> -->
    </div>
</modal>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            activeImage: "https://picsum.photos/600/600",
        }
    },
    props: {
        name: String,
        width: Number,
        height: Number,
        photos: Array,
        usersData: {}
    },
        watch: {
        slide(value) {
            this.activeImage = this.photos[value]
            if (value >= this.photos.length) {
                this.slide = 0
            }

            if (value < 0)
                this.slide = 0
        }
    },
    computed: {
        isSlider() {
            // return this.photos.length > 1 ? false : true      - Aşağıdaki ile aynısı
            if (this.photos.length > 1)
                return true
            return false
        }
    },
    created() {
        console.log(this.usersData)
    }
}
</script>

<style lang="scss" scoped>
.modal {
    color: #707070;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    .left {
        display: flex;
        position: relative;

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

.pp {
    width: 32px;
    height: 32px;
    border-radius: 60px;
}
</style>
