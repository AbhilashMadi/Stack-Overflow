import { Inter } from "next/font/google";
import type { ReactNode, FC } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "@/css/globals.css";

export const metadata: Metadata = {
}

const inter = Inter({ subsets: ["latin"] });

interface IRootLayout {
  children: ReactNode;
}

const RootLayout: FC<IRootLayout> = ({ children }) => {

  return <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html >
  </ClerkProvider>
}

export default RootLayout;

