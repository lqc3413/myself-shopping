<template>
  <div class="product-detail">
    <div v-if="isLoading" class="loading">
      <LoadingSpinner />
    </div>
    
    <div v-else class="detail-container">
      <div class="product-images">
        <img :src="product.image" :alt="product.name" />
      </div>
      
      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p class="price">¥{{ product.price }}</p>
        <p class="description">{{ product.description }}</p>
        
        <div class="quantity-selector">
          <button @click="decreaseQuantity">-</button>
          <span>{{ quantity }}</span>
          <button @click="increaseQuantity">+</button>
        </div>
        
        <button class="add-to-cart" @click="addToCart">
          加入购物车
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '../../stores/product'
import { useCartStore } from '../../stores/cart'
import LoadingSpinner from '../../components/common/Loading.vue'

const route = useRoute()
const productStore = useProductStore()
const cartStore = useCartStore()

const quantity = ref(1)

const product = computed(() => productStore.currentProduct)
const isLoading = computed(() => productStore.isLoading)

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const addToCart = () => {
  cartStore.addToCart(product.value, quantity.value)
}

onMounted(() => {
  productStore.fetchProductDetail(route.params.id)
})
</script>

<style scoped>
.product-detail {
  padding: 20px;
}

.detail-container {
  display: flex;
  gap: 40px;
}

.product-images {
  flex: 1;
}

.product-images img {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
}

.product-info {
  flex: 1;
}

.price {
  font-size: 24px;
  font-weight: bold;
  color: #e63946;
  margin: 20px 0;
}

.description {
  margin-bottom: 30px;
  line-height: 1.6;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.quantity-selector button {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: #f8f9fa;
  cursor: pointer;
}

.add-to-cart {
  padding: 12px 24px;
  background: #e63946;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

@media (max-width: 768px) {
  .detail-container {
    flex-direction: column;
  }
}
</style>