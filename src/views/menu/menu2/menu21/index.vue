<template>
  <div class="photo-wall">
    <div v-for="(photo, index) in photos" :key="index" class="photo-column">
      <div v-for="(item, itemIndex) in photo" :key="itemIndex" class="photo-item">
        <div class="photo-container">
          <el-button class="photo-favorite" type="text" @click="toggleFavorite(item)">
            <i class="fas" :class="['fa-star', { active: item.favorite }]"></i>
          </el-button>
          <img
            :src="item.url"
            class="photo"
            :style="{ objectFit: item.objectFit }"
            @load="setPhotoSize(photo, item, $event)"
            @click="showPreviewDialog(item)"
          />
        </div>
      </div>
    </div>

    <!-- 预览对话框 -->
    <el-dialog v-model="previewDialogVisible" title="预览" width="80%">
      <img :src="currentPhoto && currentPhoto.url" class="preview-photo" />
      <template #footer>
        <el-button @click="closePreviewDialog">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        [
          { url: "/public/graph1.png", objectFit: "cover", favorite: false },
          { url: "/public/graph2.png", objectFit: "contain", favorite: false },
          { url: "/public/logo.png", objectFit: "fill", favorite: false }
        ],
        [
          { url: "/public/search.jpg", objectFit: "cover", favorite: false },
          { url: "/public/wocwin.jpg", objectFit: "contain", favorite: false },
          { url: "/search.jpg", objectFit: "fill", favorite: false }
        ]
        // Add more photos as needed
      ],
      previewDialogVisible: false,
      currentPhoto: null
    };
  },
  methods: {
    setPhotoSize(photo, item, event) {
      // Dynamically adjust photo size based on loaded image
      const img = event.target;
      const aspectRatio = img.naturalWidth / img.naturalHeight;
      item.width = 200;
      item.height = item.width / aspectRatio;
    },
    showPreviewDialog(item) {
      this.currentPhoto = item;
      this.previewDialogVisible = true;
    },
    closePreviewDialog() {
      this.previewDialogVisible = false;
      this.currentPhoto = null;
    },
    toggleFavorite(item) {
      item.favorite = !item.favorite;
    }
  }
};
</script>

<style scoped>
.photo-wall {
  margin: 20px;
}

.photo-column {
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
  width: 200px;
}

.photo-item {
  margin-bottom: 10px;
  position: relative;
}

.photo-container {
  position: relative;
}

.photo-favorite {
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px;
  cursor: pointer;
}

.photo-favorite i {
  color: #ccc;
  font-size: 20px;
}

.photo-favorite i.active {
  color: #f90;
}

.photo {
  width: 100%;
  height: auto;
  cursor: pointer;
}

.preview-photo {
  max-width: 100%;
  max-height: 80vh;
}

.dialog-footer {
  text-align: right;
}
</style>
