<template>
<div :style="{backgroundColor:$store.state.colorMode.background , color:$store.state.colorMode.color}">
<div id="app" >
    <Nuxt />
</div>
</div>
</template>

<style lang="scss">
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

.vm--overlay {
    background: rgba(0, 0, 0, 0.5) !important;
}

.dropdown {
    background-color: #3CAEA3;
    width: 90%;
    min-height: 48px;
    margin: 0 auto;
    font-size: 16px;
    color: white;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;

    .title {
        width: 100%;
        height: 48px;
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
        transition: all 500ms;

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
.nuxt-progress{
   background: linear-gradient(90deg,  #405de6 5%,  #5851db 25%, #833ab4 45%,#c13584, 60%,#e1306c 75% ,#f56040 90% ,#fcaf45 100%  ) ; 
   border-radius: 10px;
    
}
</style>    
