export const VITE_CODESPACE_NAME = (import.meta.env.VITE_CODESPACE_NAME as string) || "";

export const API_BASE = VITE_CODESPACE_NAME
  ? `https://${VITE_CODESPACE_NAME}-8000.app.github.dev`
  : "http://localhost:8000";

function normalizeListResponse(json: any): any[] {
  if (Array.isArray(json)) return json;
  if (!json) return [];

  // Common pagination shapes
  if (Array.isArray(json.results)) return json.results;
  if (Array.isArray(json.data)) return json.data;
  if (Array.isArray(json.items)) return json.items;

  // If the payload looks like { results: { items: [...] } }
  if (json.results && Array.isArray(json.results.items)) return json.results.items;

  // Fall back to attempting to find the first array value
  for (const key of Object.keys(json)) {
    if (Array.isArray(json[key])) return json[key];
  }

  return [];
}

export async function fetchList(path: string) {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Fetch error ${res.status}: ${text}`);
  }
  const json = await res.json().catch(() => null);
  return normalizeListResponse(json);
}

export default API_BASE;
