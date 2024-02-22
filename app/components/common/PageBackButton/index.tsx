import Link from 'next/link'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { PathInfo } from '../../types/custom'

interface Props {
    paths: PathInfo[]
}

export default function PageBuckButton({ paths }: Props) {
    return (
        <div className="mx-2">
            <nav className="flex mb-3" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    {
                        paths && paths.length != 1 && paths.map((item, index) => {
                            if (index % 2 == 0 && index != paths.length - 1) {
                                return (
                                    <li className="inline-flex items-center" key={index}>
                                        <Link href={item.to} className="inline-flex items-center text-gray-700 dark:text-gray-400 dark:hover:text-white">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={index}>
                                        <div className="flex items-center">
                                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                            <Link href={item.to} className="ms-1 text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                                                {item.title}
                                            </Link>
                                        </div>
                                    </li>
                                )
                            }
                        })
                    }
                </ol>
            </nav>
            <Link href={paths && paths.length != 1 ? paths[paths.length - 2].to : ""}>
                <div className="flex items-center">
                    <IoMdArrowRoundBack />
                    <span>戻る</span>
                </div>
            </Link>
        </div>
    )
}
