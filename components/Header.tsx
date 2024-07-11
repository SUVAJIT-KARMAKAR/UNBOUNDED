// HEADER @IMPORTS 


// COMPONENTS IMPORT 
import Logo from "./Logo";
import DarkModeToggle from "./ui/DarkModeToggle";
import UserButton from "./ui/UserButton";

const Header = () => {
    return (
        <header
            className="sticky top-0 z-50 bg-white dark:bg-gray-900"
        >
            <nav
                className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto"
            >
                {/* UNBOUNDED - LOGO */}
                <Logo/>

                {/* MULTI-OPTION-DIV */}
                <div 
                    className="flex flex-1 items-center justify-end space-x-4"
                >
                    {/* LANGUAGE SELECT */}
                    {/* SESSION */}
                    {/* DARK MODE TOGGLE BUTTON */}
                    <DarkModeToggle/>
                    {/* USER BUTTON */}
                    <UserButton/>

                </div>
            </nav>

            {/* UPGRADE BANNER */}
        </header>
    );
};

// EXPORTING HEADER 
export default Header;