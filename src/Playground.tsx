import { GizmoHelper, GizmoViewport, OrbitControls, TransformControls, useGLTF, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bone, Object3D, SkeletonHelper, SkinnedMesh } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";
import { BoneList } from "./label-tool/BoneList.tsx";
import { useRef, useState } from "react";
import { Box, Text } from "@chakra-ui/react";


// const gl = useGLTF('/hand-rigged.glb')
useGLTF.preload('/hand-rigged.glb')

type GLTFNodes = {
    [nodeName: string]: SkinnedMesh | Object3D | Bone
    hand: SkinnedMesh
    Armature_BaseBone: Bone
}

type HandGLTF = GLTF & {
    nodes: GLTFNodes
}

type HandProps = {
    skinnedMesh: SkinnedMesh
    baseBone: Bone
}

function Hand(props: HandProps) {

    const handMeshRef = useRef<SkinnedMesh>(null!)
    useHelper(handMeshRef, SkeletonHelper)

    const {skeleton, geometry} = props.skinnedMesh

    return (
        <>
            <skinnedMesh
                ref={handMeshRef}
                geometry={geometry}
                skeleton={skeleton}
                // scale={[0.321, 1, 1]}
            >
                <primitive object={props.baseBone}/>
                <meshStandardMaterial color={'hotpink'}/>
            </skinnedMesh>
        </>
    )
}

export function Playground() {

    const gltfData = useGLTF('/hand-rigged.glb') as unknown as HandGLTF

    const handSkinnedMesh = gltfData.nodes.hand
    const bones = handSkinnedMesh.skeleton.bones
    if (bones.length <= 0)
        throw new Error('model has no bones')

    const [activeBone, setActiveBone] = useState(bones[0])

    const handleChooseBone = (bone: Bone) => {
        setActiveBone(bone)
    }

    return (
        <>
            <Box maxWidth="md" height={'400px'}>
                <Canvas>
                    <ambientLight intensity={0.1}/>
                    <directionalLight color={"red"} position={[0, 0, 5]}/>

                    <OrbitControls makeDefault/>


                    <Hand
                        skinnedMesh={handSkinnedMesh}
                        baseBone={gltfData.nodes.Armature_BaseBone}
                    />

                    <TransformControls
                        object={activeBone}
                        mode={'rotate'}
                    />

                    <GizmoHelper>
                        <GizmoViewport/>
                    </GizmoHelper>

                </Canvas>
                <Text>{activeBone.name}</Text>
                <BoneList bones={bones} onChoose={handleChooseBone}/>
            </Box>
        </>
    )
}
