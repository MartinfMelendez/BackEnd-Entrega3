import {Router} from "express"
import { getAllServices, getServiceById, addService, updateService, deleteService } from "../managers/ServiceManager.js"

const routerService = Router()

routerService.get("/", async  (req, res) => {
    const services = await getAllServices()
    res.status(200).json({ Services: services })
})

routerService.get("/:id", async (req, res) => {
    const { id } = req.params
    const service = await getServiceById(id)
    res.status(200).json({ Service: service })
})

routerService.post("/", async (req, res) => {
    const { name, description, duration, price, category, available } = req.body
    const newService = await addService(name, description, duration, price, category, available)
    res.status(201).json({ NewService: newService })
})

routerService.put("/:id", async (req, res) => {
    const { id } = req.params
    const data = req.body
    const updatedService = await updateService(id, data)
    res.status(200).json({ UpdatedService: updatedService })
})

routerService.delete("/:id", async (req, res) => {
    const { id } = req.params
    const deleteservice = await deleteService(id)
    res.status(200).json({ DeletedService: deleteservice })
})


export default routerService