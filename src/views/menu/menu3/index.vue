<template>
  <div class="search-container">
    <img src="/public/search.jpg" alt="Google Logo" class="logo" />
    <el-input
      v-model="keyword"
      placeholder="在 Google 上搜索，或者输入一个网址"
      clearable
      size="large"
      class="search-box"
      @keyup.enter="search"
    />
    <div>
      <el-button type="primary" size="large" class="search-btn">Google 搜索</el-button>
      <el-button size="large" class="lucky-btn">我有时运气不佳</el-button>
    </div>
    <div class="links">
      <a href="#">关于</a>
      <a href="#">广告</a>
      <a href="#">商业</a>
      <a href="#">如何使用 Google 搜索</a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SearchBox",
  setup() {
    const keyword = ref("");

    const search = () => {
      // 在这里编写发送搜索请求的逻辑
      console.log("搜索关键字：", keyword.value);
    };

    return {
      keyword,
      search
    };
  }
};
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
}

.logo {
  margin-bottom: 30px;
  width: 100px;
  height: 100px;
}

.search-box {
  width: 500px;
  height: 48px;
  font-size: 16px;
  padding: 0 16px;
  background-color: #fff;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  border-radius: 24px;
  border: none;
}

.search-btn,
.lucky-btn {
  margin-top: 30px;
  width: 200px;
}

.links {
  margin-top: 50px;
  font-size: 14px;
  color: #5f6368;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.links a {
  color: #5f6368;
  text-decoration: none;
}
</style>
