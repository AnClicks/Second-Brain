
import { useState } from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { MainContent } from './MainContent'
export const Dashboard = () => {
const [isSidebarToggle,setSidebarToggle] = useState(false);
    return <>
    <div>
        <Sidebar isSidebarToggle={isSidebarToggle} setSidebarToggle={setSidebarToggle} />
        <MainContent />
    </div>
    </>

}