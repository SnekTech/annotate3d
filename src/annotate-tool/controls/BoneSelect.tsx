
import { List, ListItem, Checkbox, ListItemText } from "@mui/material"
import { BoneNames } from "../misc.ts";



const BoneSelect = () => {
    return (
        <List>
            {BoneNames.map((boneName, i) => (
                <ListItem disablePadding key={i}>
                    <Checkbox/>
                    <ListItemText>{boneName}</ListItemText>
                </ListItem>
            ))}
        </List>
    )
}

export default BoneSelect
