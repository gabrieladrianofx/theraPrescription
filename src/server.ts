import express from "express";
import PatientControllers from "./controllers/PatientControllers";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.get('/patient', PatientControllers.index);
app.post('/patient', PatientControllers.create);
app.put('/patient', PatientControllers.update);
app.delete('/patient', PatientControllers.delete);

app.listen(3000, () => console.log("Server is running"));