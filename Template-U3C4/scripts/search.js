

var mysearch=localStorage.getItem("searchterm")

let url=`https://shrouded-earth-23381.herokuapp.com/api/search/?q=${mysearch}`

import { apiCall } from "./scripts/main.js";

var mydata= await apiCall(url)

console.log(mydata)


// function storeSearchterm()


// export {storeSearchterm}