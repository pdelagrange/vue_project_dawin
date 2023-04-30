import express, {json} from 'express';
import db from './database/database.js';
import {moviesRoutes} from "./routes/moviesRoutes.js";
import {initData} from "./database/data.js";
import cors from "cors";


const PORT = process.env.PORT || 3001;
const app = new express();

app.use(cors());
app.use(json());

app.use('/movies', new moviesRoutes());


db.sequelize.sync({force:true})
    .then(() => {
        initData().then(res => console.log("Data initialized successfully"));
        console.log("Synced db.");
    })
    .catch((err) => {
        console.error("Failed to sync db: "+err.message);
    });

app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
});
