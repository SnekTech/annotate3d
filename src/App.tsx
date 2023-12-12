import { useState } from 'react'
import {Outlet} from '@tanstack/react-router'

import { NavDrawer } from './layout/NavDrawer'
import { HeaderBar } from './layout/HeaderBar'

function App() {

    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = (open: boolean) => () => setDrawerOpen(open)

    return (
        <>
            <HeaderBar onMenuIconClick={toggleDrawer(true)}/>

            <NavDrawer
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            />

            <Outlet />
        </>
    )
}

export default App
