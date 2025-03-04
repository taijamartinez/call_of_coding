const LeaderboardPage: React.FC = () => {
  const players = [
    { name: "Ikran", score: 1200, gamePlayed: "Fix Broken Function", timeTaken: "5m 30s" },
    { name: "Alyssa", score: 1300, gamePlayed: "Bug Buster", timeTaken: "3m 45s" },
    { name: "Stacy", score: 2000, gamePlayed: "Code Quest", timeTaken: "2m 30s" },
    { name: "Taija", score: 1660, gamePlayed: "Code Rush", timeTaken: "4m 45s" },
   
  ];
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Player</th>
            <th>Game Played</th>
            <th>Time Taken</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.gamePlayed}</td>
              <td>{player.timeTaken}</td>
              <td>{player.score} pts</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default LeaderboardPage;