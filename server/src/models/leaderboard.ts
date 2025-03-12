import { DataTypes, Sequelize, Model } from 'sequelize';
//import { User } from './user.js';


//Leaderboard.belongsTo(User, { foreignKey: 'username' }); -add this code if we want scores to be associated with a registered user.

class Leaderboard extends Model {
  public id!: number;
  public userId!: number; 
  public score!: number; 
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

export default Leaderboard;
  

