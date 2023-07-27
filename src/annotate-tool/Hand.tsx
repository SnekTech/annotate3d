import { useGLTF } from "@react-three/drei";
import { Bone, Mesh, MeshStandardMaterial, SkinnedMesh } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

const HandModelPath = '/hand-rigged.glb'

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
    mat.opacity = 0.1

    const gltfObj = useGLTF(HandModelPath)
    console.log(gltfObj);

    return <mesh
        scale={[0.321, 1, 1]}
        material={mat}
        geometry={(nodes.hand as Mesh).geometry} />
}

export default Hand