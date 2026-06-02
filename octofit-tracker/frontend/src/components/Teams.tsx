import React, { useEffect, useState } from "react";
import { fetchList, API_BASE } from "../utils/api";

export default function Teams() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchList("/api/teams/")
      .then((data) => setItems(data))
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading teams…</div>;
  if (error) return <div>Error loading teams: {error}</div>;

  return (
    <section>
      <h2>Teams</h2>
      <p>API base: {API_BASE}</p>
      <ul>
        {items.map((t, i) => (
          <li key={t.id || i}>{t.name || JSON.stringify(t)}</li>
        ))}
      </ul>
    </section>
  );
}
