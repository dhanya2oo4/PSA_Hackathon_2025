"use client";

import { useEffect, useState } from "react";
import { title } from "@/components/primitives";

type Incident = {
  id: string;
  description: string;
  analysis?: Record<string, any>;
  createdAt?: string;
};

export default function IncidentPage() {
  const [items, setItems] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:4000/api/incidents/sample");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setItems(data.items || []);
      } catch (err: any) {
        setError(err.message || String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchIncidents();
  }, []);

  return (
    <div>
      <h1 className={title()}>Incidents</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <ul>
          {items.map((it) => (
            <li key={it.id} className="mb-4">
              <h2 className="font-semibold">#{it.id} - {it.analysis?.severity ?? 'n/a'}</h2>
              <p>{it.description}</p>
              <p className="text-xs text-gray-500">{it.createdAt}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
