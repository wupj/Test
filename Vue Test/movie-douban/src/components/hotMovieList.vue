<template>
  <div class="hotMovieList" id="hotMovieList">
    <v-loading ref="hotMovieLoading" containerId="hotMovieList"></v-loading>
  </div>
</template>

<script>
import loading from "@/components/loading";
import { getHotMovieList } from "@/api";
export default {
  name: "hotMovieList",
  components: {
    "v-loading": loading
  },
  data() {
    return {
      // 查询参数
      queryParams: {
        start: 0,
        count: 35,
        apikey: "0b2bdeda43b5688921839c8ecb20399b"
      },
      //热映电影数据
      dataList: []
    };
  },
  methods: {
    /* 获取热映电影数据 */
    getDataList() {
      const that = this;
      getHotMovieList(this.queryParams).then(res => {
        that.$refs.hotMovieLoading.destroy();
        if (res.status === 200) {
          this.dataList = res.subjects;
        }
      });
    }
  },
  mounted() {
    this.getDataList();
  }
};
</script>

<style scoped></style>
