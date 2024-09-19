import { Awards } from "@/app/types/awards";

type Props = {
    awards: Awards;
}

export default function AwardBox({awards}: Props) {
    return (
        <div className="mb-5">
            <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                <ul className="divide-y divide-gray-100 py-2 px-4">
                    {awards.map((award, index) => (
                        <li key={index} className="flex py-4">
                            <div className="mr-4 flex-1">
                                <h4 className="text-md font-medium text-gray-900"><a href={award.url} target="_blank" className="hover:underline">{award.title}</a></h4>
                                <div className="mt-1 text-sm text-gray-400"><span>{award.date}</span></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
