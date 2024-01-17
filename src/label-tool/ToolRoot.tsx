import { Bone } from "three";
import { BoneList } from "./BoneList.tsx";
import { useRef } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { HandModelMethods } from "./Hand.tsx";
import { ToolCanvas } from "./ToolCanvas.tsx";
import { useToolState } from "./ToolState.ts";

export function ToolRoot() {

    const { activeBone, setActiveBone, bones } = useToolState()

    const handleChooseBone = (bone: Bone) => {
        setActiveBone(bone)
    }

    const handModelRef = useRef<HandModelMethods>(null!)

    function handleCalculatePose() {
        const pose = handModelRef.current.getPose()
        console.log(pose);
    }

    function resetPose() {
        handModelRef.current.resetPose()
    }

    return (
        <>
            <Box maxWidth="md" height={'400px'}>
                <ToolCanvas modelMethodsRef={handModelRef}/>

                <Text>{activeBone?.name}</Text>
                <Button onClick={handleCalculatePose}>Calc</Button>
                <Button onClick={resetPose}>Reset Pose</Button>
                <BoneList bones={bones} onChoose={handleChooseBone}/>
            </Box>
        </>
    )
}
