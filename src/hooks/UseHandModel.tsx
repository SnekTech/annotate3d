import { useGLTF } from "@react-three/drei";
import { Bone, Object3D, SkinnedMesh } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";
useGLTF.preload('/hand-rigged.glb')

type GLTFNodes = {
    [nodeName: string]: SkinnedMesh | Object3D | Bone
    hand: SkinnedMesh
    Armature_BaseBone: Bone
}

type HandGLTF = GLTF & {
    nodes: GLTFNodes
}
export function useHandModel() {
    const gltfData = useGLTF('/hand-rigged.glb') as unknown as HandGLTF

    const skinnedMesh = gltfData.nodes.hand
    const bones = skinnedMesh.skeleton.bones
    if (bones.length <= 0)
        throw new Error('model has no bones')

    return {
        skeleton: skinnedMesh.skeleton,
        geometry: skinnedMesh.geometry,
        bones: skinnedMesh.skeleton.bones
    }

}