import {css} from '@emotion/react'
import { Button, Stack } from '@mui/material'
import Grid from "@mui/material/Unstable_Grid2/Grid2"

type FramesCatalogProps = {
    totalFrameCount: number
    lineCount?: number
}

const FramesCatalog = (props: FramesCatalogProps) => {
    const {
        lineCount = 10,
        totalFrameCount: totalPageCount
    } = props

    const containerStyle = css({
        maxHeight: '10rem',
        minWidth: '300px',
        overflow: 'scroll',
        color: 'white',
        padding: '0 1rem 0'
    })

    return (
            <Stack
            maxHeight={'10rem'}
            overflow={'scroll'}
                direction={'row'}
                flexWrap={'wrap'}
            >
                {[...Array(totalPageCount)].map((_, i) => (
                        <Button key={i} css={{minWidth: 0}}>{i + 1}</Button>
                ))}
            </Stack>
    )
}

export default FramesCatalog
