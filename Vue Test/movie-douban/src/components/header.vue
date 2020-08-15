<template>
  <div class="header">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-col :span="14" :offset="5">
          <div class="nav-logo"></div>
          <el-input
            class="search-text pull-left"
            :placeholder="$t('headerSearch.placeholder')"
            v-model="searchText"
            size="small"
            clearable
            @keyup.enter.native="onSearch"
            @clear="clearSearchText"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="onSearch"
            ></el-button>
          </el-input>
        </el-col>
        <el-radio-group
          class="lang-btn"
          v-model="lang"
          size="mini"
          @change="changeLanguages"
        >
          <el-radio-button label="zh">中文</el-radio-button>
          <el-radio-button label="en">English</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
      lang: "zh"
    };
  },
  methods: {
    /* 搜索 */
    onSearch() {
      this.$emit("headerSearch", this.searchText);
    },
    /* 清空搜索内容 */
    clearSearchText() {
      console.log("clearSearchText");
    },
    /* 切换中英文 */
    changeLanguages() {
      this.$i18n.locale = this.lang;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #f0f3f5;

  .nav-logo {
    float: left;
    height: 56px;
    width: 145px;
    margin: 0 10px 0 0;
    background: url("../assets/image/logo.png") no-repeat center;
  }

  .search-text {
    width: 50%;
    margin: 12px 0;
  }

  .lang-btn {
    float: right;
    margin: 12px 10px 12px 0;

    .el-radio-button {
      width: 50%;

      ::v-deep .el-radio-button__inner {
        width: 100%;
      }
    }
  }
}
</style>
