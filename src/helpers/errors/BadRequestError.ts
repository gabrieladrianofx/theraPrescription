import Error from "./Error"

class BadRequestError extends Error {
    constructor() {
        super('BadRequestError', 'Your request returned an error. Check that it is correct and try again.')
    }
}

export default BadRequestError