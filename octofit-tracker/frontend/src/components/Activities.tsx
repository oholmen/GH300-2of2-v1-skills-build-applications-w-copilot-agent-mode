import React, { useEffect, useState } from "react";
import { fetchList, API_BASE } from "../utils/api";

export default function Activities() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchList("/api/activities/")
      .then((data) => setItems(data))
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading activities…</div>;
  if (error) return <div>Error loading activities: {error}</div>;

  return (
    <section>
      <h2>Activities</h2>
      <p>API base: {API_BASE}</p>
      <ul>
        {items.map((a, i) => (
          <li key={a.id || i}>{a.title || a.type || JSON.stringify(a)}</li>
        ))}
      </ul>
    </section>
  );
}
