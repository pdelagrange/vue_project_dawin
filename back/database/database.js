import {Sequelize} from "sequelize";
import {movieModel} from "../models/Movie.js";
import {directorModel} from "../models/Director.js";

const db = {};
db.sequelize = new Sequelize({dialect: 'sqlite', storage: 'movies.db'});

try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

db.movie = movieModel(db.sequelize);
db.director = directorModel(db.sequelize);


// db.director.hasMany(db.movie);
db.movie.belongsTo(db.director);

export default db;


