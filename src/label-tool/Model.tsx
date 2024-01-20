import { useGLTF, useHelper } from "@react-three/drei";
import { SkeletonHelper, SkinnedMesh } from "three";
import { Suspense, useEffect, useRef } from "react";
import { useToolState } from "./ToolState.ts";
import { getPose } from "./ModelUtils.ts";

export function Model() {
    const {
        modelPath,
        setOriginalPoseData, setBones, setActiveBone
    } = useToolState()

    const gltfData = useGLTF(modelPath)
    const { nodes } = gltfData

    const model = nodes['SMPL-mesh-male'] as SkinnedMesh

    const bones = model.skeleton.bones

    const modelRef = useRef<SkinnedMesh>(null!)
    useHelper(modelRef, SkeletonHelper)

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
                        name={'SMPL-mesh-male'}
                        ref={modelRef}
                        geometry={model.geometry}
                        skeleton={model.skeleton}
                        morphTargetDictionary={model.morphTargetDictionary}
                        morphTargetInfluences={model.morphTargetInfluences}
                    >
                        <meshStandardMaterial
                            transparent={true}
                            opacity={0.5}
                            color={'hotpink'}/>
                    </skinnedMesh>
                    <primitive object={nodes.root}/>
                </group>
            </Suspense>
        </>
    )
}
