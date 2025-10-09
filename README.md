<h2> KVSHS Admin - Electron Desktop App </h2>
<div align="center">
A modern, cross-platform desktop application for school administration, built with Electron, TypeScript, and Tailwind CSS. This application provides a clean user interface for managing student enrollments and other administrative tasks.
</div>
<br>
<p align="center">
  <a href="https://www.electronjs.org/">
    <img src="https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white" alt="Electron">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  </a>
</p>

<p align="center">
<a href="#about-the-project">About The Project</a> •
<a href="#getting-started">Getting Started</a> •
<a href="#usage">Usage</a> •
<a href="#license">License</a>
</p>

<div align="center">
<img src="https://raw.githubusercontent.com/griffmass/Capstone-Desktop/main/assets/readme/login.png" alt="Project Screenshot" width="80%">
</div>

<div align="center">
<img src="https://raw.githubusercontent.com/griffmass/Capstone-Desktop/main/assets/readme/dashboard.png" alt="Project Screenshot" width="80%">
</div>

<h3>About The Project</h3>
This project serves as the front-end interface for the KVSHS Admin Dashboard. It's designed to be a lightweight, performant, and visually appealing desktop application for internal school management.

<h3>Built With</h3>
This project was built using the following technologies:

<<<<<<< HEAD
**1. Install Node.js**

- Download and install Node.js (Windows Installer `.msi`):  
  👉 [https://nodejs.org/en/download](https://nodejs.org/en/download)

Verify installation:

=======
- [Electron.js](https://www.electronjs.org/): A framework for creating native applications with web technologies like JavaScript, HTML, and CSS.

- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
  
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.

<h3>Getting Started</h3>
To get a local copy up and running, please follow these simple steps.


<h3>Prerequisites</h3>

Ensure you have Node.js installed on your system. You can download it from the official website:

- [Node.js Downloads](https://www.nodejs.org/en/download/):

After installation, verify that `node` and `npm` are available in your terminal:
>>>>>>> 7042335b49b24f61061738b97b62df8ecb759c61
```
node -v
npm -v
```

<<<<<<< HEAD
**2. Create Project Directory**

```
mkdir electron-login-app
=======
<h3>Installation</h3>
>>>>>>> 7042335b49b24f61061738b97b62df8ecb759c61

**1. Clone the Repository**

<<<<<<< HEAD
or clone this repository:

=======
>>>>>>> 7042335b49b24f61061738b97b62df8ecb759c61
```
git clone [https://github.com/griffmass/Capstone-Desktop.git](https://github.com/griffmass/Capstone-Desktop.git)
cd Capstone-Desktop
```
**2. Install NPM Packages**

<<<<<<< HEAD
**3. Initialize Project**

=======
This will install Electron and all other necessary development dependencies.
>>>>>>> 7042335b49b24f61061738b97b62df8ecb759c61
```
npm install
```

<<<<<<< HEAD
**4. Install Electron**

=======
<h3>Usage</h3>

To build the CSS and TypeScript files and run the application, use the following command:
>>>>>>> 7042335b49b24f61061738b97b62df8ecb759c61
```
npm start
```
This will open the Electron window with the login screen.

<h3>🔧 Project Configuration Details</h3>
<details>
<summary><strong>Tap to view framework setup commands</strong></summary>

<h3>Tailwind CSS Setup</h3>

If you need to set up Tailwind CSS from scratch in a new project, follow these steps:
**1. Install Dependencies:**

```
npm install -D tailwindcss postcss autoprefixer
```

<<<<<<< HEAD
⚠️ If you encounter errors during install:

- Uninstall any third-party antivirus
- Or reinstall Node.js

---

## 🎨 Tailwind CSS Setup

**1. Uninstall old Tailwind (if installed)**

```
npm uninstall tailwindcss
```

**2. Install Tailwind v3 with PostCSS and Autoprefixer**

```
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

## 🔧 TypeScript Setup
=======
**Initialize Tailwind:** This creates `tailwind.config.js` and `postcss.config.js` files.

```
npx tailwindcss init -p
```

<h3>TypeScript Setup</h3>

**1. Install Dependencies:**
>>>>>>> 7042335b49b24f61061738b97b62df8ecb759c61

```
npm install -D typescript @types/node @types/electron
```

<<<<<<< HEAD
```
npx tsc --init
```

**tsconfig.json**
=======
**Initialize TypeScript:** This creates a `tsconfig.json` file.

```
npx tsc --init
```
</details>

<details>
<summary><strong>Tap to view configuration file contents</strong></summary>

Here are the essential configurations for `package.json` and `tsconfig.json`.

`package.json` **(Scripts)**

```
"scripts": {
  "build:css": "tailwindcss -i ./src/styles/input.css -o ./dist/styles.css",
  "build:ts": "tsc",
  "start": "npm run build:css && npm run build:ts && electron .",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

`tsconfig.json`
>>>>>>> 7042335b49b24f61061738b97b62df8ecb759c61

```
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": [
    "src/**/*.ts"
  ]
}
<<<<<<< HEAD
```

**package.json**

```
  "scripts": {
    "build:css": "tailwindcss -i ./src/styles/input.css -o ./dist/styles.css",
    "build:ts": "tsc",
    "start": "npm run build:css && npm run build:ts && electron .",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

**▶️ Run the App**

```
npm start
```
=======

```

</details>

<h3>License</h3>
>>>>>>> 7042335b49b24f61061738b97b62df8ecb759c61

Distributed under the MIT License. See `LICENSE` for more information.
