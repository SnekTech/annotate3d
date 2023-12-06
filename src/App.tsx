import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import { Playground } from "./Playground"
import { useState } from 'react'
import { NavDrawer } from './NavDrawer'

function App() {

    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = (open: boolean) => () => setDrawerOpen(open)

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' component='div'
                            sx={{ flexGrow: 1 }}>
                            Getting r3f
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <NavDrawer
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            ></NavDrawer>

            <Playground />

        </>
    )
}

export default App
