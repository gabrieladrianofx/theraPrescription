import knex from "../database/knex"
import InternalError from "../helpers/errors/InternalError"

class PatientRepository {
    
    async all() {
        return await knex.select().from('Patient')
    }

    async getFieldBy(name, value) {
        const result = await knex.select().from('Patient').where(name, value)
        return result.length > 0 ? result[0] : null
    }

    async addPatient(patient) {
        try{

            if (await this.getFieldBy('cpf', patient.cpf)) {
                return { error: true, message: 'CPF already exists. Try another.' }
            } 
            if (await this.getFieldBy('email', patient.email)) {
                return { error: true, message: 'E-mail already exists. Try another.' }
            }

            await knex('Patient').insert({
                cpf: patient.cpf,
                name: patient.name,
                sex: patient.sex,
                email: patient.email,
                phone: patient.phone,
                birthDay: patient.birthDay,
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

    async change(patient, params) {
        try {
            const params_id = await this.getFieldBy('cpf', params)
            
            if(!params_id){
                return { error: true, message: 'data not found in database' }
            }

            // if(await this.getFieldBy('email', patient.email))
            
            // console.log(params_id.id)
            await knex('Patient').update({
                cpf: patient.cpf,
                name: patient.name,
                sex: patient.sex,
                email: patient.email,
                phone: patient.phone,
                birthDay: patient.birthDay,
                address: patient.address,
                district: patient.district,
                city: patient.city,
                state: patient.state,
                zip_code: patient.zip_code
            }).where({id: params_id.id})
            
            return {...patient}
        } catch(e) {
            return new InternalError()
        }
        
    }

    async remove(patient) {
        try {

            const params_id = await this.getFieldBy('cpf', patient)

            if(!params_id) {
                return { error: true, message: 'data not found in database' }
            }

            await knex('Patient').where({id: params_id.id}).del()

            return {cpf: params_id.cpf}

        } catch(e) {
            return new InternalError()
        }
    }
}

export default PatientRepository