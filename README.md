# ✈️ SJ Travels NextJS

[![Next.js](https://img.shields.io/badge/Framework-Next.js_15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/Library-React_18-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind_CSS-38bdf8)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/UI-Shadcn%2Fui-black)](https://ui.shadcn.com/)
[![Zod](https://img.shields.io/badge/Validation-Zod-3068b7)](https://zod.dev/)
[![React Hook Form](https://img.shields.io/badge/Forms-React_Hook_Form-ec5990)](https://react-hook-form.com/)
[![Lucide React](https://img.shields.io/badge/Icons-Lucide_React-orange)](https://lucide.dev/)

**A premium, high-performance travel booking platform built for speed, SEO, and a seamless user experience.**

---

🌐 **Book a trip to tirupati:** [Live Demo](https://sjtravelsnext.vercel.app/)

---

## 🌟 Overview
**SJ Travels NextJS** is a modern web application designed to digitize the travel experience for users seeking temple tours, homestays, and vehicle rentals.

It leverages the power of **Next.js 15** and **React Server Components** to deliver near-instant page loads. The UI is crafted with **Shadcn/ui** and **Tailwind CSS**, ensuring accessibility and a stunning, responsive design that looks great on any device.

---

## 🚀 The "Next.js" Architecture
*(How it works under the hood)*

This project isn't just a website; it's a **hybrid web application** powered by the **Next.js App Router**. Here is the techy breakdown of how it works in simple language:

* **Server-First Rendering (RSC):** Unlike standard React apps that load entirely in your browser, this app does the heavy lifting on the *server*. Pages like `app/page.tsx` are pre-rendered on the server, meaning the user sees the content instantly without waiting for JavaScript to load.
* **Smart Hydration:** We use a technique called "Partial Hydration". The static parts (like text and images) are sent as pure HTML. The interactive parts (like the Navbar and Carousels) are "hydrated" (activated) separately. This makes the site feel incredibly fast.
* **Route Groups & Layouts:** The file structure uses `layout.tsx` to preserve the Navbar and Footer across pages while only updating the main content area. This reduces bandwidth usage and makes navigation instant.
* **Image Optimization:** All images (`Next/Image`) are automatically resized and converted to modern formats like WebP/AVIF by the Next.js server, preventing layout shifts and saving data for mobile users.

---

## ⚡ Features
-   **Dynamic Fleet Showcase:** Browse luxury buses, tempos, and cars with fluid animations.
-   **Interactive Carousels:** Built with **Embla Carousel**, allowing touch-friendly swiping through testimonials and hero images.
-   **Temple & Homestay Discovery:** Dedicated sections for exploring local attractions with rich media cards.
-   **Smart Theme Switching:** Integrated **Next-Themes** for a seamless Dark/Light mode experience.
-   **Form Validation:** Uses **Zod** schema validation with **React Hook Form** to ensure all booking inquiries are accurate and error-free before submission.
-   **SEO Optimized:** Built-in `sitemap.ts` and `robots.ts` ensure Google indexes the site perfectly.

---

## 🎨 UI/UX Design
-   **Glassmorphism & Gradients:** Uses subtle gradient overlays and blur effects for a premium, modern feel.
-   **Motion & Interactivity:** Elements fade in and slide up (`AOS` / `Tailwind Animate`) as you scroll, keeping the user engaged.
-   **Mobile-First Drawers:** On mobile, navigation and details open in native-like "drawers" using the **Vaul** library, providing an app-like feel on the web.
-   **Toast Notifications:** Uses **Sonner** to provide non-intrusive feedback (like "Message Sent!") that looks sleek and disappears automatically.

---

## 🛠 Tech Stack
-   **Framework:** Next.js 15 (App Router)
-   **Language:** TypeScript (Strict type safety)
-   **Styling:** Tailwind CSS + Tailwind Animate
-   **Component Library:** Shadcn/ui (Radix UI Primitives)
-   **Icons:** Lucide React
-   **Animations:** Framer Motion / AOS
-   **Forms:** React Hook Form + Zod
-   **Charts:** Recharts (for data visualization)
-   **Utils:** Date-fns, CLSX, Tailwind-Merge

---

## 📌 Installation/Usage

If you want to run this project locally:

```bash
# Clone the repository
git clone <your-repo-link>

# Navigate to the project folder
cd sjtravelsnextjs

# Install dependencies (using Legacy Peer Deps if needed due to React 19/Next 15 conflicts)
npm install --legacy-peer-deps

# Run the development server
npm run dev