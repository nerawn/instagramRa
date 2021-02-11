<template>
<div class="container">
    <div class="cards">
        <nuxt-link tag="div" to="/hesaplariGoruntule" class="hesaplariGoruntule">
            <div class="icon"><i class="fas fa-search"></i>
              <b>Hesapları Görüntüle</b>
            </div>
        </nuxt-link>
        <nuxt-link tag="div" to="/hesaplariGoruntule" class="banaKimBakti">
            <div class="icon">
                <img src="@/assets/navbarSvgFiles/hacker.svg">
                <b>Bana Kim Baktı?</b>
            </div>
        </nuxt-link>
        <nuxt-link tag="div" to="/hesaplariGoruntule" class="gtBotu">
            <div class="icon">
                <img src="@/assets/navbarSvgFiles/robot.svg">
                <b>GT Botu</b>
            </div>
        </nuxt-link>
        <nuxt-link tag="div" to="/hesaplariGoruntule" class="magaza">
            <div class="icon">
                <img src="@/assets/navbarSvgFiles/shop.svg">
                <b>Mağaza</b>
            </div>
        </nuxt-link>
       <nuxt-link tag="div" to="/hesaplariGoruntule" class="ayarlar">
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

            img ,i{
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

}
</style>
