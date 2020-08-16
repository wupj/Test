<template>
  <div class="loading" id="loading"></div>
</template>
<script>
export default {
  name: "loading",
  props: {
    containerId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: null,
      targetId: ""
    };
  },
  methods: {
    create() {
      this.loading = this.$loading({
        target: document.querySelector(`#${this.targetId}`),
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
    },
    destroy() {
      this.loading && this.loading.close();
    }
  },
  mounted() {
    this.targetId = this.containerId;
    this.create();
  }
};
</script>

<style scoped></style>
