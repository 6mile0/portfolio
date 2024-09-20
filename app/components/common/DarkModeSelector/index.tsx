"use client";
import { useColorMode } from "@/app/providers/ColorModeProvider";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function DarkModeSelector() {
    const { colorMode, setColorMode } = useColorMode();
    return (
        <div className="fixed bottom-5 right-5">
            {
                colorMode == "dark" ? (
                    <button className="w-10 h-10 p-2 rounded-full shadow-lg bg-gray-100" onClick={() => setColorMode("light")}>
                        <IoSunny className="text-2xl text-yellow-500" />
                    </button>
                ) : (
                    <button className="w-10 h-10 p-2 rounded-full shadow-lg bg-gray-300 dark:bg-gray-300" onClick={() => setColorMode("dark")}>
                        <IoMoon className="text-2xl text-blue-800 dark:text-gray-800" />
                    </button>
                )
            }
        </div>
    )
}
