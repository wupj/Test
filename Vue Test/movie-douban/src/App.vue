<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  name: "App",
  components: {
    "v-header": Header
  }
};
</script>
