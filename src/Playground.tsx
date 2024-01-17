import { GizmoHelper, GizmoViewport, OrbitControls, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bone } from "three";
import { BoneList } from "./label-tool/BoneList.tsx";
import { useRef, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { HandModel, HandModelMethods } from "./label-tool/Hand.tsx";
import { useHandModel } from "./label-tool/ModelUtils.ts";

export function Playground() {

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
                <Canvas>
                    <ambientLight intensity={0.1}/>
                    <directionalLight color={"red"} position={[0, 0, 5]}/>
                    <OrbitControls makeDefault/>


                    <HandModel skinnedMesh={skinnedMesh} ref={handModelRef}/>

                    <TransformControls
                        object={activeBone}
                        mode={'rotate'}
                    />

                    <GizmoHelper>
                        <GizmoViewport/>
                    </GizmoHelper>

                </Canvas>
                <Text>{activeBone.name}</Text>
                <Button onClick={handleCalculatePose}>Calc</Button>
                <Button onClick={resetPose}>Reset Pose</Button>
                <BoneList bones={bones} onChoose={handleChooseBone}/>
            </Box>
        </>
    )
}
