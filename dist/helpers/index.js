"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = exports.comparePassword = exports.hashPassword = exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
dotenv_1.default.config();
const salt = 10;
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    console.log("Please provide a jwt secret");
    process.exit(1);
}
const createToken = (id, email) => {
    return jsonwebtoken_1.default.sign({ id, email }, JWT_SECRET);
};
exports.createToken = createToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, JWT_SECRET);
};
exports.verifyToken = verifyToken;
const hashPassword = (password) => {
    return bcryptjs_1.default.hashSync(password, salt);
};
exports.hashPassword = hashPassword;
const comparePassword = (password, hashedPassword) => {
    return bcryptjs_1.default.compareSync(password, hashedPassword);
};
exports.comparePassword = comparePassword;
const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
};
exports.validateEmail = validateEmail;
