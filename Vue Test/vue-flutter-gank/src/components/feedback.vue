<template>
    <div class="feedback">
        <el-breadcrumb separator="/" style="margin-bottom: 20px;">
            <el-breadcrumb-item :to="`/`">我的主页</el-breadcrumb-item>
            <el-breadcrumb-item>留言板</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="no-gutters">
            <el-card class="box-card">
                <h5> 留言板 </h5>
                <div>
                    <p>透过车窗看着窗外的风景滑过眼前，不知走过多少路程，我总是找不到属于我的站台，静静看着无数双手牵在一起，我只能握紧自己的手，期待的总是不会重来，时间不会倒转，爱也不能挽回，静静的听着鸣笛的车声，默默的注视匆忙的行人，一个人抓着那无人接听的手机发呆，那拨不出去的信号，那无法得到的答复，那熟悉而又陌生的声音………</p>
                    <p>如果没有那样的秋天，如果没有那样的秋夕，如果没有那样的相遇，谁会手里握着那一串久久不敢放开的往事，躲在无人的角落，偷偷地想念。</p>
                    <p>茫然的心境，遥远的梦幻，飘荡，游离……恍若几个世纪，那么漫长。为了那份渴望已久梦中痴缠的美丽，我痴痴地等，傻傻地念，任岁月忽明忽暗地漫过我憔悴的身影。</p>
                    <p>所以.. 所以.. 所以请尽情留言吧 😂😂 (只要服务器不崩溃😇)</p>
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
