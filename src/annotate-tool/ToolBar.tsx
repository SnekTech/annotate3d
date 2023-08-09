import {Typography} from '@mui/material'

import FrameSkipper from "./FrameSkipper"

const ToolBar = () => {
    return (
        <div css={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <FrameSkipper isPlaying={true} />
            <div>当前帧: 1</div>
        </div>
    )
}

export default ToolBar
