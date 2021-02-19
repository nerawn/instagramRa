<template>
<div class="container">
    <div class="null hidden fg-1">logo</div>
    <div class="searchbarContainer ">
        <div class="searchbar">
            <span class="fas fa-search"></span>
            <input type="text" v-model="searchUser">
        </div>
        <div class="dropdown" v-if="openDropdown">
            <ul class="cardContainer">
                <li class="card">
                    <div class="image">
                        <img src="https://picsum.photos/600/400">
                    </div>
                    <div class="texts">
                        <p>{{username}}</p>
                        <p style="color:#8E8EA7;">{{name}}</p>
                    </div>
                </li>
            </ul>

        </div>
    </div>

    <nav class="navbar fg">
        <nuxt-link to="/stalkers" tag="div" class="icon">
            <img src="@/assets/navbarSvgFiles/hacker-black.svg">
        </nuxt-link>
        <nuxt-link to="/gtbot" tag="div" class="icon">
            <img src="@/assets/navbarSvgFiles/robot-black.svg">
        </nuxt-link>
        <nuxt-link to="/store" tag="div" class="icon">
            <img src="@/assets/navbarSvgFiles/shop-black.svg">
        </nuxt-link>
        <nuxt-link to="/settings" tag="div" class="icon">
            <img src="@/assets/navbarSvgFiles/settings-black.svg">
        </nuxt-link>
        <nuxt-link to="/home" tag="div" class="icon">
            <img src="https://picsum.photos/400/400" class="pp" alt="profile-photo">
        </nuxt-link>
    </nav>
</div>
</template>

<script>
export default {
    data() {
        return {
            username: "username",
            name: "name",
            searchUser: "",
            openDropdown: false,
        }
    },

    watch: {
        searchUser(value) {
            if (this.searchUser.length >= 1)
                this.openDropdown = true

                else
                this.openDropdown = false
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    width: 935px;
    height: 54px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    justify-content: space-between;

    .searchbarContainer {
        width: 375px;
        display: flex;
        justify-content: flex-end;
        position: relative;

        .searchbar {
            width: 215px;
            background-color: #fafafa;
            padding: 5px 10px;
            color: #CBCCCE;
            outline: 0;
            border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
            border-radius: 3px;
            display: flex;
            align-items: center;

            span {
                font-size: 13px;
            }

            input {
                background-color: transparent;
                border: 0px;
                outline: 0px;
                padding-left: 5px;
            }

        }
    }

    .dropdown {
        position: absolute;
        width: 375px;
        height: 362px;
        left: 20%;
        top: 40px;
        background-color: #FFFFFF;
        box-shadow: 0 0 5px 1px rgba(var(--jb7, 0, 0, 0), .0975);
        overflow-y: auto;

        .cardContainer {
            margin-top: 10px;

            .card {
                width: 100%;
                height: 54px;
                padding: 16px 8px;
                color: #292929;
                font-size: 14px;
                display: flex;
                align-items: center;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

                .image {
                    margin-right: 0.9em;

                    img {
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                    }
                }

                .texts {
                    height: 44px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;

                }

                &:hover {
                    background-color: #FAFAFA;
                }
            }

        }
    }

    .navbar {
        display: flex;
        justify-content: flex-end;

        .icon {
            cursor: pointer;
            margin-left: 22px;

            img {
                width: 22px;
                height: 22px;
            }

            .pp {
                border-radius: 60px;
            }
        }
    }

    .fg {
        width: 360px;
    }
}
</style>
