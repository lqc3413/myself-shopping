<script setup>
import { getHomeData } from '@/api/home';
import { ref,onMounted } from 'vue';

const bannerList = ref([]);
const getBannerList = async () => {
  const res = await getHomeData();
  if (res.code === 200) {
    bannerList.value = res.data;
    console.log(res.data);
    
  }
}
onMounted(() => {   
  getBannerList();
});
</script>


<template>
  <div class="block text-center">
    <el-carousel 
        height="500px"
         :style="{ width: '1240px',margin: '0 auto'}" 
    motion-blur
    :autoplay="true">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="" style="width: 100%;height: 100%;">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
