import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'


interface HeaderBarProps {
    onMenuIconClick: () => void
}

export function HeaderBar(props: HeaderBarProps) {

    const {onMenuIconClick} = props

    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={onMenuIconClick}
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
        </>
    )
}
