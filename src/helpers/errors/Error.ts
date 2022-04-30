interface Error {
    error: string
    message: string
}

class Error {
    constructor(error, message){
        this.error = error
        this.message = message
    }
}

export default Error