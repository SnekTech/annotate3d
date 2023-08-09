import { Stack } from "@mui/material"
import {css} from "@emotion/react"
import FramesCatalog from "./controls/FramesCatalogue"
import BoneSelect from "./controls/BoneSelect"

const ControlPanel = () => {

    const ctrlPanelStyle = css({
        minWidth: '300px',
        maxWidth: '400px',
        padding: '1rem',
    })

    return (
        <Stack css={ctrlPanelStyle}>
            {/* <FramesCatalog totalFrameCount={100} /> */}
            <BoneSelect />
        </Stack>
    )
}

export default ControlPanel
