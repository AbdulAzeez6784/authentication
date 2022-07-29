import axios from "axios";

const trackerApi = axios.create({
    baseURL:'http://localhost:5000/',
    headers:{authtype:"normal"}
})

export default trackerApi