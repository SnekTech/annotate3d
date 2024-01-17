import { useHelper } from "@react-three/drei";
import { SkeletonHelper, SkinnedMesh } from "three";
import { ForwardedRef, forwardRef, Suspense, useImperativeHandle, useRef } from "react";
import { getPose, Pose, updatePose, useHandModel } from "./ModelUtils.ts";


export type HandModelMethods = {
    getPose(): Pose
    updatePose(newPose: Pose): void
}


function Hand(_props: unknown, ref: ForwardedRef<HandModelMethods>) {

    const {skeleton, geometry, bones} = useHandModel()
    const rootBone = bones[0]

    const handMeshRef = useRef<SkinnedMesh>(null!)
    useHelper(handMeshRef, SkeletonHelper)

    useImperativeHandle(ref, () => {
        return {
            getPose(): Pose {
                console.log('getting pose')
                return getPose(handMeshRef.current)
            },
            updatePose(newPose: Pose) {
                console.log('updating pose: \n', newPose)
                updatePose(handMeshRef.current, newPose)
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

export const HandModel = forwardRef<HandModelMethods, unknown>(Hand)
