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
        const { cpf }  = req.params;
        const patient = req.body;

        if(!this.validator.validate(patient)){
            return res.status(400).json(new ValidationError(this.validator.errors));
        }

        const result = await this.repository.change(patient, cpf)
        return res.status(200).json(result);
    }

    async delete(req, res){

        const { cpf } = req.params;

        if(cpf.length !== 14){
            return res.status(400).json('CPF invalid')
        }
        
        const result = await this.repository.remove(cpf)
        return res.status(200).json(result);
    }

}

export default PatientControllers