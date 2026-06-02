import React, { useEffect, useState } from "react";
import { fetchList, API_BASE } from "../utils/api";

export default function Users() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchList("/api/users/")
      .then((data) => setItems(data))
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading users…</div>;
  if (error) return <div>Error loading users: {error}</div>;

  return (
    <section>
      <h2>Users</h2>
      <p>API base: {API_BASE}</p>
      <ul>
        {items.map((u, i) => (
          <li key={u.id || i}>{u.name || u.username || JSON.stringify(u)}</li>
        ))}
      </ul>
    </section>
  );
}
