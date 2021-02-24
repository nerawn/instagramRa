<template>
<div class="dropdown">
    <div class="title" @click="showContent = !showContent">
        <h3>Takip Edilenleri Göster</h3>
    </div>
    <transition name="slide-fade">
    <div class="dropdownContent" v-show="showContent">
        <main-profiles :color="$store.state.white" />
    </div>
    </transition>
</div>
</template>

<script>
export default {
    data() {
        return {
            showContent: false
        }
    },
}
</script>

<style lang="scss" scoped>
.dropdown {
    background-color: #FF6161;
}
</style>
