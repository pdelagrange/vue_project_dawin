import db from "./database.js";

export const initData = async () => {
    await db.director.create({
        firstName: 'James',
        lastName: 'Cameron',
        birthdate: '1954-08-16',
        nationality: 'Canadien'
    });


    await db.director.create({
        firstName: 'Quentin',
        lastName: 'Tarantino',
        birthdate: '1963-03-27',
        nationality: 'Americain'
    });

    await db.director.create({
        firstName: 'Christopher',
        lastName: 'Nolan',
        birthdate: '1970-07-30',
        nationality: 'Anglais'
    });

    await db.director.create({
        firstName: 'Denis',
        lastName: 'Villeneuve',
        birthdate: '1967-10-03',
        nationality: 'Canadien'
    });


    await db.movie.create({
        title: 'Titanic',
        releaseDate: '1998',
        gender: 'Romance',
        language: 'English',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgA13CwSXM1k2yx2WGeLVXksg03vzvSrRpr5ZvXrZRX2d6NPlb',
        DirectorId: '1'
    });

    await db.movie.create({
        title: 'Pulp Fiction',
        releaseDate: '1994',
        gender: 'Crime',
        language: 'English',
        image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSGw-c9ffkpqa3-Yp0JZr-cHWPT79M8NPuLZHX4bnYoqXZGaDTy',
        DirectorId: '2'
    });

    await db.movie.create({
        title: 'Avatar 2',
        releaseDate: '2022',
        gender: 'SF',
        language: 'English',
        image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQKgsNjPVaiVeBYfI_S0jCe2VqMMOX2qUC9GfrLrNJ3vZWvwJyq',
        DirectorId: '1'
    });

    await db.movie.create({
        title: 'Dune',
        releaseDate: '2021',
        gender: 'SF',
        language: 'English',
        image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCQnQitzYFmcFWUZ25IK-vuaPrTz8GZGARqC27qM6ZhGnI9m7e',
        DirectorId: '4'
    });

    await db.movie.create({
        title: 'Interstellar',
        releaseDate: '2014',
        gender: 'SF',
        language: 'English',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIVryzUKVaqs-5yb0-uHykg7Ob4rUWFl-Ojl28OvBExh8Xc8GT',
        DirectorId: '3'
    });

}
