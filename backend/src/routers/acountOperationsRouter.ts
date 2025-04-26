import { Router } from "express";
import { createOperation, getOperationByAccount, getOperationsType } from "../controllers/acountOperations/controller";
import { newOperationValidator, OperationByAccountValidator } from "../controllers/acountOperations/validator";
import paramsValidation from "../middlewares/param-validation";
import validation from "../middlewares/validation";

const accountOperationsRouter = Router()

accountOperationsRouter.get('/type', getOperationsType)
accountOperationsRouter.get('/:accountNumber', paramsValidation(OperationByAccountValidator), getOperationByAccount)
accountOperationsRouter.post('/', validation(newOperationValidator), createOperation)

export default accountOperationsRouter