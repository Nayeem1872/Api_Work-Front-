import axios from 'axios';

const URL = 'http://localhost:8000';

export const Add = async (data) => {
 try{
    return await axios.post(`${URL}/add`,data)

 }catch(error){
   //  console.log('Something is wrong',error)
 }
}

