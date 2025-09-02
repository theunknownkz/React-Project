import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
    return (
        <nav className="bg-white shadow-md py-4 border-b border-gray-200">
            <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
                <Link href={"/"}>
                    <Image src={"/logo.png"} alt="logo" width={50} height={50} />
                </Link>
            </div>
        </nav>
    )
}
