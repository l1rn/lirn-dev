import { Calendar, Clock3, Cpu, GitCommitHorizontal, Monitor, Thermometer } from "lucide-react";
import "./NavItem.scss";

interface SystemProps {
    uptime_system: number; 
}

const formatUptime = (totalSeconds: number): string => {
    if (!totalSeconds || totalSeconds < 0) return "0 d 0 hr 0 min 0 s";

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return `${days} d ${hours} hr ${minutes} min ${seconds} s`;
};

export const UptimeComponent: React.FC<SystemProps> = ({ uptime_system }) => {
    return formatUptime(uptime_system);
};

function NavItem(props: MonitorSummary) {
    return (
        <div className="nav-item-wrapper">
            <div className="nav-item-container">
                <div className="picture-container">
                    <div className="icon">
                        <img src={props.picture} alt="device"/>
                    </div>
                    <div className="description">
                        <div className="name">
                            <span><Monitor /></span> Name: {props.name}
                        </div>
                        <div className="release-date">
                            <span><Calendar /></span> Release Date: {props.release_date}
                        </div>
                        <div className="kernel-version">
                            <span><GitCommitHorizontal /></span> Kernel: {props.version}
                        </div>
                    </div>
                </div>
                <div className="summary-container">
                    <div className="cpu-container">
                        <Cpu /> CPU usage: {props.cpu_usage.toFixed(2)}%
                    </div>
                    <div className="temperature-container">
                        <Thermometer /> Temperature: {(props.tempraw / 1000)} &deg;C
                    </div>
                    <div className="uptime-container">
                        <Clock3 /> Uptime: <UptimeComponent uptime_system={props.uptime_system} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavItem;