import Joi from "joi";

export const categoryValidator = Joi.object({
    category: Joi.string().required()
})

export const newGameValidator = Joi.object({
    name: Joi.string().trim().min(3).required(),
    description: Joi.string().trim().min(5).required(),
    ProducedAt: Joi.date().required(),
    price: Joi.number().min(0).required(),
    isRecycled: Joi.boolean().required(),
    category: Joi.string().required()
})

export const deleteValidator = Joi.object({
    id: Joi.string().required()
})