import { useGLTF } from "@react-three/drei";
import { Bone, Mesh, MeshStandardMaterial, SkinnedMesh } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useControls } from "leva";

import { LevaColor } from "./misc.ts";

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

    const {c} = useControls({c: ModelColor})
    mat.color.set(c.r, c.g, c.b)
    mat.opacity = c.a!

    const gltfObj = useGLTF(HandModelPath)
    console.log(gltfObj);

    return <mesh
        scale={[0.321, 1, 1]}
        material={mat}
        geometry={(nodes.hand as Mesh).geometry} />
}

export default Hand