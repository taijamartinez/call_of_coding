import { DataTypes, Model } from 'sequelize'; //removed Optional
import { sequelize } from './index'; 
//import { User } from './user'; //dont need if leaderboard doesnt directly reference the user model.

//Leaderboard.belongsTo(User, { foreignKey: 'userId' }); -add this code if we want scores to be associated with a registered user.

class Leaderboard extends Model {
  public id!: number;
  public userId!: number; //optional? remove if not linking to users.
  public score!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Leaderboard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false, //change to true if not required.
    },
    score: {
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
   
  
export default Leaderboard;
//export if we want to use this model in other files. 