import { Container } from "@mui/material";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from 'react'
import { SkinnedMesh, Object3D, Bone, MeshStandardMaterial } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";


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

function Hand() {
    const gltfData = useGLTF('/hand-rigged.glb') as unknown as HandGLTF
    console.log(gltfData);
    
    const handGeometry = gltfData.nodes.hand.geometry
    const bone = gltfData.nodes.Armature_BaseBone

    return (
        <>
        <mesh 
            geometry={handGeometry}
            scale={[0.321, 1, 1]}
        >
            <meshStandardMaterial />
            <primitive object={bone} />
        </mesh>
        </>
    )
}

export function Playground() {



    return (
        <>
            <Container maxWidth="md" sx={{height: 400}}>
                <Canvas css={{backgroundColor: 'grey'}}>
                    <ambientLight intensity={0.1} />
                    <directionalLight color={"red"} position={[0, 0, 5]} />

                    <OrbitControls makeDefault />
                    <Suspense fallback={'loading'}>
                        <Hand />
                    </Suspense>
                </Canvas>
            </Container>
        </>
    )
}
