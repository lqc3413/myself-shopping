import { defineStore } from "pinia";
import {ref} from 'vue'
import  {getCategory} from '@/api/category'

export const useCategoryStore = defineStore('category',()=>{
  const categoryList = ref([])
  const getCategoryList = async () =>{
    const res = await getCategory()
    categoryList.value = res.data || []
  }
  return {
    categoryList,
    getCategoryList,
  }
})