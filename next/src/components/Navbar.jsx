import Link from "next/link";

export default  function Navbar() {
    return (
        <nav className="bg-gray-500 text-green-500 p-4 flex justify-between" >
            <Link href="/" className="text-3xl font-bold">My Website</Link>
            <ul className="flex gap-4">
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li><Link className="hover:text-yellow-400" href="/about">About</Link></li>
                <li><Link className="hover:text-red-500" href="/service">Service</Link></li>
            </ul>
        </nav>
    );
}