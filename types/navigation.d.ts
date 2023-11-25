import { ReactNode } from "react";
import { ThemeKeys } from "@/resources/constants";

export type ThemeConfig = {
  label: string;
  icon: ReactNode;
  theme: ThemeKeys;
}

export type NavbarComponents = {
  title: string;
  href: string;
  description: string;
}