# Authentication App - React

This is the frontend app for the API build with Spring Boot. [Spring boot api](https://github.com/carloslopez98/authentication-api-spring.git)

## Table of contents

- [Demo](#-demo)
- [Features](#-features)
- [Technologies](#-technologies)
- [Project structure](#-project-structure)
- [Installation](#-installation)
- [Author](#-author)

## 🎬 Demo

![Demo project gif](./assets/demo/auth_demo.jpg)


## ✨ Features

- 📷 Load a static image (frame) of a football match play
- 🧭 Manually draw at least two horizontal and two vertical field lines
- 📐 Automatically compute two vanishing points using perspective geometry
- ⚽ Select attacker and defender reference points on the field
- 📏 Project a baseline using the horizontal vanishing point
- 🟥 Visual projection of the attacker's and defender's most advanced body parts
- 🧠 Helps visually determine potential offside situations
- 🎨 Intuitive JavaFX GUI for drawing and analysis

## 🛠 Technologies

This project uses the following technologies:

- **React 19+**
- **React Router Dom**
- **Typescript**
- **Zod**
- **Vite**

## 📂 Project structure

```bash
|── public/
├── src/
    ├── assets/
    ├── components/
    ├── context/
    ├── hooks/
    ├── pages/
    ├── types/
    ├── validations/
    ├── App.css
    ├── App.tsx
    ├── index.css
    └── main.tsx
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## 💻 Installation

1. Clone the repository:
```bash
git clone https://github.com/carloslopez98/authentication-react.git
cd authentication-react
```

2. Install the dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The frontend will be running in:
```
http://localhost:5173
```

## 📌 Main pages

- **Login**: Log in form.
- **Register**: Register form.
- **Home**: Show that the user is authenticated.

## 👤 Author

**Carlos Lopez**
- GitHub: [@carloslopez98](https://github.com/carloslopez98)
- Email: carloslopez18.c@gmail.com
- LinkedIn: [linkedin.com/in/carloslopez98](https://linkedin.com/in/carloslopez98)
