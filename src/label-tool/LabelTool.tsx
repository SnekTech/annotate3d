import { Bone } from "three";
import { BoneList } from "./BoneList.tsx";
import { useRef, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { HandModelMethods } from "./Hand.tsx";
import { useHandModel } from "./ModelUtils.ts";
import { ToolCanvas } from "./ToolCanvas.tsx";

export function LabelTool() {

    const {skinnedMesh, bones, originalPose} = useHandModel()

    const [activeBone, setActiveBone] = useState<Bone>(bones[0])

    const handleChooseBone = (bone: Bone) => {
        setActiveBone(bone)
    }

    const handModelRef = useRef<HandModelMethods>(null!)

    function handleCalculatePose() {
        const pose = handModelRef.current.getPose()
        console.log(pose);
    }

    function resetPose() {
        handModelRef.current.updatePose(originalPose)
    }

    return (
        <>
            <Box maxWidth="md" height={'400px'}>
                <ToolCanvas modelSkinnedMesh={skinnedMesh} modelMethodsRef={handModelRef} activeBone={activeBone} />

                <Text>{activeBone.name}</Text>
                <Button onClick={handleCalculatePose}>Calc</Button>
                <Button onClick={resetPose}>Reset Pose</Button>
                <BoneList bones={bones} onChoose={handleChooseBone}/>
            </Box>
        </>
    )
}
