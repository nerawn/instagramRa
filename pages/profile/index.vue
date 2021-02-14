<template>
<div class="container">
    <profile-navbar />
    <profile />
    <div class="photos">
        <photos v-for="(photo, index) in 5" class="photo" :key="index" />
    </div>
    <mini-modal />
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

    .photos{
        float: left;
        display: flex;
        flex-wrap: wrap;
    }
    photos{
        display: none;
    }
}
</style>
