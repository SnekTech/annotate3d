import { useHelper } from "@react-three/drei";
import { Bone, SkeletonHelper, SkinnedMesh } from "three";
import { ForwardedRef, forwardRef, Suspense, useImperativeHandle, useRef } from "react";
import { getPose, updatePose, useHandModel, Pose } from "./ModelUtils.ts";


export type HandModelMethods = {
    getBones(): Bone[]
    getPose(): Pose
    updatePose(newPose: Pose): void
}



function Hand(_props: unknown, ref: ForwardedRef<HandModelMethods>) {

    const {skeleton, geometry, bones} = useHandModel()

    const handMeshRef = useRef<SkinnedMesh>(null!)
    useHelper(handMeshRef, SkeletonHelper)

    useImperativeHandle(ref, () => {
        return {
            getBones(): Bone[] {
                return bones
            },
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
                    <primitive object={bones[0]}/>
                    <meshStandardMaterial color={'hotpink'}/>
                </skinnedMesh>

            </Suspense>
        </>
    )
}

export const HandModel = forwardRef<HandModelMethods, unknown>(Hand)
