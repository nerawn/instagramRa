<template>
<div class="panelContainer">
    <div class="panelContainer-bottom">
        <div class="language mb-1m">
            <h5>Dil</h5>
            <select>
                <option selected>Türkçe</option>
                <option>İngilizce</option>
                <option>Arapça</option>
            </select>
        </div>

        <div class="private mb-1m">
            <h5>Hesap Gizliliği</h5>
            <div>
                <form>
                    <input type="radio" name="asd" value="private">

                    <input type="radio" name="asd" value="private">

                </form>
            </div>
            <div>
                <label>Gizli</label>

            </div>
        </div>

        <div class="theme mb-1m">
            <h5>Tema Ayarları</h5>
            <div class="flex jc-sb">
                <label>Dark Theme </label>
                <toggle-button :value="false" color="#273c75" @change="changeTheme" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    layout: "getNavbar",
    data() {
        return {}
    },
    methods: {
        changeTheme(val) {
            if (val.value)
                this.$store.commit("setDarkMode")
            else
                this.$store.commit("setClassicMode")
        },
    },
}
</script>

<style lang="scss" scoped>

.language {
    select {
        width: 100%;
        height: 40px;
        outline: 0;
        cursor: pointer;
        border-radius: 5px;

        option {
            cursor: pointer;
        }
    }
}

h5 {
    font-size: 20px;
    color: orangered;
    font-weight: 500;
    margin-bottom: 0.5em;
}
</style>
