import { css } from '@emotion/react'
import {
    Button,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Badge
} from '@mui/material'

type FramesCatalogProps = {
    totalFrameCount: number
}

const FramesCatalog = (props: FramesCatalogProps) => {
    const {
        totalFrameCount: totalPageCount
    } = props

    return (
        <>
            <div>
                <Typography>
                    帧列表
                </Typography>
            </div>
            <Stack
                maxHeight={'10rem'}
                overflow={'scroll'}
                direction={'row'}
                flexWrap={'wrap'}
                paddingTop={'0.5rem'}
            >

                {[...Array(totalPageCount)].map((_, i) => (
                    i != 2 ?
                        <Button
                            key={i}
                            css={{ minWidth: 0 }}
                        >{i + 1}</Button>
                        :
                        <Badge
                            variant='dot' 
                            key={i}
                            color='info'
                            >
                            <Button
                                css={{ minWidth: 0 }}
                            >{i + 1}</Button>

                        </Badge>
                ))}
            </Stack>
        </>
    )
}

export default FramesCatalog
