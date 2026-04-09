# Next.js E-Commerce Template

This is a modern, responsive e-commerce template built with Next.js 14 (App Router), React, and Tailwind CSS. It is a direct conversion of a provided vanilla HTML/JS e-commerce prototype into a robust React architecture.

## Features Included
- **Responsive Design**: fully adapted via Tailwind utility classes.
- **Global State Management**: React Context API (`ShopContext.tsx`) handles the shopping cart.
- **Key Pages**: Home, Product Details, Checkout, and User Profile.
- **Slide-over Cart**: Accessible from the header, persists via local storage simulation.
- **Tailwind Configuration**: Custom color palette mapping to the original design (`primary`, `secondary`).

## Step-by-Step Instructions

### 1. Prerequisites
Ensure you have Node.js (v18.17 or newer) installed on your system.

### 2. Installation
1. Create a new directory for your project and navigate into it.
2. Create the files exactly as provided in the JSON structure.
3. Run the following command to install the required dependencies:
   ```bash
   npm install next react react-dom lucide-react
   npm install -D typescript @types/node @types/react @types/react-dom tailwindcss postcss autoprefixer eslint eslint-config-next
   ```

### 3. Running the Development Server
Start the local Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Project Structure Overview
- `app/layout.tsx`: Contains the global layout, wrapping the application in the `ShopProvider` and rendering the Header/Footer globally.
- `app/page.tsx`: The landing page with a hero section and product grid.
- `components/`: Contains reusable UI parts (`Header.tsx`, `ProductCard.tsx`, `CartSidebar.tsx`).
- `context/ShopContext.tsx`: The brain of the cart system.
- `lib/data.ts`: Mock data file simulating an API response or database.

### 5. Deployment & Mobile Management
**Deploying to Vercel (Recommended):**
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click **Add New** -> **Project**.
4. Import your repository. Vercel will automatically detect that it's a Next.js project.
5. Click **Deploy**. Your site will be live in minutes.

**Mobile Management:**
- Because the application uses responsive Tailwind CSS (`md:`, `sm:` breakpoints), it works flawlessly on mobile devices out of the box.
- To manage and monitor your deployment from your phone, you can download the **Vercel Mobile App** (available on iOS and Android) to view analytics, deployment status, and trigger rebuilds directly from your device.

### Next Steps (Backend Integration)
To connect this UI back to Firebase (as the original HTML intended):
1. Install Firebase: `npm install firebase`
2. Create a `lib/firebase.ts` file to initialize your Firebase config (v9+ modular syntax).
3. Replace the `ShopContext` local storage logic with Firestore hooks.
4. Replace the static `lib/data.ts` arrays with `useEffect` fetches from your Firestore collections.