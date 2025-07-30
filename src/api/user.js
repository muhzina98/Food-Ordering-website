 import axios from 'axios';



 export const fetchUsers = async ()=>{

try {
	const response = await axios.get('https://dummyjson.com/c/be50-4e81-4115-bba7');
	// console.log(response.data);
    return response.data;
 }
catch (error) {
	console.error('error for Fetching users:',error);
    return [];
 }
 }

 


 

