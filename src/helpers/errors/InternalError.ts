import Error from "./Error"

class InternalError extends Error{
    constructor(){
        super('InternalError', 'An error has occurred on the server. Please contact support.')
    }
}

export default InternalError