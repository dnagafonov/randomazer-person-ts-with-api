import axios from 'axios'

const myAxios = axios.create({
    baseURL: "https://randomuser.me"
});

export default myAxios;