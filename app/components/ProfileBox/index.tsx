import TitleBox from "../TitleBox";
import { Profile } from "../types/custom";

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
            <table className="w-full text-gray-500 dark:text-gray-300">
                <tbody>
                    <tr className="text-left border-b">
                        <th className="font-medium text-md pl-4 text-gray-900 w-14 dark:text-gray-200">
                            年齢
                        </th>
                        <td className="px-8 py-2 text-sm">
                            {age} 歳 (2003/10/04)
                        </td>
                    </tr>
                    <tr className="text-left border-b">
                        <th className="font-medium text-md pl-4 text-gray-900 dark:text-gray-200">
                            趣味
                        </th>
                        <td className="px-8 py-2 text-sm">
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
                        <td className="px-8 py-2 text-sm">
                            {data.belongTo}
                        </td>
                    </tr>
                    <tr className="text-left border-b">
                        <th className="font-medium text-md pl-4 text-gray-900 dark:text-gray-200">
                            資格
                        </th>
                        <td className="px-8 py-2 text-sm">
                            {
                                data.certification.map((value, key) => {
                                    return <p key={key}>{value}</p>
                                })
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
