
import { List, ListItem, Checkbox, ListItemButton, ListItemText } from "@mui/material"

const bones = [
    'left_arm',
    'left_albow',
    'left_hand',
    'left_thumb',
    'left_index_1',
    'left_index_2',
    'left_index_3',
    'right_arm',
    'right_albow',
    'right_hand',
    'right_thumb',
    'right_index_1',
    'right_index_2',
    'right_index_3',
]

const BoneSelect = () => {
    return (
        <List>
            {bones.map((boneName, i) => (
                <ListItem disablePadding key={i}>
                    <Checkbox/>
                    <ListItemText>{boneName}</ListItemText>
                </ListItem>
            ))}
        </List>
    )
}

export default BoneSelect
