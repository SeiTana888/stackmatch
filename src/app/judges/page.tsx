// src/app/judges/page.tsx
import { getBaseUrl } from "@/lib/abs-url";

type Judge = { id: string; name: string; stacks: string[] };

export default async function JudgesPage() {
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/judges`, { cache: "no-store" });
  const judges: Judge[] = await res.json();
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-2xl font-bold">Judges</h1>
      <ul className="space-y-3">
        {judges.map(j => (
          <li key={j.id} className="rounded-xl border p-4">
            <div className="font-semibold">{j.name}</div>
            <div className="text-sm opacity-80">{j.stacks.join(", ")}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
