<template>
<div class="container">
    <header class="profile">
        <div class="image">
            <img src="https://picsum.photos/200/200">
        </div>
        <div class="main">
            <h2 class="top">nerawn</h2>
            <ul class="center">
                <li> <span>0</span> gönderi</li>
                <li> <span>250</span> takipçi</li>
                <li> <span>0</span> takip</li>
            </ul>
            <div class="bottom">
                <h1>Name</h1>
                <br>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempore repudiandae numquam atque consequatur commodi ut, at soluta, amet corporis, vero expedita quaerat fugiat ad aliquid sed architecto fuga esse.</span>
            </div>
        </div>
    </header>
    <div class="highlights">
        <div class="bosluk">bosluk</div>
        <ul>
            <li v-for="asd in 7" :key="asd">
                <div class="image">
                    <img src="https://picsum.photos/80/80">
                    <div class="imageDescription ">
                        uzman klinik deneme
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    width: 935px;
    padding: 30px 20px 20px 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin-bottom: 40px;
    .profile {
        display: flex;
        width: 935px;
        margin-bottom: 44px;

        .image {
            width: 31%;
            text-align: center;
            margin-right: 30px;

            img {
                width: 150px;
                height: 150px;
                border-radius: 100%;
            }
        }

        .top {
            font-size: 28px;
            height: 40px;
            margin-bottom: 20px;
            font-weight: 300;

        }

        .main {
            width: 66%;
            font-weight: 400;

            ul {
                display: flex;
                margin-bottom: 20px;

                li {
                    margin-right: 40px;
                    word-spacing: 2px;

                    span {
                        font-weight: 600;
                    }
                }
            }

            .bottom {
                font-size: 16px;

                h1 {
                    font-weight: 600;
                    word-wrap: break-word;
                }

                br {
                    display: block;
                    content: "";

                    margin-top: 10px;
                }
            }
        }
    }

    .highlights {
        height: 130px;
        display: flex;

        .bosluk {
            width: 48px;
            height: 130px;
            visibility: hidden;
        }

        ul {
            display: flex;

            li {
                width: 125px;
                height: 130px;
                text-align: center;

                .image {
                    padding: 10px 15px;

                    img {
                        width: 85px;
                        height: 85px;
                        border-radius: 100%;
                        border: 3px solid #FFFFFF;
                        box-shadow: 0px 0px 2px rgba(0, 0, 0, );
                        cursor: pointer;
                    }

                }

                .imageDescription {
                    padding-top: 15px;
                    width: 85px;
                    font-size: 14px;
                    font-weight: 600;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;

                }
            }

        }
    }

}
</style>
