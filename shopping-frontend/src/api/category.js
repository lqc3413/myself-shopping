import request from '@/utils/heima'

export const getCategory = () =>{
  return request.get('/home/category/head')
}