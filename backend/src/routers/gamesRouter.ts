import { Router } from "express";
import { createGame, deleteGame, getAll, getAllCategories, getByCategory } from "../controllers/games/controller";
import paramsValidation from "../middlewares/param-validation";
import validation from "../middlewares/validation";
import { categoryValidator, deleteValidator, newGameValidator } from "../controllers/games/validator";

const gamesRouter = Router()

gamesRouter.get('/', getAll)
gamesRouter.get('/category', getAllCategories)
gamesRouter.get('/:category', paramsValidation(categoryValidator), getByCategory)
gamesRouter.post('/', validation(newGameValidator), createGame)
gamesRouter.delete('/:id', paramsValidation(deleteValidator), deleteGame)

export default gamesRouter