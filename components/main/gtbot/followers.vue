<template>
<div class="dropdown">
    <div class="title" @click="showContent = !showContent">
        <h3>Takip Edilmeyenleri Göster</h3>
    </div>
    <transition name="slide-fade">
        <div class="dropdownContent" v-if="showContent">
            <profiles :color="$store.state.white" />
        </div>
    </transition>
</div>
</template>

<script>
export default {
    data() {
        return {
            showContent: false,
           
        }
    },
}
</script>

<style lang="scss" scoped>
.dropdown {
    background-color: #F6B35C;

}
</style>
