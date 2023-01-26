import axios from "axios";

const BASE_URL = "https://newsapi.org/v2/top-headlines";

const API_KEY = "ac7121e429df4551b127814d032ca1a3";

const options = {
    params: { 
        country: "us",
        sortBy:"popularity",
        apiKey: API_KEY 
    },
    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET"
    // }
}



const getApiData = (keyword = "top-headlines")=>{
    return axios.get(BASE_URL,options)

    // var url = 'https://newsapi.org/v2/everything?' +
    //       'q=Apple&' +
    //       'from=2023-01-25&' +
    //       'sortBy=popularity&' +
    //       "cf408bd001554d72af68c573bc8b6f57";
    
    //       var req = new Request(url);

    // return fetch(req);
}

export default getApiData;
    