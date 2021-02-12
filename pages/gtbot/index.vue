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
    max-height: 640px;
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

    .dropdown {
        width: 90%;
        min-height: 48px;
        margin: 0 auto;
        font-size: 16px;
        color: white;
        margin-bottom: 10px;
        border-radius: 5px;
        cursor: pointer;

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
