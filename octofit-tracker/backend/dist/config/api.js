"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_BASE_URL = void 0;
exports.getApiUrl = getApiUrl;
const codespaceName = process.env.CODESPACE_NAME;
exports.API_BASE_URL = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : "http://localhost:8000";
function getApiUrl(path) {
    return `${exports.API_BASE_URL}${path}`;
}
//# sourceMappingURL=api.js.map