# 📚 MERN Stack Bookstore App

This is a full-stack Bookstore web application built with the MERN stack (MongoDB, Express, React, Node.js). It features a frontend built with React + Vite and a backend built with Node.js + Express.

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

---

### 🔧 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- npm (comes with Node.js)
- MongoDB (local or cloud instance)

---

### 📂 Folder Structure

```
root/
│
├── frontend/     # React + Vite frontend
├── backend/      # Express.js backend
└── README.md     # This file
```

---

## 🛠️ Project Development Steps

### Backend Development

1. **Started with backend** by creating `index.js`.
2. Used **Node.js** and **Nodemon** for development.
3. `config.js` was created to store constants like the port.
4. Added a **GET** method to test the initial setup.
5. Added MongoDB connection using **Mongoose** (`npm i mongoose`) and stored `MONGODB_URL` in `config.js`.  
   > Password: `9512701Y`
6. Created a `models` folder and implemented the **BookSchema** model.
7. Implemented the following REST API operations:
   - **POST**: To create a book
   - **GET**: To retrieve books
   - **PUT**: To update a book
   - **DELETE**: To remove a book
8. Refactored Node.js code using **Express Router** and moved routes to a separate `routes/` folder.
9. Enabled **CORS** (Cross-Origin Resource Sharing) to allow frontend-backend interaction.

---

### Frontend Development

10. Initialized frontend using **Vite + React**.
11. Added **Tailwind CSS** for styling:
    ```bash
    npm install -D tailwindcss@3 postcss autoprefixer
    npx tailwindcss init -p
    ```
12. Implemented **Single Page Application (SPA)** structure with **React Router DOM**.
13. Created `pages/` directory for each route/page and a `components/` directory for reusable UI elements.
14. Used a `Spinner` component to show loading state while fetching books.
15. Displayed:
    - Book list using card UI
    - Book details on a separate page
16. Added functionality to:
    - **Create** new book records
    - **Edit** and **Update** books
    - **Delete** books
17. Enhanced user experience with **modal alerts** and clean UI.

---

## 📦 Installation & Running

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2. Run Backend Server

```bash
cd backend
npm install
npm run dev
```

> Make sure your MongoDB server is running before this.

---

### 3. Run Frontend App

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

> The frontend will typically start at: `http://localhost:5173`

---

## 📸 Screenshots

_Add a few screenshots or demo GIFs here if you'd like._

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- Vite
- React
- Tailwind CSS
- Node.js
- Express
- MongoDB
