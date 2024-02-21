"use client"
import { useEffect } from "react";
import { MdModeNight } from "react-icons/md";

const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    } else {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    }
}

export default function ToggleDarkMode() {
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches && !document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        }
    }, [])
    return (
        <div
            className="fixed z-100 bottom-10 w-14 h-14 right-10 shadow-sm border rounded-full bg-gray-900 rounded-full cursor-pointer flex justify-center items-center dark:bg-white"
            onClick={() => toggleDarkMode()}
        >
            <div className="text-xl text-white dark:text-gray-900">
                <MdModeNight />
            </div>
        </div>
    )
}
