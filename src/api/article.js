/**
 * article模块接口列表
 */

import server from "./server"; // 导入接口域名列表
import axios from "./axios"; // 导入http中创建的axios实例
import qs from "qs"; // 根据需求是否导入qs模块

const article = {
  // 新闻列表
  articleList() {
    return axios.get(`${server.sq}/api/data`);
  },
  // 新闻详情,演示
  articleDetail(id, params) {
    return axios.get(`${server.sq}/topic/${id}`, {
      params: params
    });
  },
  // post提交
  login(params) {
    return axios.post(`${server.sq}/accesstoken`, qs.stringify(params));
  }
  // 其他接口…………
};

export default article;
