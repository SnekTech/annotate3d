import {css} from '@emotion/react'
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
        overflow: 'scroll',
        color: 'white',
        padding: '0 1rem 0'
    })

    return (
            <Grid
                css={containerStyle}
                container
                columns={lineCount}
                disableEqualOverflow
            >
                {[...Array(totalPageCount)].map((_, i) => (
                    <Grid key={i} xs={1}>
                        {i + 1}
                    </Grid>
                ))}
            </Grid>
    )
}

export default FramesCatalog
