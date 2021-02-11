<template>
<div class="container">
    <profile />
    <div class="router">
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

}
</script>

<style lang="scss" scoped>
.router {
    min-width: 80%;
    max-width: 935px;
    background-color: #F8F8F8;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);
    height: 260px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

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
