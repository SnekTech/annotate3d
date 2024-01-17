import { useHelper } from "@react-three/drei";
import { SkeletonHelper, SkinnedMesh } from "three";
import { ForwardedRef, forwardRef, Suspense, useEffect, useImperativeHandle, useRef } from "react";
import { getPose, Pose, updatePose } from "./ModelUtils.ts";
import { useToolState } from "./ToolState.ts";


export type HandModelMethods = {
    getPose(): Pose
    updatePose(newPose: Pose): void
    resetPose(): void
}

type HandProps = {
    skinnedMesh: SkinnedMesh
}

function Hand(props: HandProps, ref: ForwardedRef<HandModelMethods>) {

    const { originalPose , setCurrentModel} = useToolState()
    

    const skinnedMesh = props.skinnedMesh

    const { skeleton, geometry } = skinnedMesh
    const rootBone = skeleton.bones[0]

    const handMeshRef = useRef<SkinnedMesh>(null!)
    useHelper(handMeshRef, SkeletonHelper)
    
    useEffect(() => {
        console.log(handMeshRef.current);
        setCurrentModel(handMeshRef.current)
    }, [setCurrentModel])

    useImperativeHandle(ref, () => {
        return {
            getPose(): Pose {
                return getPose(handMeshRef.current)
            },
            updatePose(newPose: Pose) {
                updatePose(handMeshRef.current, newPose)
            },
            resetPose() {
                if (!originalPose)
                    return
                updatePose(handMeshRef.current, originalPose)
            }
        }
    })

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

export const HandModel = forwardRef<HandModelMethods, HandProps>(Hand)
