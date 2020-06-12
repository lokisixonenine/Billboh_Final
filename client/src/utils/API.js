import axios from "axios";

export const getNews = params => axios.post("/api/news", params);

export default {
  getHistory: (month, day) => {
    return axios.get(
      `https://cors-anywhere.herokuapp.com/http://history.muffinlabs.com/date/${month}/${day}`
    );
  },
  getNews: (city, date) => {
    return axios.get(
      `https://newsapi.org/v2/everything?qInTitle=${city}&from=${date ||
        "2020-5-25"}&sortBy=publishedAt&apiKey=1c73269edb4c41b7be5ddcf1fde33a80`
    );
  },
  testWikiAPI: () => {
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Craig%20Noone&format=json`
      )
      .then(res => {
        console.log(res);
        return res;
      });
  }
};
