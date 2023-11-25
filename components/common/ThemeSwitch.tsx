import { FC } from "react";
import { themeConfig } from "@/resources/config/navbar";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@ui/dropdown-menu";
import { Button } from "@ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSwitch: FC = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeConfig.map((o) => {
          return <DropdownMenuItem onClick={() => setTheme(o.theme)}>
            {o.label}
          </DropdownMenuItem>
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

ThemeSwitch.displayName = "ThemeSwitch";