<template>
    <div class="feedback">
        <el-breadcrumb separator="/" style="margin-bottom: 20px;">
            <el-breadcrumb-item :to="`/`">{{ $t('lang.myHomePage') }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ $t('lang.messageBoard') }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="no-gutters">
            <el-card class="box-card">
                <h5> {{ $t('lang.messageBoard') }} </h5>
                <div>
                    <p>{{ $t('lang.firstSectionMessage') }}</p>
                    <p>{{ $t('lang.secondSectionMessage') }}</p>
                    <p>{{ $t('lang.secondSectionMessage') }}</p>
                    <p>{{ $t('lang.fourthSectionMessage') }}</p>
                </div>
            </el-card>
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
    export default {
        name: 'feedback',
        components: {
            'v-randomGirl': randomGirl,
            'v-hotGirl': hotGirl,
            'v-hotArticle': hotArticle,
            'v-hotGanhuo': hotGanhuo,
        }
    }
</script>

<style scoped>

</style>
