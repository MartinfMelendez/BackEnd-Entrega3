import { Router } from 'express';
import routerService from "./router.service.js"
// import routerBookings from "./router/router.bookings.js"

const router = Router();

router.use("/services", routerService);
// router.use("/bookings", routerBookings);


export default router;