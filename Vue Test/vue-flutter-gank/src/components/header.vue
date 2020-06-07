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
                        <div class="icon">
                            <el-tooltip :content="$t('lang.nightMode')" placement="bottom">
                                <i ref="icon-style" class="style-pattern daytime" @click="toggleStyle"></i>
                            </el-tooltip>
                            <el-tooltip :content="$t('lang.searchTooltip')" placement="bottom">
                                <i ref="icon-search" class="icon-search el-icon-search" @click="toggleSearch"></i>
                            </el-tooltip>
                        </div>
                        <el-radio-group class="lang" v-model="lang" size="mini" @change="changeLanguage">
                            <el-radio-button label="zh">中</el-radio-button>
                            <el-radio-button label="en">EN</el-radio-button>
                        </el-radio-group>
                        <transition
                                enter-active-class="fadeInDown"
                                leave-active-class="fadeOutUp">
                            <div ref="search-input" class="search-input animated" v-show="showSearch">
                                <el-input
                                        :placeholder="$t('lang.searchPlaceholder')"
                                        suffix-icon="el-icon-search"
                                        clearable
                                        v-model="searchText"
                                        @keyup.enter.native="search">
                                </el-input>
                            </div>
                        </transition>
                    </div>
                </el-col>
            </el-row>
        </el-header>
    </div>
</template>

<script>
    import { setup } from "@/locales/index.js"
    export default {
        name: 'header',
        data() {
            return {
                lang: sessionStorage.getItem('language'),
                navs: [{
                    name: this.$t('lang.home'),
                    href: '/'
                }, {
                    name: this.$t('lang.sister'),
                    href: '/specials/Girl'
                }, {
                    name: this.$t('lang.dryGoods'),
                    href: 'javascript:;',
                    children: [{
                        name: 'Android',
                        href: '/specials/Android',
                    }, {
                        name: 'Flutter',
                        href: '/specials/Flutter',
                    }, {
                        name: 'IOS',
                        href: '/specials/iOS',
                    }]
                }, {
                    name: this.$t('lang.topic'),
                    href: '/specials'
                }, {
                    name: 'Flutter',
                    href: '/specials/Flutter'
                }, {
                    name: this.$t('lang.message'),
                    href: '/feedback'
                }],
                showSearch: false,
                searchText: ''
            }
        },
        methods: {
            /**
             * 切换中英文
             */
            changeLanguage() {
                sessionStorage.setItem('language', this.lang)
                setup(this.lang)
                location.reload()
            },
            /**
             * 切换样式
             */
            toggleStyle() {
                this.$refs['icon-style'].classList.toggle('nighttime')
            },
            /**
             * 展开、折叠搜索框
             */
            toggleSearch() {
                this.$refs['icon-search'].classList.toggle('el-icon-close')
                if (this.showSearch) {
                    this.showSearch = false
                } else {
                    this.showSearch = true
                }
            },
            /**
             * 搜索
             */
            search() {

            }
        }
    }
</script>
