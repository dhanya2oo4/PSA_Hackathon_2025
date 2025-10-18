"use client";

import { useEffect, useState } from "react";
import { title } from "@/components/primitives";

type KBItem = {
  id: string;
  title: string;
  content: string;
  tags?: string[];
  createdAt?: string;
};

export default function KBPage() {
  const [items, setItems] = useState<KBItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchKB = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("http://localhost:4000/api/kb/sample");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setItems(data.items || []);
      } catch (err: any) {
        setError(err.message || String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchKB();
  }, []);

  return (
    <div>
      <h1 className={title()}>Knowledge Base</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <ul>
          {items.map((it) => (
            <li key={it.id} className="mb-4">
              <h2 className="font-semibold">{it.title}</h2>
              <p className="text-sm text-gray-600">{it.content}</p>
              {it.tags && (
                <p className="text-xs text-gray-500">Tags: {it.tags.join(", ")}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
