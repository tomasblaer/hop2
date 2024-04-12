import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"



export const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full p-4 bg-black">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button className="text-white" size="sm" variant="ghost">
                        Skilmálar
                    </Button>
                    <Button className="text-white" size="sm" variant="ghost">
                        Persónuverndarstefna
                    </Button>
                </div>
            </div>
        </div>
    )
}