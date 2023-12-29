<template>
  <t-layout-page class="dashboard-container">
    <t-layout-page-item>
      <!-- 用户信息 -->
      <div class="mb-8">
        <el-card class="w-full">
          <div class="flex-box flex-between flex-wrap">
            <div class="flex-box flex-ver-v">
              <img class="user-avatar" src="@/assets/logo/logo.png" />
              <span class="ml-[10px] text-[16px]" style="margin-left: 5px">
                {{ username || "wocwin" }}
              </span>
            </div>
          </div>
        </el-card>
      </div>
    </t-layout-page-item>
    <t-layout-page-item>
      <!-- Echarts 图表 -->
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

const dialogImageUrl = ref(" ");
const dialogVisible = ref(false);

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
</style>
