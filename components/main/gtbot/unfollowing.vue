<template>
<div class="dropdown">
    <div class="title" @click="showContent = !showContent">
        <h3>Takipten Çıkanları Göster</h3>
    </div>
    <transition name="slide-fade">
        <div class="dropdownContent" v-show="showContent">
            <profiles :color="$store.state.white" :user="user" />
        </div>
    </transition>
</div>
</template>

<script>
export default {
    data() {
        return {
            showContent: false,
             user: {
                username: "nerawn",
                date: "22.03.2003",
                profile: "profile"
            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
