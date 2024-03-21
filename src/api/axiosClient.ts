import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://your-api-domain.com/api", // API의 기본 URL
  headers: {
    "Content-Type": "application/json",
    // 필요한 경우 추가 헤더를 설정할 수 있습니다.
  },
});

export default axiosClient;
