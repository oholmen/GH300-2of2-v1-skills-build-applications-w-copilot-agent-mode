import React, { useEffect, useState } from "react";
import { fetchList, API_BASE } from "../utils/api";

export default function Workouts() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchList("/api/workouts/")
      .then((data) => setItems(data))
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading workouts…</div>;
  if (error) return <div>Error loading workouts: {error}</div>;

  return (
    <section>
      <h2>Workouts</h2>
      <p>API base: {API_BASE}</p>
      <ul>
        {items.map((w, i) => (
          <li key={w.id || i}>{w.name || JSON.stringify(w)}</li>
        ))}
      </ul>
    </section>
  );
}
