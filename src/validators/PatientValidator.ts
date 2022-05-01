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
            cpf: 'required|string|size:14',
            name: 'required|string',
            sex: 'required|string|max:1',
            email: 'required|email',
            phone: 'required|string:size:14',
            birthDay: 'date',
            address: 'string',
            district: 'string',
            city: 'string',
            state: 'string|size:2',
            zip_code: 'string'
        }
    }
}

export default PatientValidator