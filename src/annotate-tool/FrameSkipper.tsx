import {ButtonGroup, IconButton} from '@mui/material'
import { SkipPrevious, SkipNext, PlayArrow, Pause, FastForward, FastRewind } from '@mui/icons-material'

type FrameSkipperProps = {
    isPlaying?: boolean
}

const FrameSkipper = (props: FrameSkipperProps) => {

    const {isPlaying = false} = props

    return (
        <ButtonGroup>
            <IconButton>
                <FastRewind />
            </IconButton>
            <IconButton>
                <SkipPrevious />
            </IconButton>
            <IconButton>
                {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton>
                <SkipNext />
            </IconButton>
            <IconButton>
                <FastForward />
            </IconButton>
        </ButtonGroup>
    )
}

export default FrameSkipper
