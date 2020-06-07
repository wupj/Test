<template>
    <div class="footer clearfix">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="container">
                    <div class="left">
                        <div class="footer-menu">
                            <router-link to="/">{{ $t('lang.homePage') }}</router-link>
                        </div>
                        <div class="footer-copyright">Copyright © 2015-{{nowData}} {{ $t('lang.gank') }} gank.io 沪ICP备13038357号-9</div>
                    </div>
                    <div class="right">
                        <span v-for="(item, index) in icons" :key="index"><i :class="item"></i></span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'footer',
        data() {
            return {
                nowData: new Date().getFullYear(),
                icons: ['el-icon-user-solid', 'el-icon-user', 'el-icon-user-solid', 'el-icon-user']
            }
        }
    }
</script>

<style scoped>

</style>
