<template>
<div class="container">
    <img src="https://picsum.photos/id/684/293/293" v-for="asd in 5" :key="asd">
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    width: 935px;
margin: 0 auto;
    img {
        width: 293px;
        height: 293px;
        display: inline;
        margin-right: 10px;
        margin-bottom: 20px;
    }
}
</style>
