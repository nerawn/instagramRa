<template>
<div class="container">
    <div class="null hidden fg-1">logo</div>
    <div class="searchbar ">
        <span class="fas fa-search"></span>
        <input type="text">
    </div>
    <nav class="navbar fg">
        <nuxt-link to="/stalkers" tag="div" class="icon">
            <img src="@/assets/navbarSvgFiles/hacker.svg">
        </nuxt-link>
        <nuxt-link to="/gtbot" tag="div" class="icon">
            <img src="@/assets/navbarSvgFiles/robot.svg">
        </nuxt-link>
        <nuxt-link to="/shop" tag="div" class="icon">
            <img src="@/assets/navbarSvgFiles/shop.svg">
        </nuxt-link>
        <nuxt-link to="/settings" tag="div" class="icon">
            <img src="@/assets/navbarSvgFiles/settings.svg">
        </nuxt-link>
        <nuxt-link to="/home" tag="div" class="icon">
            <img src="https://picsum.photos/400/400" class="pp" alt="profile-photo">
        </nuxt-link>
    </nav>
</div>
</template>

<script>
export default {

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
