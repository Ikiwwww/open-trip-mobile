import {createBooking} from "../api/bookingApi";
export async function booking(data) {
    const response = await createBooking(data);
    return response.data;
}