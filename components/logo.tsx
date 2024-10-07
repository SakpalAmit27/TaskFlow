import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import localFont from "next/font/local"


const headingFont = localFont({
     src:"../fonts/font.woff2",
})

export const Logo = () => {
    return(
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image src='../app/taskflow.svg' alt="logo" width={30} height={30}/>
                <p className={cn("text-lg text-neutral-700 pb-1",headingFont.className)}>TaskFlow</p>
            </div>
        </Link>
    )
}