import React from 'react'
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"

const AppLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Sidebar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default AppLayout
