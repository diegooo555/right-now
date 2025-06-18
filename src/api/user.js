import axiosInstance from "./axiosInstance.js";

export const registerUser = async (user) => {
    try{
        const response = await axiosInstance.post("/saveUser", user);
        console.log(response.data);
        return response;
    }catch(error){
        console.error(error);
    }
}

export const refreshAccesToken = async () => {
    try{
        const response = await axiosInstance.post("/api/token/refresh");
        console.log(response.data);
        return response;
    }catch(error){
        console.error(error);
    }
}