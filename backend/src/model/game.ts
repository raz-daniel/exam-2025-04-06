import mongoose from "../db/mongoose"
import { Category } from "../enum/category.enum"

export interface Game {
    id: mongoose.Types.ObjectId | string
    name: string
    description: string
    ProducedAt: Date
    price: number
    isRecycled: boolean
    category: Category
}

const GameSchema = new mongoose.Schema<Game>({
    name: String,
    description: String,
    ProducedAt: Date,
    price: Number,
    isRecycled: Boolean,
    category: { type: String, enum: Category }
}, {
    toObject: {
        transform: function(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }

    }
    
})

export const GameModel = mongoose.model<Game>('Game', GameSchema, 'games')