import "@/css/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import type { FC, ReactNode } from "react";
import { inter, spaceGrotesk } from "@/utils/fonts";
import { appearance } from "@/lib/clerk";
import ThemeProvider from "@/context/ThemeProvider";
import { ThemeKeys } from "@/resources/constants";
import { Navigation } from "@components/common/Navbar";

export const metadata: Metadata = {
  title: "Dev Overflow",
  description: "Your premier destination for developers.Engage in a thriving community, ask and answer questions, share expertise, and explore a vast repository of knowledge.Empowering your coding journey with collaborative learning, expert insights, and connections across the developer landscape.",
  keywords: [
    "Developer Community",
    "Coding Help",
    "Tech Discussions",
    "Programming Languages",
    "JavaScript",
    "TypeScript",
    "Java",
    "MongoDB",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Collaborative Learning",
    "Problem-solving",
    "Career Growth",
    "Programming Q&A",
    "Coding Resources",
    "Programming Tips",
    "Developer Networking"
  ],
}

interface IRootLayout {
  children: ReactNode;
}

const RootLayout: FC<IRootLayout> = ({ children }) => {

  return <ClerkProvider appearance={appearance}>
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className}`}>
        <ThemeProvider
          defaultTheme={ThemeKeys.SYSTEM}
          attribute="class"
          enableSystem
          disableTransitionOnChange>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html >
  </ClerkProvider >
}

export default RootLayout;

