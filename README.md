This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
Core Technologies
React: The foundational library for building the UI components.

TypeScript: Used for static typing, evident from the .tsx file extension and the interface Props declaration.

Next.js: The 'use client' directive at the very top indicates you are using the Next.js App Router and marking this as a Client Component.

Styling & Layout
Tailwind CSS: You are using utility classes extensively throughout the code for layout, colors, spacing, and typography (e.g., flex, pt-6, bg-[#1e1e1e], text-[65px]).

Animation & Interaction
Framer Motion: You imported motion from 'framer-motion' to handle the smooth entry animations (fade-ins, scaling, and Y-axis shifts) for your text and blocks.

Assets & Icons
React Icons: You are importing icons from specific icon packs (react-icons/si, react-icons/fa, react-icons/fi) to render the GitHub, LinkedIn, LeetCode, and Email logos.

State Management
Zustand (Likely): The import import { useStore } from '../../store/useStore'; and its usage (const { openFile } = useStore();) is the standard pattern for Zustand, a lightweight state management library often paired with React/Next.js. (Alternatively, it could be Redux Toolkit or a custom React Context hook, but Zustand is the most common fit for this naming convention).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
