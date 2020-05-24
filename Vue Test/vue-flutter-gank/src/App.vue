<template>
    <div id="app">
        <v-header></v-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import header from './components/header.vue'
    import footer from './components/footer.vue'
    export default {
        name: 'App',
        components: {
            'v-header': header,
            'v-footer': footer
        }
    }
</script>

<style lang="scss">
    @import './style/base';
    @import './style/common';
    @import './style/detail';
</style>
