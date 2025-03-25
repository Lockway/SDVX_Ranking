import Image from "next/image";
import styles from "./page.module.css";

const dummyUsers = [
  { rank: 1, username: 'MINI', force: 22.596, sv: 'SV-7241-4083' },
  { rank: 2, username: 'MOL?LU', force: 21.987, sv: 'SV-5715-3145' },
  { rank: 3, username: 'NVNL', force: 20.460, sv: 'SV-6638-4024' },
  { rank: 5, username: 'RAIL', force: 20.374, sv: 'SV-5942-9468' },
  { rank: 6, username: 'TEST1', force: 19.574, sv: 'SV-1234-9468' },
  { rank: 7, username: 'TEST2', force: 18.833, sv: 'SV-5942-1234' },
  { rank: 8, username: 'TEST3', force: 17.123, sv: 'SV-5123-9999' },
  { rank: 9, username: 'TEST4', force: 16.968, sv: 'SV-4787-9468' },
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
