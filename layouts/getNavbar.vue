<template>
<div :style="{backgroundColor:$store.state.colorMode.background , color:$store.state.colorMode.color}">
<div id="app">
    <main-navbar />
    <Nuxt />
</div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
#app {
    max-width: 935px;
    margin: 0 auto;
    font-family: roboto;
    min-height: 100vh;
    color: #262626;
}

.hesaplariGoruntule {
    background-color: #2980B9;
}

.banaKimBakti {
    background-color: #16A085;
}

.gtBotu {
    background-color: #8E44AD;
}

.magaza {
    background-color: #E74C3C;
}

.ayarlar {
    background-color: #FF9F43;
}
</style>
