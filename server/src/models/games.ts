import { DataTypes, Sequelize, Model, Optional} from 'sequelize';
import bcrypt from 'bcrypt';

interface GameAttributes {
  id: number;
  username: string;
  password: string;
  email?: string; 
}

interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {}

export class Games extends Model<GameAttributes, GameCreationAttributes> implements GameAttributes {
  public id!: number;
  public username!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  email: any;

}

export function initGameModel(sequelize: Sequelize): typeof Game {
  Game.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: 'games',
      sequelize,
      hooks: {
        
      }
    }
  );

  return Games;
}

export default Games;

