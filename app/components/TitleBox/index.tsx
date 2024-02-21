export default function TitleBox({title}: {title: string}) {
    return (
        <div className="py-4 text-2xl font-medium dark:text-gray-200">
            {title}
        </div>
    )
}
