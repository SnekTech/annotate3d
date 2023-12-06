import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"

interface NavMenuProps {
    open: boolean
    onClose: () => void
}

export function NavDrawer(props: NavMenuProps) {

    const {open, onClose} = props

    return (
        <>
            <Drawer
                anchor='left'
                open={open}
                onClose={onClose}
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Playground" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}
