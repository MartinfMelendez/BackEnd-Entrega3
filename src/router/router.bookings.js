import { Router } from 'express';
import { getAllBookings, getBookingById, addBooking, deleteBooking,addServiceToReservation } from "../managers/BookingsManager.js";

const routerBookings = Router();

routerBookings.get('/', async (req, res) => {
    const bookings = await getAllBookings();
    res.status(200).json({ Bookings: bookings });
});

routerBookings.get('/:id', async (req, res) => {
    const { id } = req.params;
    const booking = await getBookingById(id);
    res.status(200).json({ Booking: booking });
})

routerBookings.post('/', async (req, res) => {
    const { clientName, clientEmail, date, time, status, services } = req.body;
    const { sid } = req.params
    const newBooking = await addBooking(clientName, clientEmail, date, time, status, services, sid);
    res.status(201).json({ Booking: newBooking });
});

routerBookings.post('/:bid/service/:sid', async (req, res) => {

    const { bid, sid } = req.params
    const newBooking = await addServiceToReservation(bid, sid);
    res.status(201).json({ Booking: newBooking });
});


routerBookings.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deletedBooking = await deleteBooking(id);
    res.status(200).json({ message: deletedBooking });
});

export default routerBookings;