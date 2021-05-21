"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert("products", [
      {
        name: "Tenet",
        description:
          "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        price: 5,
        image:
          "https://www.joblo.com/assets/images/joblo/news/2020/08/tenetpostersfinal3.jpg",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mortal Kombat",
        description:
          "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
        price: 5,
        image:
          "https://www.joblo.com/assets/images/joblo/posters/2021/03/mortal-kombat-2021-poster-group.jpg",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Just Say Yes",
        description:
          "Incurable romantic Lotte finds her life upended when her plans for a picture-perfect wedding unravel — just as her self-absorbed sister gets engaged.",
        price: 5,
        image:
          "https://m.media-amazon.com/images/M/MV5BY2EzYWUxNzYtMjg4Yi00Y2M1LThmZTAtNmYyZTBmMDcxNDhlXkEyXkFqcGdeQXVyNzE2MTQyMzM@._V1_UY1200_CR104,0,630,1200_AL_.jpg",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Best of Me",
        description:
          "Sparks fly between former high school flames when they return home for a funeral, but painful memories may keep them from having a future together.",
        price: 5,
        image:
          "https://m.media-amazon.com/images/M/MV5BMzQ5Njg3Njk5N15BMl5BanBnXkFtZTgwODIwODIxMjE@._V1_.jpg",
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "BOB LAZAR: Area 51 & Flying Saucers",
        description:
          "Decades ago, Bob Lazar blew the whistle on Area 51. Now he’s back to explain the alien tech he worked with, and the government's war to shut him up.",
        price: 5,
        image:
          "https://i.pinimg.com/564x/97/3c/57/973c5714196af6cb56a384985cfd7760.jpg",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "SEASPIRACY",
        description:
          "Passionate about ocean life, a filmmaker sets out to document the harm that humans do to marine species — and uncovers alarming global corruption.",
        price: 5,
        image:
          "https://m.media-amazon.com/images/M/MV5BZjA0MmZlNTctMzQyNS00MDQyLWFkNGItZDRiMGMxYzg2MDIyXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * 
     *  name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING,
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("products", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
