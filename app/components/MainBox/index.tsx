import React from "react"

export default function MainBox({ children }: { children: React.ReactNode }) {
    return (
        <main className="px-8 bg-white shadow-md md:px-12 md:max-w-3xl md:mx-auto lg:max-w-5xl dark:bg-neutral-800">
            {children}
        </main>
    )
}
