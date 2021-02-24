<template>
    <div id="asd" :style="{backgroundColor:$store.state.colorMode.background , color:$store.state.colorMode.color}">
<Nuxt/>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
#asd{
    width: 100%;
}
</style>