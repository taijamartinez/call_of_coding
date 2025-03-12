import { DataTypes, Sequelize, Model } from 'sequelize';

interface GameAttributes {
  id: number;
  title: string;
  description: string;
  image: string; 
  link: string;
}

//interface GameCreationAttributes extends Optional<GameAttributes, 'id'> {}

export class Games extends Model<GameAttributes> implements GameAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public image!: string;
  public link!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  
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
      link: {
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



