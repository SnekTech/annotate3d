import { Bone } from "three";
import { BoneList } from "./UI/BoneList.tsx";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { ToolCanvas } from "./ToolCanvas.tsx";
import { useToolState } from "./ToolState.ts";

export function ToolRoot() {

    const {
        activeBone,
        poseData, resetModelPose, setActiveBone, bones
    } = useToolState()

    const handleChooseBone = (bone: Bone) => {
        setActiveBone(bone)
    }

    function handleCalculatePose() {
        console.log(poseData);
    }

    function handleResetButton() {
        resetModelPose()
    }

    return (
        <>
            <Box maxWidth="md" height={'400px'}>
                <ToolCanvas/>

                <Text>{activeBone?.name}</Text>

                <ButtonGroup variant={'outlined'} colorScheme={'blue'} isAttached={true} spacing={6}>
                    <Button onClick={handleCalculatePose}>Calc</Button>
                    <Button onClick={handleResetButton}>Reset Pose</Button>
                </ButtonGroup>

                <BoneList bones={bones} onChoose={handleChooseBone}/>
            </Box>
        </>
    )
}