import Image from "next/image";
import styles from "./page.module.css";


const dummyUsers = [
  { rank: 1, username: 'MOL?LU', force: 21.987, sv: 'SV-5715-3145' },
  { rank: 2, username: 'NVNL', force: 20.460, sv: 'SV-6638-4024' },
  { rank: 3, username: 'RAIL', force: 20.374, sv: 'SV-5942-9468' },
];

export default function Home() {
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Game Ranking Board</h1>
      <table className={ styles.Ranking }>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Volforce</th>
            <th>SV</th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((user) => (
            <tr key={user.rank}>
              <td>{user.rank}</td>
              <td>{user.username}</td>
              <td>{user.force.toFixed(3)}</td>
              <td>{user.sv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
