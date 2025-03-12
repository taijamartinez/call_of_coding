import { useState, useEffect } from "react";
import "./css/LeaderboardPage.css";
import Auth from "../utils/auth";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch leaderboard data (Simulated for now)
  useEffect(() => {
    let isMounted = true;

    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        setError(null);

        const token = Auth.getToken();
        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        const response = await fetch("/api/leaderboard", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch leaderboard: ${response.statusText}`);
        }

        const data = await response.json();
        if (!isMounted) return;
        console.log("Fetched Leaderboard Data:", data);

        const formattedLeaderboard: Player[] = data.map((entry: any) => ({
          id: entry.id,
          username: entry.User?.username || "Unknown",
          game: entry.Game?.title || "Unknown Game",
          time: `${entry.gameTime} seconds`,
          points: entry.score,
        }));

        setLeaderboard(formattedLeaderboard);
      } catch (error: any) {
        console.error("❌ Error fetching leaderboard:", error);
        setError(error.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchLeaderboard();
    return () => {
      isMounted = false;
    };
  }, []);


  return (
    <div className="leaderboard-container">
     
      {/* Leaderboard Section */}
      <div className="leaderboard-box">
      <h2>Leaderboard:</h2>

{loading && <p>Loading leaderboard...</p>}
{error && <p className="error">{error}</p>}

{!loading && !error && (
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
)}
</div>
</div>
);
};

export default LeaderboardPage;