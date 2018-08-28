import * as React from "react";

export enum Color {
  DARK = "DARK",
  LIGHT = "LIGHT"
}

interface IProviderStore {
  theme?: string;
  toggleTheme?: () => void;
}

const ThemeContext = React.createContext({} as IProviderStore);

export default ThemeContext;
