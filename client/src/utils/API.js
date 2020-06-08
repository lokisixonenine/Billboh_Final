import axios from "axios";

export const getNews = (params) => axios.post('/api/news', params)