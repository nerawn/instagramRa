<template>
<modal name="miniModal" width="400" height="400" class="container" styles="border-radius:10px;" @before-open="beforeOpen">
    <div class="top">
        <div class=" hidden fg-1">null</div>
        <div class="title tl-center fg-2">
            <h1 class="fw-600">{{title}}</h1>
        </div>
        <div class="closeModal  flex jc-end fg-1">
            <svg class="pointer" fill="#262626" viewBox="0 0 48 48" width="24" @click="closeModal">
                <path clip-rule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path>
            </svg>
        </div>
    </div>
    <div class="center">
        <ul class="userCards">
            <li class="card " v-for="asd in 20" :key="asd">
                <div class="left">
                    <div class="image">
                        <img src="https://picsum.photos/400/400">
                    </div>
                    <div class="texts">
                        <div class="username fw-500">
                            {{username}}
                        </div>
                        <div class="name fw-400">
                            {{name}}
                        </div>
                    </div>
                </div>
                <div class="right">
                    <nuxt-link tag="button" to="/home" class="btn primary">Profil</nuxt-link>
                </div>
            </li>
        </ul>
    </div>
</modal>
</template>

<script>
export default {
    name: "miniModal",
    data() {
        return {
            username: "nerawn",
            name: "emirhan",
            title: "begenenler"
        }
    },
    methods: {
        closeModal() {
            this.$modal.hide("miniModal");
        },
        show() {
            this.$modal.show('miniModal');
        },

        beforeOpen({params}){
            if(!params)
                return
            this.username = params.username
            this.name = params.name
            this.title = params.title
        }
    },

    created() {
        this.takipciler = this.title
    },
    mount() {
        this.show()
    }

}
</script>

<style lang="scss" scoped>
.container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #262626;

}

.top {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0px 10px;
    height: 42px;
    border-bottom: 1px solid #dbdbdb;

    .title {

        h1 {
            font-size: 16px;
        }
    }

    .closeModal {
        svg {
            width: 24px;
            height: 24px;
        }
    }
}

.center {
    height: 356px;
    overflow-y: auto;

    .userCards {

        .card {
            //1em = 16px
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.49em 1em;

            .left {
                display: flex;
                font-size: 12px;

                .image {
                    img {
                        width: 44px;
                        height: 44px;
                        border-radius: 60px;
                        margin-right: 1em;
                    }
                }

                .texts {
                    font-size: 14px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    margin-left: 5px;
                }
            }

            .btn {
                background-color: #0095f6;
            }

        }
    }
}
</style>
