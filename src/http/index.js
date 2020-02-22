import axios from "axios";

export const getList = () => axios.get("/api/getlist");

export const getUserInfo = () => axios.get("/api/getUserInfo");
