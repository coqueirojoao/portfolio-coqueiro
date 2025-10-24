import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Pedro Coqueiro de Azevedo | Full Stack Developer",
  description: "Personal portfolio of João Pedro Coqueiro de Azevedo - Full Stack Developer specializing in JavaScript, TypeScript, React, Node.js and modern web technologies.",
  keywords: ["João Pedro Coqueiro de Azevedo", "João Coqueiro", "Full Stack Developer", "Web Developer", "React", "Node.js", "TypeScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
