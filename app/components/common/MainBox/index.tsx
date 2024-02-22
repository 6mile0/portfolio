import React from "react"

interface Props {
    children: React.ReactNode
    hSize?: "default" | "screen"
}

export default function MainBox({ children, hSize }: Props) {
    return (
        <main className={`px-8 bg-white shadow-md md:px-12 md:max-w-3xl md:mx-auto lg:max-w-5xl dark:bg-neutral-800 ${hSize && (hSize == "screen") && "h-screen"} `}>
            {children}
        </main>
    )
}
