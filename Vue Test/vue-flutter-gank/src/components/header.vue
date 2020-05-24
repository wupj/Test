<template>
    <div class="header clearfix">
        <el-header>
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="container">
                        <div class="logo"></div>
                        <div class="nav">
                            <ul>
                                <li v-for="(item, index) in navs" :key="index">
                                    <router-link v-if="!item.children" :to="item.href">{{ item.name }}</router-link>
                                    <el-dropdown v-else>
                                        <span class="el-dropdown-link">
                                            <span>{{ item.name }}</span>
                                            <i ref="dropdownIcon" class="el-icon-arrow-down"></i>
                                        </span>
                                        <el-dropdown-menu trigger="hover" class="nav-dropdown">
                                            <el-dropdown-item v-for="(key, i) in item.children" :key="i">
                                                <router-link :to="key.href">{{ key.name }}</router-link>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-header>
    </div>
</template>

<script>
    export default {
        name: 'header',
        data() {
            return {
                navs: [{
                    name: '首页',
                    href: '/'
                }, {
                    name: '妹子',
                    href: '/specials/girl'
                }, {
                    name: '干货',
                    href: 'javascript:;',
                    children: [{
                        name: 'Android',
                        href: '/ganhuo/android',
                    }, {
                        name: 'Flutter',
                        href: '/ganhuo/flutter',
                    }, {
                        name: 'IOS',
                        href: '/ganhuo/ios',
                    }]
                }, {
                    name: '专题',
                    href: '/specials'
                }, {
                    name: 'Flutter',
                    href: '/specials/flutter'
                }, {
                    name: 'API',
                    href: '/api'
                }, {
                    name: '留言',
                    href: '/feedback'
                }]
            }
        }
    }
</script>
