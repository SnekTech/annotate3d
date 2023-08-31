import { AppBar, Box, Button, IconButton, Toolbar, Typography, Container, List, ListItem, ListItemButton } from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import DashBoard, { AdminDashBoard } from "./DashBoard"
import { projectNames } from "./misc"

const MyAppBar = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        3D 人体姿态标注
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

const Drawer = () => {
    const DrawerWidth = 248
    return (
        <Box sx={{
            maxWidth: DrawerWidth,
            height: '100vh'
        }}>
            <nav>
                <List>
                    {projectNames.map((project, i) => (
                        <ListItemButton
                            key={i}
                            autoFocus={i == 1}
                        >
                            {project}
                        </ListItemButton>
                    ))}

                </List>
            </nav>

        </Box>
    )
}

const Main = () => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                height: '100vh'
            }}
        >
            <Container maxWidth='lg'>
                {/* <DashBoard /> */}
                <AdminDashBoard />
            </Container>
        </Box>

    )
}

const Home = () => {
    return (
        <>
            <MyAppBar />

            <Box sx={{ display: 'flex' }}>
                <Drawer />
                <Main />

            </Box>
        </>
    )
}

export default Home
