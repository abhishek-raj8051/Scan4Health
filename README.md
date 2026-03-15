![Scan4Health project logo](https://github.com/abhishek-raj8051/Scan4Health/blob/main/Scan4Food.jpeg)
#  Scan4Health

<p align="center">
Smart Food Health Scanner using Barcode Technology
</p>

<p align="center">

<img src="https://img.shields.io/badge/Project-Scan4Health-green?style=for-the-badge">
<img src="https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge">
<img src="https://img.shields.io/badge/Frontend-HTML%20CSS%20JS-blue?style=for-the-badge">
<img src="https://img.shields.io/badge/API-OpenFoodFacts-orange?style=for-the-badge">
<img src="https://img.shields.io/badge/Deployment-Netlify-black?style=for-the-badge">

</p>

---

# 📌 Project Overview

**Scan4Health** is a smart web application that helps users make **healthier food choices** by scanning product barcodes and analyzing nutritional values.

The application retrieves product data using the **OpenFoodFacts API** and calculates a **health rating based on WHO-inspired nutrition standards**.

Users can instantly determine whether a product is:

🟢 **Healthy**
🟡 **Average**
🔴 **Unhealthy**

---

# 🌐 Live Demo

Try the application here:

https://scan4health.netlify.app/

---

# ✨ Features

📷 **Barcode Scanner**
Scan packaged food product barcodes using your device camera.

📊 **Instant Nutrition Analysis**
Displays important nutrition values including:

* Sugar
* Fat
* Salt

🧠 **Health Rating System**
Calculates a health score based on WHO-inspired nutrition thresholds.

📝 **Manual Nutrition Input**
If a product is not available in the database, users can manually enter nutrition values.

📱 **Progressive Web App (PWA)**
The application can be installed as a mobile app directly from the browser.

⚡ **Responsive Design**
Works smoothly on mobile, tablet, and desktop devices.

---

# 🧠 Health Rating Algorithm

The health rating is calculated using a scoring system based on nutrition levels.

### Sugar

| Level | Score |
| ----- | ----- |

> 10 g | +2 |
> 5 g | +1 |

### Fat

| Level | Score |
| ----- | ----- |

> 17.5 g | +2 |
> 3 g | +1 |

### Salt

| Level | Score |
| ----- | ----- |

> 1.5 g | +2 |
> 0.3 g | +1 |

### Final Result

| Score | Rating       |
| ----- | ------------ |
| 0–1   | 🟢 Healthy   |
| 2–3   | 🟡 Average   |
| 4+    | 🔴 Unhealthy |

---

# 📸 Screenshots

### Home Interface

Main interface showing the Scan4Health homepage.

### Barcode Scanner

Users can scan product barcodes using their camera.

### Product Analysis

Displays product name, nutrition values, and health rating.

---

# 🛠️ Tech Stack

Frontend:

* HTML5
* CSS3
* JavaScript

Libraries:

* html5-qrcode (Barcode scanning)

API:

* OpenFoodFacts API

Deployment:

* Netlify

PWA Technologies:

* Service Worker
* Web App Manifest

---

# 📂 Project Structure

```
Scan4Health
│
├── index.html
├── style.css
├── script.js
├── manifest.json
├── service-worker.js
├── icon-192.png
├── icon-512.png
└── README.md
```

---

# ⚙️ Installation Guide

Clone the repository:

```
git clone https://github.com/yourusername/Scan4Health.git
```

Open the project folder:

```
cd Scan4Health
```

Run using **Live Server** or open **index.html** in your browser.

---

# 📈 Future Improvements

Possible improvements for the project:

🤖 AI-based food health recommendation
📊 Nutrition charts and graphs
🗄️ Product history storage
📱 Native mobile application
🌍 Multi-language support
🥗 Diet recommendation system

---

# 👨‍💻 Contributors

### Madhav Kumar

Frontend Development |
UI Design |
Application Logic

---

### Abhishek Raj

Barcode Scanner Integration |
API Integration |
Application Development

---

# ⭐ Support

If you like this project, please give it a ⭐ on GitHub.

It helps others discover the project and supports the developers.

---

# 📜 License

This project is developed for ***educational purposes***
