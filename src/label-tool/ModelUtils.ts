import { useGLTF } from "@react-three/drei";
import { Bone, Object3D, Quaternion, SkinnedMesh } from "three";
import { GLTF } from "three/examples/jsm/Addons.js";
import { useMemo } from "react";


export type MyQuaternion = [ x: number, y: number, z: number, w: number ]
export type Pose = Record<string, MyQuaternion>

export function toMyQuaternion(q: Quaternion): MyQuaternion {
    return [ q.x, q.y, q.z, q.w ]
}

export function toQuaternion(q: MyQuaternion): Quaternion {
    const [ x, y, z, w ] = q
    return new Quaternion(x, y, z, w)
}

export function getPose(mesh: SkinnedMesh): Pose {
    const bones = mesh.skeleton.bones
    const pose: Pose = {}
    bones.forEach(bone => {
        const quaternion = bone.quaternion
        pose[bone.name] = toMyQuaternion(quaternion)
    })
    return pose
}

export function updatePose(mesh: SkinnedMesh, newPose: Pose) {
    const bones = mesh.skeleton.bones
    bones.forEach(bone => {
        const q = newPose[bone.name]
        bone.setRotationFromQuaternion(toQuaternion(q))
    })
}


type GLTFNodes = {
    [nodeName: string]: SkinnedMesh | Object3D | Bone
    hand: SkinnedMesh
    Armature_BaseBone: Bone
}

type HandGLTF = GLTF & {
    nodes: GLTFNodes
}

useGLTF.preload('/hand-rigged.glb')

export function useHandModel() {
    const gltfData = useGLTF('/hand-rigged.glb') as unknown as HandGLTF

    const skinnedMesh = gltfData.nodes.hand
    const bones = skinnedMesh.skeleton.bones
    if (bones.length <= 0)
        throw new Error('model has no bones')

    const originalPose: Pose = useMemo(() => getPose(skinnedMesh), [ skinnedMesh ])

    return {
        model: skinnedMesh,
        bones: skinnedMesh.skeleton.bones,
        originalPose
    }

}