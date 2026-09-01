import './Header.scss';
import Button from "../Button"
import { FaCloudflare } from "react-icons/fa";
import { Sun, Moon, FolderBookmark } from 'lucide-react'
import { useTheme } from '../../ThemeContext';

function Header() {
    const { theme, toggleTheme } = useTheme();
    return (
        <header>
            <div className="header-wrapper">
                <div className='header-container'>
                    <div className='header-item'>
                        <Button 
                        variant='secondary'
                        onClick={() => window.open('https://ubuntu.l1rn.org/', "_blank", "noopener,noreferrer")}>
                            <span className='header-span'>
                                <FaCloudflare size={20}/>
                            </span>
                            <span className='header-text'>
                                Cloudflare
                            </span>
                        </Button>
                    </div>
                    <div className='header-item'>
                        <Button
                        variant='secondary'
                        onClick={() => window.open('https://projects.l1rn.org/', "_blank", "noopener,noreferrer")}>
                            <span className='header-span'>
                                <FolderBookmark size={20}/>
                            </span>
                            <span className='header-text'>
                                Projects
                            </span>
                        </Button>
                    </div>
                </div>
                <div className='header-border'>
                    <Button onClick={toggleTheme}>
                        { theme === "dark" ? <Sun size={24} color='#f8fafc'/> : <Moon size={24}  /> }
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;