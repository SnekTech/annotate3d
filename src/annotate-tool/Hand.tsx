import { useGLTF } from "@react-three/drei";
import { Bone, MeshStandardMaterial, SkinnedMesh } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useControls } from "leva";

import { LevaColor } from "./misc.ts";
import { useRef } from "react";

const HandModelPath = '/hand-rigged.glb'
const ModelColor: LevaColor = {
    r: 255,
    g: 0,
    b: 0,
    a: 0.5
}

type HandGLTF = GLTF & {
    nodes: {
        hand: SkinnedMesh
        Armature_BaseBone: Bone
    },
    materials: {
        Material: MeshStandardMaterial
    }
}

const Hand = () => {
    const { nodes, materials } = useGLTF(HandModelPath) as unknown as HandGLTF
    const mat = materials.Material;
    mat.transparent = true

    const { c } = useControls({ c: ModelColor })
    mat.color.setRGB(c.r, c.g, c.b)
    if (c.a) mat.opacity = c.a

    const skinnedMeshRef = useRef<any>(null!)

    return (
        <>
            <group name="Armature" position={[0, -1.252, 0]}>
                <skinnedMesh
                    ref={skinnedMeshRef}
                    name="hand"
                    geometry={nodes.hand.geometry}
                    material={materials.Material}
                    skeleton={nodes.hand.skeleton}
                    position={[0, 1.252, 0]}
                    scale={[0.321, 1, 1]}
                />
                <primitive object={nodes.Armature_BaseBone} />
            </group>

            {skinnedMeshRef.current ?? <skeletonHelper args={[nodes.hand]} />}
        </>
    )
}

export default Hand
