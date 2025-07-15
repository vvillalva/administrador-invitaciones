import type { Metadata } from "next";
import { inter } from "@/assets/fonts/fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: "Administrador de Invitaciones",
  description: "Administrador de invitaciones virtuales de XV años",
};

export default function RootLayout( { children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.className}antialiased`}>
        {children}
      </body>
    </html>
  );
}
