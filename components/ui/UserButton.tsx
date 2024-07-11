// USER-BUTTON @IMPORT
// SHADCN - UI LIBRARY IMPORT 
import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"


// COMPONENTS IMPORT 
import UserAvatar from "./UserAvatar";


const UserButton = () => {
    return(
    <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar name="SUVAJIT KARMAKAR" image="https://github.com/shadcn.png"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel> MY ACCOUNT</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem> PROFILE </DropdownMenuItem>
            <DropdownMenuItem> BILLINGS </DropdownMenuItem>
            <DropdownMenuItem> TEAM </DropdownMenuItem>
            <DropdownMenuItem> SUBSCRIPTION </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    );
};

// EXPORTING USER-BUTTON 
export default UserButton;