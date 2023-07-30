import { TransformControls } from "@react-three/drei"
import { useRef, MutableRefObject } from "react"
import { Mesh, Object3D } from "three"

type RotateControlProps = {
    type: 'transform' | 'pivot'
    target: MutableRefObject<Mesh>
}

const RotateControl = (props: RotateControlProps) => {

    const target = props.target
    const indicatorRef = useRef<Object3D>(null)

    const handleControlUpdate = () => {

        const indicator = indicatorRef.current
        console.log(indicator);
        console.log(target);
        if (!indicator || !target.current) return

        indicator.setRotationFromEuler(target.current.rotation)
    }

    return (
        <>
            <group ref={indicatorRef as any} >
                <mesh position-y={0.5}>
                    <coneGeometry args={[0.2, 1, 4]} />
                    <meshStandardMaterial color={'red'} />
                </mesh>
            </group>

            <TransformControls
                object={target}
                mode="rotate"
                onChange={handleControlUpdate}
            />
        </>
    )
}

export default RotateControl
