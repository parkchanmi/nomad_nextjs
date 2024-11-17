import "../styles/global.css";

import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <style>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </style>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}