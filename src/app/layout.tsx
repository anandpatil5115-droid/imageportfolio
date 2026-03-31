import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anand Patil — Full Stack Developer",
  description:
    "Portfolio of Anand Patil — Full Stack Developer specializing in React, Node.js, and data-driven web applications. Final-year CS student at VTU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased font-body">
        <Nav />
        {children}
      </body>
    </html>
  );
}
