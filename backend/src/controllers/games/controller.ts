
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Category } from "../../enum/category.enum";
import { Game, GameModel } from "../../model/game";
import AppError from "../../errors/app-error";


export async function getAllCategories(req: Request, res: Response, next: NextFunction) {
    try {
        const types = Object.values(Category);
        res.status(StatusCodes.OK).json(types);
    } catch (e) {
        console.error('getFurnitureTypes Error:', e);
        next(new Error('Failed to retrieve furniture types'));
    }
}

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const items = await GameModel.find()
        res.status(StatusCodes.OK).json(items.map(item => item.toObject()))
    } catch (e) {
        console.error('getItems Error:', e)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to retrieve items'))
    }
}

export async function getByCategory(req: Request<{category: string}>, res: Response, next: NextFunction) {
    try {
        const items = await GameModel.find({ category: req.params.category })
        res.status(StatusCodes.OK).json(items.map(item => item.toObject()))
    } catch (e) {
        console.error('getItems Error:', e)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to retrieve items'))
    }
}

export async function createGame(req: Request<{}, {}, Omit<Game, 'id'>>, res: Response, next: NextFunction) {
    try {
        const item = new GameModel(req.body)
        await item.save()
        res.status(StatusCodes.CREATED).json(item.toObject())
    } catch (e) {
        console.error('Creating Furniture Error:', e)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to create furniture'))
    }
}

export async function deleteGame(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
        
        const _id = req.params.id
        const deleteResponse = await GameModel.deleteOne({ _id })

        if (deleteResponse.deletedCount === 0) {
            return next(new AppError(StatusCodes.NOT_FOUND, 'Posts not found'))
        }

        res.status(StatusCodes.OK).json({ success: true })

    } catch (err) {
        console.error('Delete Post Error:', err)
        next(new AppError(StatusCodes.INTERNAL_SERVER_ERROR, 'Failed to delete post'))
    }
}
