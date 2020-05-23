<template>
    <div class="hotArticle">
        <el-card class="box-card">
            <span>本周最热文章</span>
            <router-link v-for="(item, index) in data" :key="index" :to="`/post/${item._id}`">
                <el-image :src="item.images[0]" :alt="item.alt">
                </el-image>
                <span class="title">{{ item.title }}</span>
            </router-link>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'hotArticle',
        data() {
            return {
                hotType: 'views',
                category: 'Article',
                count: 5,
                data: []
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                this.$get(`/hot/${this.hotType}/category/${this.category}/count/${this.count}`).then(res => {
                    if (res.status === 100) {
                        this.data = res.data
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
