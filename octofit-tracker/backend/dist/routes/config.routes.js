"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = require("../config/api");
const router = (0, express_1.Router)();
router.get("/", (_, res) => {
    res.json({
        apiBaseUrl: api_1.API_BASE_URL,
    });
});
exports.default = router;
//# sourceMappingURL=config.routes.js.map