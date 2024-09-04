
export default function Footer(){
    return(
        <>
        <footer className="flex bg-gray-600 text-white p-10 space-x-16 justify-around" >
           
            <ul className="space-y-3 ">
            <h1 className="pb-3 text-2xl font-serif  ">About</h1>
                <li><p className="text-wrap">To connect the elders with the novices of our society and to encourage and guide Research interested minds.</p></li>
                <li><p>© 2024 • Powered by Tanw Youth</p></li>
                
            </ul>

           
            <ul className="space-y-3 list-disc ">
            <h1 className=" pb-3 text-2xl font-serif  ">Pages</h1>
                <li>About</li>
                <li>Categories</li>
                <li>Posts</li>
                <li>Contact</li>
            </ul>

            <ul className="space-y-3 list-disc ">
            <h1 className=" pb-3 text-2xl font-serif  ">Connect</h1>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
            </ul>
        </footer>
        </>
    )
}