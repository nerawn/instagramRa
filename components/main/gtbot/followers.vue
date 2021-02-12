<template>
<div class="dropdown">
    <div class="title" @click="showContent = !showContent">
        <h3>Takip Edilmeyenleri Göster</h3>
    </div>
    <transition name="slide-fade">
        <div class="dropdownContent" v-if="showContent">
            <profiles />
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
    background-color: #F6B35C;

    .title {
        width: 100%;
        height: 48px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;

        h3::selection {
            display: none;
        }
    }

    .dropdownContent {
        padding: 10px 0px;
        transition: all 2s;
    }
}

.slide-fade-enter-active {
    transition: all .500ms ease;
}

.slide-fade-leave-active {
    transition: all .500ms cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
    {
    transform: translateY(10px);
    opacity: 0;
}
</style>
