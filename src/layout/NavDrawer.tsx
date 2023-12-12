import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"

import { Link } from '@tanstack/react-router'

interface NavMenuProps {
    open: boolean
    onClose: () => void
}

export function NavDrawer(props: NavMenuProps) {

    const { open, onClose } = props

    return (
        <>
            <Drawer
                anchor='left'
                open={open}
                onClose={onClose}
            >
                <List onClick={onClose}>
                    <Link to='/' className="link">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to='/playground' className="link">
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Playground" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </>
    )
}
