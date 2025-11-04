<template>

  
  <!-- 主导航栏 -->
  <nav class="main-nav">
    <div class="container">
      <!-- Logo区域 - 绿色兔子logo + 文字 -->
      <div class="logo-section">
        <router-link to="/" class="logo">
          <!-- 兔子图标（使用文字图标或图片） -->
          <span class="rabbit-icon">🐰</span>
          <div class="logo-text">
            <div class="logo-main">小兔鲜儿</div>
            <div class="logo-sub">新鲜 · 亲民 · 快捷</div>
          </div>
        </router-link>
      </div>
      
      <!-- 导航菜单 - 严格按照图片顺序 -->
      <ul class="nav-menu">
        <li v-for="item in categoryStore.categoryList" :key="item.id" class="nav-item">
          <RouterView :to="'category/' + item.id">{{ item.name }}</RouterView>
        </li>
      </ul>
      
      <!-- 右侧工具区域 -->
      <div class="nav-tools">
        <!-- 搜索框 -->
        <div class="search-box">
          <input 
            type="text" 
            class="search-input" 
            placeholder="搜一搜"
            v-model="searchKeyword"
            @keyup.enter="handleSearch"
          >
          <button class="search-btn" @click="handleSearch">
            <span class="search-icon">🔍</span>
          </button>
        </div>
        
        <!-- 购物车 -->
        <router-link to="/cart" class="cart-link">
          <span class="cart-icon">🛒</span>
          <span class="cart-badge" v-if="cartCount > 0">{{ cartCount }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useCategoryStore } from '@/stores/category'


const categoryStore = useCategoryStore()
categoryStore.getCategoryList()
console.log('11',categoryStore.categoryList);


const router = useRouter()
const route = useRoute()

// 响应式数据
const searchKeyword = ref('')
const currentRoute = ref('/')
const cartCount = ref(2) // 图片中显示有2件商品

// 导航菜单数据 - 严格按照图片顺序
const navItems = ref([
  { name: '首页', path: '/' },
  { name: '居家', path: '/home-living' },
  { name: '美食', path: '/food' },
  { name: '服饰', path: '/clothing' },
  { name: '母婴', path: '/baby-mom' },
  { name: '个护', path: '/personal-care' },
  { name: '严选', path: '/selected' },
  { name: '数码', path: '/digital' },
  { name: '运动', path: '/sports' },
  { name: '杂项', path: '/others' }
])

// 方法
const handleSearch = () => {
  if (searchKeyword.value.trim()) {
    router.push({
      path: '/search',
      query: { keyword: searchKeyword.value.trim() }
    })
    searchKeyword.value = ''
  }
}

const handleNavClick = (path) => {
  currentRoute.value = path
  router.push(path)
}

const handleLogout = () => {
  console.log('退出登录')
  // 实际项目中添加退出逻辑
}

// 初始化当前路由
onMounted(() => {
  currentRoute.value = route.path
})
</script>

<style scoped>
/* 顶部用户信息栏 */
.top-bar {
  background: #333;
  color: #fff;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

}

.user-info {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
}

.user-info a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.user-info a:hover {
  color: #27BA9B;
}

/* 主导航栏 */
.main-nav {
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  height: 132px;
  display: flex;
  align-items: center;
}

.main-nav .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

/* Logo区域 */
.logo-section {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;
}

.rabbit-icon {
  font-size: 32px;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-main {
  font-size: 24px;
  font-weight: bold;
  color: #27BA9B; /* 绿色 */
  line-height: 1;
}

.logo-sub {
  font-size: 12px;
  color: #999;
  margin-top: 2px;
  letter-spacing: 1px;
}

/* 导航菜单 */
.nav-menu {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-item a {
  text-decoration: none;
  margin: 0 5px;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
  position: relative;
  transition: color 0.3s;
  display: block;
}

.nav-item a:hover {
  color: #27BA9B;
}

.nav-item a.active {
  color: #27BA9B;
}

.nav-item a.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #27BA9B;
}

/* 搜索和购物车区域 */
.nav-tools {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search-box {
  position: relative;
  width: 150px;
}

.search-input {
  width: 100%;
  padding: 8px 35px 8px 15px;
  border: 1px solid #E5E5E5;
  border-radius: 20px;
  outline: none;
  font-size: 14px;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #27BA9B;
}

.search-input::placeholder {
  color: #999;
}

.search-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 4px;
}

.cart-link {
  position: relative;
  text-decoration: none;
  color: #333;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding: 8px;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #FF4E50; /* 红色角标 */
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .nav-menu {
    gap: 20px;
  }
  
  .search-box {
    width: 120px;
  }
}

@media (max-width: 768px) {
  .main-nav .container {
    flex-wrap: wrap;
    height: auto;
    padding: 10px;
    gap: 15px;
  }
  
  .logo-section {
    order: 1;
  }
  
  .nav-tools {
    order: 2;
    margin-left: auto;
  }
  
  .nav-menu {
    order: 3;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .nav-item a {
    font-size: 14px;
  }
}
</style>