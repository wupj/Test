<template>
    <div class="randomGirl">
        <el-card class="box-card">
            <el-image :src="girlData.url" :alt="girlData.alt">
            </el-image>
            <div class="img-time">
                <span class="img-time-day">{{ girlData.day }}</span>
                <span class="img-time-years">{{ girlData.month }} {{ girlData.years }}</span>
            </div>
            <div class="img-footer">
                <router-link :to="`/post/${girlData._id}`" class="img-footer-Journal">{{ $t('lang.girlImage') }}{{ girlData.title }}</router-link>
                <div class="text-muted">
                    <span>Random {{ girlData.type }}</span>
                    <i class="el-icon-refresh" @click="getData"></i>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'randomGirl',
        data() {
            return {
                category: 'Girl',
                type: 'Girl',
                count: 1,
                girlData: {}
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                this.$get(`/random/category/${this.category}/type/${this.type}/count/${this.count}`).then(res => {
                    if (res.status === 100) {
                        this.girlData = res.data[0]
                        this.dealreatedAtC()
                    }
                })
            },
            dealreatedAtC() {
                let date = this.girlData.createdAt.split(' ')[0]
                this.girlData.day = date.split('-')[2]
                this.girlData.month = date.split('-')[1] + '月'
                this.girlData.years = date.split('-')[0]
            }
        }
    }
</script>

<style scoped>

</style>
