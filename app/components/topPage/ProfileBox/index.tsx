import Link from "next/link";
import TitleBox from "../../common/TitleBox";
import { Profile } from "../../../types/profile";

interface Props {
    title: string;
    data: Profile
}

const calcNowAge = (born: string): string => {
    const [birthYear, birthMonth, birthday] = born.split(",").map(Number);
    const nowObj = new Date();
    const thisYearsBirthDayObj = new Date(nowObj.getFullYear(), birthMonth - 1, birthday);

    if (nowObj < thisYearsBirthDayObj) {
        return (nowObj.getFullYear() - birthYear - 1).toString()
    }
    return (nowObj.getFullYear() - birthYear).toString()
}

export default function ProfileBox({ title, data }: Props) {
    const age = calcNowAge(data.birthday);

    return (
        <div className="mb-5">
            <TitleBox title={title} />
            <table className="text-gray-500 dark:text-gray-300">
                <tbody>
                    <tr className="text-left border-b">
                        <th className="font-medium w-24 text-md pl-4 text-gray-900 w-14 dark:text-gray-200">
                            誕生
                        </th>
                        <td className="py-2 text-sm">
                            2003/10/04 ( {age} 歳 )
                        </td>
                    </tr>
                    <tr className="text-left border-b">
                        <th className="font-medium text-md pl-4 text-gray-900 dark:text-gray-200">
                            趣味
                        </th>
                        <td className="py-2 text-sm">
                            {
                                data.hobby.map((value, key) => {
                                    if (key == (data.hobby.length - 1)) {
                                        return <span key={key}>{value}</span>
                                    }
                                    return <span key={key}>{value}, </span>
                                })
                            }
                        </td>
                    </tr>
                    <tr className="text-left border-b">
                        <th className="font-medium text-md pl-4 text-gray-900 dark:text-gray-200">
                            所属
                        </th>
                        <td className="py-2 text-sm">
                            {data.belongTo}
                        </td>
                    </tr>
                    <tr className="text-left border-b">
                        <th className="font-medium text-md pl-4 text-gray-900 dark:text-gray-200">
                            公開鍵
                        </th>
                        <td className="py-2 text-sm">
                            <p><Link href={"https://github.com/6mile0.keys"} className="text-gray-900 border-b hover:text-blue-700 dark:text-gray-200">Secure Shell</Link></p>
                            <p><Link href={"https://github.com/6mile0.gpg"} className="text-gray-900 border-b hover:text-blue-700 dark:text-gray-200">GNU Privacy Guard</Link></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
