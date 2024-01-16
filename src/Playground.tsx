import { GizmoHelper, GizmoViewport, OrbitControls, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bone } from "three";
import { BoneList } from "./label-tool/BoneList.tsx";
import { useRef, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { HandModel, HandModelMethods } from "./label-tool/Hand.tsx";
import { useHandModel } from "./hooks/UseHandModel.tsx";

export function Playground() {

    const {bones} = useHandModel()

    const [activeBone, setActiveBone] = useState<Bone>(bones[0])

    const handleChooseBone = (bone: Bone) => {
        setActiveBone(bone)
    }

    const handModelRef = useRef<HandModelMethods>(null!)

    function handleCalculatePose() {
        const pose = handModelRef.current.getPose()
        console.log(pose);
    }

    return (
        <>
            <Box maxWidth="md" height={'400px'}>
                <Canvas>
                    <ambientLight intensity={0.1}/>
                    <directionalLight color={"red"} position={[0, 0, 5]}/>

                    <OrbitControls makeDefault/>


                    <HandModel ref={handModelRef}/>

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
                <BoneList bones={bones} onChoose={handleChooseBone}/>
            </Box>
        </>
    )
}
