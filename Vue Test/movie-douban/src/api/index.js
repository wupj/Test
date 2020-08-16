import axios from "@/axios";

// 获取热映电影
export function getHotMovieList(data) {
  return axios.post("/in_theaters", data);
}
