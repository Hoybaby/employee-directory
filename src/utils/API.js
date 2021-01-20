import axios from "axios";


export default {
    getEmployeeName: function(query) {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
}


// import axios from "axios";
// const BASEURL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=trilogy";

// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };
