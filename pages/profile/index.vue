<template>
<div class="container">
    <profile-navbar />
    <profile />
    <div class="photos fw-400">
        <photos v-for="(photo, index) in 5" class="photo" :key="index" />
         <videos v-for="(video, asd) in 1" class="photo" :key="asd" />
    </div>    
    <mini-modal />
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    width: 935px;
    margin: 0 auto;

    .photos {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 30px 30px;
        width: 100%;
    }

    .photo {
        width: 100%;
    }
}
</style>
