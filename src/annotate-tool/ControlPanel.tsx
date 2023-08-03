import { Stack } from "@mui/material"
import {css} from "@emotion/react"
import FramesCatalog from "./FramesCatalogue"

const ControlPanel = () => {

    const ctrlPanelStyle = css({
        minWidth: '300px',
        maxWidth: '400px'
    })

    return (
        <Stack css={ctrlPanelStyle}>
            <FramesCatalog totalFrameCount={100} />
        </Stack>
    )
}

export default ControlPanel
