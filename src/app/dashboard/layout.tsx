import { inter } from "@/assets/fonts/fonts"
import "../globals.css";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"



export default function AppLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${inter.className}antialiased`}>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        {children}
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    );
}