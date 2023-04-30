import {MovieRepository} from "../repository/movie.repository.js";

export class MovieController {
    repository = new MovieRepository();

    findAll(req,res) {
        this.repository.findAll()
            .then(data => res.send(data))
            .catch((err) => {
                res.status(500).send({
                    message: err.message || `Some error occured while finding all the movies with criteria: ${criteria}`
                });
            })
    }

    findOne(req,res) {
        const pk = req.params.id ?? '0';
        this.repository.findOne(pk)
            .then(data => res.send(data))
            .catch((err) => {
                res.status(500).send({
                    message: err.message || `Some error occured while finding movie with id: ${pk}`
                });
            })
    }

    update(req,res) {
        const id = req.params.id;
    this.repository.update(id, req.body.movie)
        .then(data => res.send(data))
            .catch((err) => {
                res.status(500).send({
                    message: err.message || `Some error occured while updating movie with id: ${id}`
                });
            })
    }

    create(req,res) {
        this.repository.create(req.body.movie)
            .then(data => res.send(data))
            .catch((err) => {
                res.status(500).send({
                    message: err.message || `Some error occured while creating movie`
                });
            })
    }

    delete(req,res) {
        const id = req.params.id;
        this.repository.delete(id)
            .then(() => res.sendStatus(204))
            .catch((err) => {
                res.status(500).send({
                    message: err.message || `Some error occured while deleting movie with id: ${id}`
                });
            })
    }
}
