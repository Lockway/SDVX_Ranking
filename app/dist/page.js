import dynamic from "next/dynamic";

const ForceChart = dynamic(() => import("./ForceChart"), { ssr: false });

const dummyUsers = Array.from({ length: 10000 }, (_, i) => ({
    username: `User${i + 1}`,
    force: parseFloat((Math.random() * 24).toFixed(3)), // force between 0–24
    sv: `SV-${1000 + i}-${Math.floor(1000 + Math.random() * 9000)}`
}));

export default function Dist() {
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Volforce Distribution</h1>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <ForceChart users={dummyUsers} />
      </div>
    </main>
  );
}
