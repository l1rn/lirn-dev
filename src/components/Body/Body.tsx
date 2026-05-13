import './Body.scss'
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Button from '../Button';
import { useTheme } from '../../ThemeProvider';
import { useEffect, useRef, useState } from 'react';

function SubTitleItem( { 
    text_main, text_addition, className, specificSign, isSmall 
}: { 
    text_main: string, 
    text_addition: string,
    className: string,
    specificSign: string,
    isSmall: boolean
} ) {
    return <div className={className}>
        { isSmall ? 
            text_main + specificSign + text_addition : 
            <div>
                <div>{text_main}</div>
                <div>{text_addition}</div>
            </div>
        }
    </div>
}

function Body() {
    const { dark } = useTheme();
    const [isSmall, setIsSmall] = useState(false);
    useEffect(() => {
        const media = window.matchMedia("(max-width: 768px)");

        const update = () => setIsSmall(media.matches);

        update();

        media.addEventListener("change", update);

        return () => media.removeEventListener("change", update);
    }, [])

    return (
        <>
            <div className="body-wrapper">
                <div className="body-container">
                    <div className='body-title'>
                        l1rn
                    </div>
                    <SubTitleItem 
                        text_main='Full-stack developer '
                        text_addition=' Java & React / Vue'
                        specificSign='•'
                        className="body-subtitle"
                        isSmall={ !isSmall }
                    />

                    <div className="line-separation"></div>

                        <div className="body-bio">
                            Building scalable web apps and backend systems with modern tools.
                            Interesting in Linux and Network systems
                        </div>

                    <div className="body-links">
                        <ul>
                            <li>
                                <Button onClick={() => window.open('https://github.com/l1rn', "_blank", "noopener,noreferrer")}>
                                    <FaGithub size={32} color={dark ? "#f8fafc" : "#0f172a"} />
                                </Button>
                            </li>
                            <li>
                                <Button onClick={() => window.open('https://www.linkedin.com/in/l1rn/', "_blank", "noopener,noreferrer")}>
                                    <FaLinkedinIn size={32} color={dark ? "#f8fafc" : "#0f172a"} />
                                </Button>
                            </li>
                            <li>
                                <Button onClick={() => window.open('https://leetcode.com/u/l1rn/', "_blank", "noopener,noreferrer")}>
                                    <SiLeetcode size={32}  color={dark ? "#f8fafc" : "#0f172a"} />
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <FaEnvelope size={32} color={dark ? "#f8fafc" : "#0f172a"} />
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;