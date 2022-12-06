import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
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
