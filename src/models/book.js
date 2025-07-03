import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";
const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  publicationYear: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1500,
      max: 2100
    }
  },
  pages:{
    type: DataTypes.INTEGER
  } 
   });
  export default Book;
