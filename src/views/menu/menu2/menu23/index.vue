<template>
  <div class="app">
    <!-- 其他内容 -->
    <PhotoWall />
  </div>
</template>

<script>
import PhotoWall from "./PhotoWall.vue";

export default {
  components: {
    PhotoWall
  }
};
</script>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
