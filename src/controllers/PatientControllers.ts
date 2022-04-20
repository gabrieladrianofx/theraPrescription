import { Request, Response } from "express";

const patient = [
    {
        cpf: '000.000.000-00', name: 'TesteName 00', birthDay: '00/00/0000', sexo: 'M', phone: '(00) 00000-0000'
    },
    {
        cpf: '111.111.111-11', name: 'TesteName 01', birthDay: '11/11/1111', sexo: 'F', phone: '(11) 11111-1111'
    },
    {
        cpf: '222.222.222-22', name: 'TesteName 02', birthDay: '22/22/2222', sexo: 'M', phone: '(22) 22222-2222'
    },
];

export default {
    async index(req: Request, res: Response){
        return res.status(200).json(patient);
    },

    async create(req: Request, res: Response){
        const { cpf } = req.body;

        const index = patient.findIndex(pat => pat.cpf == cpf);

        if (index !== -1 ) return res.status(400).json('value exists');

        patient.push(req.body);

        return res.status(200).json(patient);
    },

    async delete (req: Request, res: Response){
        const { cpf } = req.body;

        const index = patient.findIndex(pat => pat.cpf == cpf);

        if (index === -1) return res.status(404).json('not found');
        
        patient.splice(index, 1);
        console.log(cpf, 'deleted with sucess');
        
        return res.status(200).json(patient);
    },

    async update (req: Request, res: Response){
        const { cpf } = req.body;

        for (const index of patient) {
            if (index.cpf !== cpf) {
                break;
            } 
            index.name = req.body.name;
            index.birthDay = req.body.birthDay;
            index.sexo = req.body.sexo;
            index.phone = req.body.phone;
            return res.status(200).json(index);
        }
        return res.status(400).json('not found');
    }
}