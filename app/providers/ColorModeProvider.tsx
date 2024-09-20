"use client";
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMatchMedia } from "../hooks/useMatchMedia";

const COLOR_MODE_VALUE = ["system", "light", "dark"] as const;
export type ColorMode = (typeof COLOR_MODE_VALUE)[number];
type ColorModeContextValue = {
  colorMode: ColorMode | undefined;
  setColorMode: (color: ColorMode) => void;
  actualColorMode: "light" | "dark" | undefined;
};
const ColorModeContext = createContext<ColorModeContextValue>({
  colorMode: "system",
  setColorMode: () => null,
  actualColorMode: "light",
});

export function isColorModeValue(value: unknown): value is ColorMode {
  return COLOR_MODE_VALUE.includes(value as ColorMode);
}

// Thanks to https://blog.stin.ink/articles/how-to-implement-a-perfect-dark-mode

export const ColorModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [colorMode, _setColorMode] = useState<ColorMode>();
  const preferColorSchemeIsDark = useMatchMedia("(prefers-color-scheme: dark)", true);

  useEffect(() => {
    const storageValue = window.localStorage.getItem("colorMode");
    if (storageValue === "light" || storageValue === "dark") {
      _setColorMode(storageValue);
    } else {
      _setColorMode("system");
    }
  }, []);

  const setColorMode = useCallback((color: ColorMode) => {
    _setColorMode(color);
    window.localStorage.setItem("colorMode", color);
  }, []);

  const actualColorMode =
    colorMode === "system" ? (preferColorSchemeIsDark ? "dark" : "light") : colorMode;

  const value: ColorModeContextValue = useMemo(
    () => ({
      colorMode,
      setColorMode,
      actualColorMode,
    }),
    [actualColorMode, colorMode, setColorMode],
  );

  useEffect(() => {
    if (actualColorMode) {
      document.documentElement.dataset.colorMode = actualColorMode;
    }
  }, [actualColorMode]);

  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
};

export function useColorMode() {
  return useContext(ColorModeContext);
}
