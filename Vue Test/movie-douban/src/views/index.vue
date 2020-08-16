<template>
  <div class="wrapper">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <el-col :span="14" :offset="5">
        <div class="article">
          <v-hotMovieList></v-hotMovieList>
        </div>
        <div class="aside"></div>
      </el-col>
    </el-col>
  </div>
</template>

<script>
import hotMovieList from "@/components/hotMovieList";
export default {
  name: "index",
  components: {
    "v-hotMovieList": hotMovieList
  }
};
</script>

<style scoped></style>
