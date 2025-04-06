import Joi from "joi";
import { OperationType } from "../../enum/OperationType.enum";

export const OperationTypeValidator = Joi.object({
    operationType: Joi.string().valid(...Object.values(OperationType)).required()
});

export const OperationByAccountValidator = Joi.object({
    accountNumber: Joi.string().trim().required()
});

const baseOperationValidator = {
    accountNumber: Joi.string().trim().min(4).required(),
    type: Joi.string().valid(...Object.values(OperationType)).required(),
    metadata: Joi.object({
        amount: Joi.number().min(0).required(),
        date: Joi.date().required()
    }).required()
};

// Deposit/Withdrawal validator
export const simpleOperationValidator = Joi.object(baseOperationValidator);

// Loan validator
export const loanOperationValidator = Joi.object({
    ...baseOperationValidator,
    metadata: Joi.object({
        amount: Joi.number().min(0).required(),
        date: Joi.date().required(),
        payment: Joi.number().min(1).required(),
        interest: Joi.number().min(0).max(100).required()
    }).required()
});

// Combined validator that determines which validation to use based on operation type
export const newOperationValidator = Joi.alternatives().conditional(
    Joi.object({ type: Joi.string().valid(OperationType.LOAN).required() }).unknown(),
    {
        then: loanOperationValidator,
        otherwise: simpleOperationValidator
    }
);