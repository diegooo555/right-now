import axiosInstance from "./axiosInstance.js";

export const createReview = async (reviewData) => {
    try {
        const response = await axiosInstance.post("/reviews/save", reviewData);
        return response.data;
    } catch (error) {
        console.error("Error creating review:", error);
        throw error;
    }
}