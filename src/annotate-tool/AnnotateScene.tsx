import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls, Html } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import { Mesh } from "three";
import RotateControl from "./RotateControl";
import { css } from "@emotion/react";
import { Xbot } from "./Xbot";

function Annotation({ children, ...props }: any) {
  return (
    <Html
      {...props}
      transform
      occlude="blending"
      >
      <div className="annotation">{children}</div>
    </Html>
  )
}

const AnnotateScene = () => {

    const box = useRef<Mesh>(null!)

    const {pos} = useControls({
        pos: {x: 0, y: 0, z: 0}
    })

    const canvasStyle = css({
        backgroundColor: 'lightgray',
    })

    return <Canvas css={canvasStyle} >
        <OrbitControls makeDefault />
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />

        <Xbot />

        <Annotation position={[pos.x, pos.y, pos.z]}>left_hand</Annotation>

        {/* <mesh ref={box}>
            <boxGeometry />
            <meshStandardMaterial color={"blue"} opacity={0.5} transparent/>
        </mesh>

        <RotateControl type="transform" target={box} /> */}

        <GizmoHelper>
            <GizmoViewport />
        </GizmoHelper>
    </Canvas>
}

export default AnnotateScene
