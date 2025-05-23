import express from "express"; 
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import  connectToDatabase from "./config/database_connection";
import router from "./router/index";

const app = express();
connectToDatabase();
app.use(cors(
    {
        credentials: true,
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(router());

app.get("/", (req:express.Request , res : express.Response) => {
  res.send("Hello World!");
});