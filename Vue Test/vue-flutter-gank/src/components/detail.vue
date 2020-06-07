<template>
    <div class="detail">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="`/specials/${data.type}`">{{ type[data.type]}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ $t('lang.girlImage') }}{{ data.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="no-gutters">
            <template v-if="data.type === 'Girl'">
                <div class="detail-img">
                    <el-image :src="data.url" :alt="data.alt">
                    </el-image>
                    <div class="media">
                        <span class="type">#{{ type[data.type] }}#</span>
                        <span class="journal">{{ $t('lang.girlImage') }}{{ data.title }}</span>
                        <span class="text">
                            {{ data.author }} {{ $t('lang.girlImage') }}{{ data.publishedAt }} <i class="el-icon-view"></i> {{ data.views }}
                            <i class="el-icon-thumb"></i> {{ data.likeCounts }}
                        </span>
                    </div>
                </div>
            </template>
            <el-card class="box-card">
                <template v-if="data.type === 'Girl'">
                    <div class="title"><i>//</i> {{ data.content }}</div>
                    <div class="card-img">
                        <el-image v-for="(item, index) in data.images" :key="index" :src="item">
                        </el-image>
                    </div>
                </template>
                <template v-else>
                    <span class="type">#{{ type[data.type] }}#</span>
                    <div class="title">{{ data.title }}</div>
                    <div class="author">{{ data.author }} {{ data.createdAt }}</div>
                    <div class="content post-content" v-html="data.content"></div>
                </template>
                <div class="share-section">
                    <i class="el-icon-thumb"></i> {{ data.likeCounts }}
                </div>
            </el-card>
            <div class="comment-block">
                <span class="comment-block-top">
                    <i class="el-icon-chat-dot-square"></i>{{ $t('lang.comment') }}({{ comment.length }})
                </span>
                <el-card class="box-card">
                    <div class="comment">
                        <div class="comment-list" v-for="(item, index) in comment" :key="index">
                            <div class="user-img">
                                <el-image :src="item.headUrl" :alt="item.userName">
                                </el-image>
                            </div>
                            <div class="comment-text">
                                <div class="user-name">{{ item.userName }}</div>
                                <div class="user-comment">{{ item.comment }}</div>
                                <div class="user-date">{{ item.createdAt }}</div>
                            </div>
                        </div>
                    </div>
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
        name: 'detail',
        components: {
            'v-randomGirl': randomGirl,
            'v-hotGirl': hotGirl,
            'v-hotArticle': hotArticle,
            'v-hotGanhuo': hotGanhuo,
        },
        data() {
            return {
                type: {},
                id: '',
                data: {},
                comment: []
            }
        },
        watch: {
            $route() {
                this.id = this.$route.params.id
                this.getData()
                this.getComments()
            },
        },
        mounted() {
            this.id = this.$route.params.id
            this.type = this.$store.getters.getCategoryType
            this.getData()
            this.getComments()
        },
        methods: {
            getData() {
                this.$get(`/post/${this.id}`).then(res => {
                    if (res.status === 100) {
                        this.data = res.data
                    }
                })
            },
            getComments() {
                this.$get(`/post/comments/${this.id}`).then(res => {
                    if (res.status === 100) {
                        this.comment = []
                        _.forEach(res.data, (item) => {
                            this.comment.push(JSON.parse(item))
                        })
                        console.log(this.comment)
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
