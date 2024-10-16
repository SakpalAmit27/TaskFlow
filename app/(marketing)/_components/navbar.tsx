import { Logo } from "@/components/logo"
export const Navbar = () => {

    return (
        <div className="fixed top-0 w-full h-14 px-4 bg-white border-b flex items-center shadow-sm">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo/>
            </div>
        </div>
    )
}

 