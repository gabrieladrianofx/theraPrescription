import { Router } from "express";

import PatientControllers from "./controllers/PatientControllers";

const routes = Router()

// Patient
routes.get('/patient', async (req, res) => {
    const controller = new PatientControllers()
    return controller.index(req, res)
});
routes.post('/patient', async (req, res) => {
    const controller = new PatientControllers()
    return controller.create(req, res)
});
routes.put('/patient/:cpf', async (req, res) => {
    const controller = new PatientControllers();
    return controller.update(req, res)
});
// routes.delete('/patient', PatientControllers.delete);

export default routes;