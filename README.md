# Electron Desktop App

This project is a simple **Electron.js desktop app** with a login form.  
Below are the setup instructions for **Electron** and **Tailwind CSS**.

---

## 🚀 Electron Setup

### 1. Install Node.js
- Download and install Node.js (Windows Installer `.msi`):  
  👉 [https://nodejs.org/en/download](https://nodejs.org/en/download)

- Verify installation:
  ```bash
  node -v
  npm -v

### 2. Create Project Directory
```
mkdir electron-login-app

cd electron-login-app
```

or clone this repository:
```
git clone https://github.com/griffmass/Capstone-Desktop.git
cd Capstone-Desktop
```

### 3. Initialize Project
```
npm init -y
```

### 4. Install Electron
```
npm install electron --save-dev
```

⚠️ If you encounter errors during install:
- Uninstall any third-party antivirus
- Or reinstall Node.js

---

## 🎨 Tailwind CSS Setup

### 1. Uninstall old Tailwind (if installed)
```
npm uninstall tailwindcss
```

### 2. Install Tailwind v3 with PostCSS and Autoprefixer
```
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

### ▶️ Run the App
```
npm start
```

### 📌 Notes

- This project is for frontend only (UI login form).
- No backend or authentication is included.
