"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// connect with mongodb
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
    console.log("Please provide a mongo url");
    process.exit(1);
}
function connectToDatabase() {
    mongoose_1.default.connect(MONGO_URL).then(() => {
        console.log("Connected to database");
    }).catch((error) => {
        console.log("Error connecting to database");
        console.log(error);
    });
}
exports.default = connectToDatabase;
