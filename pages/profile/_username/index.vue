<template>
<div class="container"  :style="{backgroundColor:$store.state.colorMode.background , color:$store.state.colorMode.color}">
    <instagram-profile-navbar />
    <instagram-profile :user="getUser" :mainUser="mainUser" />
    <instagram-whirl />
    <div class="photos fw-400" v-if="!mainUser">
        <div v-for="media in user.media" class="photo" :key="media.id">
            <media-photo v-if="media.media_type == 1" :media="media" class="even" />
            <media-video v-if="media.media_type == 2" :media="media" class="even" />
            <instagram-photos photo v-if="media.media_type == 8" :media="media" class="even" />
            <!-- <slider v-if="photo.media_type == 8" :photo="photo" /> -->
        </div>
    </div>
    <instagram-modals-mini-modal />
    <div class="router flex jc-se align-center" v-if="mainUser">
        <nuxt-link tag="div" to="/search" class="hesaplariGoruntule">
            <div class="icon"><i class="fas fa-search"></i>
                <b>Hesapları Görüntüle</b>
            </div>
        </nuxt-link>
        <nuxt-link tag="div" to="/stalkers" class="banaKimBakti">
            <div class="icon">
                <img src="@/assets/navbarSvgFiles/hacker.svg">
                <b>Bana Kim Baktı?</b>
            </div>
        </nuxt-link>
        <nuxt-link tag="div" to="/gtbot" class="gtBotu">
            <div class="icon">
                <img src="@/assets/navbarSvgFiles/robot.svg">
                <b>GT Botu</b>
            </div>
        </nuxt-link>
        <nuxt-link tag="div" to="/store" class="magaza">
            <div class="icon">
                <img src="@/assets/navbarSvgFiles/shop.svg">
                <b>Mağaza</b>
            </div>
        </nuxt-link>

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            mainUser: false
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
        grid-template-columns: auto auto auto;
        grid-gap: 30px 30px;
        width: 100%;
    }

    .photo {
        width: 100%;
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
.even{
    max-width: 293px;
}
</style>
