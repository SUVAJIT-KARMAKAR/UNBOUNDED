// LOGO @IMPORTS 
import LogoImage from "@logo/UNBOUNDED-LOGO.svg"
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

const Logo = () => {
    return (
        <Link 
            href="/"
            prefetch={false}
            className="overflow-hidden"
        > 
            <div className="flex items-center w-60 h-14">
                <AspectRatio
                    ratio={16/9}
                    className="flex items-center justify-center"
                >
                    <Image
                        priority
                        src={LogoImage} 
                        alt={"UNBOUNDED-LOGO"}  
                        className="dark:filter dark:invert w-10"                      
                    />
                </AspectRatio>
                {/* UNBOUNDED */}
            </div>
        </Link>
    );
};

// EXPORTING LOGO 
export default Logo;