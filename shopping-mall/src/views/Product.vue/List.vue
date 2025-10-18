<template>
  <div class="product-list">
    <h2>商品列表</h2>
    <div class="filter-section">
      <select v-model="selectedCategory">
        <option value="">所有分类</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
      <input v-model="searchQuery" placeholder="搜索商品..." />
    </div>
    
    <div v-if="isLoading" class="loading">
      <LoadingSpinner />
    </div>
    
    <div v-else class="list-container">
      <ProductCard 
        v-for="product in filteredProducts" 
        :key="product.id" 
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useProductStore } from '../../stores/product'
import { useCartStore } from '../../stores/cart'
import ProductCard from '../../components/product/ProductCard.vue'
import LoadingSpinner from '../../components/common/Loading.vue'

const productStore = useProductStore()
const cartStore = useCartStore()

const selectedCategory = ref('')
const searchQuery = ref('')

const filteredProducts = computed(() => {
  return productStore.products.filter(product => {
    const matchesCategory = !selectedCategory.value || 
      product.categoryId === selectedCategory.value
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

const addToCart = (product) => {
  cartStore.addToCart(product)
}

onMounted(() => {
  productStore.fetchProducts()
})
</script>

<style scoped>
.product-list {
  padding: 20px;
}

.filter-section {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

.list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

@media (max-width: 768px) {
  .list-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .list-container {
    grid-template-columns: 1fr;
  }
}
</style>