import { Stack, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { css } from "@emotion/react"
import FramesCatalog from "./controls/FramesCatalogue"
import BoneSelect from "./controls/BoneSelect"
import { ExpandMore } from "@mui/icons-material";
import BoneSwitch from "./controls/BoneSwitch.tsx";

const ControlPanel = () => {

    const ctrlPanelStyle = css({
        minWidth: '300px',
        maxWidth: '400px',
        padding: '1rem',
    })

    return (
        <Stack css={ctrlPanelStyle}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >帧列表</AccordionSummary>
                <AccordionDetails>
                    <FramesCatalog totalFrameCount={100}/>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                >待标注骨骼</AccordionSummary>
                <AccordionDetails>
                    <BoneSwitch />
                </AccordionDetails>
            </Accordion>
        </Stack>
    )
}

export default ControlPanel
