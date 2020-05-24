<template>
    <div class="specials">
        <h1>全部专题</h1>
        <el-card class="box-card" v-for="(item, index) in data" :key="index">
            <router-link :to="`/specials/${item.type}`">
                <el-image :src="item.image" :alt="item.name">
                </el-image>
            </router-link>
            <div class="card-list-text">
                <router-link :to="`/specials/${item.type}`" class="type">{{ item.name }}</router-link>
                <div class="desc">{{ item.desc }}</div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'specials',
        data() {
            return {
                data: []
            }
        },
        mounted() {
            this.data = this.$store.getters.getCategory
        }
    }
</script>

<style scoped>

</style>
