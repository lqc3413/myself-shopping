<template>
  <div class="cart-page">
    <h2>我的购物车</h2>
    
    <div v-if="cartStore.items.length === 0" class="empty-cart">
      <p>购物车是空的</p>
      <router-link to="/products">去逛逛</router-link>
    </div>
    
    <div v-else>
      <div class="cart-items">
        <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="item-image" />
          <div class="item-info">
            <h3>{{ item.name }}</h3>
            <p>¥{{ item.price }}</p>
          </div>
          <div class="item-quantity">
            <button @click="decreaseQuantity(item.id)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item.id)">+</button>
          </div>
          <p class="item-total">¥{{ item.price * item.quantity }}</p>
          <button @click="removeItem(item.id)" class="remove-btn">删除</button>
        </div>
      </div>
      
      <div class="cart-summary">
        <h3>总计 ({{ cartStore.totalItems }} 件商品): ¥{{ cartStore.totalPrice }}</h3>
        <router-link to="/checkout" class="checkout-btn">去结算</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

const increaseQuantity = (productId) => {
  const item = cartStore.items.find(item => item.id === productId)
  if (item) {
    cartStore.updateQuantity(productId, item.quantity + 1)
  }
}

const decreaseQuantity = (productId) => {
  const item = cartStore.items.find(item => item.id === productId)
  if (item && item.quantity > 1) {
    cartStore.updateQuantity(productId, item.quantity - 1)
  }
}

const removeItem = (productId) => {
  cartStore.removeFromCart(productId)
}
</script>

<style scoped>
.cart-page {
  padding: 20px;
}

.empty-cart {
  text-align: center;
  margin-top: 50px;
}

.empty-cart a {
  color: #e63946;
  text-decoration: none;
}

.cart-items {
  margin-bottom: 30px;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 20px;
}

.item-info {
  flex: 1;
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 20px;
}

.item-quantity button {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: #f8f9fa;
  cursor: pointer;
}

.item-total {
  width: 100px;
  text-align: center;
  font-weight: bold;
}

.remove-btn {
  background: none;
  border: none;
  color: #e63946;
  cursor: pointer;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 4px;
}

.checkout-btn {
  padding: 10px 20px;
  background: #e63946;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .cart-item {
    flex-wrap: wrap;
  }
  
  .item-info {
    order: 1;
    flex: 100%;
    margin-top: 10px;
  }
}
</style>