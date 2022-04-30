import Validator from "Validator"

class PatientValidator {
    errors: {}
    constructor(){
        this.errors = {}
    }

    validate(data) {
        const validator = Validator.make(data, this.rules())
        if (validator.passes()) {
            return true
        }
        this.errors = validator.getErrors()
        return false
    }
      
    rules() {
        return {
            cpf: 'required|string',
            name: 'required|string',
            //birthDay: 'date',
            sex: 'string',
            email: 'required|email',
            phone: 'string',
            address: 'string',
            district: 'string',
            city: 'string',
            state: 'string',
            zip_code: 'string'
        }
    }
}

export default PatientValidator