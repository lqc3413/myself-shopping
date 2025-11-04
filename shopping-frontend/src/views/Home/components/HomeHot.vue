<script setup>
import { getHotData } from '@/api/home.js'
import { ref, onMounted } from 'vue'
import HomePannel from './HomePannel.vue'

const newList = ref([])

const getHotDataList = async () => {
  const res = await getHotData()
  if (res.code === 200) {
    newList.value = res.data
  }
}
getHotDataList()
</script>

<template>
  <HomePannel title="热门好物" subTitle="热门推荐、品质保障">   
    <div class="fresh-goods-container">
      <div class="goods-grid">
        <div 
          v-for="item in newList" 
          :key="item.id" 
          class="goods-card"
        >
          <RouterLink to="/" class="goods-link">
            <div class="image-container">
              <img :src="item.picture" :alt="item.name" />
              <div class="image-overlay">
                <span class="view-details">查看详情</span>
              </div>
              <div class="new-badge">NEW</div>
            </div>
            <div class="goods-info">
              <p class="goods-name">{{ item.name }}</p>
              <div class="price-section">
                <h2>{{ item.title }}</h2>
                <h5>{{ item.alt }}</h5>
              </div>
            </div>
          </RouterLink>
        </div>
        
        <!-- 如果没有数据时的占位 -->
        <div v-if="newList.length === 0" class="empty-state">
          <div class="empty-icon">🛒</div>
          <p class="empty-text">暂无新鲜好物</p>
        </div>
      </div>
      
      <!-- 底部查看更多 -->
      <div class="view-more">
        <RouterLink to="/goods" class="view-more-btn">
          查看更多好物
          <span class="arrow">→</span>
        </RouterLink>
      </div>
    </div>
  </HomePannel>
</template>

<style scoped lang="scss">
.fresh-goods-container {
  padding: 20px 0;
}

.goods-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 30px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.goods-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    
    .image-overlay {
      opacity: 1;
    }
    
    .view-details {
      transform: translateY(0);
      opacity: 1;
    }
  }
}

.goods-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.image-container {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f7fa, #e4e8f0);
  
  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    transition: transform 0.4s ease;
    
    .goods-card:hover & {
      transform: scale(1.05);
    }
  }
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.view-details {
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease 0.1s;
}

.new-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
}

.goods-info {
  padding: 20px;
}

.goods-name {
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 12px;
  line-height: 1.4;
  display: -webkit-box;
  // -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 44px;
}

.price-section {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.price {
  font-size: 20px;
  font-weight: 700;
  color: #f56565;
}

.original-price {
  font-size: 14px;
  color: #a0aec0;
  text-decoration: line-through;
}

.goods-tags {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tag {
  background: linear-gradient(135deg, #4299e1, #63b3ed);
  color: white;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.sales {
  font-size: 12px;
  color: #718096;
}

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 20px;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-text {
  color: #a0aec0;
  font-size: 16px;
}

.view-more {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}

.view-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #4299e1, #3182ce);
  color: white;
  padding: 12px 32px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(66, 153, 225, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(66, 153, 225, 0.4);
    
    .arrow {
      transform: translateX(4px);
    }
  }
}

.arrow {
  transition: transform 0.3s ease;
}

// 加载动画
@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.loading-skeleton {
  .goods-card {
    background: #f7fafc;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.6),
        transparent
      );
      animation: shimmer 1.5s infinite;
    }
  }
}
</style>