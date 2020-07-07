"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = process.env.PORT || 3000;
app.get("/", function (req, res) { return res.send("Welcome to TypeScript"); });
app.listen(PORT, function () { return console.log("server started on port " + PORT); });
//# sourceMappingURL=index.js.map