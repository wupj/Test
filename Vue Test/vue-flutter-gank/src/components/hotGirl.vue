<template>
    <div class="hotGirl">
        <el-card class="box-card">
            <span>本周最🔥妹纸</span>
            <router-link v-for="(item, index) in data" :key="index" :to="`/post/${item._id}`">
                <el-image :src="item.url" :alt="item.alt">
                </el-image>
            </router-link>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'hotGirl',
        data() {
            return {
                hotType: 'views',
                category: 'Girl',
                count: 3,
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
