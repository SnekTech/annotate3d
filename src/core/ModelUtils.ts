import { useGLTF } from "@react-three/drei";
import { Bone, Quaternion } from "three";


export type MyQuaternion = [ x: number, y: number, z: number, w: number ]
export type Pose = Record<string, MyQuaternion>

export function toMyQuaternion(q: Quaternion): MyQuaternion {
    return [ q.x, q.y, q.z, q.w ]
}

export function toQuaternion(q: MyQuaternion): Quaternion {
    const [ x, y, z, w ] = q
    return new Quaternion(x, y, z, w)
}

export function getPose(bones: Bone[]): Pose {
    const pose: Pose = {}
    bones.forEach(bone => {
        const quaternion = bone.quaternion
        pose[bone.name] = toMyQuaternion(quaternion)
    })
    return pose
}

export function updatePose(bones: Bone[], newPose: Pose) {
    bones.forEach(bone => {
        const q = newPose[bone.name]
        bone.setRotationFromQuaternion(toQuaternion(q))
    })
}

export const ModelPaths = {
    Hand: '/hand-rigged.glb',
    XBot: '/XBot.glb',
    SMPL: '/SMPL.glb',
}

export const SMPL_Key = 'SMPL-mesh-male';

useGLTF.preload(ModelPaths.SMPL)
