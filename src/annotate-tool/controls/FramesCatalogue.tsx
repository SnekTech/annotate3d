import {
    Button,
    Stack,
    Badge
} from '@mui/material'
import { useState } from "react";

type FramesCatalogProps = {
    totalFrameCount: number
}

const FramesCatalog = (props: FramesCatalogProps) => {
    const {
        totalFrameCount: totalPageCount
    } = props

    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <>
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
                            color={selectedIndex == i ? "secondary" : "primary"}
                            onClick={() => setSelectedIndex(i)}
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
