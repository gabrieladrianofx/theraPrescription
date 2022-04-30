import knex from "../database/knex"
import InternalError from "../helpers/errors/InternalError"

class PatientRepository {
    
    async all() {
        return await knex.select().from('Patient')
    }

    async getByField(name, value) {
        const result = await knex.select().from('Patient').where(name, value)
        return result.length > 0 ? result[0] : null
    }

    async addPatient(patient) {
        try{

            if (await this.getByField('cpf', patient.cpf)) {
                return { error: true, message: 'CPF already exists. Try another.' }
            } 
            if (await this.getByField('email', patient.email)) {
                return { error: true, message: 'E-mail already exists. Try another.' }
            }

            await knex('Patient').insert({
                cpf: patient.cpf,
                name: patient.name,
                birthDay: patient.birthDay,
                sex: patient.sex,
                email: patient.email,
                phone: patient.phone,
                address: patient.address,
                district: patient.district,
                city: patient.city,
                state: patient.state,
                zip_code: patient.zip_code
            })

            return {...patient}
        } catch (e) {
            return new InternalError();
        }
    }

    async change(patient) {

        if(await this.getByField('cpf', patient.cpf)){
            await knex('Patient').update({
                cpf: patient.cpf,
                name: patient.name,
                birthDay: patient.birthDay,
                sex: patient.sex,
                email: patient.email,
                phone: patient.phone,
                address: patient.address,
                district: patient.district,
                city: patient.city,
                state: patient.state,
                zip_code: patient.zip_code
            })
            return {...patient}
        }
        return 
    }

    async remove(patient) {
        
    }

}

export default PatientRepository