import { Bone } from "three";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

type BoneListProps = {
    bones: Bone[]
    onChoose: (bone: Bone) => void
}

export function BoneList(props: BoneListProps) {

    const {bones, onChoose} = props

    return (
        <>
            <List>
                {bones.map(bone => {
                    const boneName = bone.name
                    return (
                        <ListItem key={boneName}>
                            <ListItemButton onClick={() => onChoose(bone)}>
                                <ListItemText primary={boneName}/>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </>
    )
}