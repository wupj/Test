<template>
    <div class="special">
        <el-breadcrumb separator="/" style="margin-bottom: 20px;">
            <el-breadcrumb-item :to="`/specials`">全部专题</el-breadcrumb-item>
            <el-breadcrumb-item>专题</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="no-gutters">
            <div class="top">
                <el-image :src="categoryType.image" :alt="categoryType.name">
                </el-image>
                <div class="top-text">
                    <div class="name">{{categoryType.name}}</div>
                    <div class="desc">{{categoryType.desc}}</div>
                </div>
            </div>
            <div class="card-list">
                <el-card class="box-card" v-for="(item, index) in listData" :key="index">
                    <template v-if="category === 'Girl'">
                        <div class="list-top">
                            <div class="list-top-title">
                                <router-link :to="`/post/${item._id}`">
                                    <span class="type">{{ categoryType.name }}</span>
                                    {{ item.title }}
                                </router-link>
                            </div>
                            <div class="list-top-author">{{ item.author }} {{ categoryType.name }}</div>
                        </div>
                        <div class="list-img">
                            <router-link :to="`/post/${item._id}`">
                                <el-image :src="item.url" :alt="item.alt">
                                </el-image>
                            </router-link>
                        </div>
                        <div class="list-text">{{ item.desc }}</div>
                    </template>
                    <template v-else>
                        <div class="list-left-img">
                            <router-link :to="`/post/${item._id}`">
                                <el-image :src="item.images[0]" :alt="item.alt">
                                </el-image>
                            </router-link>
                        </div>
                        <div class="list-content">
                            <div class="list-body">
                                <div class="list-body-title">
                                    <router-link :to="`/post/${item._id}`">
                                        <span class="type">{{ categoryType.name }}</span>
                                        {{ item.title }}
                                    </router-link>
                                </div>
                                <div class="list-text">{{ item.desc }}</div>
                            </div>
                            <div class="list-footer">{{ item.author }} {{ categoryType.name }}</div>
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
    </div>
</template>

<script>
    import randomGirl from '@/components/randomGirl'
    import hotGirl from '@/components/hotGirl'
    import hotArticle from '@/components/hotArticle'
    import hotGanhuo from '@/components/hotGanhuo'

    import _ from 'lodash'
    export default {
        name: 'special',
        components: {
            'v-randomGirl': randomGirl,
            'v-hotGirl': hotGirl,
            'v-hotArticle': hotArticle,
            'v-hotGanhuo': hotGanhuo,
        },
        data() {
            return {
                type: '',
                category: 'Girl',
                categoryList: [],
                listData: [],
                page: 1,
                count: 10
            }
        },
        watch: {
            $route() {
                this.type = this.$route.params.type
                this.page = 1
                this.getCategoryType()
                this.getData()
            },
        },
        computed: {
            categoryType() {
                let type = {}
                _.forEach(this.categoryList, (item) => {
                    if ( this.type === item.type) {
                        type = item
                    }
                })
                return type
            }
        },
        mounted() {
            this.type = this.$route.params.type
            this.categoryList = this.$store.getters.getCategory
            this.getCategoryType()
            this.getData()
            window.addEventListener('scroll', this.scroll)
        },
        methods: {
            getCategoryType() {
                switch (this.type) {
                    case 'Girl':
                        this.category = 'Girl'
                        break
                    case 'Android':
                    case 'iOS':
                    case 'Flutter':
                        this.category = 'GanHuo'
                        break
                    default:
                        this.category = 'Article'
                }
            },
            getData() {
                this.$get(`/data/category/${this.category}/type/${this.type}/page/${this.page}/count/${this.count}`).then(res => {
                    if (res.status === 100) {
                        this.listData =  this.page === 1 ? res.data : _.concat(this.listData, res.data)
                    }
                })
            },
            scroll() {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
                let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight

                if(scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight) {
                    this.page++
                    this.getData()
                }
            }
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.scroll)
        }
    }
</script>

<style scoped>

</style>
