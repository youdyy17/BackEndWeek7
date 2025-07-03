import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";
const Student = sequelize.define('Student',{
    name:DataTypes.STRING,
    age: DataTypes.INTEGER
});
export default Student;