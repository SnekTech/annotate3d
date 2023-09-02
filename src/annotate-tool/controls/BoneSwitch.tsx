import { List, ListItemButton } from "@mui/material";
import { useState } from "react";

import { BoneNames } from "../misc.ts";

const BoneSwitch = () => {

    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <List
            sx={{maxHeight: '30rem', overflow: 'scroll'}}
        >
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