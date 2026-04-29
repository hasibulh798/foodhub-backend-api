# 🍔 Food Hub Backend - High-Performance Multi-Vendor API

The robust backend engine powering the Food Hub ecosystem. Built with a focus on security, scalability, and seamless payment integration.

---

## 🚀 Core Features

- **🛡️ Secure Authentication**: Built with **Better Auth**, supporting Email/Password and Google OAuth.
- **💳 Payment Ecosystem**: Full integration with **SSLCommerz** sandbox, including automated order status updates via Instant Payment Notifications (IPN).
- **📦 Order Management**: Complex state machine for orders (Pending -> Confirmed -> Preparing -> Out for Delivery -> Delivered).
- **🏪 Provider Profiles**: Dynamic management of restaurant metadata, including custom **delivery fees** per provider.
- **📊 Database Integrity**: Powered by **PostgreSQL** and **Prisma ORM** for type-safe, high-speed data access.
- **📧 Email Notifications**: Integrated SMTP support for order confirmations and system alerts.

---

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Auth**: Better Auth
- **Payment**: SSLCommerz SDK

---

## ⚙️ Installation & Setup

### 1. Clone & Install
```bash
git clone https://github.com/hasibulh798/foodhub-backend-api
cd Server
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory. You can use the provided `.env.example` as a template:
```bash
cp .env.example .env
```
Fill in your database URL, auth secrets, SMTP credentials, and SSLCommerz keys.

### 3. Database Migration
```bash
npx prisma generate
npx prisma db push
```

### 4. Run the Server
```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

---

## 🔗 Key API Routes

### 🛍️ Orders
- `POST /api/orders`: Create a new order (Online/COD).
- `GET /api/orders/:id`: Fetch specific order details.
- `PATCH /api/orders/:id/cancel`: Cancel a pending order.

### 🍴 Meals & Providers
- `GET /api/meals`: Browse all available culinary items.
- `GET /api/providers/:id`: View detailed restaurant profile and menu.
- `PATCH /api/providers/me`: Update restaurant settings (Business Name, Address, Delivery Fee).

### 💳 Payments
- `POST /api/payment/success`: SSLCommerz success callback.
- `POST /api/payment/fail`: SSLCommerz failure callback.

---

## 📄 License
This project is licensed under the MIT License.

---
**Developed for the Food Hub Ecosystem**
