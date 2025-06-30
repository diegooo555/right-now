import axiosInstance from "./axiosInstance.js";

export const getReservations = async (email) => {
    try {
        const response = await axiosInstance.get(`/reservations/${email}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createReservation = async (reservationData) => {
    try {
        const response = await axiosInstance.post(`/reservations/save`, reservationData);
        return response;
    } catch (error) {
        console.error("Error creating reservation:", error);
        throw error;
    }
}
