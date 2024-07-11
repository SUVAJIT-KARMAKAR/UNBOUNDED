// USER-AVATAR @IMPORTS 
import Image from "next/image";

// SDADCN-UI LIBRARY IMPORT 
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserAvatar = ( {
    name,
    image,
    className
} : {
    name ?: string;
    image ?: string;
    className ?: string;
} ) => {
    return (
        <Avatar className={cn('bg-white, text-black', className)}>
            {/* CONDITIONALS */}
            {image && (
                <Image
                    src={ image || "" }
                    alt={ name || "" }
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            )}

            {/* SHADCN-UI default library */}
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}

            <AvatarFallback 
                className="dark:bg-white dark:text-black text-xl"
                delayMs={1200}
            >
                {name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")
                }
            </AvatarFallback>
        </Avatar>
    );
};

// EXPORTING USER-AVATAR 
export default UserAvatar;