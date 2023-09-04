import { Stack, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { css } from "@emotion/react"
import FramesCatalog from "./controls/FramesCatalogue"
import { ExpandMore } from "@mui/icons-material";
import BoneSwitch from "./controls/BoneSwitch.tsx";
import { FC } from "react";
import AnnotateModeSwitch from "./controls/AnnotateModeSwitch.tsx";
import FrameOperation from "./controls/FrameOperation.tsx";

function wrapWithAccordion<Props>(title: string, component: FC<Props>, props: Props, defaultExpanded = true) {
    return (
        <Accordion defaultExpanded={defaultExpanded}>
            <AccordionSummary
                expandIcon={<ExpandMore />}
            >
                {title}
            </AccordionSummary>
            <AccordionDetails>
                {component(props)}
            </AccordionDetails>
        </Accordion>
    )
}

const ControlPanel = () => {

    const ctrlPanelStyle = css({
        minWidth: '300px',
        maxWidth: '400px',
        padding: '1rem',
    })

    return (
        <Stack css={ctrlPanelStyle}>
            {wrapWithAccordion("帧列表", FramesCatalog, {totalFrameCount: 100})}
            {wrapWithAccordion("当前帧操作", FrameOperation, {})}
            {wrapWithAccordion("控件模式", AnnotateModeSwitch, {})}
            {wrapWithAccordion("待标注骨骼", BoneSwitch, {}, false)}
        </Stack>
    )
}

export default ControlPanel
