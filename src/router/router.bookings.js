import { Router } from 'express';
import { getAllBookings, getBookingById, addBooking, updateBooking, deleteBooking } from '../managers/BookingManager.js';

const routerBookings = Router();



export default routerBookings;