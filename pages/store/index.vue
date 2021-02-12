<template>
<div class="container">
    <ul class="cardContainer">
        <li class="cards">
            <h3 class="tl-center fw-600 ">Title</h3>
            <ul class="properties">
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
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
.container {
    margin-top: 30px;
    box-shadow: 0px 0px 6px #00000029;
    min-height: 200px;
    overflow-y: auto;
    border-radius: 10px;

    .cardContainer {
        width: 85%;
        margin: 0 auto;
        display: flex;
        padding: 20px 0px;
        flex-wrap: wrap;
        flex-direction: row;
        flex-flow: wrap;

        .cards {
            width: 220px;
            height: 260px;
            border-radius: 5px;
            display: flex;
            padding-top: 15px;
            flex-direction: column;
            justify-content: space-between;
            margin: 0px 0px 30px 0px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);

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
}
</style>
