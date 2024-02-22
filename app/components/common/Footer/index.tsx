export default function Footer() {
    const now = new Date();
    return (
        <div className="pb-8 text-gray-500 dark:text-gray-300">
            <hr className="my-6 border-gray-500 sm:mx-auto" />
            <span className="block text-sm sm:text-center mb-2">© {now.getFullYear()} 6mile.dev</span>
            <span className="block text-sm sm:text-center">Icon illust by @unios103i.</span>
        </div>
    )
}
