import { Bone } from "three";
import { BoneList } from "./BoneList.tsx";
import { Box, Button, Text } from "@chakra-ui/react";
import { ToolCanvas } from "./ToolCanvas.tsx";
import { useToolState } from "./ToolState.ts";

export function ToolRoot() {

    const { activeBone, pose, resetPose, setActiveBone, bones } = useToolState()

    const handleChooseBone = (bone: Bone) => {
        setActiveBone(bone)
    }

    function handleCalculatePose() {
        console.log(pose);
    }

    function handleResetButton() {
        resetPose()
    }

    return (
        <>
            <Box maxWidth="md" height={'400px'}>
                <ToolCanvas/>

                <Text>{activeBone?.name}</Text>
                <Button onClick={handleCalculatePose}>Calc</Button>
                <Button onClick={handleResetButton}>Reset Pose</Button>
                <BoneList bones={bones} onChoose={handleChooseBone}/>
            </Box>
        </>
    )
}
