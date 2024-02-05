import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { SkeletonHelper, SkinnedMesh } from "three";
import { Html, RoundedBox, useGLTF, useHelper } from "@react-three/drei";
import { ModelPaths, SMPL_Key } from "../../label-tool/ModelUtils.ts";
import { Box, HStack } from "@chakra-ui/react";
import { useControls } from "leva";
import { BoneSelect } from "./BoneSelect.tsx";
import { useActiveBone, useBoneSelectStoreActions } from "./BoneSelectStore.ts";

function Model() {
    const modelUrl = ModelPaths.SMPL
    const gltfData = useGLTF(modelUrl)
    const { nodes } = gltfData

    const model = nodes[SMPL_Key] as SkinnedMesh
    const { geometry, skeleton, morphTargetDictionary, morphTargetInfluences } = model

    const rootBoneRef = useRef<SkinnedMesh>(null!)
    useHelper(rootBoneRef, SkeletonHelper)

    const { pos: { x, y, z } } = useControls({
        pos: { x: 0, y: 0, z: 3, }
    })

    const { initBones } = useBoneSelectStoreActions()
    const activeBone = useActiveBone()

    useEffect(() => {
        console.log('init bones', skeleton.bones)
        initBones(skeleton.bones)
    }, [ initBones, skeleton ])

    return (
        <group position={[ x, y, z ]}>
            <skinnedMesh
                name={SMPL_Key}
                geometry={geometry}
                skeleton={skeleton}
                morphTargetDictionary={morphTargetDictionary}
                morphTargetInfluences={morphTargetInfluences}
            >
                <meshStandardMaterial/>
            </skinnedMesh>
            <primitive
                ref={rootBoneRef}
                object={nodes.root}/>

            <Html parent={activeBone}>{activeBone?.name}</Html>
        </group>
    )
}

function FallbackBox() {
    return <RoundedBox rotation={[ 1, 1, 1 ]}/>
}

export function ModelViewer() {

    return (
        <HStack>
            <Box height={600} width={400}>
                <Canvas>
                    <ambientLight intensity={0.1}/>
                    <directionalLight color={"white"} position={[ 0, 0, 5 ]}/>

                    <Suspense fallback={<FallbackBox/>}>
                        <Model/>
                    </Suspense>
                </Canvas>

            </Box>

            <BoneSelect/>
        </HStack>
    )
}