import requests from "@/api/requests";

export const reqUserList = () => requests.get('/user/list');
