# HngBackendStage0

A simple Node.js/Express TypeScript API with a `/me` profile endpoint that fetches random cat facts.

## 🚀 Setup Instructions

### 1. Clone the repository
```sh
git clone https://github.com/Thomson-dev/HngBackendStage0.git
cd HngBackendStage0
```

### 2. Install dependencies
```sh
npm install
```

### 3. Set up environment variables
Create a `.env` file in the project root with the following content:
```env
PORT=4000
EMAIL=your-email@example.com
NAME=Your Full Name
STACK=Node.js/Express
```

- `PORT` — (optional) Port for the server (default: 4000)
- `EMAIL` — Your email address (required)
- `NAME` — Your full name (required)
- `STACK` — Your backend stack (required)

### 4. Run the server in development mode
```sh
npm run dev
```

### 5. Build and run in production mode
```sh
npm run build
npm start
```

## 🛠️ Dependencies
- express
- axios
- cors
- dotenv

### Dev Dependencies
- typescript
- ts-node
- nodemon
- @types/node
- @types/express
- @types/cors
- @types/dotenv

All dependencies are installed with `npm install`.

## 📋 API Endpoint
- **GET** `/me` — Returns your profile and a random cat fact.

## 📦 Project Structure
```
backend-wizard-stage0/
├── server.ts
├── package.json
├── tsconfig.json
├── .env
├── .gitignore
└── ...
```

---

For any issues, please open an issue or contact the maintainer.
