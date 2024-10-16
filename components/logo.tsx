import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import localFont from "next/font/local"
import logo from "@/app/fonts/logo.svg"

const headingFont = localFont({
     src:"../app/fonts/font.woff2"
})

export const Logo = () => {
    return(
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image  src={logo}alt="logo" width={40} height={40}/>
                <p className={cn("text-lg text-neutral-700 pb-1",headingFont.className)}>TaskFlow</p>
            </div>
        </Link>
    )
}