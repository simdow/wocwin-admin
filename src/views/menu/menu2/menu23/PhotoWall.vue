<template>
  <div class="photo-wall">
    <el-row :gutter="10">
      <el-col v-for="(photo, index) in photos" :key="index" :style="{ width: photo.width + 'px', height: photo.height + 'px' }">
        <img
          :src="photo.url"
          class="photo"
          :style="{ objectFit: photo.objectFit }"
          @load="setPhotoSize(photo, $event)"
          @click="showPreviewDialog(photo)"
        />
      </el-col>
    </el-row>

    <!-- 预览对话框 -->
    <el-dialog v-model="previewDialogVisible">
      <img :src="currentPhoto && currentPhoto.url" class="preview-photo" />
    </el-dialog>
  </div>
</template>

<script>
// import { reactive } from "vue";

export default {
  name: "PhotoWall",
  data() {
    return {
      photos: [
        { url: "/public/graph1.png", width: 300, height: 200, objectFit: "cover" },
        { url: "/public/graph2.png", width: 500, height: 500, objectFit: "contain" },
        { url: "/public/logo.png", width: 100, height: 100, objectFit: "contain" },
        { url: "/public/search.jpg", width: 400, height: 400, objectFit: "contain" },
        { url: "/public/wocwin.jpg", width: 600, height: 400, objectFit: "cover" }
      ],
      previewDialogVisible: false,
      currentPhoto: null
    };
  },
  methods: {
    setPhotoSize(photo, event) {
      photo.width = event.target.width;
      photo.height = event.target.height;
      photo.objectFit = event.target.width > event.target.height ? "cover" : "contain";
    },
    showPreviewDialog(photo) {
      this.currentPhoto = photo;
      this.previewDialogVisible = true;
    }
  }
};
</script>

<style scoped>
.photo-wall {
  margin: 20px;
}

.photo {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.preview-photo {
  max-width: 100%;
  max-height: 80vh;
  display: block;
  margin: 0 auto;
}
</style>
