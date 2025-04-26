import mongoose from "../db/mongoose"
import { OperationType } from "../enum/OperationType.enum"

export interface AccountOperations {
    id: mongoose.Types.ObjectId | string
    accountNumber: string
    type: OperationType
    metadata: {amount: number, date: Date, payment?: number,  interest?: number}
}

const AccountOperationsSchema = new mongoose.Schema<AccountOperations>({
    accountNumber: String,
    type: { type: String, enum: OperationType },
    metadata: mongoose.Schema.Types.Mixed
}, {
    toObject: {
        transform: function(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }

    }
    
})

export const AccountOperationsModel = mongoose.model<AccountOperations>('AccountOperation', AccountOperationsSchema, 'accountOperations')

