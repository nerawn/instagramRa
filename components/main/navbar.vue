<template>
<div class="container" :style="{backgroundColor:$store.state.colorMode.background , color:$store.state.colorMode.color}">
    <div class="cards" >
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
        <nuxt-link tag="div" to="/settings" class="ayarlar">
            <div class="icon"><img src="@/assets/navbarSvgFiles/settings.svg">
                <b>Ayarlar</b>
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
.container {
    min-width: 80%;
    max-width: 935px;
    height: 180px;
    background-color: #F8F8F8;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);

    .cards {
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        div {
            width: 130px;
            height: 150px;
            border-radius: 10px;
            color: white;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            cursor: pointer;

            img,
            i {
                width: 40px;
                height: 40px;
                font-size: 40px;
            }

            b {
                margin-top: 20px;
                font-size: 13px;
                font-weight: 500;
                text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
            }
        }

    }

    .hesaplariGoruntule {
        background-color: #2980B9;
    }

    .banaKimBakti {
        background-color: #16A085;
    }

    .gtBotu {
        background-color: #8E44AD;
    }

    .magaza {
        background-color: #E74C3C;
    }

    .ayarlar {
        background-color: #FF9F43;
    }
img{
    fill: white;
}
}
</style>
