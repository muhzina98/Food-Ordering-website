import axios from 'axios';



 export const fetchDishes = async ()=>{

try {
	const response = await axios.get('https://dummyjson.com/c/287a-637f-4205-bfa6');
	 console.log(response.data);
    return response.data;
 }
catch (error) {
	console.error('error for Fetching dishes:',error);
    return [];
 }
 }

 

