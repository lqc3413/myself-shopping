import request from '@/utils/request'

export const getHomeData = () => {
  return request.get('/home/banner')
}

export const getNewGoods = () => {
  return request.get('/home/new')
}

export const getHotData = () => {
  return request.get('/home/hot')
}

export const getGoodsAPI = () => {
  return request.get('/home/goods')
}