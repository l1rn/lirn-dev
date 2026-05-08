import './Body.scss'
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Home } from 'lucide-react'

function Body() {
    return (
        <>
            <div className="body-wrapper">
                <div className="body-container">
                    <div className="body-title">
                        l1rn
                    </div>
                    <div className="body-links">
                        <ul>
                            <li>
                                <FaGithub size={40} />
                            </li>
                            <li>
                                <FaLinkedinIn size={40} />
                            </li>
                            <li>
                                <SiLeetcode size={40} />
                            </li>
                            <li>
                                <FaEnvelope size={40} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;