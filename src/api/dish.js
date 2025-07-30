import axios from 'axios';



 export const fetchDishes = async ()=>{

try {
	const response = await axios.get('https://dummyjson.com/c/d16a-0437-4bf9-80ac');
	// console.log(response.data);
    return response.data;
 }
catch (error) {
	console.error('error for Fetching dishes:',error);
    return [];
 }
 }

 

