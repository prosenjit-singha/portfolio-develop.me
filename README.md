# 🌟 Personal Portfolio Website

This is a modern and responsive portfolio website built with:

- **Next.js v15 (App Router)**
- **Tailwind CSS v4**
- **Framer Motion** for animations

The site showcases your work, skills, and experience with a focus on stunning UX and visual polish.
[Visit ->](https://portfolio-develop-me.vercel.app)

---

## 🚀 Features

- Smooth animations using Framer Motion
- Fully responsive layout
- App Router architecture (Next.js 15)
- Dark/light mode support
- Clean and minimal design system using Tailwind v4
- SignalR for real-time updates
- React Query for data fetching
- Leaflet for map
- Infinite scroll for user list using **React Query**

---

## 📦 Tech Stack

- **Next.js v15**
- **Tailwind CSS v4**
- **Framer Motion**
- **TypeScript**
- **ShadCN UI (optional if used)**

---

## 🛠️ Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. **Install dependencies**

```bash
npm install
```

# Map & User List

To see the map & user list, you need to click the **Users/Location** link from the navbar. or you can go to the /users location.

<!-- include link to /users -->

[Users/Location](https://portfolio-develop-me.vercel.app/location-sharing)

<!-- note warning -->

> Note: SignalR Hub will not work because of the CORS policy. But it will work from the local development environment.

> User List: Since https://tech-test.raintor.com/user/GetUsersList?take=10&skip=0 doesn't work, I am using faker.js to generate fake users which give us the same data as the API would return.
