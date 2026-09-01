import { Calendar, Clock3, Cpu, GitCommitHorizontal, Monitor, Thermometer } from "lucide-react";
import "./NavItem.scss"

function NavItem(props: MonitorSummary) {
    
    return (
        <>
            <div className="nav-item-wrapper">
                <div className="nav-item-container">
                    <div className="picture-container">
                        <div className="icon">
                            <img src={props.picture} alt="samsung-a5"/>
                        </div>
                        <div className="description">
                            <div className="name">
                                <span>
                                    <Monitor />
                                </span>
                                Name:  { props.name }
                            </div>
                            <div className="release-date">
                                <span>
                                    <Calendar />
                                </span> 
                                Release Date: { props.release_date}
                            </div>
                            <div className="kernel-version">
                                <span>
                                    <GitCommitHorizontal />
                                </span> 
                                Kernel: { props.version }
                            </div>
                        </div>
                    </div>
                    <div className="summary-container">
                        <div className="cpu-container">
                            <Cpu /> CPU usage: { props.cpu_usage.toFixed(2) }%
                        </div>
                        <div className="temperature-container">
                            <Thermometer /> Temperature: { (props.tempraw / 1000) } &deg;C
                        </div>
                        <div className="uptime-container">
                            <Clock3 /> Uptime: { props.uptime_system }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavItem;