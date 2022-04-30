import Validator from "Validator"
import ValidationError from "../helpers/errors/ValidationError";
import PatientRepository from "../repositories/PatientRepository";
import PatientValidator from "../validators/PatientValidator";

class PatientControllers {
    repository: PatientRepository
    validator: PatientValidator;

    constructor(){
        this.repository = new PatientRepository()
        this.validator = new PatientValidator()
    }

    async index(req, res){
        const result = await this.repository.all()

        if(result !== null) return res.status(200).json(result)

        return res.status(204).json(result)
    }

    async create(req, res){
        const patient = req.body;

        if(!this.validator.validate(patient)){
            return res.status(400).json(new ValidationError(this.validator.errors))
        }

        const result = await this.repository.addPatient(patient);
        return res.status(200).json(result)
    }

    async update(req, res){
        const { cpf } = req.params;
        const patient = req.body;
        
        console.log(cpf)
        // const result = await this.repository.change(patient)

        // console.log(result)

        // for (const index of patient) {
        //     if (index.cpf !== cpf) {
        //         break;
        //     } 
        //     index.name = req.body.name;
        //     index.birthDay = req.body.birthDay;
        //     index.sexo = req.body.sexo;
        //     index.phone = req.body.phone;
        //     return res.status(200).json(index);
        // }
        // return res.status(400).json('not found');
    }

    // async delete (req: Request, res: Response){
    //     const { cpf } = req.body;

    //     const index = patient.findIndex(pat => pat.cpf == cpf);

    //     if (index === -1) return res.status(404).json('not found');
        
    //     patient.splice(index, 1);
    //     console.log(cpf, 'deleted with sucess');
        
    //     return res.status(200).json(patient);
    // }

}

export default PatientControllers