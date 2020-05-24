<template>
    <div class="index">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="no-gutters">
                    <el-carousel>
                        <el-carousel-item v-for="(item, index) in banners" :key="index">
                            <el-image :src="item.image" :alt="item.alt">
                            </el-image>
                            <span class="img-title"> {{ item.title }}</span>
                        </el-carousel-item>
                    </el-carousel>
                    <div class="main-nav">
                        <el-radio-group v-model="radio" size="mini">
                            <el-radio-button v-for="(item, index) in navs" :key="index" :label="item.type">
                                {{ item.name }}
                            </el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="card-list">
                        <el-card class="box-card" v-for="(item, index) in data" :key="index">
                            <template v-if="category === 'Girl'">
                                <div class="list-top">
                                    <div class="list-top-title">
                                        <span class="type">{{ type[item.type]}}</span>
                                        {{ item.title }}
                                    </div>
                                    <div class="list-top-author">{{ item.author }} {{ type[item.type]}}</div>
                                </div>
                                <div class="list-img">
                                    <el-image :src="item.url" :alt="item.alt">
                                    </el-image>
                                </div>
                                <div class="list-text">{{ item.desc }}</div>
                            </template>
                            <template v-else>
                                <div class="list-left-img">
                                    <el-image :src="item.images[0]" :alt="item.alt">
                                    </el-image>
                                </div>
                                <div class="list-content">
                                    <div class="list-body">
                                        <div class="list-body-title">
                                            <span class="type">{{ type[item.type]}}</span>
                                            {{ item.title }}
                                        </div>
                                        <div class="list-text">{{ item.desc }}</div>
                                    </div>
                                    <div class="list-footer">{{ item.author }} {{ type[item.type]}}</div>
                                </div>
                            </template>
                        </el-card>
                    </div>
                </div>
                <div class="sidebar">
                    <v-randomGirl></v-randomGirl>
                    <v-hotGirl></v-hotGirl>
                    <v-hotArticle></v-hotArticle>
                    <v-hotGanhuo></v-hotGanhuo>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import randomGirl from '@/components/randomGirl'
    import hotGirl from '@/components/hotGirl'
    import hotArticle from '@/components/hotArticle'
    import hotGanhuo from '@/components/hotGanhuo'

    export default {
        name: 'index',
        components: {
            'v-randomGirl': randomGirl,
            'v-hotGirl': hotGirl,
            'v-hotArticle': hotArticle,
            'v-hotGanhuo': hotGanhuo,
        },
        data() {
            return {
                type: {
                    Girl: '妹纸'
                },
                navs: [{
                    type: 'Girl',
                    name: '妹纸'
                }, {
                    type: 'promote',
                    name: '推荐'
                }, {
                    type: 'Android',
                    name: 'Android'
                }, {
                    type: 'Flutter',
                    name: 'Flutter'
                }, {
                    type: 'iOS',
                    name: 'IOS'
                }, {
                    type: 'frontend',
                    name: '前端'
                }, {
                    type: 'backend',
                    name: '后端'
                }, {
                    type: 'app',
                    name: 'APP'
                }],
                radio: 'Girl',
                category: 'Girl',
                banners: [],
                data: [],
                count: 10,
                page: 1
            }
        },
        mounted() {
            this.bannersData()
            this.listData()
        },
        watch: {
            radio(value) {
                // 数据类型
                if(value === 'Girl') {
                    this.category = 'Girl'
                } else if (value === 'promote') {
                    this.category = 'Article'
                } else {
                    this.category = 'GanHuo'
                }
                this.listData()
            }
        },
        methods: {
            /* 获取轮播图数据 */
            bannersData() {
                this.$get('/banners ').then(res => {
                    if (res.status === 100) {
                        this.banners = res.data
                    }
                })
            },
            /* 获取列表数据 */
            listData() {
                this.$get(`/data/category/${this.category}/type/${this.radio}/page/${this.page}/count/${this.count}`).then(res => {
                    if (res.status === 100) {
                        this.data = res.data
                    }
                })
            }
        }
    }
</script>
