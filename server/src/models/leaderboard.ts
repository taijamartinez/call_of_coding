import { DataTypes, Sequelize, Model } from 'sequelize';

class Leaderboard extends Model {
  public id!: number;
  public userId!: number; 
  public score!: number;
  public gamesId!: number;
  public gameTime!: number; // Add Game Time
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initLeaderboardModel(sequelize: Sequelize): typeof Leaderboard {
  Leaderboard.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: {
          model: 'users', 
          key: 'id', 
        },
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE',
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gamesId: {
        type: DataTypes.INTEGER,
        allowNull: true, 
        references: {
          model: 'games', 
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      gameTime: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
      },
    },
    {
      sequelize,
      modelName: 'Leaderboard',
      timestamps: true,
    }
  );

  return Leaderboard;
}


export default Leaderboard;
  

