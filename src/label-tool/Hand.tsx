import { useHelper } from "@react-three/drei";
import { SkeletonHelper, SkinnedMesh } from "three";
import { Suspense, useEffect, useRef } from "react";
import { useToolState } from "./ToolState.ts";

type HandProps = {
    skinnedMesh: SkinnedMesh
}

function Hand(props: HandProps) {
    const { originalPose, setCurrentModel } = useToolState()

    const { skeleton, geometry } = props.skinnedMesh
    const rootBone = skeleton.bones[0]

    const handMeshRef = useRef<SkinnedMesh>(null!)
    useHelper(handMeshRef, SkeletonHelper)

    useEffect(() => {
        setCurrentModel(handMeshRef.current)
    }, [ originalPose, setCurrentModel ])



    return (
        <>
            <Suspense fallback={'hand fallback'}>
                <skinnedMesh
                    ref={handMeshRef}
                    geometry={geometry}
                    skeleton={skeleton}
                    // scale={[0.321, 1, 1]}
                >
                    <primitive object={rootBone}/>
                    <meshStandardMaterial color={'hotpink'}/>
                </skinnedMesh>
            </Suspense>
        </>
    )
}

export const HandModel = Hand
