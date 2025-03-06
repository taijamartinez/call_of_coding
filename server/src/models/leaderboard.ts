import { DataTypes, Sequelize, Model } from 'sequelize';



//Leaderboard.belongsTo(User, { foreignKey: 'userId' }); -add this code if we want scores to be associated with a registered user.

class Leaderboard extends Model {
  public id!: number;
  public username!: string; 
  public score!: number;
  public userId!: number; 
  public gamesId!: number; 
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
    username: {
      type: DataTypes.STRING,
      allowNull: false, //change to true if not required.
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true, //change to false if required.
  },
    gamesId: {
    type: DataTypes.INTEGER,
    allowNull: true, //change to false if required.
},
},
  {
    sequelize,
    modelName: 'Leaderboard',
    timestamps: true,
  }
);

return Leaderboard

}

  
