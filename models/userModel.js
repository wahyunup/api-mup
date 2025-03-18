import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const User = db.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
// (async () => {
//   try {
//     await db.sync();
//     console.log("Database synchronized successfully.");
//   } catch (error) {
//     console.error("Database sync error:", error);
//   }
// })();

export default User;
