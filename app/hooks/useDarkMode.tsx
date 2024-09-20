import { useCallback, useEffect, useState } from "react";
import { useMatchMedia } from "./useMatchMedia";
import { ColorMode } from "../types/colorMode";

// Thanks to https://blog.stin.ink/articles/how-to-implement-a-perfect-dark-mode
export function useDarkMode() {
    const [colorMode, _setColorMode] = useState<ColorMode>();
    const preferColorSchemeIsDark = useMatchMedia("(prefers-color-scheme: dark)", true);

    useEffect(() => {
        const storageValue = window.localStorage.getItem("stin-blog-color-mode");
        if (storageValue === "light" || storageValue === "dark") {
            _setColorMode(storageValue);
        } else {
            _setColorMode("system");
        }
    }, []);

    const setColorMode = useCallback((color: ColorMode) => {
        _setColorMode(color);
        window.localStorage.setItem("stin-blog-color-mode", color);
    }, []);

    const actualColorMode =
        colorMode === "system" ? (preferColorSchemeIsDark ? "dark" : "light") : colorMode;

    useEffect(() => {
        if (actualColorMode) {
            document.documentElement.dataset.colorMode = actualColorMode;
        }
    }, [actualColorMode]);

    return { colorMode, setColorMode, actualColorMode };
}
