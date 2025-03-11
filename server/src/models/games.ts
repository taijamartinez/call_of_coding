import { DataTypes, Sequelize, Model } from 'sequelize';

interface GameAttributes {
  id: number;
  title: string;
  description: string;
  image: string; 
  gamesId: string;
}

//interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {}

export class Games extends Model<GameAttributes>{

}



export function initGameModel(sequelize: Sequelize): typeof Games {
  Games.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gamesId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: 'games',
      sequelize,
    }
  );

  return Games;
}



