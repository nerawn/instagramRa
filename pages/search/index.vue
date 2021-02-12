<template>
<div class="container">
    <div class="search">
        <label for=""><i class="fas fa-search"></i></label>
        <input type="text" placeholder="Hesap Ara">
    </div>

    <ul>
        <li class="profiles flex pointer">
            <div class="left">
                <div class="image flex align-center">
                    <img class="flex" src="https://picsum.photos/200/200" alt="profile photos">
                </div>
                <div class="center">
                    <div class="username">userName</div>
                    <div class="name">name</div>
                </div>
            </div>
            <div class="right pointer ">

                <i class="fas fa-lock" style="font-size:16px"></i>
                <i class="fas fa-times ml-5"></i>
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
    max-height: 640px;
    padding: 20px 0px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 2px;
        /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-thumb {
        /* color of the scroll thumb */
        border-radius: 20px;
        /* roundness of the scroll thumb */
        border: 1px solid #707070;
        /* creates padding around scroll thumb */
    }

    .search {
        width: 90%;
        margin: 0 auto;
        height: 45px;
        display: flex;
        align-items: center;
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
            color: #707070;
            font-size: 16px;
        }
    }

    .profiles {
        width: 90%;
        height: 50px;
        margin: 0 auto;
        margin-top: 20px;
        justify-content: space-between;
        align-items: center;
        color: #707070FA;

        .left {
            display: flex;

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
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                font-weight: 400;

            }
        }

        .right {
            display: flex;
            width: 5%;
            justify-content: space-between;
            align-items: center;

            i {
                font-size: 20px;
            }
        }
    }
}
</style>
