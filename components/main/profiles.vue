<template>
<ul>
    <li class="accounts">
        <div class="left " :style="{color:  color ? null : '#262626 ', color  }">
            <p v-if="!data">***********</p>
            <p v-else>{{data}}</p>
            <p>{{date}}</p>
        </div>
        <div class="right">
            <button class="btn primary" @click="show++" :class="{success: show==1}">{{changeButton}}</button>
        </div>
    </li>
</ul>
</template>

<script>
export default {
    data() {
        return {
            data: "",
            changeButton: "Göster",
            show: 0,
            date: "22.03.2021",
        }
    },

    props: {
        color: {
            type: String, 
        },
    },

    watch: {
        show(value) {

            if (this.show == 1) {
                this.changeButton = "Profil"
                this.data = "username"

            }
            if (this.show == 2) {
                this.show = 0
                this.changeButton = "Göster"
                this.data = ""
                this.$router.push('/home')

            }

        }
    },
}
</script>

<style lang="scss" scoped>
ul {
    .accounts {
        width: 90%;
        margin: 0 auto;
        height: 40px;
        color: #262626;
        letter-spacing: 1px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        .left {
            display: flex;
            height: 40px;
            flex-direction: column;
            justify-content: space-between;

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
