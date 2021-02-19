<template>
<ul>
    <li class="accounts flex jc-sb align-center color-main">
      
        <div class="left flex fd-column jc-sb " :style="{color:  color ? null : '#262626 ', color  }">
               
            <p v-if="!user">***********</p>
            <p v-else>{{user.username}}</p>
            <p v-if="user">{{user.date}}</p>
        </div>
        <div class="right">
            <button class="btn primary" @click="pushProfile" :class="{success: show==1}">{{changeButton}}</button>
        </div>
    </li>
</ul>
</template>

<script>
export default {
    data() {
        return {
            changeButton: "Göster ",
            show: 0,
        }
    },
    methods: {
        pushProfile() {

            return this.show++
        }
    },

    props: {
        color: {
            type: String,
        },
        user: {
            type: Object
        }
    },

    created() {
        if (this.user)
            this.changeButton = "Profil"

    },

    watch: {
        show(value) {
            if (this.show == 1 && !this.user) {
                this.changeButton = "Profil"
                this.user = "username"
            } else {
                this.$router.push('/' + this.user.profile)
            }
            if (this.show == 2) {
                this.show = 0
                this.user = ""
                this.$router.push('/home')
            }

        }
    },
}
</script>

<style lang="scss" scoped>
ul {
    .accounts {
        width: 100%;
        margin: 0 auto;
        height: 40px;
        letter-spacing: 1px;
        margin-bottom: 20px;

        .left {
            height: 40px;

            p::selection {
                display: none;
            }
        }

        .right {
            .btn {
                width: 100px;
                height: 35px;
            }
        }
    }
}
</style>
