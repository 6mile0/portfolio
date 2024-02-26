export default function HeaderTitle({ title }: { title: string}) {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-200">{title}</h1>
            </div>
        </div>
    );
}
