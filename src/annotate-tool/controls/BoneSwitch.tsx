import { List, ListItemButton } from "@mui/material";
import { BoneNames } from "../misc.ts";
import { useState } from "react";

const BoneSwitch = () => {

    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <List>
            {BoneNames.map((name, i) => (
                <ListItemButton
                    key={i}
                    selected={selectedIndex === i}
                    onClick={() => setSelectedIndex(i)}
                >
                    {name}
                </ListItemButton>
            ))}
        </List>
    )
}

export default BoneSwitch