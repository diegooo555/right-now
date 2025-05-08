import axiosInstance from "./axiosInstance.js";

export const getReservations = async (userId) => {
    try {
        const response = await axiosInstance.get(`/reservations/${userId}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
    