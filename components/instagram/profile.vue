<template>
<div class="container">
    <header class="profile">
        <div class="image">
            <div class="story" :class="{colorful: getStory }">
                <img src="https://picsum.photos/200/200" @click="getProfilePhoto">
            </div>
            <profile-photo />
            <v-dialog />
        </div>
        <div class="main">
            <h2 class="top">{{username}}</h2>
            <ul class="center">
                <li> <span>{{post}}</span> gönderi</li>
                <li class="pointer" @click="getFollowers"> <span>{{followers}}</span> takipçi</li>
                <li class="pointer" @click="getFollowing"> <span>{{follow}}</span> takip</li>
            </ul>
            <div class="bottom">
                <h1>{{name}}</h1>
                <br>
                <span>{{info}}</span>
            </div>
        </div>
    </header>
    <div class="highlights">
        <div class="bosluk">bosluk</div>
        <ul>
            <li v-for="asd in 1" :key="asd">
                <div class="image">
                    <img src="https://picsum.photos/80/80" @click="openStories">
                    <div class="imageDescription ">
                        uzman klinik deneme
                    </div>
                    <video-stories />
                    <!-- <stories/>  abi burda kafa gitti anlamadım o yüzden video storiesi image stories yapmadım  -->
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

    data() {
        
      return {
            username: "nerawn",
            name: "Ercüment",
            post: 0,
            followers: 390,
            follow: 250,
            info: "lorem ipsum",
            getStory: false,
            story: 0

        }
    },
    methods: {
        getProfilePhoto() {
            if (this.story >= 1) {
                this.getStory = true
                this.$modal.show('dialog', {
                    title: 'Bilgi',
                    text: 'Kullanıcının Hikayesi Bulunmakta',
                    buttons: [{
                            title: 'Kapat',
                            handler: () => {
                                this.$modal.hide('dialog')
                            }
                        },
                        {
                            title: 'Hikayeler',
                            handler: () => {
                                this.$modal.hide('dialog')
                                this.$modal.show("stories")
                            }
                        },
                        {
                            title: 'Profil Fotoğrafı',
                            color: "white",
                            handler: () => {
                                this.$modal.hide('dialog')
                                this.$modal.show("profilePhoto");
                            }
                        }
                    ]
                });
            } else {
                this.$modal.hide('dialog')
                this.$modal.show("profilePhoto");
            }
        },
        openStories() {
            this.$modal.show("stories")
        },
        getFollowers() {
            this.$modal.show("miniModal");
        },

        getFollowing() {
            this.$modal.show("miniModal");
        },

    },

}
</script>

<style lang="scss" scoped>
.container {
    width: 935px;
    padding: 30px 20px 20px 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 40px;
    color: #262626;

    .profile {
        display: flex;
        width: 935px;
        margin-bottom: 44px;

        .image {
            width: 31%;
            text-align: center;
            margin-right: 30px;
            display: flex;
            justify-content: center;

            .story {
                width: 168px;
                height: 168px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                text-align: center;
            }

            img {
                width: 160px;
                height: 160px;
                border-radius: 50%;
                cursor: pointer;
                border: 5px solid #FFFFFF;
            }
        }

        .top {
            font-size: 28px;
            height: 40px;
            margin-bottom: 20px;
            font-weight: 300;

        }

        .main {
            width: 66%;
            font-weight: 400;

            ul {
                display: flex;
                margin-bottom: 20px;

                li {
                    margin-right: 40px;
                    word-spacing: 2px;

                    span {
                        font-weight: 600;
                    }
                }
            }

            .bottom {
                font-size: 16px;

                h1 {
                    font-weight: 600;
                    word-wrap: break-word;
                }

                br {
                    display: block;
                    content: "";

                    margin-top: 10px;
                }
            }
        }
    }

    .highlights {
        height: 130px;
        display: flex;

        .bosluk {
            width: 48px;
            height: 130px;
            visibility: hidden;
        }

        ul {
            display: flex;

            li {
                width: 125px;
                height: 130px;
                text-align: center;

                .image {
                    padding: 10px 15px;

                    img {
                        width: 85px;
                        height: 85px;
                        border-radius: 100%;
                        border: 3px solid #FFFFFF;
                        box-shadow: 0px 0px 2px rgba(0, 0, 0, );
                        cursor: pointer;
                    }

                }

                .imageDescription {
                    padding-top: 15px;
                    width: 85px;
                    font-size: 14px;
                    font-weight: 600;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;

                }
            }

        }
    }

}

.colorful {
    background: linear-gradient(45deg, #f5eb6d, #ed8554, #e1306c, #fd1d1d);
}
</style>
