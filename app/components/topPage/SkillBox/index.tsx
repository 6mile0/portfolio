import { convertLangNameToIcon } from "./iconLists";

interface Props {
    titleName: string;
    skillItems: string[];
}

export default function SkillBox({ titleName, skillItems }: Props) {
    return (
        <div className="mb-8">
            <div className="text-xl font-medium mb-3 dark:text-gray-200">
                {titleName}
            </div>
            <div className="flex flex-wrap">
                {skillItems.map((item, key) => {
                    const Icon = convertLangNameToIcon(item);
                    return (
                        <span className="py-1 px-4 mb-2 border mr-2 rounded-full text-gray-500 dark:bg-gray-300 dark:text-gray-800" key={key}>
                            <div className="flex items-center">
                                {Icon && <Icon className="mr-2" />}
                                {item}
                            </div>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}
