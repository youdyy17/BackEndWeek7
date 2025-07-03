import sequelize from "./db/database.js"; 
import "./models/user.js"; // 👈 this line is critical
import "./models/student.js";
import "./models/book.js";
import "./models/author.js";
import Author from "./models/author.js";


try {
  // TODO - Call sequelize.sync()
 
  // TODO -  Print the result of the sync on console
  const result = await sequelize.sync();
  console.log(result);
  //insert data
  //import data to db
let ronan = await Author.create({name:'ronan is the best',birthYear:1990});
await ronan.save();

let kimang = await Author.create({name:'Kim Ang',birthYear:1995});
await kimang.save();

let HokTime = await Author.create({name:'Hok Time',birthYear:2015});
await HokTime.save();


 
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
