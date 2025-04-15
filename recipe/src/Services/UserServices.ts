import axios from "axios";

export const getUserData=async(token:string)=>{
    const response=await axios.get("https://localhost:7136/api/Users/me",{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return response.data
}
