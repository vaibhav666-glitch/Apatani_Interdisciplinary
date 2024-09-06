export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-6 md:p-10">
            <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-16">
                
                <ul className="space-y-3 ">
                    <h1 className="pb-3 text-xl md:text-2xl font-serif">About</h1>
                    <li><p className="text-sm md:text-base">To connect the elders with the novices of our society and to encourage and guide research-interested minds.</p></li>
                    <li><p className="text-sm md:text-base">© 2024 • Powered by Tanw Youth</p></li>
                </ul>

                <ul className="space-y-3 space-x-7 list-disc">
                    <h1 className="pb-3 text-xl md:text-2xl font-serif">Pages</h1>
                    <li><p className="text-sm md:text-base">About</p></li>
                    <li><p className="text-sm md:text-base">Categories</p></li>
                    <li><p className="text-sm md:text-base">Posts</p></li>
                    <li><p className="text-sm md:text-base">Contact</p></li>
                </ul>

                <ul className="space-y-3 space-x-7 list-disc">
                    <h1 className="pb-3 text-xl md:text-2xl font-serif">Connect</h1>
                    <li><p className="text-sm md:text-base">Facebook</p></li>
                    <li><p className="text-sm md:text-base">Instagram</p></li>
                    <li><p className="text-sm md:text-base">Twitter</p></li>
                    <li><p className="text-sm md:text-base">LinkedIn</p></li>
                </ul>
            </div>
        </footer>
    );
}
