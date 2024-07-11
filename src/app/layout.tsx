// MAIN - LAYOUT 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


// COMPONENTS IMPORT 
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UNBOUNDED",
  description: "A all in one global chat platform for anyone and everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
