import "../styles/global.css";
import { Sour_Gummy } from 'next/font/google';

import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

const sourGummy = Sour_Gummy({
  weight: ['400', '700'],
  subsets: ['latin'],
  display:"swap"
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={sourGummy.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}