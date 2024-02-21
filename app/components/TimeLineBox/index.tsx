import TitleBox from "../TitleBox"
import { TimeLine } from '../types/custom'
import Link from "next/link"

interface Props {
    title: string;
    data: TimeLine[]
}

export default function TimeLineBox({ title, data }: Props) {
    return (
        <div className="mb-5">
            <TitleBox title={title} />
            <div className="px-2">
                <ol className="relative border-s border-gray-300 dark:border-gray-700">
                    {
                        data.map((item, key) => {
                            return (
                                <li className="mb-8 ms-4" key={key}>
                                    <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{item.time}</time>
                                    <h3 className="text-md font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                    {
                                        item?.descriptions &&
                                        <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400">{item.descriptions}</p>
                                    }
                                    {
                                        item?.buttons && item.buttons.map((item, key) => {
                                            return (
                                                <Link key={key} href={item.to} className="inline-flex items-center mr-2 px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                                    {item.title}
                                                </Link>
                                            )
                                        })
                                    }
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )
}
