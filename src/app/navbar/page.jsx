import Image from "next/image"
export default function Navbar() {
    const logo = "/assets/logo/logo.png"
    return (
        <nav className="w-full flex py-6 min-h-16 h-fit bg-black text-default">
            <div className="logo">
                <Image
                    src={logo}
                    width={250}
                    height={250}
                    priority={true}
                    loading="eager"
                    alt={"SITCART"}
                    className="h-16 w-16 mx-8 rounded-full"
                />
            </div>
            <div className="search relative">
                <input type="text" />
                
            </div>
            <div className="social"></div>
        </nav>
    )
}