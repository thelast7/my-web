import axios from "axios";

const KEY = "AIzaSyCXE5f1Ghsll9Gb-bF8RJx1K7E3qE7QLH4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResult: 10,
    key: KEY
  }
});
