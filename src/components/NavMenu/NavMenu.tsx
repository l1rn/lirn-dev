import { useEffect, useState } from 'react';
import { xiorInstance } from '../../app/api';
import './NavMenu.scss';
import NavItem from '../NavItem';

import samsungA5Img from "../../assets/samsung-a5.avif";
import { useTheme } from '../../ThemeContext';

const getMonitorStats = async() => {
    const response = await xiorInstance.get("/api/summary");
    return response.data;
}

function NavMenu(){
    const { theme } = useTheme();
    const [monitorResponse, setMonitorResponse] = useState<MonitorSummary | null>(null);
    useEffect(() => {
        const fetchData = async() =>{
            const data = await getMonitorStats();
            setMonitorResponse({
                ...data,
                name: "Samsung A5",
                release_date: 2017,
                picture: samsungA5Img
            })
        }
        fetchData()
    }, [])

    return (
        <>
            <div className="nav-wrapper">
                <div className={`nav-container ${theme === `dark` ? "" : "dark"}`} style={{ 
                    backgroundColor: theme === "light" ? "#f8fafc" : "#0f172a"}}>
                        <div className="title">
                            Servers
                        </div>
                    { monitorResponse && <NavItem {...monitorResponse} />}
                </div>
            </div>
        </>
    );
}

export default NavMenu;