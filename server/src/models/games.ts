import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database"; 

export class Game extends Model {
  public id!: number;
  public name!: string;
  public status!: string;
}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "waiting",
    },
  },
  {
    sequelize,
    modelName: "Game",
  }
);

export default Game;
