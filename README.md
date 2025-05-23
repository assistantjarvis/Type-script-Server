# 🚀 TypeScript Node.js Server
A simple **Node.js** server built with **TypeScript** and Express.

## 📌 Features
- TypeScript support
- Express.js for routing
- Environment variables via `dotenv`
---

## 📂 Project Structure
```
/type_script_server
│── /src
│   ├── index.ts       # Main server file
│   ├── routes.ts      # Routes setup
│── /dist              # Compiled JavaScript files (generated)
│── package.json       # Dependencies & scripts
│── tsconfig.json      # TypeScript configuration
│── .env               # Environment variables
│── vercel.json        # Vercel deployment config
│── README.md          # Documentation
```

---

## 🛠️ Setup & Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Ap00rvx/basic-type-script-server.git
cd basic-type-script-server
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/mydb
```

---

## 🚀 Running the Server
### Development Mode (with Nodemon)
```sh
npm run dev
```

### Production Mode
```sh
npm run build
npm start
```


