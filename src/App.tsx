import { useState } from 'react'

import { NavDrawer } from './layout/NavDrawer'
import { HeaderBar } from './layout/HeaderBar'
import { Playground } from "./Playground"

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

            <Playground />

        </>
    )
}

export default App
