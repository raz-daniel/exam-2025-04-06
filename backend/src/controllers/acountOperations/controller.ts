
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { OperationType } from "../../enum/OperationType.enum";
import AppError from "../../errors/app-error";
import { AccountOperations, AccountOperationsModel } from "../../model/AccountOperations";


export async function getOperationsType(req: Request, res: Response, next: NextFunction) {
    try {
        const types = Object.values(OperationType);
        res.status(StatusCodes.OK).json(types);
    } catch (e) {
        console.error('getOperationsType Error:', e);
        next(new Error('Failed to retrieve operation types'));
    }
}

export async function getOperationByAccount(req: Request<{accountNumber: string}>, res: Response, next: NextFunction) {
    try {
        const {accountNumber} = req.params
        const operations = await AccountOperationsModel.find({ accountNumber })
        res.status(StatusCodes.OK).json(operations.map(operation => operation.toObject()))
    } catch (e) {
        console.error('getOperationByAccount Error:', e)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to retrieve operations by account number'))
    }
}

export async function createOperation(req: Request<{}, {}, Omit<AccountOperations, 'id'>>, res: Response, next: NextFunction) {
    try {
        const operation = new AccountOperationsModel(req.body)
        await operation.save()
        res.status(StatusCodes.CREATED).json(operation.toObject())
    } catch (e) {
        console.error('Creating operation Error:', e)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to create operation'))
    }
}

