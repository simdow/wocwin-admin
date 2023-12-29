<template>
  <t-layout-page class="dashboard-container">
    <t-layout-page-item>
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
    </t-layout-page-item>
    <t-layout-page-item>
      <!-- Echarts 图表 -->
      <span class="ml-[10px] text-[16px]" style="margin-left: 5px">
        {{ username || "wocwin" }}
      </span>
      <el-upload
        v-model:file-list="fileList"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <el-icon><Plus /></el-icon>
      </el-upload>
      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" style="max-width: 100%; max-height: 100%" />
      </el-dialog>
    </t-layout-page-item>
  </t-layout-page>
</template>
<script setup lang="ts" name="Dashboard">
import { useUserStore } from "@/store/modules/user";
import { ref, computed, getCurrentInstance } from "vue";
import { Plus } from "@element-plus/icons-vue";
import type { UploadProps, UploadUserFile } from "element-plus";
const userStore = useUserStore();

const username = computed(() => userStore.name);
const { appContext } = getCurrentInstance() as any;
const global = appContext.config.globalProperties;

const fileList = ref<UploadUserFile[]>([
  {
    name: "food.png",
    url: "/public/graph1.png"
  },
  {
    name: "graph2.png",
    url: "/public/graph2.png"
  }
]);
const keyword = ref("");
const dialogImageUrl = ref(" ");
const dialogVisible = ref(false);
const search = () => {
  // 在这里编写发送搜索请求的逻辑
  console.log("搜索关键字：", keyword.value);
};

const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePictureCardPreview: UploadProps["onPreview"] = uploadFile => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};
// 获取所有业务api接口
console.log("获取所有业务api接口", global.$api);
</script>

<style lang="scss" scoped>
.dashboard-container {
  position: relative;

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .w-full {
    width: 100%;
  }

  .data-box {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    font-weight: bold;
    color: var(--el-text-color-regular);
    background: var(--el-bg-color-overlay);
    border-color: var(--el-border-color);
    box-shadow: var(--el-box-shadow-dark);
  }

  .svg-icon {
    fill: currentcolor !important;
  }
  .el-upload-list__item {
    flex: 1;
    margin-right: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  .el-upload-list__item-thumbnail {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    aspect-ratio: 33.33%; /* 每行显示三张图片 */
    padding-bottom: 0;
  }
}
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
