import { Stack } from '@mui/material'

import AnnotateScene from "./AnnotateScene.tsx";
import ControlPanel from './ControlPanel.tsx';
import ToolBar from './ToolBar.tsx';

const Tool = () => {
    return (
        <Stack direction={'row'}>

            <div css={{ height: '720px', minWidth: '900px' }}>
                <AnnotateScene />
                <ToolBar />
            </div>

            <ControlPanel />
        </Stack>
    )
}

export default Tool
