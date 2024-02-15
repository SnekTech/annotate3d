import { TransformControls, useGLTF, useHelper } from "@react-three/drei";
import { Object3D, SkeletonHelper, SkinnedMesh } from "three";
import { Suspense, useEffect, useRef } from "react";
import { useActiveBoneName, useModelPath, useTargetBoneNames, useToolStateActions } from "./ToolState.ts";
import { getPose, Pose, SMPL_Key, toQuaternion } from "../core/ModelUtils.ts";
import { useControls } from "leva";

interface ModelProps {
    defaultPose?: Pose
}

function useDefaultPose(rootObj: Object3D, pose: Pose) {
    const { setPoseData } = useToolStateActions()

    useEffect(() => {
        setPoseData(pose)

        if (!rootObj) return

        for (const boneName in pose) {
            const bone = rootObj.getObjectByName(boneName)
            if (bone) {
                bone.setRotationFromQuaternion(toQuaternion(pose[boneName]))
            }
        }
    }, [ pose, rootObj, setPoseData ])
}

export function Model({ defaultPose }: ModelProps) {
    const modelPath = useModelPath()
    const activeBoneName = useActiveBoneName()
    const targetBoneNames = useTargetBoneNames()
    const { setPoseData } = useToolStateActions()

    const gltfData = useGLTF(modelPath)
    const { nodes } = gltfData

    const model = nodes[SMPL_Key] as SkinnedMesh
    const { geometry, skeleton, morphTargetDictionary, morphTargetInfluences } = model

    const rootBoneRef = useRef<SkinnedMesh>(null!)
    useHelper(rootBoneRef, SkeletonHelper)

    useDefaultPose(rootBoneRef.current, defaultPose || {})

    const { modelColor, opacity, pos: { x, y, z } } = useControls({
        modelColor: {
            value: '#00f',
            label: '模型颜色'
        },
        opacity: {
            min: 0,
            max: 1,
            value: 0.7,
            label: '透明度'
        },
        pos: {
            value: {
                x: 0,
                y: 0,
                z: 1.6,
            },
            label: '根节点坐标'
        }
    })

    function handleTransformChange() {
        if (!rootBoneRef.current) return

        const targetBones: Object3D[] = []
        for (const boneName of targetBoneNames) {
            const bone = rootBoneRef.current.getObjectByName(boneName)
            if (bone) {
                targetBones.push(bone)
            }
        }
        const newPose = getPose(targetBones)
        setPoseData(newPose)
    }

    const activeBone = (activeBoneName && rootBoneRef.current) ? rootBoneRef.current.getObjectByName(activeBoneName) : undefined

    return (
        <>
            <Suspense fallback={'model fallback'}>
                <group position={[ x, y, z ]}>
                    <skinnedMesh
                        name={SMPL_Key}
                        geometry={geometry}
                        skeleton={skeleton}
                        morphTargetDictionary={morphTargetDictionary}
                        morphTargetInfluences={morphTargetInfluences}
                    >
                        <meshStandardMaterial
                            transparent={true}
                            opacity={opacity}
                            color={modelColor}/>
                    </skinnedMesh>
                    <primitive
                        ref={rootBoneRef}
                        object={nodes.root}/>
                </group>
            </Suspense>

            <TransformControls
                object={activeBone}
                mode={'rotate'}
                onChange={handleTransformChange}
            />
        </>
    )
}
