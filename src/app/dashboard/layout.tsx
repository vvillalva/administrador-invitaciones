
import { inter } from "@/assets/fonts/fonts"
import "../globals.css";

export default function AppLayout( { children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.className}antialiased`}>
        {children}
      </body>
    </html>
  );
}