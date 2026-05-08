import './Header.scss';
import { useTheme } from "../../ThemeProvider";
import Button from "../Button"
import { FaCloudflare } from "react-icons/fa";
import { Sun, Moon } from 'lucide-react'

function Header() {
    const { dark, toggleTheme } = useTheme();
    return (
        <header>
            <div className="header-wrapper">
                <div className='header-container'>
                    <div className='header-item'>
                        <Button 
                        variant='secondary'
                        onClick={() => window.open('https://ubuntu.lirn-dev.ru/', "_blank", "noopener,noreferrer")}>
                            <span className='header-span'>
                                <FaCloudflare size={24}/>
                            </span>
                            <span className='header-text'>
                                Cloudflare
                            </span>
                        </Button>
                    </div>
                </div>
                <div className='header-border'>
                    <Button onClick={toggleTheme}>
                        { dark ? <Sun size={24} color='#f8fafc'/> : <Moon size={24}  /> }
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;