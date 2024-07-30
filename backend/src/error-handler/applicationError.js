export class ApplicationError extends Error{
    constructor(message, status) {
        super(message);
        this.status=status;
    }
}