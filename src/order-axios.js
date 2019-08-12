import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-gc.firebaseio.com/"
});

export default instance;
