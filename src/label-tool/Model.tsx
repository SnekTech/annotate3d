import { useGLTF, useHelper } from "@react-three/drei";
import { SkeletonHelper, SkinnedMesh } from "three";
import { Suspense, useEffect, useRef } from "react";
import { useToolState } from "./ToolState.ts";
import { getPose } from "./ModelUtils.ts";

const SMPL_Key = 'SMPL-mesh-male';

export function Model() {
    const {
        modelPath,
        setOriginalPoseData, setBones, setActiveBone
    } = useToolState()

    const gltfData = useGLTF(modelPath)
    const { nodes } = gltfData

    const model = nodes[SMPL_Key] as SkinnedMesh
    const { geometry, skeleton, morphTargetDictionary, morphTargetInfluences } = model

    const bones = model.skeleton.bones

    const rootBoneRef = useRef<SkinnedMesh>(null!)
    useHelper(rootBoneRef, SkeletonHelper)

    useEffect(() => {
        setOriginalPoseData(getPose(bones))
        setBones(bones)
        setActiveBone(bones[0])
    }, [ bones, setActiveBone, setBones, setOriginalPoseData ])

    return (
        <>
            <Suspense fallback={'hand fallback'}>
                <group>
                    <skinnedMesh
                        name={SMPL_Key}
                        geometry={geometry}
                        skeleton={skeleton}
                        morphTargetDictionary={morphTargetDictionary}
                        morphTargetInfluences={morphTargetInfluences}
                    >
                        <meshStandardMaterial
                            transparent={true}
                            opacity={0.5}
                            color={'hotpink'}/>
                    </skinnedMesh>
                    <primitive
                        ref={rootBoneRef}
                        object={nodes.root}/>


                </group>
            </Suspense>
        </>
    )
}
