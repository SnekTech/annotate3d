import { Stack } from '@mui/material'

import AnnotateScene from "./AnnotateScene.tsx";
import FrameSkipper from "./FrameSkipper.tsx";
import ControlPanel from './ControlPanel.tsx';

const Tool = () => {
    return (
        <Stack direction={'row'}>

            <div css={{ height: '720px', minWidth: '900px' }}>
                <AnnotateScene />
                <FrameSkipper />
            </div>

            <ControlPanel />
        </Stack>
    )
}

export default Tool
