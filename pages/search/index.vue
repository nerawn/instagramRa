<template>
<div class="panelContainer">
    <div class="panelContainer-bottom">
        <div class="search flex align-center color-main">
            <label for=""><i class="fas fa-search"></i></label>
            <input type="text" placeholder="Hesap Ara">
        </div>

        <ul>
            <li class="profiles flex jc-sb align-center pointer ">
                <nuxt-link class="left flex" tag="div" to="/profile">
                    <div class="image flex align-center">
                        <img class="flex" src="https://picsum.photos/200/200" alt="profile photos">
                    </div>
                    <div class="center flex jc-sa  fd-column fw-400">
                        <div class="username">userName</div>
                        <div class="name">name</div>
                    </div>
                </nuxt-link>
                <div class="right pointer flex jc-sb align-center">
                    <i class="fas fa-lock" style="font-size:16px"></i>
                    <i class="fas fa-times ml-5"></i>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    layout: "getNavbar"
}
</script>

<style lang="scss" scoped>
.search {
    width: 100%;
    height: 45px;
    padding: 0px 10px;
    border: 1px solid #707070;
    border-radius: 26px;
    color: #707070;
    cursor: pointer;

    input {
        width: 100%;
        height: 40px;
        border: none;
        outline: none;
        padding: 0px 10px;
        background-color: transparent;
        font-size: 16px;
    }
}

.profiles {
    width: 100%;
    height: 50px;
    margin: 0 auto;
    margin-top: 20px;
    color: #707070FA;

    .left {
        .image {
            img {
                width: 40px;
                height: 40px;
                border-radius: 60px;
            }
        }

        .center {
            margin-left: 5px;
            font-size: 14px;
        }
    }

    .right {
        width: 5%;
        i {
            font-size: 20px;
        }
    }
}
</style>
