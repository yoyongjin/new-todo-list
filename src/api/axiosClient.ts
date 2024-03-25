import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.BASE_URL, // API의 기본 URL
  headers: {
    "Content-Type": "application/json",
    // 필요한 경우 추가 헤더를 설정할 수 있습니다.
  },
  timeout: 5000,
});

export default axiosClient;
