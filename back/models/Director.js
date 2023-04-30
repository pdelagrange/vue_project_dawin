import {DataTypes} from "sequelize";

export const directorModel  = (sequelize) => {
    const director = sequelize.define("Director", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return director;
};

