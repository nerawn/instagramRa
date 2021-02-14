<template>
<div class="wrapper">
    <unfollowing />
    <following />
    <followers />
</div>
</template>

<script>
export default {
    layout: "getNavbar"
}
</script>

<style lang="scss" scoped>
.wrapper {
    margin-top: 30px;
    box-shadow: 0px 0px 6px #00000029;
    min-height: 200px;
    padding: 20px 0px;
    overflow-y: auto;
    border-radius: 10px;

    &::-webkit-scrollbar {
        width: 2px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 20px;
        border: 1px solid #707070;
    }

}
</style>
