import {Router} from "express";
import {MovieController} from "../controller/movie.controller.js";


export function moviesRoutes() {
    const router = Router();
    const controller = new MovieController();
    router.get('/', (req,res) => controller.findAll(req,res));
    router.post('/', (req,res) => controller.create(req,res));
    router.get('/:id', (req,res) => controller.findOne(req,res));
    router.post('/:id', (req,res) => controller.update(req,res));
    router.delete('/:id', (req,res) => controller.delete(req,res));

    return router;
}
