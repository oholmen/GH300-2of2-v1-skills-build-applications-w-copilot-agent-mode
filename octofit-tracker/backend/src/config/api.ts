const codespaceName = process.env.CODESPACE_NAME;

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : "http://localhost:8000";

export function getApiUrl(path: string) {
  return `${API_BASE_URL}${path}`;
}
