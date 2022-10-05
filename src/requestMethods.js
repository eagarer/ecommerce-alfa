import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmYxOTYxY2E4NDhlYmNlYTRiNmIzNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDkxNjAyOSwiZXhwIjoxNjY1MTc1MjI5fQ.W_LxiEy-cUi9cd6tTL_kXOrOetKFrcz6g81j1Wlc-ho";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
