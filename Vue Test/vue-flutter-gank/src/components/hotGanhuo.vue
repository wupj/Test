<template>
    <div class="hotGanhuo">
        <el-card class="box-card">
            <span>本周最热干货</span>
            <router-link v-for="(item, index) in data" :key="index" :to="`/post/${item._id}`">
                <el-image :src="item.images[0]" :alt="item.alt">
                </el-image>
                <span class="title">{{ item.desc }}</span>
            </router-link>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'hotGanhuo',
        data() {
            return {
                hotType: 'views',
                category: 'GanHuo',
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
