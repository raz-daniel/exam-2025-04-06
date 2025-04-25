import { OperationType } from "../../enum/OperationType.enum"

export interface Draft {
    accountNumber: string
    type: OperationType
    amount: number
    date: Date
    payment?: number
    interest?: number
}