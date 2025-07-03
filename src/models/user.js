import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";


// TODO - Create the model User  (attributes name and age)
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  },
});
// TODO - Export the model User
export default User;

