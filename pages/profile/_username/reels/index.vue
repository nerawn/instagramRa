<template>
<div class="container"  :style="{backgroundColor:$store.state.colorMode.background , color:$store.state.colorMode.color}">
    <instagram-profile-navbar />
    <instagram-profile :user="getUser" :mainUser="mainUser" />
    <instagram-whirl />
    <ul class="photos fw-400 pointer" v-if="!mainUser">
        <li class="media-reels " v-for="media in 5" :key="media" :style="{ backgroundImage: 'url(' + url + ')' }">
            <div class="center">
            </div>
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
                    <span>3.5k</span>
                </div>
                <div class="comment">
                    <img src="/comment.svg">
                    <span>3.5k</span>
                </div>
            </div>

            <media-reels :media="mediam"></media-reels>
        </li>

    </ul>
    <instagram-modals-mini-modal />

</div>
</template>

<script>
export default {
    data() {
        return {
            mediam: {
                pk: 123,
                media_type: 2,
                video_versions: [{
                    type: 123,
                    url: "https://instagram.fist6-1.fna.fbcdn.net/v/t50.2886-16/10000000_249337100017961_8758050951033882884_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5pZ3R2LmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fist6-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=d3QKaqTiGXcAX-1KvBz&vs=17885969365986720_822647357&_nc_vs=HBksFQAYJEdJQ1dtQUFwb1VaUnhlSUFBQVNKSlJYdzJJcDVicUNCQUFBRhUAAsgBABUAGCRHSUNXbUFBQzVZMllvWU1OQUswc2wwWHczd2hYYnFDQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACbAqOGLuMzFPxUCKAJDMywXQKZZ%2FfO2RaIYEmRhc2hfYmFzZWxpbmVfMV92MREAdewHAA%3D%3D&_nc_rid=54221a6afa&oe=6037D6CD&oh=ae8c2b39116431e68b455c8c16ff3756"
                }],
                image_versions2: {
                    candidates: [{
                        url: "https://instagram.fist6-2.fna.fbcdn.net/v/t51.2885-15/e35/152111447_261946675335876_7976585219088274001_n.jpg?_nc_ht=instagram.fist6-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Or0H325pQ5kAX-bf1-S&tp=1&oh=77af9c24ae465f3d535f3eaf66b9bded&oe=6037945E",
                        width: 720,
                        height: 480,
                    }]
                }
            },
            mainUser: false,
            url: "https://instagram.fist6-1.fna.fbcdn.net/v/t51.2885-15/e35/150672144_1216575615426403_7849703949096688684_n.jpg?_nc_ht=instagram.fist6-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=9ErPxfs9xZkAX8jUW7A&tp=1&oh=4066b27d07f55be53ef2d6c4bf0b97a6&oe=605EC307&ig_cache_key=MjUxMzk3MDcxOTA5ODE5NTY2Nw%3D%3D.2",
            reyting: "73,5bin",
        }
    },
    async asyncData({
        $axios,
        store,
        params
    }) {
        const username = params.username;
        const user = await $axios.$get("/" + username);
        return {
            user
        };
    },
    computed: {
        getUser() {
            return {
                bio: this.user.info.biography,
                followers: this.user.info.follower_count,
                following: this.user.info.following_count,
                verified: this.user.info.is_verified,
                medias: this.user.info.media_count,
                username: this.user.info.username,
                fullName: this.user.info.full_name,
                profilePhoto: this.user.info.profile_pic_url,
            };
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
    background-color: #F8F8F8;
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
