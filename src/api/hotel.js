import axiosInstance from "./axiosInstance.js";

export const getHotels =  async () => {
    try {
        const response = await axiosInstance.get("/hotels");
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const createHotel = async (hotelData) => {
    try {
        const response = await axiosInstance.post("/hotels/save", hotelData);
        return response;
    } catch (error) {
        console.error("Error creating hotel:", error);
        throw error;
    }
}

export const createRoom = async (roomData) => {
    try {
        const response = await axiosInstance.post(`/rooms/save`, roomData);
        return response;
    } catch (error) {
        console.error("Error creating room:", error);
        throw error;
    }
}
    
export const getRoomsAvailable = async (checkIn, checkOut, guests) => {
    try {
        const response = await axiosInstance.get(`/rooms/available`, {
            params: { checkIn, checkOut, guests }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching available rooms:", error);
        throw error;
    }
}

export const getRoomById = async (roomId) => {
    try {
        const response = await axiosInstance.get(`rooms/room/${roomId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching room by ID:", error);
        throw error;
    }
}

export const getRoomsByHotelId = async (hotelId) => {
    try {
        const response = await axiosInstance.get(`rooms/${hotelId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching rooms by hotel ID:", error);
        throw error;
    }
}