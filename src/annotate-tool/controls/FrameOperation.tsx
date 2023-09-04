import { ButtonGroup, IconButton } from "@mui/material";
import { Redo, Save, Undo } from "@mui/icons-material";

function FrameOperation() {
    return (
        <ButtonGroup>
            <IconButton>
                <Undo/>
            </IconButton>
            <IconButton>
                <Redo/>
            </IconButton>
            <IconButton>
                <Save/>
            </IconButton>
        </ButtonGroup>
    )
}

export default FrameOperation