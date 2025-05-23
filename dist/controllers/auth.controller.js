"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const users_1 = require("../db/users");
const index_1 = require("../helpers/index");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).json({ message: "Please provide all the fields" });
        return;
    }
    if (!(0, index_1.validateEmail)(email)) {
        res.status(400).json({ message: "Please provide a valid email" });
        return;
    }
    const user = yield (0, users_1.getUserByEmail)(email);
    if (user) {
        res.status(400).json({ message: "User already exists" });
        return;
    }
    const hashedPassword = yield (0, index_1.hashPassword)(password);
    yield (0, users_1.createUser)(name, email, hashedPassword);
    res.status(201).json({ message: "User created successfully" });
    return;
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Please provide all the fields" });
        return;
    }
    if (!(0, index_1.validateEmail)(email)) {
        res.status(400).json({ message: "Please provide a valid email" });
    }
    const user = yield (0, users_1.getUserByEmail)(email);
    if (!user) {
        res.status(400).json({ message: "User does not exist" });
        return;
    }
    if (!(yield (0, index_1.comparePassword)(password, user.password))) {
        res.status(400).json({ message: "Invalid credentials" });
        return;
    }
    const id = user._id.toString();
    const token = (0, index_1.createToken)(id, user.email);
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ message: "Login successful", user });
    return;
});
exports.login = login;
