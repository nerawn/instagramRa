<template>
<div class="panelContainer" :style="{backgroundColor:$store.state.colorMode.background , color:$store.state.colorMode.color}">
    <ul class="panelContainer-bottom ">
        <li class="cards " v-for="(card , index) in 5" :key="index">
            <h3 class="tl-center fw-600 ">Title</h3>
            <ul class="properties">
                <li>Sınırsız Hikaye Görüntüleme</li>
                <li>Bana Kim Baktı</li>
                <li>GT Botu Özel Analiz</li>
            </ul>
            <div class="bottom">
                <h1 class="count fw-500 flex align-center ml-5">75 TL</h1>
                <button class="btn primary">Satın Al</button>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    layout: "getNavbar"
}
</script>

<style lang="scss" scoped>
.panelContainer-bottom {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px 10px;

    .cards {
        width: 80%;
        height: 260px;
        border-radius: 5px;
        display: inline-block;
        padding-top: 15px;
        position: relative;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.6);
        .properties {
            height: 160px;
            padding-left: 10px;
            padding-right: 10px;

            li {
                list-style: circle;
                font-size: 13px;
                margin-top: 10px;

                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;

            }
        }

        .bottom {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            background-color: #2c3e50;
            border-radius: 5px;
            color: white;
            position: absolute;
            bottom: 0px;

            .count {
                height: 20px;
                font-size: 18px;
            }

            .btn {
                background-color: #e74c3c;
                box-shadow: none;
            }

        }
    }
}
</style>
