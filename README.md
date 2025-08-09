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

- Registration form with data validation.
- Login form with error handling.
- API consumption for registration and login.
- Secure JWT storage in localStorage.
- Automatic redirection based on authentication status.
- Protected page displaying authenticated user data.

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
