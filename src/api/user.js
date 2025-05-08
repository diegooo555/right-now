import axiosInstance from "./axiosInstance.js";

export const getUser = async () => {
    try {
        const response = await axiosInstance.get("/user");
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const registerUser = async (user) => {
    try{
        const response = await axiosInstance.post("/saveUser", user);
        console.log(response.data);
        return response.data;
    }catch(error){
        console.error(error);
    }
}