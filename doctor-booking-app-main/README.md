# 🏥 Doctor Booking App

🔗 **Live Preview:** [Click here](https://doctor-booking-app-fcol.onrender.com/) <br>
🔗 **Live Preview of Admin Panel:** [Click here](https://doctor-booking-admin-buqk.onrender.com/)

_A full-stack web application that allows patients to book appointments with doctors, doctors to manage their schedules, and administrators to oversee the system._

---

## Table of Contents

1. [✨ Features](#features)
2. [🛠 Tech Stack](#tech-stack)
3. [📡 API Endpoints](#api-overview)

---

## Features

- **User Management:** Patients and doctors have separate roles with authentication.
- **Appointment Booking:** Patients can schedule and manage appointments.
- **Doctor Panel:** Doctors can view their schedules and update appointment statuses.
- **Admin Dashboard:** Admins can manage users, doctors, and appointments.
- **Secure Authentication:** 🔐 JWT-based authentication for all users.
- **Cloud Storage:** ☁️ Profile images and files are stored via Cloudinary.

---

## Tech Stack

### **Frontend & Admin Panel**

🚀 **React** – UI framework  
🛣 **React Router** – Navigation  
🎨 **TailwindCSS** – Styling  
📡 **Axios** – API requests

### **Backend**

🟢 **Node.js** – Runtime environment  
🚀 **Express.js** – Backend framework  
🛢 **MongoDB & Mongoose** – Database  
🔐 **JWT** – Authentication  
📂 **Multer** – File uploads

### **Cloud Services**

☁️ **Cloudinary** – Image storage

---

## API Overview

### **🔑 Admin API**

| Method    | Endpoint               | Description                                  |
| --------- | ---------------------- | -------------------------------------------- |
| 🔹 `POST` | `/add-doctor`          | Add a doctor (requires admin authentication) |
| 🔹 `POST` | `/all-doctors`         | Get all doctors (requires authentication)    |
| 🔹 `POST` | `/change-availability` | Change doctor availability                   |
| 🔹 `GET`  | `/appointments`        | View all appointments                        |
| 🔹 `POST` | `/cancel-appointment`  | Cancel an appointment                        |
| 🔹 `GET`  | `/dashboard`           | Get admin dashboard data                     |

### **🩺 Doctor API**

| Method    | Endpoint                | Description                      |
| --------- | ----------------------- | -------------------------------- |
| 🔹 `GET`  | `/list`                 | Get list of doctors              |
| 🔹 `POST` | `/login`                | Doctor login                     |
| 🔹 `GET`  | `/appointments`         | View doctor appointments         |
| 🔹 `POST` | `/complete-appointment` | Mark an appointment as completed |
| 🔹 `POST` | `/cancel-appointment`   | Cancel an appointment            |
| 🔹 `GET`  | `/doctor-dashboard`     | Get doctor dashboard stats       |
| 🔹 `GET`  | `/profile-data`         | Get doctor profile               |
| 🔹 `POST` | `/update-profile`       | Update doctor profile            |

### **👤 User API**

| Method    | Endpoint              | Description            |
| --------- | --------------------- | ---------------------- |
| 🔹 `POST` | `/register`           | Register new user      |
| 🔹 `POST` | `/login`              | User login             |
| 🔹 `GET`  | `/get-profile`        | Get user profile       |
| 🔹 `POST` | `/update-profile`     | Update user profile    |
| 🔹 `POST` | `/book-appointment`   | Book an appointment    |
| 🔹 `GET`  | `/appointments`       | View user appointments |
| 🔹 `POST` | `/cancel-appointment` | Cancel an appointment  |

---

## 🔑 Admin Access

**Demo Credentials:**  
📧 **Email:** `admin@example.com`  
🔑 **Password:** `admin123$#%`

## 🔑 Doctor Access

**Demo Credentials:**  
📧 **Email:** `doctor@example.com`  
🔑 **Password:** `doctor123$#%`
