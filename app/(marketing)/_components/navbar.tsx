import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export const Navbar = () => {

    return (
        <div className="fixed top-0 w-full h-14 px-4 bg-white border-b flex items-center shadow-sm">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo/>
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button size="sm" variant="outline" asChild>
                        <Link href='/sign-in'>
                        Login
                        </Link>
                       
                    </Button>
                    <Button>
                    <Link href='/sign-un'>
                        Get TaskFlow for free
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

 