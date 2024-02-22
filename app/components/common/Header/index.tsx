"use client";

import Image from "next/image"
import ProfileImage from "../../../assets/icon.jpg"
import SNSButton from "../SNSButton"

import { Tooltip } from 'react-tooltip'

export default function Header() {
    return (
        <div className="pt-10 pb-10 flex text-gray-600 items-start flex-col md:flex-row md:items-center lg:pt-20 lg:pb-10">
            <Image src={ProfileImage} alt="aaa" className="w-20 h-20 rounded-full mb-4 shadow-sm" />
            <div className="md:px-4">
                <h1 className="text-2xl text-gray-900 md:text-3xl lg:text-4xl dark:text-gray-200">6mile.dev</h1>
                <p className="mt-1 text-gray-500 dark:text-gray-300">Hello! I'm Kakeru Hokida (a.k.a 6mile / ろくまいる).</p>
            </div>
            <div className="md:ml-auto mt-6">
                <div className="flex">
                    <SNSButton to="https://twitter.com/6mile0" serviceName="X" className="mr-6" />
                    <SNSButton serviceName="Discord" className="mr-6" tooltipId="discord-tooltip" tooltipContent="6mile" />
                    <SNSButton to="https://zenn.dev/6mile" serviceName="Zenn" className="mr-6" />
                    <SNSButton to="https://github.com/6mile0" serviceName="GitHub" className="mr-6" />

                </div>
            </div>
            <Tooltip id="discord-tooltip" />
        </div>
    )
}
