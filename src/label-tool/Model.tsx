import { useGLTF, useHelper } from "@react-three/drei";
import { SkeletonHelper, SkinnedMesh } from "three";
import { Suspense, useEffect, useRef } from "react";
import { useToolState } from "./ToolState.ts";
import { getPose, SMPL_Key } from "./ModelUtils.ts";
import { useControls } from "leva";


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

    useEffect(() => {
        setOriginalPoseData(getPose(bones))
        setBones(bones)
        setActiveBone(bones[0])
    }, [ bones, setActiveBone, setBones, setOriginalPoseData ])

    const rootBoneRef = useRef<SkinnedMesh>(null!)
    useHelper(rootBoneRef, SkeletonHelper)

    const { modelColor, opacity } = useControls({
        modelColor: '#f00',
        opacity: {
            min: 0,
            max: 1,
            value: 0.7,
        }
    })

    return (
        <>
            <Suspense fallback={'model fallback'}>
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
                            opacity={opacity}
                            color={modelColor}/>
                    </skinnedMesh>
                    <primitive
                        ref={rootBoneRef}
                        object={nodes.root}/>
                </group>
            </Suspense>
        </>
    )
}
