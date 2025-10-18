import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getProducts, getProductDetail } from '../api/product'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const currentProduct = ref(null)
  const categories = ref([])
  const isLoading = ref(false)
  
  const fetchProducts = async (params = {}) => {
    isLoading.value = true
    try {
      products.value = await getProducts(params)
    } finally {
      isLoading.value = false
    }
  }
  
  const fetchProductDetail = async (id) => {
    isLoading.value = true
    try {
      currentProduct.value = await getProductDetail(id)
    } finally {
      isLoading.value = false
    }
  }
  
  return { 
    products, 
    currentProduct, 
    categories, 
    isLoading,
    fetchProducts, 
    fetchProductDetail 
  }
})