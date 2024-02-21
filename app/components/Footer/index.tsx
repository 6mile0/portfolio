export default function Footer() {
    const now = new Date();
    return (
        <div className="pb-8">
            <hr className="my-6 border-gray-200 sm:mx-auto" />
            <span className="block text-sm text-gray-500 sm:text-center mb-2">© {now.getFullYear()} 6mile.dev</span>
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Icon illust by @unios103i.</span>
        </div>
    )
}
