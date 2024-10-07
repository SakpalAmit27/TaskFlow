import Link from "next/link"
import Image from "next/image"

export const Logo = () => {
    return(
        <Link href="/">
            <div>
                <Image src='../app/taskflow.svg' alt="logo" width={30} height={30}/>
            </div>
        </Link>
    )
}