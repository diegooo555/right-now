import axiosInstance from "./axiosInstance";

export const generateSignature = async (transference) => {
    try {
        const response = await axiosInstance.post("/wompi/signature", transference);
        return response;
    } catch (error) {
        console.error(error);
    }
}