import {request} from './request'

/**
 * 获取首页多个数据（banner、recommend）
 */
export function getHomeMultidata(){
  return request({
    url: "/home/multidata"
  })
}

export function getGoodsData(params){
  return request({
    url:"/home/data",
    method:'get',
    params:params,
  })
}