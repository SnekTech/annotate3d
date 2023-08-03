import {ButtonGroup, IconButton} from '@mui/material'
import { PlayArrow, Pause, NavigateBefore, NavigateNext, FirstPage, LastPage } from '@mui/icons-material'

type FrameSkipperProps = {
    isPlaying?: boolean
}

const FrameSkipper = (props: FrameSkipperProps) => {

    const {isPlaying = false} = props

    return (
        <ButtonGroup>
            <IconButton>
                <FirstPage />
            </IconButton>
            <IconButton>
                <NavigateBefore />
            </IconButton>
            <IconButton>
                {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton>
                <NavigateNext />
            </IconButton>
            <IconButton>
                <LastPage />
            </IconButton>
        </ButtonGroup>
    )
}

export default FrameSkipper
