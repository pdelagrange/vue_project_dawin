import db from '../database/database.js'

export class MovieRepository {

    findAll() {
        return db.movie.findAll({include: db.director});
    }

    findOne(pk){
        return db.movie.findByPk(pk, {include: db.director});
    }

    update(id, movie){
        db.movie.update({title: movie.title, releaseDate: movie.releaseDate, gender: movie.gender, language: movie.language}, {where: {
            id: id
            }});
        db.director.update({firstName: movie.Director.firstName, lastName: movie.Director.lastName, nationality: movie.Director.nationality, birthdate: movie.Director.birthdate}, {where: {id: movie.Director.id}});
        return this.findOne(id);
    }

    create(movie){
        return db.director.create(movie.Director).then((res) => {
            return db.movie.create({...movie, DirectorId: res.dataValues.id});
        })
    }

    delete(id){
        return db.movie.destroy({where: {id: id}});
    }
}

