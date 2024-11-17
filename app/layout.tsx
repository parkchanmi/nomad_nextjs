import "../styles/global.css";
import { Jua } from "next/font/google";
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

const jua = Jua({ subsets: ["latin"], weight: ["400"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jua.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}