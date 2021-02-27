<template>
<div class="container">
    <div class="login">
        <h1>Ra</h1>
        <div class="inputs">
            <input type="text" class="username pointer" placeholder="Kullanıcı Adı" v-model="username" @keyup.enter="login" />
            <div class="password" :class="{ 'active': isActive }">
                <input :type="type" class="nbtn" placeholder="Şifre" v-model="password" @focus="isActive = true" @blur="isActive = false" @keyup.enter="login" />
                <i class="fas fa-eye pointer" :class="{'fa-eye-slash' : visible  }" @click="visible = !visible"></i>
            </div>
        </div>
        <center>
            <button class="btn primary" @click="login">Giriş Yap</button>
        </center>
        <center class="mt-5">
            <small>Giriş yaparak kullanıcı şartlarımızı ve gizlilik politikamızı kabul
                etmiş olursunuz</small>
        </center>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            isActive: false,
            visible: false,
            type: "password"

        };
    },
    methods: {
        async login() {
            await this.$axios.$post("/login", {
                username: this.username,
                password: this.password,
            });
            const self = await this.$axios.$get("/");
            this.$store.commit("login", self);
            this.$router.push("/profile/" + this.username);
        },

    },

    watch: {
        visible(value) {
            if (value == true)
                this.type = "text"

            else  
            this.type = "password"
        }
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .login {
        width: 380px;
        height: 480px;
        box-shadow: 0px 0px 6px #2699fb;
        border-radius: 5px;

        h1 {
            text-align: center;
            color: #2699fb;
            font-size: 75px;
            font-weight: bold;
            margin-top: 20px;
        }

        .inputs {
            margin-top: 3em;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;

            .username,
            .password {
                border: 2px solid #bce0fd;
                width: 80%;
                height: 45px;
                border-radius: 5px;
                outline: 0;
                padding: 0px 20px;
                color: #2699fb;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-weight: 600;
                transition: border 500ms ease-in-out;

                &:focus {
                    border-color: #2699fb;
                }

                &::placeholder {
                    color: #bce0fd;
                    opacity: 1;
                }
            }
        }

        .password {
            width: 80%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: relative;

            input {
                width: 90%;
                color: #2699fb;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-weight: 600;

                &::placeholder {
                    color: #bce0fd;
                    opacity: 1;
                }
            }

            i {
                position: absolute;
                right: 10px;
            }
        }

        .primary {
            border-radius: 60px;
            width: 80%;
            height: 45px;
            margin-top: 20%;
            font-size: 18px;
        }

        small {
            width: 80%;
            color: #2699fb;
            line-height: 1.3;

            &::selection {
                color: crimson;
            }
        }
    }
}

.active {
    border-color: #2699fb !important;

    input {
        color: #2699fb;
    }

}
</style>
