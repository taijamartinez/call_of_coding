import { useState, useEffect } from "react";
import "./css/LeaderboardPage.css";

interface Player {
  id: number;
  username: string;
  game: string;
  time: string;
  points: number;
}

const LeaderboardPage = () => {
  // State to store leaderboard data
  const [leaderboard, setLeaderboard] = useState<Player[]>([]);

  // Fetch leaderboard data (Simulated for now)
  useEffect(() => {
    // Replace this with an API call later
    const storedLeaderboard: Player[] = [
      { id: 1, username: "Player1", game: "Code Quest", time: "03:25", points: 150 },
      { id: 2, username: "Player2", game: "Bug Buster", time: "02:40", points: 200 },
    ];
    setLeaderboard(storedLeaderboard);
  }, []);

  return (
    <div className="leaderboard-container">
      {/* Navbar */}
      <div className="navbar">
        <button className="nav-button">Home</button>
        <button className="nav-button active">Leaderboard</button>
        <button className="nav-button">Logout</button>
      </div>

      {/* Leaderboard Section */}
      <div className="leaderboard-box">
        <h2>Leaderboard:</h2>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Game</th>
              <th>Time</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((player) => (
              <tr key={player.id}>
                <td>{player.username}</td>
                <td>{player.game}</td>
                <td>{player.time}</td>
                <td>{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardPage;
