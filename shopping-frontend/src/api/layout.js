import request from '../utils/request'

export const teskAPI = (id) =>{
  return request.get('/layout/category',{
    params:{
      id
    }
  })
}