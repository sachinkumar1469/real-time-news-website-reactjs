import axios from "axios";

const BASE_URL = "https://newsapi.org/v2/top-headlines";

const API_KEY = "ac7121e429df4551b127814d032ca1a3";

const options = {
    params: { 
        country: "us",
        sortBy:"popularity",
        apiKey: API_KEY 
    }
}

const getApiData = ()=>{
    return axios.get(BASE_URL,options)
}

export default getApiData;
    