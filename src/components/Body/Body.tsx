import './Body.scss'
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Button from '../Button';
function Body() {
    return (
        <>
            <div className="body-wrapper">
                <div className="body-container">
                    <div className="body-title">
                        l1rn
                    </div>
                    <div className="body-subtitle">
                        Full-stack developer • Java & React / Vue
                    </div>

                    <div className="line-separation"></div>

                        <div className="body-bio">
                            Building scalable web apps and backend systems with modern tools.
                            Interesting in Linux and Network systems
                        </div>

                    <div className="body-links">
                        <ul>
                            <li>
                                <Button onClick={() => window.open('https://github.com/l1rn', "_blank", "noopener,noreferrer")}>
                                    <FaGithub size={32} />
                                </Button>
                            </li>
                            <li>
                                <Button onClick={() => window.open('https://www.linkedin.com/in/l1rn/', "_blank", "noopener,noreferrer")}>
                                    <FaLinkedinIn size={32} />
                                </Button>
                            </li>
                            <li>
                                <Button onClick={() => window.open('https://leetcode.com/u/l1rn/', "_blank", "noopener,noreferrer")}>
                                    <SiLeetcode size={32} />
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <FaEnvelope size={32} />
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