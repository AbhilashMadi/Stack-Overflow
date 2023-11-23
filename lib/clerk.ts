import type { Appearance } from "@clerk/types";

export const appearance: Appearance = {
  variables: {
    borderRadius: "0.25rem",
    colorPrimary: "#FF7000",
  },
  elements: {
    formButtonPrimary: "primary-gradient",
    footerActionLink: "primary-text-gradient hover:text-primary-500"
  }
}