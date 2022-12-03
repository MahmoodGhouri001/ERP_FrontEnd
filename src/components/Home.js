import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import DashboardDetails from './DashboardDetails';
export default function Home() {
    return (
        <>
            <Navbar />
            <Sidebar />
            {DashboardDetails.map((DashboardDetails) =>
                <Dashboard
                    key={DashboardDetails.id}
                    title={DashboardDetails.title}
                    content={DashboardDetails.content}
                    info={DashboardDetails.info}
                    svg={DashboardDetails.svg}
                />)}
           

        </>
    )
}
