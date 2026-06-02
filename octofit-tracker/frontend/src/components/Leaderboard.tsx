import React, { useEffect, useState } from "react";
import { fetchList, API_BASE } from "../utils/api";

export default function Leaderboard() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchList("/api/leaderboard/")
      .then((data) => setItems(data))
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading leaderboard…</div>;
  if (error) return <div>Error loading leaderboard: {error}</div>;

  return (
    <section>
      <h2>Leaderboard</h2>
      <p>API base: {API_BASE}</p>
      <ol>
        {items.map((p, i) => (
          <li key={p.id || i}>{p.name || p.username || JSON.stringify(p)}</li>
        ))}
      </ol>
    </section>
  );
}
