const LeaderboardPage = () => {
  const players = [
    { name: "Ikran", score: 1200 },
    { name: "Alyssa", score: 1300 },
    { name: "Stacy", score: 2000 },
    { name: "Taija", score: 1660 },
    { name: "Aaron", score: 1900 },
  ];
  return (
    <div className="leaderboard">
    <h2>Leaderboard</h2>
    <ul>
      {players.map((player, index) => (
        <li key={index}>
          {index + 1}. {player.name} - {player.score} points
        </li>
      ))}
    </ul>
  </div>
);
};

export default LeaderboardPage;