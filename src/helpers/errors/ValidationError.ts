import Error from "./Error";

class ValidationError extends Error{
    errors: any;
    constructor(errors) {
        super('ValidationError', 'Errors occurred in data validation.')
        this.errors = errors
    }
}

export default ValidationError